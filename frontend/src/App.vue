<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import CookiesConsent from '@/components/CookiesConsent.vue'
import ChatBotWidget from '@/components/ChatBotWidget.vue'
import PrivacyModal from '@/components/PrivacyModal.vue'

const route = useRoute()
const showChatbot = computed(() => route.path !== '/chatbot')

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div id="app">
    <NavBar :toggleMenu="toggleMenu" />
    <main class="min-h-screen">
      <router-view />
    </main>
    <ChatBotWidget v-if="showChatbot" />
    <PrivacyModal />
    <CookiesConsent />
    <FooterSection />
  </div>
</template>