from fastapi import APIRouter, Depends, HTTPException
from app.db.mongodb import get_database
from app.models.chat import chat_session_helper
from app.schemas.chat import ChatSessionResponse
from app.core.dependencies import get_current_active_user
from typing import List

router = APIRouter()


@router.get("/history/{session_id}", response_model=ChatSessionResponse)
async def get_chat_history(session_id: str):
    """
    Retrieve the full message history for a given chat session.
    Public endpoint — no auth required.
    Used to restore chat history when a user revisits the page.

    Path param:
        session_id — the unique session ID stored in the frontend
    """
    db = await get_database()
    session = await db["chat_sessions"].find_one({"session_id": session_id})

    if not session:
        raise HTTPException(status_code=404, detail="Chat session not found.")

    return chat_session_helper(session)


@router.get("/my-sessions", response_model=List[ChatSessionResponse])
async def get_my_sessions(current_user: dict = Depends(get_current_active_user)):
    """
    Get all chat sessions for the currently logged-in user.
    Requires: Authorization: Bearer <token>
    """
    db = await get_database()
    cursor = db["chat_sessions"].find({"user_id": current_user["id"]})
    sessions = await cursor.to_list(length=50)
    return [chat_session_helper(s) for s in sessions]


@router.delete("/history/{session_id}")
async def delete_chat_history(session_id: str):
    """
    Delete a chat session by session_id.
    Public endpoint — frontend can clear chat history.
    """
    db = await get_database()
    result = await db["chat_sessions"].delete_one({"session_id": session_id})

    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Chat session not found.")

    return {"message": "Chat history deleted."}