<!-- In frontend/src/components/icons/NavBar.vue -->
<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="text-xl font-bold">
          DPH Advisory
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <router-link to="/about">About</router-link>
          <router-link to="/insights">Insights</router-link>
          <router-link to="/contact">Contact</router-link>
          <!-- Add more links -->
        </div>

        <!-- Auth Buttons / User Menu -->
        <div class="flex items-center space-x-4">
          <template v-if="isAuthenticated">
            <div class="relative" @click.away="showUserMenu = false">
              <button
                @click="showUserMenu = !showUserMenu"
                class="flex items-center space-x-2 focus:outline-none"
              >
                <span class="text-sm">{{ user?.firstName }} {{ user?.lastName }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div v-if="showUserMenu"
                   class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <router-link to="/dashboard" class="block px-4 py-2 text-sm hover:bg-gray-100">
                  Dashboard
                </router-link>
                <router-link to="/profile" class="block px-4 py-2 text-sm hover:bg-gray-100">
                  Profile
                </router-link>
                <router-link to="/investmentdashboard" class="block px-4 py-2 text-sm hover:bg-gray-100">
                  Investments
                </router-link>
                <hr class="my-1">
                <button @click="handleLogout"
                        class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <router-link to="/login"
                         class="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md">
              Login
            </router-link>
            <router-link to="/register"
                         class="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
              Sign Up
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated, getUserFromStorage, logout } from '../../services/authservice'

const router = useRouter()
const showUserMenu = ref(false)
const user = ref(getUserFromStorage())

const handleLogout = async () => {
  await logout()
  user.value = null
  router.push('/')
}

// Listen for auth changes
window.addEventListener('storage', () => {
  user.value = getUserFromStorage()
})
</script>