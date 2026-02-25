from fastapi import APIRouter, Depends
from app.schemas.user import UserResponse, UserUpdate
from app.services.user_service import get_profile, update_profile, delete_account
from app.core.dependencies import get_current_active_user

router = APIRouter()


@router.get("/me", response_model=UserResponse)
async def read_profile(current_user: dict = Depends(get_current_active_user)):
    """
    Get the currently logged-in user's profile.
    Requires: Authorization: Bearer <token>
    """
    return await get_profile(current_user["id"])


@router.put("/me", response_model=UserResponse)
async def edit_profile(
    data: UserUpdate,
    current_user: dict = Depends(get_current_active_user)
):
    """
    Update the currently logged-in user's name or password.
    Requires: Authorization: Bearer <token>

    Request body (all fields optional):
        { "full_name": "New Name", "password": "newpassword123" }
    """
    return await update_profile(current_user["id"], data)


@router.delete("/me")
async def remove_account(current_user: dict = Depends(get_current_active_user)):
    """
    Deactivate (soft-delete) the currently logged-in user's account.
    Requires: Authorization: Bearer <token>
    """
    return await delete_account(current_user["id"])
