frontend/src/views/DashboardView.vue
<template>
  <!-- <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Welcome, {{ user?.firstName }}!</h1> --> -->

    <!-- <div class="grid md:grid-cols-3 gap-6"> -->
      <!-- Investment Portfolio Card -->
      <!-- <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Investment Portfolio</h2>
        <p class="text-3xl font-bold text-blue-600">${{ portfolioValue }}</p>
        <p class="text-sm text-gray-500">+{{ portfolioGrowth }}% this month</p>
        <router-link to="/investmentdashboard"
                     class="mt-4 inline-block text-blue-600 hover:text-blue-700">
          View Details →
        </router-link>
      </div> -->

      <!-- Recent Insights Card -->
      <!-- <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Recent Insights</h2>
        <ul class="space-y-2">
          <li v-for="insight in recentInsights" :key="insight._id">
            <router-link :to="`/Insight/${insight._id}`"
                         class="text-blue-600 hover:text-blue-700">
              {{ insight.title }}
            </router-link>
          </li>
        </ul>
      </div> -->

      <!-- WebSocket Status Card -->
      <!-- <div class="bg-white p-6 rounded-lg shadow"> 
        <h2 class="text-xl font-semibold mb-4">Market Status</h2>
        <APITest />
      </div>
    </div>
  </div> -->
</template>

<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUserFromStorage } from '../services/authservice'
import APITest from '../components/APITest.vue'

const user = ref(getUserFromStorage())
const portfolioValue = ref('12,345.67')
const portfolioGrowth = ref('2.3')
const recentInsights = ref([])

onMounted(async () => {
  Fetch user's portfolio data
  Fetch recent insights
})
</script> -->
