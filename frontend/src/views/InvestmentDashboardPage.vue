<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMarketData, type ChartPoint } from '@/composables/useMarketData'

const activeNav = ref('Dashboard')
const activeTimeframe = ref('1M')

const navItems = [
  { name: 'Dashboard', icon: '▦' },
  { name: 'Portfolio', icon: '◈' },
  { name: 'Markets', icon: '◉' },
  { name: 'Reports', icon: '≡' },
  { name: 'Activity', icon: '◷' },
  { name: 'Settings', icon: '⚙' },
]

const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL']

const activities = [
  {
    time: 'TODAY, 10:45 AM',
    title: 'Bought 10 Units Crude Oil WTI',
    detail: 'Executed at $78.52 · Order #TRN-8821',
    dotColor: 'text-emerald-400',
    dot: '●',
  },
  {
    time: 'TODAY, 09:12 AM',
    title: 'Deposit Confirmed: +$29,000',
    detail: 'Transfer from Chase Savings · Reference: BNK-6433',
    dotColor: 'text-emerald-400',
    dot: '●',
  },
  {
    time: 'YESTERDAY, 06:30 PM',
    title: 'Market Alert: Gold Volatility',
    detail: 'Following macro news...',
    dotColor: 'text-amber-400',
    dot: '▲',
  },
]

// ── Market Data from composable ───────────────────────────────────────────────
const { watchlist, chartPoints, status, errorMessage, connect } = useMarketData()

// Status indicator helpers
type ConnectionStatus = 'connected' | 'connecting' | 'disconnected' | 'error'

const statusColor = computed(() => ({
  connected:    'bg-emerald-400',
  connecting:   'bg-amber-400 animate-pulse',
  disconnected: 'bg-slate-500',
  error:        'bg-red-400',
}[status.value as ConnectionStatus]))

const statusLabel = computed(() => ({
  connected:    'Live',
  connecting:   'Connecting…',
  disconnected: 'Disconnected',
  error:        'Error',
}[status.value as ConnectionStatus]))

// ── Chart path — derived from live chartPoints ─────────────────────────────────
const SVG_W = 480
const SVG_H = 100

const chartPath = computed(() => {
  const pts = chartPoints.value
  if (pts.length < 2) return ''

  // Normalize prices to SVG Y coordinates (flip: high price = low Y)
  const prices  = pts.map((p: ChartPoint) => p.rawPrice)
  const minP    = Math.min(...prices)
  const maxP    = Math.max(...prices)
  const range   = maxP - minP || 1

  const mapped = pts.map((p: ChartPoint, i: number) => ({
    x: (i / (pts.length - 1)) * SVG_W,
    y: SVG_H - ((p.rawPrice - minP) / range) * (SVG_H - 10) - 5,
  }))

  const first = mapped[0]
  if (!first) return ''

  let d = `M ${first.x},${first.y}`
  for (let i = 1; i < mapped.length; i++) {
    const curr = mapped[i]
    const prev = mapped[i - 1]
    if (!curr || !prev) continue
    const cpx = (prev.x + curr.x) / 2
    d += ` C ${cpx},${prev.y} ${cpx},${curr.y} ${curr.x},${curr.y}`
  }
  return d
})

const chartArea = computed(() => {
  const d = chartPath.value
  if (!d) return ''
  const pts    = chartPoints.value
  const lastX  = pts.length > 1 ? SVG_W : 0
  return `${d} L ${lastX},${SVG_H} L 0,${SVG_H} Z`
})

// ── Connect on mount ──────────────────────────────────────────────────────────
onMounted(() => {
  connect()
})
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-[#0f1923] font-sans text-slate-200">

    <!-- ───────────── SIDEBAR ───────────── -->
    <aside class="flex w-[200px] flex-shrink-0 flex-col border-r border-[#1e2d1e] bg-[#111820] px-3 py-5">

      <!-- Logo -->
      <div class="mb-5 flex items-center gap-2.5 border-b border-[#1e2d1e] px-2 pb-5">
        <span class="text-2xl text-emerald-400">◈</span>
        <div>
          <p class="text-sm font-bold tracking-tight text-white">InvestDesk</p>
          <p class="text-[10px] uppercase tracking-widest text-emerald-900">Commodity Trading</p>
        </div>
      </div>

      <!-- Nav Items -->
      <nav class="flex flex-1 flex-col gap-0.5">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="activeNav = item.name"
          class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all duration-150"
          :class="activeNav === item.name
            ? 'bg-emerald-950 text-emerald-400 font-semibold'
            : 'text-slate-500 hover:bg-[#1a2d1a] hover:text-slate-300'"
        >
          <span class="w-4 text-center text-sm">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </button>
      </nav>

      <!-- New Trade Button -->
      <button class="mt-4 w-full rounded-lg bg-emerald-400 py-2.5 text-[13px] font-bold tracking-wide text-emerald-950 transition-colors hover:bg-emerald-300">
        + New Trade
      </button>
    </aside>

    <!-- ───────────── MAIN ───────────── -->
    <main class="flex flex-1 flex-col overflow-hidden">

      <!-- Header -->
      <header class="flex flex-shrink-0 items-center justify-between border-b border-[#1e2d1e] bg-[#111820] px-6 py-3.5">
        <!-- Search -->
        <div class="flex w-[360px] items-center gap-2.5 rounded-lg border border-[#1e2d1e] bg-[#0d1117] px-3.5 py-2">
          <span class="text-xs text-emerald-900">🔍</span>
          <input
            type="text"
            placeholder="Search commodities, forex, or symbol e.g. Gold, WTI..."
            class="w-full bg-transparent text-xs text-slate-400 outline-none placeholder:text-emerald-900/50"
          />
        </div>
        <!-- Right -->
        <div class="flex items-center gap-3">
          <button class="p-1 text-base text-slate-500 hover:text-slate-300">🔔</button>
          <button class="p-1 text-base text-slate-500 hover:text-slate-300">⚙</button>
          <div class="ml-2 flex items-center gap-2.5">
            <div class="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-emerald-950">
              AR
            </div>
            <div>
              <p class="text-[13px] font-semibold text-white">Alex Rivera</p>
              <p class="text-[10px] font-medium uppercase tracking-widest text-emerald-400">Institutional PRO</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="flex flex-1 flex-col gap-4 overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1e2d1e]">

        <!-- Page Title Row -->
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-3">
              <h1 class="text-[22px] font-bold tracking-tight text-white">Portfolio Overview</h1>
              <div class="flex items-center gap-1.5 rounded-full border border-[#1e2d1e] bg-[#111820] px-2.5 py-1">
                <span :class="[statusColor, 'h-1.5 w-1.5 rounded-full']"></span>
                <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{{ statusLabel }}</span>
              </div>
            </div>
            <p class="mt-1 text-xs text-emerald-900">Monitoring real-time commodity exposure &amp; performance</p>
            <p v-if="errorMessage" class="mt-1 text-[11px] text-red-400">⚠ {{ errorMessage }}</p>
          </div>
          <div class="flex items-center gap-2.5">
            <!-- Timeframes -->
            <div class="flex overflow-hidden rounded-lg border border-[#1e2d1e] bg-[#111820]">
              <button
                v-for="tf in timeframes"
                :key="tf"
                @click="activeTimeframe = tf"
                class="px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-150"
                :class="activeTimeframe === tf
                  ? 'bg-emerald-400 text-emerald-950'
                  : 'text-slate-500 hover:bg-[#1a2d1a] hover:text-slate-300'"
              >{{ tf }}</button>
            </div>
            <button class="rounded-lg border border-[#1e2d1e] bg-[#111820] px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-all hover:border-emerald-400 hover:text-emerald-400">
              ⬇ Export Report
            </button>
          </div>
        </div>

        <!-- Top Row -->
        <div class="grid grid-cols-[1fr_260px] gap-4">

          <!-- Chart Card -->
          <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-5">
            <div class="mb-5 flex gap-10">
              <div>
                <p class="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">Total Net Worth</p>
                <div class="flex items-center gap-2">
                  <span class="font-mono text-2xl font-bold text-white">$1,240,500.00</span>
                  <span class="rounded bg-emerald-950 px-2 py-0.5 font-mono text-xs font-semibold text-emerald-400">+1.02%</span>
                </div>
              </div>
              <div>
                <p class="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">30-Day Profit</p>
                <p class="font-mono text-lg font-bold text-white">$45,000.00</p>
                <p class="mt-1 text-[10px] text-emerald-400">● Value Added</p>
              </div>
            </div>
            <!-- SVG Chart -->
            <svg viewBox="0 0 480 100" preserveAspectRatio="none" class="block h-[90px] w-full">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stop-color="#10b981" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path v-if="chartArea" :d="chartArea" fill="url(#chartGrad)"/>
              <path v-if="chartPath" :d="chartPath" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="mt-1.5 flex justify-between font-mono text-[10px] text-slate-600">
              <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span><span>JAN</span>
            </div>
          </div>

          <!-- Right Panels -->
          <div class="flex flex-col gap-3">

            <!-- Portfolio Allocation -->
            <div class="flex-1 rounded-xl border border-[#1e2d1e] bg-[#111820] p-4">
              <p class="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Portfolio Allocation</p>
              <div class="flex items-center gap-3">
                <svg viewBox="0 0 80 80" class="h-[80px] w-[80px] flex-shrink-0">
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#1a2a1a" stroke-width="12"/>
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#10b981" stroke-width="12"
                    stroke-dasharray="188.4" stroke-dashoffset="0" transform="rotate(-90 40 40)"/>
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#f59e0b" stroke-width="12"
                    stroke-dasharray="56.5 131.9" stroke-dashoffset="-94.2" transform="rotate(-90 40 40)"/>
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#3b82f6" stroke-width="12"
                    stroke-dasharray="37.7 150.7" stroke-dashoffset="-150.7" transform="rotate(-90 40 40)"/>
                  <text x="40" y="44" text-anchor="middle" fill="white" font-size="10" font-weight="bold">100%</text>
                </svg>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-1.5 text-xs text-slate-400">
                    <span class="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400"></span>
                    <span>Energy</span>
                    <span class="ml-1 font-mono text-[11px] font-semibold text-white">45%</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-xs text-slate-400">
                    <span class="h-2 w-2 flex-shrink-0 rounded-full bg-amber-400"></span>
                    <span>Metals</span>
                    <span class="ml-1 font-mono text-[11px] font-semibold text-white">30%</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-xs text-slate-400">
                    <span class="h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></span>
                    <span>Agriculture</span>
                    <span class="ml-1 font-mono text-[11px] font-semibold text-white">25%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Day's Performance -->
            <div class="relative overflow-hidden rounded-xl border border-emerald-900/40 bg-gradient-to-br from-emerald-950 to-[#021c14] p-4">
              <p class="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-700">Day's Performance</p>
              <p class="font-mono text-xl font-bold text-emerald-400">+$12,450.20</p>
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-3xl opacity-50">📈</span>
            </div>

          </div>
        </div>

        <!-- Bottom Row -->
        <div class="grid grid-cols-[1fr_300px] gap-4">

          <!-- Watchlist -->
          <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-4">
            <div class="mb-4 flex items-center justify-between">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Live Market Watchlist</span>
              <button class="text-xs font-semibold text-emerald-400 hover:text-emerald-300">View All Markets →</button>
            </div>
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="pb-3 pr-3 text-left text-[10px] font-semibold uppercase tracking-widest text-slate-600">Commodity</th>
                  <th class="pb-3 pr-3 text-left text-[10px] font-semibold uppercase tracking-widest text-slate-600">Symbol</th>
                  <th class="pb-3 pr-3 text-left text-[10px] font-semibold uppercase tracking-widest text-slate-600">Price</th>
                  <th class="pb-3 pr-3 text-left text-[10px] font-semibold uppercase tracking-widest text-slate-600">Day Change</th>
                  <th class="pb-3 text-left text-[10px] font-semibold uppercase tracking-widest text-slate-600">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in watchlist" :key="item.symbol" class="border-t border-[#1e2d1e] transition-colors hover:bg-[#0d1117]/50">
                  <td class="py-2.5 pr-3">
                    <div class="flex items-center gap-2 text-[13px] font-semibold text-slate-200">
                      <span class="text-base">{{ item.icon }}</span>
                      {{ item.name }}
                    </div>
                  </td>
                  <td class="py-2.5 pr-3 font-mono text-[11px] text-slate-500">{{ item.symbol }}</td>
                  <td class="py-2.5 pr-3 font-mono text-[13px] font-semibold text-slate-200"
                    :class="{ 'animate-pulse': status === 'connecting' }">
                    {{ item.price }}
                  </td>
                  <td class="py-2.5 pr-3 font-mono text-[13px] font-semibold"
                    :class="[item.positive ? 'text-emerald-400' : 'text-red-400', { 'animate-pulse': status === 'connecting' }]"
                  >{{ item.change }}</td>
                  <td class="py-2.5">
                    <button class="rounded-md bg-emerald-400 px-3.5 py-1 text-[11px] font-bold tracking-wide text-emerald-950 transition-colors hover:bg-emerald-300">
                      BUY
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Recent Activity -->
          <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-4">
            <p class="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Recent Activity</p>
            <div class="flex flex-col gap-4">
              <div v-for="(act, i) in activities" :key="i" class="flex gap-3">
                <span :class="[act.dotColor, 'mt-0.5 flex-shrink-0 text-sm']">{{ act.dot }}</span>
                <div>
                  <p class="mb-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-600">{{ act.time }}</p>
                  <p class="mb-0.5 text-xs font-semibold text-slate-200">{{ act.title }}</p>
                  <p class="text-[11px] leading-relaxed text-slate-500">{{ act.detail }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500;600&display=swap');

::-webkit-scrollbar       { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #1e2d1e; border-radius: 2px; }
</style>