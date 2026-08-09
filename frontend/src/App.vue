<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'
import CookiesConsent from '@/components/CookiesConsent.vue'
import PrivacyModal from '@/components/PrivacyModal.vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div id="app">
    <NavBar />
    
      <Router-View />

    <PrivacyModal />
    <CookiesConsent />
    <FooterSection />
  </div>
</template>