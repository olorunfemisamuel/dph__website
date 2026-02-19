<!-- frontend/src/components/APITest.vue -->
<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <h3 class="font-bold mb-2">API Connection Status</h3>

    <div class="space-y-2">
      <div class="flex items-center">
        <span class="w-24">Backend:</span>
        <span :class="backendStatus === 'connected' ? 'text-green-600' : 'text-red-600'">
          {{ backendStatus }}
        </span>
      </div>

      <div class="flex items-center">
        <span class="w-24">WebSocket:</span>
        <span :class="isConnected ? 'text-green-600' : 'text-red-600'">
          {{ isConnected ? 'Connected' : 'Disconnected' }}
        </span>
      </div>

      <div v-if="stockData" class="mt-4">
        <h4 class="font-semibold mb-2">Live Stock Data:</h4>
        <div v-for="(data, symbol) in stockData" :key="symbol"
             class="flex justify-between p-2 bg-white rounded mb-1">
          <span>{{ symbol }}</span>
          <span>${{ data.price.toFixed(2) }}</span>
          <span :class="data.change >= 0 ? 'text-green-600' : 'text-red-600'">
            {{ data.changePercent }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useWebSocket } from '../composables/useWebSocket'

const backendStatus = ref('checking...')
const { isConnected, stockData } = useWebSocket()

onMounted(async () => {
  try {
    await api.get('/health')
    backendStatus.value = 'connected'
  } catch (error) {
    backendStatus.value = 'disconnected'
  }
})
</script>