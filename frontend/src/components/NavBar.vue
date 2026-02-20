<script setup lang="ts">

import { ref } from 'vue'


//Navigastion to a section
const navigateToSection = (sectionId: string) => {
  closeAllMenus()
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }, 200)
}



type AboutSub = 'who'| 'lead' | 'sub' | null
const activeAboutSub = ref<AboutSub>('who')

type WhoSub = 'mission' | 'vision' | 'corevalues' | null
const activeWhoSub = ref<WhoSub>(null)

const isMenuOpen = ref(false)
const aboutOpen = ref(false)
const businessOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

type MegaMenu = 'about' | 'services' | 'resources' | 'products' | null
const activeMega = ref<MegaMenu>(null)

type ServicesSub =
  | 'asset'
  | 'investment'
  | 'private'
  | 'securities'
  | 'trustees'
  | null

const activeServicesSub = ref<ServicesSub>('asset')

type ProductsSub = 
  | 'mutual'
  | 'exchange-traded'
  | 'alternative'
  | null

const activeProductsSub = ref<ProductsSub>('mutual')

let closeTimer: number | null = null

const openMega = (menu: MegaMenu) => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  activeMega.value = menu

  if (menu === 'about') activeAboutSub.value = 'who'
  if (menu === 'services') activeServicesSub.value = 'asset'
  if (menu === 'products') activeProductsSub.value = 'mutual'
}

const closeMega = () => {
  closeTimer = window.setTimeout(() => {
    activeMega.value = null
  }, 180)
}

const keepMegaOpen = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const closeAllMenus = () => {
  activeMega.value = null
  activeAboutSub.value = null
  activeServicesSub.value = null
  isMenuOpen.value = false
}

</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">

    <nav class="w-full flex items-center justify-between py-4 px-6 md:px-12">
      <img src="/dphLogo.jpg" alt="DPH Logo" class="h-10 w-auto"/>

      <ul class="hidden md:flex gap-8 text-black transition">

        <!-- HOME -->
        <li>
          <RouterLink
            to="/"
            class="relative inline-block
                   after:content-['']
                   after:absolute after:left-0 after:-bottom-1
                   after:h-0.5 after:w-0
                   after:bg-green-700
                   after:transition-all after:duration-300
                   hover:after:w-full font-semibold"
          >
            Home
          </RouterLink>
        </li>

        <!-- ABOUT US -->
        <li class="relative" @mouseenter="openMega('about')" @mouseleave="closeMega">
          <span class="cursor-pointer font-semibold">About Us</span>
        </li>

        <!-- OUR SERVICES -->
        <li
          class="relative
                 after:content-['']
                 after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:w-0
                 after:bg-green-700
                 after:transition-all after:duration-300
                 hover:after:w-full font-semibold"
          @mouseenter="openMega('services')"
          @mouseleave="closeMega"
        >
          <span class="cursor-pointer">Our Services</span>
        </li>

        <!-- OUR PRODUCTS -->
        <li
          class="relative
                 after:content-['']
                 after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:w-0
                 after:bg-green-700
                 after:transition-all after:duration-300
                 hover:after:w-full font-semibold"
          @mouseenter="openMega('products')"
          @mouseleave="closeMega"
        >
          <span class="cursor-pointer">Our Products</span>
        </li>

        <!-- RESOURCES -->
        <li
          class="relative
                 after:content-['']
                 after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:w-0
                 after:bg-green-700
                 after:transition-all after:duration-300
                 hover:after:w-full font-semibold"
          @mouseenter="openMega('resources')"
          @mouseleave="closeMega"
        >
          <span class="cursor-pointer">Resources</span>
        </li>

        <!-- CONTACT -->
        <li
          class="relative inline-block group
                 after:content-['']
                 after:absolute after:left-0 after:-bottom-1
                 after:h-0.5 after:w-0
                 after:bg-green-700
                 after:transition-all after:duration-300
                 hover:after:w-full font-semibold"
        >
          <RouterLink to="/contact" class="cursor-pointer">Contact</RouterLink>
        </li>

      </ul>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="md:hidden text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Invest Now -->
      <RouterLink to="/invest-now" class="hidden md:inline-block ml-2">
        <button class="px-4 py-2 rounded-xl bg-green-700 hover:bg-green-800 text-white transition">
          Invest Now
        </button>
      </RouterLink>
    </nav>

    <!-- =============================================
         UNIFIED MEGA MENU — all 4 menus same width & position
         ============================================= -->
    <div
      v-if="activeMega"
      class="fixed left-1/2 -translate-x-1/2 top-[80px]
             w-[1100px] bg-white rounded-2xl shadow-xl p-8 z-50"
      @mouseenter="keepMegaOpen"
      @mouseleave="closeMega"
    >

      <!-- ========== ABOUT ========== -->
      <div v-if="activeMega === 'about'" class="grid grid-cols-[260px_1fr_360px] gap-8">

        <!-- LEFT -->
        <div class="border-r pr-4">
          <p class="text-sm tracking-widest text-gray-400 mb-4">About Us</p>
          <ul class="space-y-2">
          

          <RouterLink to="/about" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeAboutSub === 'who' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeAboutSub = 'who'" 
  @click="closeAllMenus">Who We Are</RouterLink>


            <RouterLink
              to="/MDmessage"
              class="block px-4 py-3 rounded-lg hover:bg-green-100"
              @click="closeAllMenus"
            >
              MD's Message
            </RouterLink>
           
            <RouterLink to="/Leadership" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeAboutSub === 'lead' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeAboutSub = 'lead'" 
  @click="closeAllMenus">Leadership</RouterLink>
  
       

                      <RouterLink to="/subsidiaries" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeAboutSub === 'sub' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeAboutSub = 'sub'" 
  @click="closeAllMenus">Subsidiaries</RouterLink>
          </ul>
        </div>

        <!-- MIDDLE -->
        <div>
          <p class="text-xs tracking-widest text-gray-700 mb-4">OVERVIEW</p>

          <!-- Who We Are -->
          <div v-if="activeAboutSub === 'who'" class="space-y-4">
            <div @mouseenter="activeWhoSub = 'mission'" @mouseleave="activeWhoSub = null">
                      <RouterLink 
  to="/about" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('mission')"
> Mission & Vision</RouterLink>

              
              <div v-show="activeWhoSub === 'mission'" class="mt-2">
                <img src="/mission.jpg" alt="Mission" class="rounded-lg w-full h-2/5 object-cover" />
              </div>
            </div>
        
            <div @mouseenter="activeWhoSub = 'corevalues'" @mouseleave="activeWhoSub = null">
                                    <RouterLink 
  to="/about" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('core-values')"
> Core Values</RouterLink>

              <div v-show="activeWhoSub === 'corevalues'" class="mt-2">
                <img src="/corevalues.png" alt="Core Values" class="rounded-lg w-full h-2/5 object-cover" />
              </div>
            </div>
          </div>

          <!-- Leadership -->
          <div v-if="activeAboutSub === 'lead'" class="space-y-8">

        
            <RouterLink to="/Leadership" class="block font-medium hover:text-green-700" @click="closeAllMenus">Board Of Directors</RouterLink>
            <RouterLink to="/Leadership" class="block font-medium hover:text-green-700" @click="closeAllMenus">Team Members</RouterLink>
          </div>

          <!-- Subsidiaries -->
          <div v-if="activeAboutSub === 'sub'" class="space-y-8">
            <RouterLink 
  to="/subsidiaries" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('asset-managment-limited')"
> Deutsche Asset Management Limited</RouterLink>

      <RouterLink 
  to="/subsidiaries" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('capital-limited')"
> Deutsche Capital Limited</RouterLink>
           
          
              <RouterLink 
  to="/subsidiaries" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('private-limited')"
> Deutsche Private Equity Limited</RouterLink>

       <RouterLink 
  to="/subsidiaries" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('securities-limited')"
> Deutsche Security Limited</RouterLink>
           

           
          </div>
        </div>

        <!-- RIGHT -->
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img v-if="activeAboutSub === 'who'" src="/navigation1.png" alt="Who We Are" class="rounded-lg mb-4" />
          <img v-else-if="activeAboutSub === 'lead'" src="/leadership.png" alt="Leadership" class="rounded-lg mb-4" />
          <img v-else-if="activeAboutSub === 'sub'" src="@/assets/MDimg.png" alt="Subsidiaries" class="rounded-lg mb-4 w-full" />
          <img v-else src="/navigation1.png" alt="Our Businesses" class="rounded-lg mb-4" />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">Business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>

      </div>
      <!-- ========== END ABOUT ========== -->


      <!-- ========== SERVICES ========== -->
      <div v-if="activeMega === 'services'" class="grid grid-cols-[260px_1fr_360px] gap-8">

        <!-- LEFT -->
        <div class="border-r pr-4">
          <p class="text-xs tracking-widest text-gray-400 mb-4">OUR SERVICES</p>
          <ul class="space-y-2">
            <RouterLink to="/Investment-Banking" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeServicesSub === 'investment' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'investment'" 
  @click="closeAllMenus">Investment Banking</RouterLink>

<RouterLink to="/Asset-Management" 
  class="block px-4 py-3 rounded-lg transition-colors"
  :class="activeServicesSub === 'asset' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'asset'" 
  @click="closeAllMenus">Asset Management</RouterLink>

<RouterLink to="/Private-Equity" 
  class="block px-4 py-3 rounded-lg transition-colors"
  :class="activeServicesSub === 'private' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'private'" 
  @click="closeAllMenus">Private Equity</RouterLink>

<RouterLink to="/Securities-Trading" 
  class="block px-4 py-3 rounded-lg transition-colors"
  :class="activeServicesSub === 'securities' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'securities'" 
  @click="closeAllMenus">Securities Trading</RouterLink>

<RouterLink to="/Trustees" 
  class="block px-4 py-3 rounded-lg transition-colors"
  :class="activeServicesSub === 'trustees' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'trustees'" 
  @click="closeAllMenus">Trustees</RouterLink>
          </ul>
        </div>

        <!-- MIDDLE -->
        <div>
          <p class="text-xs tracking-widest text-gray-400 mb-4">WHAT WE DO</p>

          <div v-if="activeServicesSub === 'asset'" class="space-y-4">
<RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('wealth-management')"
>Private Wealth Management</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Fund Management and Advisory</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Collective Investment Scheme</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Special Investment Scheme</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Portfolio Management</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'investment'" class="space-y-4">
            <RouterLink 
  to="/Investment-Banking" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('corporate-finance')"
>Corporate Finance</RouterLink>

           <RouterLink 
  to="/Investment-Banking" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('mergersacquisitions')"
>Mergers and Acquisitions</RouterLink>


<RouterLink 
  to="/Investment-Banking" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('financial-advisory')"
>Financial Advisory</RouterLink>



<RouterLink 
  to="/Investment-Banking" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('project-finance')"
> Project Finance</RouterLink>
            
           
           
           

          </div>

          <div v-if="activeServicesSub === 'private'" class="space-y-4">
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Private Equity Funds</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Business Incubation Investment</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Health Investment</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Hospitality & Entertainment Investment</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Real Estate Investment Trust</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'securities'" class="space-y-4">
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Equity Trading</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Fixed Income Trading</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Proprietary Trading</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Security Analysis</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Economic Profiling</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'trustees'" class="space-y-4">
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Secured and unsecured note issuances</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Securitization and structured financings</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">EMTN Programmes</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Retail bonds</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">High Yield and emerging markets bonds</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Convertible and Equity linked bonds</RouterLink>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img src="/navigation1.png" alt="Our Businesses" class="rounded-lg mb-4" />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>

      </div>
      <!-- ========== END SERVICES ========== -->


      <!-- ========== PRODUCTS ========== -->
      <div v-if="activeMega === 'products'" class="grid grid-cols-[260px_1fr_360px] gap-8">

        <!-- LEFT -->
        <div class="border-r pr-4">
          <p class="text-xs tracking-widest text-gray-400 mb-4">OUR PRODUCTS</p>
          <ul class="space-y-2">

            <RouterLink to="/mutual-funds" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeProductsSub === 'mutual' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeProductsSub = 'mutual'" 
  @click="closeAllMenus">Mutual Funds</RouterLink>

          <RouterLink to="/Exchange-Traded-Funds" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeProductsSub === 'exchange-traded' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeProductsSub = 'exchange-traded'" 
  @click="closeAllMenus">Exchange Traded Funds</RouterLink>


        <RouterLink to="/alternative-investment" 
  class="block px-4 py-3 rounded-lg font-medium transition-colors"
  :class="activeProductsSub === 'alternative' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeProductsSub = 'alternative'" 
  @click="closeAllMenus">Alternative Investments Scheme</RouterLink>


          </ul>
        </div>

        <!-- MIDDLE -->
        <div>
          <p class="text-xs tracking-widest text-gray-400 mb-4">WHAT WE DO</p>

          <div v-if="activeProductsSub === 'mutual'" class="space-y-4">
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Money Market Fund</RouterLink>
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Equity Fund</RouterLink>
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Private Fixed Income Fund</RouterLink>
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Ethical Funds</RouterLink>
          </div>

          <div v-if="activeProductsSub === 'exchange-traded'" class="space-y-4">
            <RouterLink to="/exchange-traded-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Agro-ETF</RouterLink>
            <RouterLink to="/exchange-traded-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Gold-ETF</RouterLink>
          </div>

          <div v-if="activeProductsSub === 'alternative'" class="space-y-4">
            <RouterLink to="/alternative-investment" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Private Wealth Management</RouterLink>
            <RouterLink to="/alternative-investment" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Deutsche Institutional Asset Management</RouterLink>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img src="/navigation1.png" alt="Our Businesses" class="rounded-lg mb-4" />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>

      </div>
      <!-- ========== END PRODUCTS ========== -->


      <!-- ========== RESOURCES ========== -->
      <div v-if="activeMega === 'resources'" class="grid grid-cols-[1fr_360px] gap-8">

        <!-- LEFT -->
        <div class="space-y-2">
          <RouterLink to="/Insight" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @click="closeAllMenus">Insights</RouterLink>
          <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @click="closeAllMenus">Gallery</RouterLink>
          <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @click="closeAllMenus">Career</RouterLink>
          <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @click="closeAllMenus">Policy</RouterLink>
          <RouterLink to="/investmentdashboard" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @click="closeAllMenus">Investment Dashboard</RouterLink>
        </div>

        <!-- RIGHT -->
        <div class="hidden md:block">
          <img src="/navigation2.png" alt="Our Businesses" class="w-full h-full object-cover rounded-lg" />
        </div>

      </div>
      <!-- ========== END RESOURCES ========== -->

    </div>
    <!-- END UNIFIED MEGA MENU -->


    <!-- ================= MOBILE MENU ================= -->
    <div v-show="isMenuOpen" class="md:hidden bg-white shadow-lg border-t px-6 py-6 space-y-6">

      <RouterLink to="/" @click="toggleMenu" class="block font-medium">Home</RouterLink>

      <!-- About -->
      <div>
        <button @click="aboutOpen = !aboutOpen" class="w-full flex items-center justify-between font-medium">
          About Us
          <span class="transition-transform" :class="aboutOpen ? 'rotate-180' : ''">▼</span>
        </button>
        <div v-show="aboutOpen" class="pl-4 mt-3 space-y-2 text-sm">
          <RouterLink to="/about" @click="toggleMenu" class="block">Who we are</RouterLink>
          <RouterLink to="/MDmessage" @click="toggleMenu" class="block">MD's Message</RouterLink>
          <RouterLink to="/Leadership" @click="toggleMenu" class="block">Leadership</RouterLink>
        </div>
      </div>

      <!-- Our Businesses -->
      <div>
        <button @click="businessOpen = !businessOpen" class="w-full flex items-center justify-between font-medium">
          Our Businesses
          <span class="transition-transform" :class="businessOpen ? 'rotate-180' : ''">▼</span>
        </button>
        <div v-show="businessOpen" class="pl-4 mt-3 space-y-2 text-sm">
          <RouterLink to="/Asset-Management" @click="toggleMenu" class="block">Asset Management</RouterLink>
          <RouterLink to="/Investment-Banking" @click="toggleMenu" class="block">Investment Banking</RouterLink>
          <RouterLink to="/Private-Equity" @click="toggleMenu" class="block">Private Equity</RouterLink>
          <RouterLink to="/Securities-Trading" @click="toggleMenu" class="block">Securities Trading</RouterLink>
          <RouterLink to="/Trustees" @click="toggleMenu" class="block">Trustees</RouterLink>
        </div>
      </div>

      <div>
        <RouterLink to="/Insight" @click="toggleMenu" class="block font-medium mb-2">Insights</RouterLink>
      </div>

      <RouterLink to="/career" @click="toggleMenu" class="block font-medium">Career</RouterLink>
      <RouterLink to="/contact" @click="toggleMenu" class="block font-medium">Contact</RouterLink>

      <RouterLink to="/invest-now" @click="toggleMenu">
        <button class="w-full mt-4 bg-green-700 text-white py-3 rounded-xl">Invest Now</button>
      </RouterLink>

    </div>

  </header>
</template>