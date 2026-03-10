<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  surname: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  message: '',
})

const loading = ref(false)
const formMessage = ref('')
const formSuccess = ref(false)

async function handleSubmit() {
  loading.value = true
  formMessage.value = ''

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (!res.ok) throw new Error('Submission failed')

    formSuccess.value = true
    formMessage.value = 'Your message has been sent!'
    form.value = { surname: '', lastName: '', phoneNumber: '', email: '', message: '' }
    setTimeout(() => { formMessage.value = '' }, 3000)
  } catch (err: any) {
    formSuccess.value = false
    formMessage.value = err.message || 'Something went wrong. Please try again.'
    setTimeout(() => { formMessage.value = '' }, 3000)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <!-- Banner -->
  <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-52 sm:h-56 md:h-72 overflow-hidden">
      <img
        src="@/assets/leadershipbanner.png"
        alt="Contact Banner"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="absolute inset-0 flex flex-col justify-end pb-8 px-6 md:px-16 z-10">
        <h3 class="text-white font-bold text-2xl sm:text-3xl md:text-5xl">GET IN TOUCH</h3>
        <p class="text-white/80 text-sm md:text-base mt-2">We're here to support your investment and financial needs</p>
      </div>
    </div>
  </section>

  <!-- Location Cards -->
  <section class="bg-white py-10 px-6 md:px-16">
    <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-5xl mx-auto">

      <!-- Card 1 - Light (Lagos HQ) -->
      <!-- <div class="flex-1 rounded-xl p-5 bg-gray-100 flex flex-col gap-2">
        <div class="flex items-center gap-2 text-gray-500 text-sm font-medium mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Lagos
        </div>
        <p class="text-gray-700 text-xs leading-relaxed">
          5 Okunland Old Ikoyi, Ikoyi, Lagos
        </p>
      </div> -->

      <!-- Card 2 - Dark (Abuja) -->
      <div class="flex-1 rounded-xl p-5 bg-gray-800 flex flex-col gap-2">
        <div class="flex items-center gap-2 text-white/70 text-sm font-medium mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Abuja
        </div>
        <p class="text-white/90 text-xs leading-relaxed">
          No.3 Peter Obang Close, Off O.P. Fingesi Road<br />Utako District, Abuja, Nigeria
        </p>
      </div>

      <!-- Card 3 - Dark (Port Harcourt) -->
      <!-- <div class="flex-1 rounded-xl p-5 bg-gray-800 flex flex-col gap-2">
        <div class="flex items-center gap-2 text-white/70 text-sm font-medium mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Port Harcourt
        </div>
        <p class="text-white/90 text-xs leading-relaxed">
          Plot 1 Peter Obang Close, D/1 Ezugwu<br />Road, Elekle-Okwa, Abuja
        </p>
      </div> -->

    </div>
  </section>

  <!-- Contact Info + Form -->
  <section class="bg-white py-10 px-6 md:px-16">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

      <!-- Left: Contact Us -->
      <div class="bg-gray-50 rounded-xl p-8">
        <h4 class="text-green-700 font-bold text-base mb-3">Contact us</h4>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          Our specialists are here to help with any query you have. We're happy to answer your questions while you continue to work towards your future dreams.
        </p>

        <div class="flex flex-col gap-4 text-sm text-gray-600">
          <!-- Email -->
          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 text-green-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p>info@deutschepartnersholding.com</p>
              <p>group@deutschepartnersholding.com</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 text-green-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p>+234 904 505 121</p>
              <p>+234 805 285 929</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Get In Touch Form -->
      <div class="bg-gray-50 rounded-xl p-8">
        <h4 class="text-gray-800 font-bold text-base mb-5">GET IN TOUCH</h4>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
          <input
            v-model="form.surname"
            type="text"
            placeholder="Surname"
            required
            class="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-green-600"
          />
          <input
            v-model="form.lastName"
            type="text"
            placeholder="Last Name"
            required
            class="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-green-600"
          />
          <input
            v-model="form.phoneNumber"
            type="tel"
            placeholder="Phone Number"
            required
            class="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-green-600"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            required
            class="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-green-600"
          />
          <textarea
            v-model="form.message"
            placeholder="Your request/ enquiry"
            rows="4"
            required
            class="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-green-600 resize-none"
          ></textarea>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-green-700 text-white py-2.5 rounded font-semibold text-sm hover:bg-green-800 transition disabled:opacity-50"
          >
            {{ loading ? 'Sending...' : 'Submit' }}
          </button>

          <p
            v-if="formMessage"
            :class="formSuccess ? 'text-green-600' : 'text-red-500'"
            class="text-xs text-center"
          >
            {{ formMessage }}
          </p>
        </form>
      </div>

    </div>
  </section>

  <!-- Google Map -->
  <section class="px-6 md:px-16 pb-16">
    <div class="max-w-5xl mx-auto rounded-xl overflow-hidden h-72 md:h-96 bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.921415799434!2d7.435175874153027!3d9.070923888333066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75f9765756eb%3A0xb8f3de8b1d3c7220!2sDeutsche%20Partners%20Holding!5e0!3m2!1sen!2sus!4v1773150704344!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>