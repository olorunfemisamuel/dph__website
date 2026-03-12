<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref('Dashboard')

const navItems = [
  { name: 'Dashboard', icon: 'grid' },
  { name: 'News Articles', icon: 'file-text' },
  { name: 'Subscribers', icon: 'users' },
  { name: 'Form Submissions', icon: 'inbox' },
  { name: 'Settings', icon: 'settings' },
]

const stats = [
  { label: 'Total News Articles', value: '1,248', change: '+12% this month', icon: 'file-text', positive: true },
  { label: 'Newsletter Subscribers', value: '8,432', change: '+432 new this week', icon: 'users', positive: true },
  { label: 'New Form Entries', value: '24', change: '6 new inquiries', icon: 'message-square', positive: true },
]

const articles = [
  { title: 'Q3 Market Outlook: Energy Stocks Surging', category: 'Analysis', date: 'Oct 26, 2025', status: 'Published' },
  { title: 'Crypto Regulations: What to Expect in 2026', category: 'Regulatory', date: 'Oct 23, 2025', status: 'Draft' },
]

const subscribers = [
  { email: 'john.doe@traxmail.com', time: '2 hours ago' },
  { email: 'janet.miller@inbox.io', time: '5 hours ago' },
  { email: 'robert.brown@wealth.com', time: 'Yesterday' },
]

const inquiries = [
  {
    name: 'Michael Chen',
    email: 'michael@example.com',
    preview: 'Interested in premium membership: details re...',
  },
  {
    name: 'Laura White',
    email: 'laura@example.com',
    preview: "Correction on your recent article regarding S&P...",
  },
]

function getCategoryColor(cat: string) {
  if (cat === 'Analysis') return 'bg-blue-500/20 text-blue-300'
  if (cat === 'Regulatory') return 'bg-purple-500/20 text-purple-300'
  return 'bg-gray-500/20 text-gray-300'
}

function getStatusColor(status: string) {
  if (status === 'Published') return 'text-green-400'
  if (status === 'Draft') return 'text-yellow-400'
  return 'text-gray-400'
}

function getInitial(name: string) {
  return name.charAt(0).toUpperCase()
}

function getAvatarColor(i: number) {
  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500']
  return colors[i % colors.length]
}
</script>

<template>
  <div class="flex h-screen bg-[#0d1117] text-white font-sans overflow-hidden">

    <!-- Sidebar -->
    <aside class="w-56 bg-[#0d1117] border-r border-white/5 flex flex-col py-6 px-4 shrink-0">
      <!-- Logo -->
      <div class="flex items-center gap-2 mb-10 px-2">
        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">I</div>
        <span class="font-semibold text-white text-base tracking-tight">InvestNews</span>
      </div>

      <!-- Nav -->
      <nav class="flex flex-col gap-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="currentPage = item.name"
          :class="[
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 text-left w-full',
            currentPage === item.name
              ? 'bg-blue-600/20 text-blue-400'
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          ]"
        >
          <!-- Icons -->
          <svg v-if="item.icon === 'grid'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          <svg v-else-if="item.icon === 'file-text'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <svg v-else-if="item.icon === 'users'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <svg v-else-if="item.icon === 'inbox'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
          <svg v-else-if="item.icon === 'settings'" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          {{ item.name }}
        </button>
      </nav>

      <!-- User -->
      <div class="mt-auto flex items-center gap-3 px-2 pt-4 border-t border-white/5">
        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">AT</div>
        <div>
          <p class="text-sm font-medium text-white leading-none">Alex Thorne</p>
          <p class="text-xs text-gray-500 mt-0.5">Admin</p>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 overflow-y-auto bg-[#0f1520]">

      <!-- Top bar -->
      <header class="flex items-center justify-between px-8 py-4 border-b border-white/5 sticky top-0 bg-[#0f1520] z-10">
        <h1 class="text-lg font-semibold text-white">Dashboard Overview</h1>
        <div class="flex items-center gap-4">
          <!-- Search -->
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 w-52">
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search nav..." class="bg-transparent text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none w-full" />
          </div>
          <!-- Bell -->
          <button class="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>
      </header>

      <div class="px-8 py-6 space-y-6">

        <!-- Stat Cards -->
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(stat, i) in stats" :key="i" class="bg-[#161d2e] border border-white/5 rounded-xl p-5">
            <div class="flex items-start justify-between mb-4">
              <p class="text-sm text-gray-400">{{ stat.label }}</p>
              <div class="w-9 h-9 rounded-lg bg-blue-600/15 flex items-center justify-center">
                <svg v-if="stat.icon === 'file-text'" class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <svg v-else-if="stat.icon === 'users'" class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <svg v-else-if="stat.icon === 'message-square'" class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
            </div>
            <p class="text-3xl font-bold text-white mb-1">{{ stat.value }}</p>
            <p class="text-xs text-green-400">▲ {{ stat.change }}</p>
          </div>
        </div>

        <!-- News Management Table -->
        <div class="bg-[#161d2e] border border-white/5 rounded-xl">
          <div class="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div>
              <h2 class="text-base font-semibold text-white">News Management</h2>
              <p class="text-xs text-gray-500 mt-0.5">Manage and publish investment reports and news.</p>
            </div>
            <button class="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add New Article
            </button>
          </div>

          <table class="w-full text-sm">
            <thead>
              <tr class="text-gray-500 text-xs uppercase tracking-wide border-b border-white/5">
                <th class="text-left px-6 py-3 font-medium">Title</th>
                <th class="text-left px-4 py-3 font-medium">Category</th>
                <th class="text-left px-4 py-3 font-medium">Date Published</th>
                <th class="text-left px-4 py-3 font-medium">Status</th>
                <th class="text-left px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(article, i) in articles" :key="i" class="border-b border-white/5 hover:bg-white/[0.02] transition">
                <td class="px-6 py-4 text-white font-medium">{{ article.title }}</td>
                <td class="px-4 py-4">
                  <span :class="['text-xs px-2.5 py-1 rounded-full font-medium', getCategoryColor(article.category)]">
                    {{ article.category }}
                  </span>
                </td>
                <td class="px-4 py-4 text-gray-400">{{ article.date }}</td>
                <td class="px-4 py-4">
                  <span :class="['text-xs font-semibold', getStatusColor(article.status)]">
                    ● {{ article.status }}
                  </span>
                </td>
                <td class="px-4 py-4">
                  <div class="flex items-center gap-3">
                    <button class="text-blue-400 hover:text-blue-300 text-xs font-medium transition">Edit</button>
                    <button class="text-red-400 hover:text-red-300 text-xs font-medium transition">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bottom 2-col grid -->
        <div class="grid grid-cols-2 gap-4">

          <!-- Recent Newsletter Sign-ups -->
          <div class="bg-[#161d2e] border border-white/5 rounded-xl p-6">
            <h2 class="text-base font-semibold text-white mb-4">Recent Newsletter Sign-ups</h2>
            <div class="space-y-4">
              <div v-for="(sub, i) in subscribers" :key="i" class="flex items-center gap-3">
                <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0', getAvatarColor(i)]">
                  {{ sub.email.charAt(0).toUpperCase() }}
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-white truncate">{{ sub.email }}</p>
                </div>
                <p class="text-xs text-gray-500 shrink-0">{{ sub.time }}</p>
              </div>
            </div>
            <button class="mt-5 text-sm text-blue-400 hover:text-blue-300 transition font-medium">
              View All 8,432 Subscribers →
            </button>
          </div>

          <!-- Contact Form Inquiries -->
          <div class="bg-[#161d2e] border border-white/5 rounded-xl p-6">
            <h2 class="text-base font-semibold text-white mb-4">Contact Form Inquiries</h2>
            <div class="space-y-4">
              <div v-for="(inquiry, i) in inquiries" :key="i" class="p-3 bg-white/[0.03] border border-white/5 rounded-lg">
                <div class="flex items-center gap-2 mb-1">
                  <div :class="['w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0', getAvatarColor(i+1)]">
                    {{ getInitial(inquiry.name) }}
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-white leading-none">{{ inquiry.name }}</p>
                    <p class="text-[11px] text-gray-500 mt-0.5">{{ inquiry.email }}</p>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-2 leading-relaxed">{{ inquiry.preview }}</p>
              </div>
            </div>
            <button class="mt-5 text-sm text-blue-400 hover:text-blue-300 transition font-medium">
              Manage All Submissions →
            </button>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>