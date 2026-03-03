from typing import Optional
from pydantic import BaseModel, EmailStr


class NewsletterSubscribe(BaseModel):
    email: EmailStr
    name: Optional[str] = None


class NewsletterUnsubscribe(BaseModel):
    email: EmailStr


class NewsletterResponse(BaseModel):
    success: bool
    message: str