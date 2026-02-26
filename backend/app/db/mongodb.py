from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings

_client: AsyncIOMotorClient = None


async def connect_to_mongo():
    global _client
    _client = AsyncIOMotorClient(settings.MONGODB_URL)
    await _client.admin.command("ping")
    print(f"✅ Connected to MongoDB → {settings.MONGODB_DB_NAME}")


async def close_mongo_connection():
    global _client
    if _client:
        _client.close()
        print("🔌 MongoDB connection closed")


async def get_database() -> AsyncIOMotorDatabase:
    return _client[settings.MONGODB_DB_NAME]