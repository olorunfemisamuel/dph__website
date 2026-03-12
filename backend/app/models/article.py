from datetime import datetime, timezone
from typing import Optional
from pydantic import BaseModel, Field
from bson import ObjectId


class ArticleModel(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    title: str
    category: str
    content: str
    status: str = "Draft"  # "Published" or "Draft"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ArticleCreate(BaseModel):
    title: str
    category: str
    content: str
    status: str = "Draft"


class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None
    content: Optional[str] = None
    status: Optional[str] = None


def article_helper(article: dict) -> dict:
    return {
        "id": str(article["_id"]),
        "title": article["title"],
        "category": article["category"],
        "content": article.get("content", ""),
        "status": article.get("status", "Draft"),
        "date": article.get("created_at", datetime.now(timezone.utc)).strftime("%b %d, %Y")
        if isinstance(article.get("created_at"), datetime)
        else str(article.get("created_at", "")),
        "created_at": article.get("created_at"),
        "updated_at": article.get("updated_at"),
    }