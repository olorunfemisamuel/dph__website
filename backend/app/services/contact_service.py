import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

from app.db.mongodb import get_collection
from app.models.contact import ContactMessage
from app.core.config import settings

logger = logging.getLogger(__name__)


async def save_contact_message(data: ContactMessage) -> bool:
    """Save contact form submission to MongoDB"""
    try:
        collection = await get_collection("contact_messages")
        doc = data.dict()
        doc["created_at"] = datetime.utcnow()
        await collection.insert_one(doc)
        logger.info(f"✅ Contact message saved from {data.email}")
        return True
    except Exception as e:
        logger.error(f"❌ Failed to save contact message: {e}")
        return False


async def send_contact_email_notification(data: ContactMessage) -> bool:
    """Send email notification when contact form is submitted"""
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Contact Form Submission from {data.surname} {data.lastName}"
        msg["From"] = settings.SMTP_FROM_EMAIL
        msg["To"] = settings.SMTP_NOTIFY_EMAIL

        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #15803d;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Surname:</strong></td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">{data.surname}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Last Name:</strong></td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">{data.lastName}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">{data.phoneNumber}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">{data.email}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td>
                    <td style="padding: 8px; border-bottom: 1px solid #eee;">{data.message}</td>
                </tr>
            </table>
        </body>
        </html>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.sendmail(settings.SMTP_FROM_EMAIL, settings.SMTP_NOTIFY_EMAIL, msg.as_string())

        logger.info(f"✅ Contact notification email sent for {data.email}")
        return True

    except Exception as e:
        logger.error(f"❌ Failed to send contact notification email: {e}")
        return False