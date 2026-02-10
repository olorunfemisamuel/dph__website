<script setup lang="ts">
import { ref } from "vue"
import { useWebSocket } from "../composables/useWebSocket"

// Public echo server (just for demo)
const { isConnected, lastMessage, send } =
  useWebSocket("wss://echo.websocket.events")

const input = ref("")

const sendMessage = () => {
  if (!input.value) return
  send(input.value)
  input.value = ""
}
</script>

<template>
  <div class="p-6 space-y-4">
    <p>
      Status:
      <span v-if="isConnected">🟢 Connected</span>
      <span v-else>🔴 Disconnected</span>
    </p>

    <input
      v-model="input"
      placeholder="Type message"
      class="border p-2"
    />

    <button
      @click="sendMessage"
      class="bg-blue-500 text-white px-4 py-2"
    >
      Send
    </button>

    <div v-if="lastMessage">
      <strong>Last message:</strong>
      {{ lastMessage }}
    </div>
  </div>
</template>
