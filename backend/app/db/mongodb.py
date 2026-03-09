# app/db/mongodb.py
import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings
import certifi
import logging
from typing import Optional

# Configure logging
logger = logging.getLogger(__name__)


class MongoDB:
    """MongoDB connection manager"""
    client: Optional[AsyncIOMotorClient] = None
    database: Optional[AsyncIOMotorDatabase] = None

    @property
    def is_connected(self) -> bool:
        """Check if MongoDB is connected"""
        return self.client is not None


mongodb = MongoDB()


async def connect_to_mongo():
    """Initialize MongoDB connection with proper SSL/TLS support"""
    try:
        logger.info(f"🔄 Connecting to MongoDB: {settings.MONGODB_DB_NAME}")

        mongodb.client = AsyncIOMotorClient(
            settings.MONGODB_URL,
            tlsCAFile=certifi.where(),
            serverSelectionTimeoutMS=5000,
            connectTimeoutMS=5000,
            socketTimeoutMS=5000,
            maxPoolSize=10,
            minPoolSize=1,
            maxIdleTimeMS=30000,
            retryWrites=True,
            w="majority"
        )

        # Verify connection by pinging the database
        await mongodb.client.admin.command("ping")

        # Set database
        mongodb.database = mongodb.client[settings.MONGODB_DB_NAME]

        logger.info(f"✅ Successfully connected to MongoDB → {settings.MONGODB_DB_NAME}")

    except Exception as e:
        logger.error(f"❌ Failed to connect to MongoDB: {str(e)}")
        logger.error("\n💡 Troubleshooting tips:")
        logger.error("1. Check if your IP is whitelisted in MongoDB Atlas")
        logger.error("2. Verify username and password in connection string")
        logger.error("3. Check if MongoDB Atlas cluster is running")
        logger.error("4. Try connecting with MongoDB Compass to test credentials")
        logger.error(f"5. Connection string format: {settings.MONGODB_URL[:50]}...")
        raise


async def close_mongo_connection():
    """Close MongoDB connection gracefully"""
    if mongodb.client:
        mongodb.client.close()
        mongodb.client = None
        mongodb.database = None
        logger.info("🔒 MongoDB connection closed successfully")


async def get_database() -> AsyncIOMotorDatabase:
    """
    Get database instance
    Raises exception if not initialized
    """
    if not mongodb.is_connected:
        raise Exception(
            "Database not initialized. "
            "Call connect_to_mongo() first or check application startup."
        )
    return mongodb.database


async def get_collection(collection_name: str):
    """
    Get specific collection by name
    Args:
        collection_name: Name of the collection
    Returns:
        Collection instance
    """
    db = await get_database()
    return db[collection_name]


def get_database_sync():
    """
    Synchronous version of get_database
    Use this for non-async contexts
    """
    if not mongodb.is_connected:
        raise Exception("Database not initialized")
    return mongodb.database


def get_collection_sync(collection_name: str):
    """
    Synchronous version of get_collection
    Use this for non-async contexts
    """
    db = get_database_sync()
    return db[collection_name]


async def check_connection_health() -> dict:
    """
    Check MongoDB connection health
    Returns:
        Dictionary with connection status information
    """
    health_status = {
        "connected": mongodb.is_connected,
        "database": settings.MONGODB_DB_NAME if mongodb.is_connected else None,
        "status": "healthy" if mongodb.is_connected else "unhealthy"
    }

    if mongodb.is_connected:
        try:
            await mongodb.client.admin.command("ping")
            health_status["ping"] = "successful"
            health_status["message"] = "MongoDB connection is healthy"
        except Exception as e:
            health_status["ping"] = "failed"
            health_status["status"] = "degraded"
            health_status["message"] = f"MongoDB connection error: {str(e)}"
    else:
        health_status["message"] = "MongoDB not connected"

    return health_status


# Export commonly used functions
__all__ = [
    "connect_to_mongo",
    "close_mongo_connection",
    "get_database",
    "get_collection",
    "get_database_sync",
    "get_collection_sync",
    "check_connection_health",
    "mongodb"
]