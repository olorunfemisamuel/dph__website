from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException
from app.schemas.newsletter import NewsletterSubscribe, NewsletterUnsubscribe, NewsletterResponse
from app.models.newsletter import newsletter_helper
from app.db.mongodb import get_database

router = APIRouter()


@router.post("/subscribe", response_model=NewsletterResponse, status_code=201)
async def subscribe(data: NewsletterSubscribe):
    """
    Subscribe to the newsletter.

    Request body:
        { "email": "john@example.com", "name": "John" }  (name is optional)

    Returns:
        success and message
    """
    db = await get_database()
    collection = db["newsletter"]

    existing = await collection.find_one({"email": data.email})

    if existing:
        if existing.get("is_active"):
            raise HTTPException(status_code=400, detail="Email already subscribed")
        # Re-subscribe
        await collection.update_one(
            {"email": data.email},
            {"$set": {"is_active": True, "unsubscribed_at": None}}
        )
        return {"success": True, "message": "Successfully re-subscribed!"}

    subscriber = {
        "email": data.email,
        "name": data.name,
        "is_active": True,
        "subscribed_at": datetime.now(timezone.utc),
        "unsubscribed_at": None,
    }
    await collection.insert_one(subscriber)
    return {"success": True, "message": "Successfully subscribed!"}


@router.post("/unsubscribe", response_model=NewsletterResponse)
async def unsubscribe(data: NewsletterUnsubscribe):
    """
    Unsubscribe from the newsletter.

    Request body:
        { "email": "john@example.com" }
    """
    db = await get_database()
    collection = db["newsletter"]

    result = await collection.find_one_and_update(
        {"email": data.email},
        {"$set": {"is_active": False, "unsubscribed_at": datetime.now(timezone.utc)}}
    )

    if not result:
        raise HTTPException(status_code=404, detail="Email not found")

    return {"success": True, "message": "Successfully unsubscribed"}