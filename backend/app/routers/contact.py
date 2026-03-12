import logging
from fastapi import APIRouter, HTTPException
from app.models.contact import ContactMessage
from app.services.contact_service import save_contact_message, send_contact_email_notification

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/contact", tags=["Contact"])
async def submit_contact_form(data: ContactMessage):
    saved = await save_contact_message(data)
    if not saved:
        raise HTTPException(status_code=500, detail="Failed to save your message. Please try again.")
    await send_contact_email_notification(data)
    return {
        "success": True,
        "message": "Your message has been received. We will get back to you shortly."
    }