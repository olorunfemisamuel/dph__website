import { ref, onMounted, onUnmounted } from 'vue'
import { io, Socket } from 'socket.io-client'
import { API_BASE_URL } from '../api/config'

interface StockData {
  price: number
  change: number
  changePercent: number
  timestamp: string
}

export function useWebSocket() {
  const socket = ref<Socket | null>(null)
  const isConnected = ref(false)
  const stockData = ref<Record<string, StockData>>({})
  const error = ref<string | null>(null)

  const connect = (symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'TSLA']) => {
    try {
      socket.value = io(API_BASE_URL, {
        path: '/ws/stocks',
        transports: ['websocket', 'polling'],
        withCredentials: true
      })

      socket.value.on('connect', () => {
        isConnected.value = true
        error.value = null
        console.log('✅ Connected to DPH WebSocket')

        // Subscribe to symbols
        socket.value?.emit('subscribe', { symbols })
      })

      socket.value.on('stock_update', (data: any) => {
        if (data.symbol) {
          stockData.value[data.symbol] = {
            price: data.price,
            change: data.change,
            changePercent: data.changePercent,
            timestamp: data.timestamp || new Date().toISOString()
          }
        }
      })

      socket.value.on('subscribed', (data: any) => {
        console.log('Subscribed to:', data.symbols)
      })

      socket.value.on('disconnect', () => {
        isConnected.value = false
        console.log('🔌 Disconnected from WebSocket')
      })

      socket.value.on('connect_error', (err) => {
        error.value = 'WebSocket connection error'
        isConnected.value = false
        console.error('WebSocket error:', err)
      })

    } catch (err) {
      error.value = 'Failed to create WebSocket connection'
      console.error('WebSocket creation error:', err)
    }
  }

  const disconnect = () => {
    socket.value?.disconnect()
  }

  const subscribe = (symbols: string[]) => {
    socket.value?.emit('subscribe', { symbols })
  }

  const unsubscribe = (symbols: string[]) => {
    socket.value?.emit('unsubscribe', { symbols })
  }

  onMounted(() => connect())
  onUnmounted(() => disconnect())

  return { isConnected, stockData, error, connect, disconnect, subscribe, unsubscribe }
}