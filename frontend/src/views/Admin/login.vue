<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const loading = ref(false)

async function handleLogin() {
  if (!email.value || !password.value) return
  loading.value = true
  // TODO: wire up auth logic
  setTimeout(() => { loading.value = false }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

    <!-- Logo -->
    <div class="flex items-center gap-2 mb-6">
      <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">I</div>
      <span class="font-semibold text-gray-900 text-base tracking-tight">InvestNews</span>
    </div>

    <!-- Card -->
    <div class="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">

      <!-- Hero image -->
      <div class="h-32 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
          alt="Office building"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Form body -->
      <div class="px-7 py-6">
        <h1 class="text-xl font-bold text-gray-900 mb-1">Admin Login</h1>
        <p class="text-xs text-gray-400 mb-6">Enter your credentials to access the dashboard.</p>

        <form @submit.prevent="handleLogin" class="space-y-4">

          <!-- Email -->
          <div>
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition">
              <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <input
                v-model="email"
                type="email"
                placeholder="name@investnews.com"
                required
                class="flex-1 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
            <div class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition">
              <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                v-model="password"
                type="password"
                placeholder="Enter your password"
                required
                class="flex-1 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none bg-transparent"
              />
            </div>
          </div>

          <!-- Sign In button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white text-sm font-semibold py-3 rounded-lg transition duration-200 mt-2"
          >
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>

        </form>

        <!-- Forgot password -->
        <div class="text-center mt-4">
          <a href="#" class="text-xs text-blue-500 hover:text-blue-600 transition">Forgot password?</a>
        </div>
      </div>
    </div>

    <!-- Footer links -->
    <div class="flex items-center gap-4 mt-8">
      <a href="#" class="text-xs text-gray-400 hover:text-gray-600 transition">Privacy Policy</a>
      <a href="#" class="text-xs text-gray-400 hover:text-gray-600 transition">Terms of Service</a>
      <a href="#" class="text-xs text-gray-400 hover:text-gray-600 transition">Help Centre</a>
    </div>

  </div>
</template>