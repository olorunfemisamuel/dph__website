import logging
from datetime import datetime, timezone
from typing import Optional
from bson import ObjectId

from app.db.mongodb import get_collection
from app.models.article import ArticleCreate, ArticleUpdate, article_helper

logger = logging.getLogger(__name__)


# ─── STATS ───────────────────────────────────────────────────────────────────

async def get_dashboard_stats() -> dict:
    try:
        articles_col = await get_collection("articles")
        subscribers_col = await get_collection("newsletter_subscribers")
        contacts_col = await get_collection("contact_messages")
        consultations_col = await get_collection("consultation_requests")

        total_articles = await articles_col.count_documents({})
        total_subscribers = await subscribers_col.count_documents({})
        total_contacts = await contacts_col.count_documents({})
        total_consultations = await consultations_col.count_documents({})
        total_form_entries = total_contacts + total_consultations

        return {
            "total_articles": total_articles,
            "total_subscribers": total_subscribers,
            "total_form_entries": total_form_entries,
        }
    except Exception as e:
        logger.error(f"❌ Failed to get dashboard stats: {e}")
        return {"total_articles": 0, "total_subscribers": 0, "total_form_entries": 0}


# ─── ARTICLES ────────────────────────────────────────────────────────────────

async def get_all_articles() -> list:
    try:
        collection = await get_collection("articles")
        articles = []
        async for article in collection.find().sort("created_at", -1):
            articles.append(article_helper(article))
        return articles
    except Exception as e:
        logger.error(f"❌ Failed to get articles: {e}")
        return []


async def create_article(data: ArticleCreate) -> Optional[dict]:
    try:
        collection = await get_collection("articles")
        now = datetime.now(timezone.utc)
        doc = {**data.dict(), "created_at": now, "updated_at": now}
        result = await collection.insert_one(doc)
        new_article = await collection.find_one({"_id": result.inserted_id})
        return article_helper(new_article)
    except Exception as e:
        logger.error(f"❌ Failed to create article: {e}")
        return None


async def update_article(article_id: str, data: ArticleUpdate) -> Optional[dict]:
    try:
        collection = await get_collection("articles")
        update_data = {k: v for k, v in data.dict().items() if v is not None}
        update_data["updated_at"] = datetime.now(timezone.utc)
        await collection.update_one(
            {"_id": ObjectId(article_id)},
            {"$set": update_data}
        )
        updated = await collection.find_one({"_id": ObjectId(article_id)})
        return article_helper(updated) if updated else None
    except Exception as e:
        logger.error(f"❌ Failed to update article: {e}")
        return None


async def delete_article(article_id: str) -> bool:
    try:
        collection = await get_collection("articles")
        result = await collection.delete_one({"_id": ObjectId(article_id)})
        return result.deleted_count > 0
    except Exception as e:
        logger.error(f"❌ Failed to delete article: {e}")
        return False


# ─── SUBSCRIBERS ─────────────────────────────────────────────────────────────

async def get_all_subscribers() -> list:
    try:
        collection = await get_collection("newsletter_subscribers")
        subscribers = []
        async for sub in collection.find().sort("created_at", -1):
            subscribers.append({
                "id": str(sub["_id"]),
                "email": sub.get("email", ""),
                "name": sub.get("name", ""),
                "created_at": sub.get("created_at"),
            })
        return subscribers
    except Exception as e:
        logger.error(f"❌ Failed to get subscribers: {e}")
        return []


# ─── FORM SUBMISSIONS ────────────────────────────────────────────────────────

async def get_all_contact_messages() -> list:
    try:
        collection = await get_collection("contact_messages")
        messages = []
        async for msg in collection.find().sort("created_at", -1):
            messages.append({
                "id": str(msg["_id"]),
                "name": f"{msg.get('surname', '')} {msg.get('lastName', '')}".strip(),
                "email": msg.get("email", ""),
                "phone": msg.get("phoneNumber", ""),
                "message": msg.get("message", ""),
                "type": "contact",
                "created_at": msg.get("created_at"),
            })
        return messages
    except Exception as e:
        logger.error(f"❌ Failed to get contact messages: {e}")
        return []


async def get_all_consultations() -> list:
    try:
        collection = await get_collection("consultation_requests")
        consultations = []
        async for c in collection.find().sort("created_at", -1):
            consultations.append({
                "id": str(c["_id"]),
                "name": f"{c.get('firstName', '')} {c.get('lastName', '')}".strip(),
                "email": c.get("email", ""),
                "phone": c.get("phoneNumber", ""),
                "message": c.get("message", ""),
                "type": "consultation",
                "created_at": c.get("created_at"),
            })
        return consultations
    except Exception as e:
        logger.error(f"❌ Failed to get consultations: {e}")
        return []