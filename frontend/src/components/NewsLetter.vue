<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref(false)

async function handleSubscribe() {
  if (!email.value) return

  loading.value = true
  message.value = ''

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })

    const data = await res.json()

    if (!res.ok) {
      if (res.status === 400 && data.detail === 'Email already subscribed') {
        throw new Error("That won't work. You're already a subscriber! 😊")
      }
      throw new Error(data.detail || data.error || data.message || 'Subscription failed')
    }

    success.value = true
    message.value = 'Thank you for subscribing!'
    email.value = ''
    setTimeout(() => { message.value = '' }, 7000)

  } catch (err: any) {
    success.value = false
    message.value = err.message || 'Something went wrong. Please try again.'
    setTimeout(() => { message.value = '' }, 7000)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="bg-green-700 text-white py-10">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p class="mb-6">
        Stay updated with the latest news and insights from Deutsche Partners Holding.
      </p>

      <form
        @submit.prevent="handleSubscribe"
        class="flex flex-col items-center gap-3 max-w-4xl mx-auto"
      >
        <!-- Input + Button row -->
        <div class="flex flex-col sm:flex-row items-center gap-3 w-full">
          <input
            v-model="email"
            type="email"
            placeholder="Your Email Address"
            required
            :disabled="loading"
            class="w-full sm:flex-1 bg-white/10 border border-white/30 px-4 sm:px-6 py-3 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 disabled:opacity-50"
          />
          <button
            type="submit"
            :disabled="loading"
            class="w-full sm:w-auto border-2 border-white px-8 sm:px-10 py-3 rounded font-bold hover:bg-white hover:text-[#2e8b3b] transition duration-300 uppercase text-sm sm:text-base tracking-widest disabled:opacity-50"
          >
            {{ loading ? 'Subscribing...' : 'Subscribe' }}
          </button>
        </div>

        <!-- ✅ Message now sits BELOW the input+button row -->
        <p
          v-if="message"
          :class="success ? 'text-green-200' : 'text-red-300'"
          class="text-sm"
        >
          {{ message }}
        </p>
      </form>

    </div>
  </div>
</template>