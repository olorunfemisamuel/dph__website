from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class WSMessageIn(BaseModel):
    session_id: str
    message: str
    user_id: Optional[str] = None


class WSMessageOut(BaseModel):
    type: str       # "chunk" | "done" | "error"
    content: str


class MessageOut(BaseModel):
    role: str
    content: str
    timestamp: datetime


class ChatSessionResponse(BaseModel):
    id: str
    session_id: str
    user_id: Optional[str]
    messages: List[MessageOut]
    created_at: datetime
    updated_at: datetime