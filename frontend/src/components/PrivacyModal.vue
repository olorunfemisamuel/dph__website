<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showModal = ref(false)
const dontShowAgain = ref(false)

onMounted(() => {
  const dontShow = localStorage.getItem('privacyDontShow')
  if (!dontShow) {
    showModal.value = true
  }
})


const acceptPolicy = () => {
  // Always mark privacy accepted
  localStorage.setItem('privacyAccepted', 'true')

  // Optional: only matters if you later use dontShowAgain
  if (dontShowAgain.value) {
    localStorage.setItem('privacyDontShow', 'true')
  }

  // Notify cookie component
  window.dispatchEvent(new Event('storage'))

  showModal.value = false
}


</script>

<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Modal -->
      <div
        class="relative bg-white w-[90%] max-w-3xl rounded-lg shadow-xl p-8"
      >
        <h2 class="text-2xl font-bold text-center mb-6">
          Protecting Your Privacy Is Important To Us
        </h2>

        <div class="text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            This Privacy Notice applies to our website and its associated
            subdomains. By accessing or using our Service, you consent to
            our data collection practices as described in our Privacy Policy.
          </p>

          <p>
            By clicking <strong>“OK”</strong> you agree that data may be collected
            to operate the website, maintain quality of service and provide
            general statistics.
          </p>
        </div>

        <div class="flex items-center justify-between mt-8">
          <label class="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              v-model="dontShowAgain"
              class="rounded"
            />
            Don’t show again
          </label>

          <button
            @click="acceptPolicy"
            class="bg-green-700 hover:bg-green-800
                   text-white px-6 py-2 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
