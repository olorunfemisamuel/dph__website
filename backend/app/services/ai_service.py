from openai import AsyncOpenAI
from app.core.config import settings

# ── OpenAI Client ────────────────────────────────────────────────
client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)


async def stream_lola_response(conversation_history: list):
    """
    Sends the conversation history to GPT-4 and streams back
    Lola's response token by token.

    Args:
        conversation_history: list of {"role": "user"|"assistant", "content": "..."}

    Yields:
        str — each text chunk as it arrives from OpenAI

    Usage (in websocket handler):
        async for chunk in stream_lola_response(history):
            await websocket.send_text(chunk)
    """
    # Prepend Lola's system prompt to every conversation
    messages = [
        {"role": "system", "content": settings.LOLA_SYSTEM_PROMPT}
    ] + conversation_history

    # Stream the response from GPT-4
    stream = await client.chat.completions.create(
        model=settings.OPENAI_MODEL,
        messages=messages,
        stream=True,        # enables token-by-token streaming
        temperature=0.7,    # balanced between creative and factual
        max_tokens=500,     # keep responses concise for a chat widget
    )

    async for chunk in stream:
        # Each chunk may or may not have content
        delta = chunk.choices[0].delta.content
        if delta is not None:
            yield delta