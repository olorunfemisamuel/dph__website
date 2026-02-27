# test_new_connection.py
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()


async def test_connection():
    # Get connection string from .env
    uri = os.getenv("MONGODB_URL")
    db_name = os.getenv("MONGODB_DB_NAME", "dph_db")

    print(f"Testing connection to database: {db_name}")
    print(
        f"Connection string (masked): {uri.split('@')[0].split(':')[0]}:****@{uri.split('@')[1] if '@' in uri else 'invalid'}")

    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(uri, serverSelectionTimeoutMS=5000)

        # Ping the database
        await client.admin.command('ping')
        print("✅ Successfully connected to MongoDB Atlas!")

        # Get database
        db = client[db_name]

        # Try to insert a test document
        result = await db.test_collection.insert_one({"test": "connection", "status": "success"})
        print(f"✅ Successfully inserted test document with ID: {result.inserted_id}")

        # Read it back
        doc = await db.test_collection.find_one({"_id": result.inserted_id})
        print(f"✅ Successfully read test document: {doc}")

        # Clean up - delete test document
        await db.test_collection.delete_one({"_id": result.inserted_id})
        print("✅ Test document cleaned up")

        # List all collections (should be empty or have your test)
        collections = await db.list_collection_names()
        print(f"📚 Current collections: {collections}")

        client.close()
        print("✅ All tests passed! Your MongoDB connection is working perfectly!")
        return True

    except Exception as e:
        print(f"❌ Connection failed: {e}")
        return False


if __name__ == "__main__":
    asyncio.run(test_connection())