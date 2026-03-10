from pydantic_settings import BaseSettings
from typing import List, Optional
from dotenv import load_dotenv
import json
import os

# Load .env file
load_dotenv()


class Settings(BaseSettings):
    APP_NAME: str = "DPH Website API"
    DEBUG: bool = False
    ENVIRONMENT: str = "development"  # Added missing field

    MONGODB_URL: str
    MONGODB_DB_NAME: str = "dph_db"

    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    OPENAI_API_KEY: str
    OPENAI_MODEL: str = "gpt-3.5-turbo"

    LOLA_SYSTEM_PROMPT: str = (
        "You are Lola, a friendly and professional AI assistant for Deutsche Philips Holdings (DPH), "
        "a leading investment and financial services company. "
        "You help visitors learn about DPH's services including Asset Management, Investment Banking, "
        "Private Equity, Securities Trading, and Trustees. "
        "You can also guide users to the right department or contact. "
        "Always be concise, professional, and helpful. "
        "Do not answer questions unrelated to finance or DPH. "
        "If you don't know something specific, direct the user to contact DPH directly."
    )

    # FIX: Rename this to match what main.py is looking for
    # Or keep both for compatibility
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:4173",
        "http://127.0.0.1:5173",
        "https://your-frontend-domain.com",
    ]

    # Add BACKEND_CORS_ORIGINS that points to ALLOWED_ORIGINS
    @property
    def BACKEND_CORS_ORIGINS(self) -> List[str]:
        """Compatibility property for main.py"""
        return self.ALLOWED_ORIGINS

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"  # Allow extra fields in .env


settings = Settings()

# Debug print (remove after fixing)
print("✅ Settings loaded!")
print(f"📋 CORS Origins: {settings.ALLOWED_ORIGINS}")
print(f"🔧 Environment: {settings.ENVIRONMENT}")