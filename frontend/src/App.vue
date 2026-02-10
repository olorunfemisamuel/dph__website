<script setup lang="ts">
import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import ChatBotWidget from '@/components/ChatBotWidget.vue'
import PrivacyModal from '@/components/PrivacyModal.vue'

import CookiesConsent from '@/components/CookiesConsent.vue'

import FooterSection from '@/components/FooterSection.vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
 
 <NavBar :toggleMenu="toggleMenu" />

 
   
  <router-view />

  <ChatBotWidget />

  <PrivacyModal />

  <!-- <CookiesConsent /> -->
   <CookiesConsent />

   <!---Footer Section-->
  <FooterSection />



   
   

 

</template>


