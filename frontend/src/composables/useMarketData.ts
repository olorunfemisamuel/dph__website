import { ref, onUnmounted } from 'vue'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WatchlistItem {
  name: string
  symbol: string
  price: string
  rawPrice: number
  change: string
  positive: boolean
  icon: string
}

export interface ChartPoint {
  x: number
  y: number
  rawPrice: number
}

type ConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error'

// ─── Symbol Config ─────────────────────────────────────────────────────────────
// Maps Twelve Data symbols → display metadata
// Twelve Data uses: XAU/USD, WTI/USD, SOYB, HG (Copper)

const SYMBOL_META: Record<string, { name: string; icon: string }> = {
  'XAU/USD': { name: 'Gold Spot',     icon: '🥇' },
  'WTI/USD': { name: 'Crude Oil WTI', icon: '🛢'  },
  'SOYB':    { name: 'Soybeans',      icon: '🌱' },
  'HG':      { name: 'Copper LME',    icon: '🔶' },
}

const TRACKED_SYMBOLS = Object.keys(SYMBOL_META) // ['XAU/USD', 'WTI/USD', 'SOYB', 'HG']

// ─── Composable ───────────────────────────────────────────────────────────────

export function useMarketData() {
  const watchlist    = ref<WatchlistItem[]>(buildDefaultWatchlist())
  const chartPoints  = ref<ChartPoint[]>([])
  const status       = ref<ConnectionStatus>('disconnected')
  const errorMessage = ref<string>('')

  // Track previous prices to calculate % change
  const prevPrices = new Map<string, number>()

  let ws: WebSocket | null = null
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let reconnectAttempts = 0
  const MAX_RECONNECT = 5

  // ── Connect ──────────────────────────────────────────────────────────────────

  function connect() {
    const apiKey = import.meta.env.VITE_TWELVE_DATA_API_KEY as string | undefined

    if (!apiKey) {
      errorMessage.value = 'Missing VITE_TWELVE_DATA_API_KEY in .env'
      status.value = 'error'
      console.error('[useMarketData]', errorMessage.value)
      return
    }

    if (ws && ws.readyState === WebSocket.OPEN) return // already connected

    status.value = 'connecting'
    errorMessage.value = ''

    ws = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${apiKey}`)

    // ── Open ─────────────────────────────────────────────────────────────────
    ws.addEventListener('open', () => {
      status.value = 'connected'
      reconnectAttempts = 0
      console.log('[useMarketData] WebSocket connected')

      // Subscribe to all symbols
      ws!.send(JSON.stringify({
        action: 'subscribe',
        params: { symbols: TRACKED_SYMBOLS.join(',') },
      }))
    })

    // ── Message ──────────────────────────────────────────────────────────────
    ws.addEventListener('message', (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data as string)

        // Twelve Data sends different event types
        // event: 'price'  → live tick
        // event: 'subscribe-status' → subscription confirmation
        // event: 'heartbeat' → keep-alive ping

        if (data.event === 'price') {
          handlePriceTick(data)
        }
      } catch (err) {
        console.warn('[useMarketData] Failed to parse message', err)
      }
    })

    // ── Error ─────────────────────────────────────────────────────────────────
    ws.addEventListener('error', (err) => {
      console.error('[useMarketData] WebSocket error', err)
      status.value = 'error'
      errorMessage.value = 'WebSocket connection error'
    })

    // ── Close ─────────────────────────────────────────────────────────────────
    ws.addEventListener('close', (event) => {
      console.warn('[useMarketData] WebSocket closed', event.code, event.reason)
      status.value = 'disconnected'

      // Auto-reconnect with backoff (unless we deliberately disconnected)
      if (reconnectAttempts < MAX_RECONNECT) {
        const delay = Math.min(1000 * 2 ** reconnectAttempts, 30_000)
        reconnectAttempts++
        console.log(`[useMarketData] Reconnecting in ${delay}ms (attempt ${reconnectAttempts})`)
        reconnectTimer = setTimeout(connect, delay)
      } else {
        status.value = 'error'
        errorMessage.value = `Connection lost after ${MAX_RECONNECT} attempts`
      }
    })
  }

  // ── Disconnect ────────────────────────────────────────────────────────────

  function disconnect() {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }
    reconnectAttempts = MAX_RECONNECT // prevent auto-reconnect
    ws?.close()
    ws = null
    status.value = 'disconnected'
  }

  // ── Handle incoming price tick ─────────────────────────────────────────────

  function handlePriceTick(data: { symbol: string; price: string | number }) {
    const symbol   = data.symbol
    const newPrice = parseFloat(String(data.price))

    if (!symbol || isNaN(newPrice)) return
    if (!TRACKED_SYMBOLS.includes(symbol)) return

    const prev    = prevPrices.get(symbol) ?? newPrice
    const diff    = newPrice - prev
    const pct     = prev !== 0 ? (diff / prev) * 100 : 0
    const positive = diff >= 0

    prevPrices.set(symbol, newPrice)

    // Update watchlist item
    const idx = watchlist.value.findIndex(w => w.symbol === symbol)
    const existing = watchlist.value[idx]
    if (idx !== -1 && existing) {
      watchlist.value[idx] = {
        name:     existing.name,
        symbol:   existing.symbol,
        icon:     existing.icon,
        rawPrice: newPrice,
        price:    formatPrice(symbol, newPrice),
        change:   `${positive ? '+' : ''}${pct.toFixed(2)}%`,
        positive,
      }
    }

    // Append to chart if it's the primary symbol (Gold)
    if (symbol === 'XAU/USD') {
      appendChartPoint(newPrice)
    }
  }

  // ── Chart helpers ─────────────────────────────────────────────────────────

  const MAX_CHART_POINTS = 50

  function appendChartPoint(price: number) {
    const points = chartPoints.value
    const x = points.length > 0 ? (points[points.length - 1]?.x ?? 0) + 10 : 0

    chartPoints.value = [
      ...points.slice(-(MAX_CHART_POINTS - 1)),
      { x, y: 0, rawPrice: price }, // y is computed in the component via normalization
    ]
  }

  // ── Utility ───────────────────────────────────────────────────────────────

  function formatPrice(symbol: string, price: number): string {
    // Copper trades in smaller numbers; others are larger
    if (symbol === 'HG') return `$${price.toFixed(2)}`
    if (price < 100)     return `$${price.toFixed(2)}`
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  function buildDefaultWatchlist(): WatchlistItem[] {
    // Placeholder values shown before WS connects
    const defaults: Record<string, { price: number }> = {
      'XAU/USD': { price: 2034.45 },
      'WTI/USD': { price: 78.52   },
      'SOYB':    { price: 1184.25 },
      'HG':      { price: 5.89    },
    }

    return TRACKED_SYMBOLS.map(symbol => {
      const meta  = SYMBOL_META[symbol]!
      const def   = defaults[symbol]!
      return {
        name:     meta.name,
        symbol,
        rawPrice: def.price,
        price:    formatPrice(symbol, def.price),
        change:   '+0.00%',
        positive: true,
        icon:     meta.icon,
      }
    })
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  // Auto-cleanup when the component using this composable is unmounted
  onUnmounted(() => {
    disconnect()
  })

  return {
    // State
    watchlist,
    chartPoints,
    status,
    errorMessage,

    // Actions
    connect,
    disconnect,
  }
}