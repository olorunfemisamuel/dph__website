import { ref, onMounted, onUnmounted } from "vue"

export function useWebSocket(url: string) {
  const socket = ref<WebSocket | null>(null)
  const isConnected = ref(false)
  const lastMessage = ref<string | null>(null)
  const error = ref<Event | null>(null)

  const apiKey = import.meta.env.VITE_TWELVE_DATA_API_KEY 


  const connect = () => {
    socket.value = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${apiKey}`)

    socket.value.onopen = () => {
      isConnected.value = true
      console.log("WebSocket connected")
    }

    socket.value.onmessage = (event) => {
      lastMessage.value = event.data
    }

    socket.value.onerror = (e) => {
      error.value = e
    }

    socket.value.onclose = () => {
      isConnected.value = false
      console.log("WebSocket closed")
    }
  }

  const send = (message: string) => {
    if (socket.value && isConnected.value) {
      socket.value.send(message)
    }
  }

  const close = () => {
    socket.value?.close()
  }

  onMounted(connect)
  onUnmounted(close)

  return {
    isConnected,
    lastMessage,
    send,
    close,
    error,
  }
}
