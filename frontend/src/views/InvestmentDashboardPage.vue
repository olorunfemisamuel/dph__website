<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMarketData, type ChartPoint } from '@/composables/useMarketData'

const activeNav = ref('Dashboard')
const activeTimeframe = ref('1M')


const isSidebarOpen = ref(false)
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value }

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

    <aside 
      class="fixed inset-y-0 left-0 z-50 w-[240px] flex-shrink-0 flex-col border-r border-[#1e2d1e] bg-[#111820] px-3 py-5 transition-transform duration-300 lg:relative lg:translate-x-0"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="mb-5 flex items-center justify-between border-b border-[#1e2d1e] px-2 pb-5">
        <div class="flex items-center gap-2.5">
          <span class="text-2xl text-emerald-400">◈</span>
          <div>
            <p class="text-sm font-bold tracking-tight text-white">InvestDesk</p>
            <p class="text-[10px] uppercase tracking-widest text-emerald-900">Commodity Trading</p>
          </div>
        </div>
        <button @click="toggleSidebar" class="text-slate-500 lg:hidden text-xl">&times;</button>
      </div>

      <nav class="flex flex-1 flex-col gap-0.5">
        <button v-for="item in navItems" :key="item.name" @click="activeNav = item.name; isSidebarOpen = false"
          class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition-all"
          :class="activeNav === item.name ? 'bg-emerald-950 text-emerald-400 font-semibold' : 'text-slate-500 hover:bg-[#1a2d1a] hover:text-slate-300'">
          <span class="w-4 text-center text-sm">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </button>
      </nav>

      <button class="mt-4 w-full rounded-lg bg-emerald-400 py-2.5 text-[13px] font-bold text-emerald-950 hover:bg-emerald-300">
        + New Trade
      </button>
    </aside>

    <div v-if="isSidebarOpen" @click="toggleSidebar" class="fixed inset-0 z-40 bg-black/60 lg:hidden"></div>

    <main class="flex flex-1 flex-col overflow-hidden">

      <header class="flex flex-shrink-0 items-center justify-between border-b border-[#1e2d1e] bg-[#111820] px-4 lg:px-6 py-3.5">
        <div class="flex items-center gap-3">
          <button @click="toggleSidebar" class="p-1 text-slate-400 lg:hidden">
            <span class="text-2xl">☰</span>
          </button>
          
          <div class="hidden sm:flex w-[200px] md:w-[360px] items-center gap-2.5 rounded-lg border border-[#1e2d1e] bg-[#0d1117] px-3.5 py-2">
            <span class="text-xs">🔍</span>
            <input type="text" placeholder="Search..." class="w-full bg-transparent text-xs text-slate-400 outline-none" />
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="hidden xs:flex flex-col items-end">
            <p class="text-[13px] font-semibold text-white">Alex Rivera</p>
            <p class="text-[10px] font-medium uppercase text-emerald-400">Institutional</p>
          </div>
          <div class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-bold text-emerald-950">AR</div>
        </div>
      </header>

      <div class="flex flex-1 flex-col gap-6 overflow-y-auto p-4 lg:p-6">

        <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div>
            <div class="flex items-center gap-3">
              <h1 class="text-xl lg:text-[22px] font-bold text-white">Portfolio Overview</h1>
              <div class="flex items-center gap-1.5 rounded-full border border-[#1e2d1e] bg-[#111820] px-2.5 py-1">
                <span :class="[statusColor, 'h-1.5 w-1.5 rounded-full']"></span>
                <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{{ statusLabel }}</span>
              </div>
            </div>
            <p class="mt-1 text-xs text-emerald-900">Monitoring real-time commodity exposure</p>
          </div>
          <div class="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            <div class="flex flex-nowrap rounded-lg border border-[#1e2d1e] bg-[#111820]">
              <button v-for="tf in timeframes" :key="tf" @click="activeTimeframe = tf"
                class="whitespace-nowrap px-3 py-1.5 text-[11px] font-semibold"
                :class="activeTimeframe === tf ? 'bg-emerald-400 text-emerald-950' : 'text-slate-500'">
                {{ tf }}
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4">
          
          <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-4 lg:p-5">
            <div class="mb-5 flex flex-wrap gap-6 lg:gap-10">
              <div>
                <p class="mb-1.5 font-mono text-[10px] uppercase text-slate-500">Total Net Worth</p>
                <div class="flex items-center gap-2">
                  <span class="font-mono text-xl lg:text-2xl font-bold text-white">$1,240,500</span>
                  <span class="rounded bg-emerald-950 px-2 py-0.5 font-mono text-[10px] text-emerald-400">+1.02%</span>
                </div>
              </div>
              <div>
                <p class="mb-1.5 font-mono text-[10px] uppercase text-slate-500">30-Day Profit</p>
                <p class="font-mono text-lg font-bold text-white">$45,000.00</p>
              </div>
            </div>
            <div class="h-[100px] w-full">
              <svg viewBox="0 0 480 100" preserveAspectRatio="none" class="h-full w-full">
                <path v-if="chartArea" :d="chartArea" fill="url(#chartGrad)"/>
                <path v-if="chartPath" :d="chartPath" fill="none" stroke="#10b981" stroke-width="2"/>
              </svg>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
            <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-4 flex items-center justify-between xl:block">
               <p class="mb-3 text-[11px] font-semibold uppercase text-slate-400">Allocation</p>
               <div class="flex items-center gap-4">
                 <div class="h-10 w-10 rounded-full border-4 border-emerald-400 border-t-amber-400"></div>
                 <div class="text-[11px] text-slate-400">45% Energy / 30% Metals</div>
               </div>
            </div>
            <div class="relative overflow-hidden rounded-xl border border-emerald-900/40 bg-gradient-to-br from-emerald-950 to-[#021c14] p-4">
              <p class="text-[10px] font-semibold uppercase text-emerald-700">Day's Performance</p>
              <p class="font-mono text-xl font-bold text-emerald-400">+$12,450.20</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-4">
          
          <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-4 overflow-hidden">
            <p class="mb-4 text-[11px] font-semibold uppercase text-slate-400">Market Watchlist</p>
            <div class="overflow-x-auto">
              <table class="w-full min-w-[500px]">
                <thead>
                  <tr>
                    <th class="text-left text-[10px] uppercase text-slate-600 pb-3">Commodity</th>
                    <th class="text-left text-[10px] uppercase text-slate-600 pb-3">Price</th>
                    <th class="text-left text-[10px] uppercase text-slate-600 pb-3">Change</th>
                    <th class="text-left text-[10px] uppercase text-slate-600 pb-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in watchlist" :key="item.symbol" class="border-t border-[#1e2d1e]">
                    <td class="py-3 text-sm font-medium">{{ item.name }}</td>
                    <td class="py-3 font-mono text-sm">{{ item.price }}</td>
                    <td class="py-3 text-sm" :class="item.positive ? 'text-emerald-400' : 'text-red-400'">{{ item.change }}</td>
                    <td class="py-3"><button class="bg-emerald-400 text-emerald-950 px-3 py-1 rounded text-[10px] font-bold">BUY</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="rounded-xl border border-[#1e2d1e] bg-[#111820] p-4">
            <p class="mb-4 text-[11px] font-semibold uppercase text-slate-400">Recent Activity</p>
            <div class="space-y-4">
              <div v-for="(act, i) in activities.slice(0, 3)" :key="i" class="flex gap-3">
                <span :class="[act.dotColor, 'text-sm']">{{ act.dot }}</span>
                <div>
                  <p class="text-[10px] font-semibold text-slate-200">{{ act.title }}</p>
                  <p class="text-[9px] text-slate-500">{{ act.time }}</p>
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