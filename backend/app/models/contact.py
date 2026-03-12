from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


class ContactMessage(BaseModel):
    surname: str
    lastName: str
    phoneNumber: str
    email: EmailStr
    message: str
    created_at: Optional[datetime] = None