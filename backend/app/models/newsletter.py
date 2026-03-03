from datetime import datetime, timezone
from typing import Optional
from pydantic import BaseModel, EmailStr, Field
from bson import ObjectId


class NewsletterModel(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    email: EmailStr
    name: Optional[str] = None
    is_active: bool = True
    subscribed_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    unsubscribed_at: Optional[datetime] = None

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


def newsletter_helper(subscriber: dict) -> dict:
    return {
        "id": str(subscriber["_id"]),
        "email": subscriber["email"],
        "name": subscriber.get("name"),
        "is_active": subscriber.get("is_active", True),
        "subscribed_at": subscriber.get("subscribed_at"),
        "unsubscribed_at": subscriber.get("unsubscribed_at"),
    }