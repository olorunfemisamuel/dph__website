import logging
from fastapi import APIRouter, HTTPException
from app.models.consultation import ConsultationRequest
from app.services.consultation_service import save_consultation, send_consultation_email

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post("/consultation", tags=["Consultation"])
async def submit_consultation(data: ConsultationRequest):
    saved = await save_consultation(data)
    if not saved:
        raise HTTPException(status_code=500, detail="Failed to save consultation request.")
    await send_consultation_email(data)
    return {
        "success": True,
        "message": "Your consultation request has been received. We will contact you shortly."
    }