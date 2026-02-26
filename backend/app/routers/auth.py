from fastapi import APIRouter
from app.schemas.user import UserRegister, UserLogin, Token
from app.services.auth_service import register_user, login_user

router = APIRouter()


@router.post("/register", response_model=Token, status_code=201)
async def register(data: UserRegister):
    """
    Register a new user account.

    Request body:
        { "full_name": "John Doe", "email": "john@example.com", "password": "secret123" }

    Returns:
        JWT access_token and refresh_token
    """
    return await register_user(data)


@router.post("/login", response_model=Token)
async def login(data: UserLogin):
    """
    Log in with email and password.

    Request body:
        { "email": "john@example.com", "password": "secret123" }

    Returns:
        JWT access_token and refresh_token
    """
    return await login_user(data)