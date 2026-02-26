from datetime import datetime, timezone
from fastapi import HTTPException, status

from app.db.mongodb import get_database
from app.core.security import hash_password, verify_password, create_access_token, create_refresh_token
from app.schemas.user import UserRegister, UserLogin, Token


async def register_user(data: UserRegister) -> Token:
    db = await get_database()

    existing = await db["users"].find_one({"email": data.email})
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email already exists.",
        )

    now = datetime.now(timezone.utc)
    user_doc = {
        "full_name": data.full_name,
        "email": data.email,
        "hashed_password": hash_password(data.password),
        "is_active": True,
        "is_admin": False,
        "created_at": now,
        "updated_at": now,
    }

    result = await db["users"].insert_one(user_doc)
    user_id = str(result.inserted_id)

    access_token = create_access_token(data={"sub": user_id})
    refresh_token = create_refresh_token(data={"sub": user_id})

    return Token(access_token=access_token, refresh_token=refresh_token)


async def login_user(data: UserLogin) -> Token:
    db = await get_database()

    user = await db["users"].find_one({"email": data.email})

    invalid_creds = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect email or password.",
        headers={"WWW-Authenticate": "Bearer"},
    )

    if not user:
        raise invalid_creds

    if not verify_password(data.password, user["hashed_password"]):
        raise invalid_creds

    if not user.get("is_active", True):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This account has been deactivated.",
        )

    user_id = str(user["_id"])

    access_token = create_access_token(data={"sub": user_id})
    refresh_token = create_refresh_token(data={"sub": user_id})

    return Token(access_token=access_token, refresh_token=refresh_token)
