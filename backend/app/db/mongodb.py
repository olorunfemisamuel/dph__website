# app/core/mongodb.py
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings

_client: AsyncIOMotorClient = None


async def connect_to_mongo():
    """Initialize MongoDB connection"""
    global _client
    try:
        _client = AsyncIOMotorClient(settings.MONGODB_URL)
        # Ping the database to verify connection
        await _client.admin.command("ping")
        print(f"✅ Connected to MongoDB → {settings.MONGODB_DB_NAME}")
    except Exception as e:
        print(f"❌ Failed to connect to MongoDB: {e}")
        raise


async def close_mongo_connection():
    """Close MongoDB connection"""
    global _client
    if _client:
        _client.close()
        print("🔌 MongoDB connection closed")


async def get_database() -> AsyncIOMotorDatabase:
    """Get database instance"""
    if _client is None:
        raise Exception("Database not initialized. Call connect_to_mongo first.")
    return _client[settings.MONGODB_DB_NAME]


async def get_collection(collection_name: str):
    """Get specific collection"""
    db = await get_database()
    return db[collection_name]