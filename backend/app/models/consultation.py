from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


class ConsultationRequest(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phoneNumber: str
    message: str
    created_at: Optional[datetime] = None