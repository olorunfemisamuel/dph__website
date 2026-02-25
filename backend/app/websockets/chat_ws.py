import json
from datetime import datetime, timezone

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.services.ai_service import stream_lola_response
from app.db.mongodb import get_database
from app.schemas.chat import WSMessageIn, WSMessageOut

router = APIRouter()


@router.websocket("/ws/chat")
async def lola_chat(websocket: WebSocket):
    """
    WebSocket endpoint for the Lola chatbot.

    URL: ws://localhost:8000/ws/chat

    Flow:
        1. Frontend connects
        2. Frontend sends JSON: { "session_id": "abc", "message": "Hello Lola" }
        3. Backend loads chat history from MongoDB for this session
        4. Backend streams GPT-4 response back chunk by chunk
        5. Each chunk is sent as: { "type": "chunk", "content": "Hello..." }
        6. When stream ends, sends: { "type": "done", "content": "" }
        7. Full assistant message is saved to MongoDB
        8. Loop — waits for next message
    """
    await websocket.accept()
    db = await get_database()

    try:
        while True:
            # ── 1. Receive message from frontend ────────────────
            raw = await websocket.receive_text()

            try:
                payload = WSMessageIn(**json.loads(raw))
            except Exception:
                await websocket.send_text(
                    WSMessageOut(type="error", content="Invalid message format.").model_dump_json()
                )
                continue

            session_id = payload.session_id
            user_message = payload.message.strip()

            if not user_message:
                continue

            # ── 2. Load or create chat session in MongoDB ────────
            session = await db["chat_sessions"].find_one({"session_id": session_id})

            if not session:
                session_doc = {
                    "session_id": session_id,
                    "user_id": payload.user_id,
                    "messages": [],
                    "created_at": datetime.now(timezone.utc),
                    "updated_at": datetime.now(timezone.utc),
                }
                await db["chat_sessions"].insert_one(session_doc)
                history = []
            else:
                history = [
                    {"role": msg["role"], "content": msg["content"]}
                    for msg in session.get("messages", [])
                ]

            # ── 3. Append user message to history ────────────────
            history.append({"role": "user", "content": user_message})

            # Save user message to MongoDB immediately
            await db["chat_sessions"].update_one(
                {"session_id": session_id},
                {
                    "$push": {
                        "messages": {
                            "role": "user",
                            "content": user_message,
                            "timestamp": datetime.now(timezone.utc),
                        }
                    },
                    "$set": {"updated_at": datetime.now(timezone.utc)},
                }
            )

            # ── 4. Stream GPT-4 response back to frontend ────────
            full_response = ""

            async for chunk in stream_lola_response(history):
                full_response += chunk
                await websocket.send_text(
                    WSMessageOut(type="chunk", content=chunk).model_dump_json()
                )

            # ── 5. Signal streaming is complete ──────────────────
            await websocket.send_text(
                WSMessageOut(type="done", content="").model_dump_json()
            )

            # ── 6. Save Lola's full response to MongoDB ──────────
            await db["chat_sessions"].update_one(
                {"session_id": session_id},
                {
                    "$push": {
                        "messages": {
                            "role": "assistant",
                            "content": full_response,
                            "timestamp": datetime.now(timezone.utc),
                        }
                    },
                    "$set": {"updated_at": datetime.now(timezone.utc)},
                }
            )

    except WebSocketDisconnect:
        print(f"WebSocket disconnected: session closed cleanly")

    except Exception as e:
        try:
            await websocket.send_text(
                WSMessageOut(type="error", content="Something went wrong. Please try again.").model_dump_json()
            )
        except Exception:
            pass