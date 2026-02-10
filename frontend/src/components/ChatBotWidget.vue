<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleChat = () => {
  isOpen.value = !isOpen.value
}
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
    <div class="bg-green-700 text-white px-4 py-3 rounded-t-2xl">
      Chat with Lola
    </div>

    <!-- Messages -->
    <div class="flex-1 p-4 text-sm text-gray-600">
      👋 Hi! I am Lola. How can we help you today?
    </div>

    <!-- Input -->
    <div class="border-t p-3">
      <input
        type="text"
        placeholder="Type a message..."
        class="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none"
      />
    </div>
  </div>
</template>
