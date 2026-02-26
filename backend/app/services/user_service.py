from datetime import datetime, timezone
from bson import ObjectId
from fastapi import HTTPException

from app.db.mongodb import get_database
from app.core.security import hash_password
from app.models.user import user_helper
from app.schemas.user import UserUpdate


async def get_profile(user_id: str) -> dict:
    """
    Returns the profile of a logged-in user.
    """
    db = await get_database()
    user = await db["users"].find_one({"_id": ObjectId(user_id)})

    if not user:
        raise HTTPException(status_code=404, detail="User not found.")

    return user_helper(user)


async def update_profile(user_id: str, data: UserUpdate) -> dict:
    """
    Updates a user's full_name and/or password.
    Only updates fields that were actually provided.
    """
    db = await get_database()

    updates = {"updated_at": datetime.now(timezone.utc)}

    if data.full_name:
        updates["full_name"] = data.full_name

    if data.password:
        updates["hashed_password"] = hash_password(data.password)

    if len(updates) == 1:
        # Only updated_at — nothing was actually sent
        raise HTTPException(status_code=400, detail="No update fields provided.")

    await db["users"].update_one(
        {"_id": ObjectId(user_id)},
        {"$set": updates}
    )

    updated_user = await db["users"].find_one({"_id": ObjectId(user_id)})
    return user_helper(updated_user)


async def delete_account(user_id: str) -> dict:
    """
    Soft-deletes a user by setting is_active to False.
    Data is preserved in MongoDB — user just can't log in.
    """
    db = await get_database()

    await db["users"].update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"is_active": False, "updated_at": datetime.now(timezone.utc)}}
    )

    return {"message": "Account deactivated successfully."}