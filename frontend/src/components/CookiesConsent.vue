<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type CookiePrefs = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const showBanner = ref(false)

const prefs = ref<CookiePrefs>({
  essential: true,
  analytics: false,
  marketing: false,
})

const tryShowCookies = () => {
  const cookieSaved = localStorage.getItem('cookiePrefs')
  const privacyAccepted = localStorage.getItem('privacyAccepted')

  if (!cookieSaved && privacyAccepted) {
    setTimeout(() => {
      showBanner.value = true
    }, 2000)
  }
}

onMounted(() => {
  const saved = localStorage.getItem('cookiePrefs')
  if (saved) prefs.value = JSON.parse(saved)

  // Initial attempt
  tryShowCookies()

  // Listen when privacy modal saves
  window.addEventListener('storage', tryShowCookies)
})

onUnmounted(() => {
  window.removeEventListener('storage', tryShowCookies)
})

const acceptAll = () => {
  prefs.value = {
    essential: true,
    analytics: true,
    marketing: true,
  }
  savePrefs()
}

const rejectAll = () => {
  prefs.value = {
    essential: true,
    analytics: false,
    marketing: false,
  }
  savePrefs()
}

const savePrefs = () => {
  localStorage.setItem('cookiePrefs', JSON.stringify(prefs.value))
  showBanner.value = false
}
</script>



<template>
  <Teleport to="body">
    <div
      v-if="showBanner"
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-gray-300 shadow-lg rounded-xl p-4 sm:p-6 w-[90%] sm:w-4/5 md:w-2/5 flex flex-col space-y-4"
    >
      <h2 class="text-lg sm:text-xl font-bold text-gray-800">
        Cookie Preferences
      </h2>

      <p class="text-sm sm:text-base text-gray-600">
        We use cookies to enhance your experience. Manage your preferences below. Essential cookies are always enabled.
      </p>

      <!-- Categories -->
     <!-- <div class="space-y-2"> -->
        <!-- Essential --> 
        <!-- <div class="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg p-2 sm:p-3">
          <div class="mb-1 sm:mb-0">
            <h3 class="font-semibold text-sm sm:text-base">Essential Cookies</h3>
            <p class="text-xs sm:text-sm text-gray-500">Required for the website to function properly.</p>
          </div>
          <input type="checkbox" checked disabled class="ml-0 sm:ml-4" />
        </div>
      </div> -->

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row justify-end gap-2 mt-2">
        <button
          @click="rejectAll"
          class="border border-gray-300 px-3 py-2 rounded hover:bg-gray-100 text-sm sm:text-base w-full sm:w-auto"
        >
          Reject All
        </button>
        <button
          @click="acceptAll"
          class="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm sm:text-base w-full sm:w-auto"
        >
          Accept All
        </button>
      </div>
    </div>
  </Teleport>
</template>
