from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    APP_NAME: str = "DPH Website API"
    DEBUG: bool = False

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

    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:4173",
        "http://127.0.0.1:5173",
    ]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()