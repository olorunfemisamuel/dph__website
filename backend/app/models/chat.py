from datetime import datetime, timezone
from typing import Optional, List
from pydantic import BaseModel, Field
from bson import ObjectId


class MessageModel(BaseModel):
    role: str
    content: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ChatSessionModel(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    session_id: str
    user_id: Optional[str] = None
    messages: List[MessageModel] = []
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


def chat_session_helper(session: dict) -> dict:
    return {
        "id": str(session["_id"]),
        "session_id": session["session_id"],
        "user_id": session.get("user_id"),
        "messages": session.get("messages", []),
        "created_at": session.get("created_at"),
        "updated_at": session.get("updated_at"),
    }