<!-- frontend/src/views/ContactPage.vue -->

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-center mb-8">Contact Us</h1>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Send us a message</h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">
              {{ errors.name }}
            </p>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <!-- Subject -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <input
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.subject }"
            />
            <p v-if="errors.subject" class="mt-1 text-sm text-red-600">
              {{ errors.subject }}
            </p>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-600">
              {{ errors.message }}
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            <span v-if="loading">Sending...</span>
            <span v-else>Send Message</span>
          </button>
        </form>

        <!-- Success Message -->
        <div
          v-if="success"
          class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <p class="text-green-700">
            ✅ Thank you for contacting us! We'll get back to you soon.
          </p>
        </div>

        <!-- Error Message -->
        <div
          v-if="error"
          class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <p class="text-red-700">❌ {{ error }}</p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Contact Information</h2>

        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-900">Phone</p>
            <p class="text-sm text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-900">Email</p>
            <p class="text-sm text-gray-600">info@dphadvisory.com</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-900">Office</p>
            <p class="text-sm text-gray-600">
              123 Financial District<br />
              New York, NY 10004<br />
              United States
            </p>
          </div>
        </div>

        <!-- Business Hours -->
        <div class="mt-8">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Business Hours
          </h3>
          <div class="space-y-2 text-sm text-gray-600">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { submitContact } from '../services/contactservice'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

const validateForm = () => {
  let isValid = true

  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  loading.value = true
  success.value = false
  error.value = ''

  try {
    await submitContact(form)

    success.value = true

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    // Auto-hide success message
    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (err: any) {
    error.value =
      err?.response?.data?.error ||
      'Failed to send message. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>