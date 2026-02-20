<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

// ── Types ────────────────────────────────────────────────────────
interface Message {
  role: 'user' | 'assistant'
  content: string
}

// ── State ────────────────────────────────────────────────────────
const isOpen = ref(false)
const messages = ref<Message[]>([])
const userInput = ref('')
const isTyping = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

// ── Session ID ───────────────────────────────────────────────────
// Generate once per browser session and reuse
const getSessionId = (): string => {
  let id = sessionStorage.getItem('lola_session_id')
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem('lola_session_id', id)
  }
  return id
}

// ── WebSocket ────────────────────────────────────────────────────
const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000/ws/chat'
let socket: WebSocket | null = null
let currentAssistantMessage = ref('')

const connectWebSocket = () => {
  socket = new WebSocket(WS_URL)

  socket.onopen = () => {
    console.log('Lola WebSocket connected')
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)

    if (data.type === 'chunk') {
      // Streaming — append each chunk to the current assistant message
      currentAssistantMessage.value += data.content

      // Update the last message in the list in real time
      const last = messages.value[messages.value.length - 1]
      if (last && last.role === 'assistant') {
        last.content = currentAssistantMessage.value
      } else {
        messages.value.push({ role: 'assistant', content: currentAssistantMessage.value })
      }
      scrollToBottom()
    }

    if (data.type === 'done') {
      // Stream finished
      isTyping.value = false
      currentAssistantMessage.value = ''
    }

    if (data.type === 'error') {
      isTyping.value = false
      messages.value.push({ role: 'assistant', content: 'Sorry, something went wrong. Please try again.' })
      scrollToBottom()
    }
  }

  socket.onclose = () => {
    console.log('Lola WebSocket closed')
    socket = null
  }

  socket.onerror = () => {
    isTyping.value = false
    messages.value.push({ role: 'assistant', content: 'Connection error. Please refresh and try again.' })
  }
}

// ── Send Message ─────────────────────────────────────────────────
const sendMessage = () => {
  const text = userInput.value.trim()
  if (!text || isTyping.value) return

  // Connect if not already connected
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    connectWebSocket()
    // Wait briefly for connection then send
    setTimeout(() => sendToSocket(text), 500)
  } else {
    sendToSocket(text)
  }

  // Show user message immediately
  messages.value.push({ role: 'user', content: text })
  userInput.value = ''
  isTyping.value = true
  scrollToBottom()
}

const sendToSocket = (text: string) => {
  if (!socket || socket.readyState !== WebSocket.OPEN) return

  socket.send(JSON.stringify({
    session_id: getSessionId(),
    message: text,
  }))
}

// ── Toggle Chat ──────────────────────────────────────────────────
const toggleChat = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value && !socket) {
    connectWebSocket()
  }
}

// ── Scroll to bottom ─────────────────────────────────────────────
const scrollToBottom = () => {
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }, 50)
}

// ── Handle Enter key ─────────────────────────────────────────────
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

// ── Cleanup on unmount ───────────────────────────────────────────
onUnmounted(() => {
  socket?.close()
})
</script>

<template>
  <!-- Floating Button -->
  <button
    @click="toggleChat"
    class="fixed bottom-6 right-6 z-50
           h-11 w-10 rounded-full
           bg-green-700 hover:bg-green-800
           text-white shadow-lg
           flex items-center justify-center
           transition"
  >
    💬
  </button>

  <!-- Chat Window -->
  <div
    v-if="isOpen"
    class="fixed bottom-24 right-6 z-50
           w-80 h-96
           bg-white rounded-2xl
           shadow-xl border
           flex flex-col"
  >
    <!-- Header -->
    <div class="bg-green-700 text-white px-4 py-3 rounded-t-2xl flex items-center justify-between">
      <span>Chat with Lola</span>
      <span class="text-xs opacity-75">{{ isTyping ? 'Lola is typing...' : 'Online' }}</span>
    </div>

    <!-- Messages -->
    <div
      ref="messagesContainer"
      class="flex-1 p-4 overflow-y-auto space-y-3 text-sm"
    >
      <!-- Welcome message -->
      <div v-if="messages.length === 0" class="text-gray-500">
        👋 Hi! I am Lola. How can we help you today?
      </div>

      <!-- Message bubbles -->
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
      >
        <div
          :class="msg.role === 'user'
            ? 'bg-green-700 text-white rounded-2xl rounded-br-sm px-3 py-2 max-w-[75%]'
            : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[75%]'"
        >
          {{ msg.content }}
        </div>
      </div>
    </div>

    <!-- Input -->
    <div class="border-t p-3 flex gap-2">
      <input
        v-model="userInput"
        @keydown="handleKeydown"
        type="text"
        placeholder="Type a message..."
        :disabled="isTyping"
        class="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-700 disabled:opacity-50"
      />
      <button
        @click="sendMessage"
        :disabled="isTyping || !userInput.trim()"
        class="bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg text-sm disabled:opacity-50 transition"
      >
        Send
      </button>
    </div>
  </div>
</template>
```

