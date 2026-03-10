<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const messages = ref<Message[]>([])
const userInput = ref('')
const isTyping = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)
const chatWrapper = ref<HTMLElement | null>(null)

const getSessionId = (): string => {
  let id = sessionStorage.getItem('lola_session_id')
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem('lola_session_id', id)
  }
  return id
}

const WS_URL = import.meta.env.VITE_WS_URL || 'wss://localhost:8000/ws/chat'
let socket: WebSocket | null = null
let currentAssistantMessage = ref('')

const connectWebSocket = () => {
  socket = new WebSocket(WS_URL)
  socket.onopen = () => console.log('Lola WebSocket connected')

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    if (data.type === 'chunk') {
      currentAssistantMessage.value += data.content
      const last = messages.value[messages.value.length - 1]
      if (last && last.role === 'assistant') {
        last.content = currentAssistantMessage.value
      } else {
        messages.value.push({ role: 'assistant', content: currentAssistantMessage.value })
      }
      scrollToBottom()
    }
    if (data.type === 'done') {
      isTyping.value = false
      currentAssistantMessage.value = ''
    }
    if (data.type === 'error') {
      isTyping.value = false
      messages.value.push({ role: 'assistant', content: 'Sorry, something went wrong. Please try again.' })
      scrollToBottom()
    }
  }

  socket.onclose = () => { socket = null }
  socket.onerror = () => {
    isTyping.value = false
    messages.value.push({ role: 'assistant', content: 'Connection error. Please refresh and try again.' })
    scrollToBottom()
  }
}

const sendMessage = () => {
  const text = userInput.value.trim()
  if (!text || isTyping.value) return

  if (!socket || socket.readyState !== WebSocket.OPEN) {
    connectWebSocket()
    setTimeout(() => sendToSocket(text), 500)
  } else {
    sendToSocket(text)
  }

  messages.value.push({ role: 'user', content: text })
  userInput.value = ''
  isTyping.value = true
  scrollToBottom()
}

const sendToSocket = (text: string) => {
  if (!socket || socket.readyState !== WebSocket.OPEN) return
  socket.send(JSON.stringify({ session_id: getSessionId(), message: text }))
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && !socket) connectWebSocket()
}

const handleClickOutside = (event: MouseEvent) => {
  if (chatWrapper.value && !chatWrapper.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  socket?.close()
})

const scrollToBottom = () => {
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }, 50)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div ref="chatWrapper" class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

    <!-- Chat Window -->
    <Transition name="chat-pop">
      <div
        v-if="isOpen"
        class="w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
        style="height: 480px;"
      >
        <!-- Header -->
        <div class="bg-green-700 px-5 py-4 flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-white font-semibold text-sm leading-tight">Lola</p>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
              <span class="text-green-100 text-xs">{{ isTyping ? 'Typing...' : 'Online' }}</span>
            </div>
          </div>
          <button @click="isOpen = false" class="text-white/70 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="flex-1 px-4 py-4 overflow-y-auto space-y-3 bg-gray-50">

          <!-- Welcome -->
          <div v-if="messages.length === 0" class="flex justify-start">
            <div class="flex items-end gap-2 max-w-[85%]">
              <div class="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center shrink-0 mb-1">
                <span class="text-white text-xs font-bold">L</span>
              </div>
              <div class="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p class="text-gray-700 text-sm leading-relaxed">
                  👋 Hi there! I'm <strong>Lola</strong>, your DPH assistant.<br/>How can I help you today?
                </p>
              </div>
            </div>
          </div>

          <!-- Message bubbles -->
          <div v-for="(msg, index) in messages" :key="index" :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'">

            <!-- Assistant bubble -->
            <div v-if="msg.role === 'assistant'" class="flex items-end gap-2 max-w-[85%]">
              <div class="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center shrink-0 mb-1">
                <span class="text-white text-xs font-bold">L</span>
              </div>
              <div class="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p class="text-gray-700 text-sm leading-relaxed">{{ msg.content }}</p>
              </div>
            </div>

            <!-- User bubble -->
            <div v-else class="max-w-[80%]">
              <div class="bg-green-700 text-white rounded-2xl rounded-br-sm px-4 py-3 shadow-sm">
                <p class="text-sm leading-relaxed">{{ msg.content }}</p>
              </div>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="flex items-end gap-2">
              <div class="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center shrink-0 mb-1">
                <span class="text-white text-xs font-bold">L</span>
              </div>
              <div class="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div class="flex gap-1 items-center h-4">
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input area -->
        <div class="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <input
            v-model="userInput"
            @keydown="handleKeydown"
            type="text"
            placeholder="Type a message..."
            :disabled="isTyping"
            class="flex-1 bg-gray-100 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 disabled:opacity-50 transition"
          />
          <button
            @click="sendMessage"
            :disabled="isTyping || !userInput.trim()"
            class="w-10 h-10 rounded-xl bg-green-700 hover:bg-green-800 disabled:opacity-40 flex items-center justify-center transition shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white rotate-45" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>

        <!-- Footer -->
        <div class="text-center py-2 bg-white border-t border-gray-50">
          <span class="text-gray-400 text-[10px]">Powered by Deutsche Partners Holding</span>
        </div>
      </div>
    </Transition>

    <!-- Floating Button -->
    <button
      @click="toggleChat"
      class="h-13 w-13 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-xl flex items-center justify-center transition-all duration-300 p-3"
    >
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

  </div>
</template>

<style scoped>
.chat-pop-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.chat-pop-leave-active {
  transition: all 0.2s ease-in;
}
.chat-pop-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
  transform-origin: bottom right;
}
.chat-pop-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
  transform-origin: bottom right;
}
</style>