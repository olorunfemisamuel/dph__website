<script setup lang="ts">

import { ref, computed } from 'vue'


//Navigastion to a section
const navigateToSection = (sectionId: string) => {
  closeAllMenus()
  setTimeout(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    // Auto-detect navbar height — works with any fixed/sticky nav
    const navbar = document.querySelector('nav') as HTMLElement | null
    const navbarHeight = navbar?.offsetHeight ?? 80 // fallback to 80px

    const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight

    window.scrollTo({ top, behavior: 'smooth' })
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
   | 'consultancy'
    | 'venture'
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
    hoveredMiddle.value = null
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
  hoveredMiddle.value = null
}




// ─── SERVICE LEFT PANEL IMAGES (imports) ───
import investmegaIMG from '@/assets/investmentbankingMegaIMGS/investmegaIMG.webp'
import assetMega from '@/assets/assetmanagementMega/assetMega.webp'
import Privateequity from '@/assets/Privateequity.webp'
import securitiesbannerimg from '@/assets/securitiesbannerimg.webp'
import Trusteesbannerimg from '@/assets/Trusteesbannerimg.webp'
import VENTURECAPITAL from '@/assets/consultancyventuretrusteesprivateequity/VENTURECAPITAL.webp'
import CONSULTANCYSERVICE from '@/assets/consultancyventuretrusteesprivateequity/CONSULTANCYSERVICE.webp'

// ─── INVESTMENT BANKING MIDDLE IMAGES ───
import coorporatemegamiddleMegaIMG from '@/assets/investmentbankingMegaIMGS/cooporatemegamiddleMegaIMG.webp'
import macquisitionmiddlemegaIMG from '@/assets/investmentbankingMegaIMGS/macquisitionmiddlemegaIMG.webp'
import financialadvisorymiddlemegaIMG from '@/assets/investmentbankingMegaIMGS/financialadvisorymiddlemegaIMG.webp'
import projectfinancemiddlemegaIMG from '@/assets/investmentbankingMegaIMGS/projectfinancemiddlemegaIMG.webp'
import equitydebtcapitalmiddleMegaIMG from '@/assets/investmentbankingMegaIMGS/equitydebtcapitalmiddleMegaIMG.webp'
import alternativeinvestmiddlemegaIMG from '@/assets/investmentbankingMegaIMGS/alternativeinvestmiddlemegaIMG.webp'

// ─── ASSET MANAGEMENT MIDDLE IMAGES ───
import assetMegamutual from '@/assets/assetmanagementMega/assetMegamutual.webp'
import assetMegaportfolio from '@/assets/assetmanagementMega/assetMegaportfolio.webp'
import assetMegahedge from '@/assets/assetmanagementMega/assetMegahedge.webp'
import assetMegaventure from '@/assets/assetmanagementMega/assetMegaventure.webp'
import assetMegainvestment from '@/assets/assetmanagementMega/assetMegainvestment.webp'


// ─── PRIVATE EQUITY MIDDLE IMAGES ───
import businesincubationinvestment from '@/assets/privateequityIMGS/businesincubationinvestment.webp'
import healthinvestment from '@/assets/privateequityIMGS/healthinvestment.webp'
import hospitalityandentatainment from '@/assets/privateequityIMGS/hospitalityandentatainment.webp'
import privateequityfunds from '@/assets/privateequityIMGS/privateequityfunds.webp'
import realestateinvestnent from '@/assets/privateequityIMGS/realestateinvestnent.webp'


// ─── SECURITY TRADING MANAGEMENT MIDDLE IMAGES ───
import commoditytrading from '@/assets/securitytradingIMGS/commoditytrading.webp'
import derivativeinstrment from '@/assets/securitytradingIMGS/derivativeinstrment.webp'
import equties from '@/assets/securitytradingIMGS/equties.webp'
import fixedincomesecurities from '@/assets/securitytradingIMGS/fixedincomesecurities.webp'
import foreignexchange from '@/assets/securitytradingIMGS/foreignexchange.webp'
import securitydealing from '@/assets/securitytradingIMGS/securitydealing.webp'
import stockbroking from '@/assets/securitytradingIMGS/stockbroking.webp'



// ─── TRUSTEES MIDDLE IMAGES ───
import bondtrustship from '@/assets/trustees/bondtrustship.webp'
import coporatetrust from '@/assets/trustees/coporatetrust.webp'
import estatcplanning from '@/assets/trustees/estatcplanning.webp'
import privatetrust from '@/assets/trustees/privatetrust.webp'
import securedandunsecurednoteissuances from '@/assets/trustees/securedandunsecurednoteissuances.webp'


// ─── VENTURE CAPITAL MIDDLE IMAGES ───
// import businesincubationinvestment from '@/assets/privateequityIMGS/businesincubationinvestment.jpg'
// import portfolioImg from '@/assets/assetmanagement.png'
// import hedgeFundImg from '@/assets/assetmanagement.png'
// import investAdvisoryImg from '@/assets/assetmanagement.png'


// ─── CONSULTANCY MIDDLE IMAGES ───
// import businesincubationinvestment from '@/assets/privateequityIMGS/businesincubationinvestment.jpg'
// import portfolioImg from '@/assets/assetmanagement.png'
// import hedgeFundImg from '@/assets/assetmanagement.png'
// import investAdvisoryImg from '@/assets/assetmanagement.png'




// ─── PRODUCT LEFT PANEL IMAGES (imports) ───
import mutualfunds from '@/assets/mutualfunds/mutualfunds.webp'
import exchangetraededfund from '@/assets/exchangetradedfund/exchangetraededfund.webp'
import ALTERNATEINVESTMENTSSCHEME from '@/assets/alternateinvestmentsscheme/ALTERNATEINVESTMENTSSCHEME.webp'


// ─── MUTUAL FUNDS MIDDLE IMAGES ───
import eqityfund from '@/assets/mutualfunds/eqityfund.webp'
import ethicalfund from '@/assets/mutualfunds/ethicalfund.webp'
import moneymarketfund from '@/assets/mutualfunds/moneymarketfund.webp'
import privatedfixedincomefund from '@/assets/mutualfunds/privatedfixedincomefund.webp'


// ─── EXCHANGE-TRADED FUNDS MIDDLE IMAGES ───
import AGROETF from '@/assets/exchangetradedfund/AGROETF.webp'
import GOLDETF from '@/assets/exchangetradedfund/GOLDETF.webp'


// ─── ALTERNATIVE INVESTMENT SCHEME MIDDLE IMAGES ───
import INSTITUTIOALASSETMANAGEN from '@/assets/alternateinvestmentsscheme/INSTITUTIOALASSETMANAGEN.webp'
import PRIVATEASSETMANAGEMENT  from '@/assets/alternateinvestmentsscheme/PRIVATEASSETMANAGEMENT.webp'






const hoveredMiddle = ref<string | null>(null)

// Right panel images per LEFT service
const serviceImages: Record<string, string> = {
  asset:       assetMega,
  investment:  investmegaIMG,
  private:     Privateequity,
  securities:  securitiesbannerimg,
  trustees:   Trusteesbannerimg,
  venture:     VENTURECAPITAL,
  consultancy: CONSULTANCYSERVICE,
}








const middleImages: Record<string, string> = {
  // Investment Banking
  'corporate-finance':       coorporatemegamiddleMegaIMG,
  'mergers-acquisitions':    macquisitionmiddlemegaIMG,
  'financial-advisory':      financialadvisorymiddlemegaIMG,
  'project-finance':         projectfinancemiddlemegaIMG,
  'equity-debt-capital':     equitydebtcapitalmiddleMegaIMG,
  'alternative-investments': alternativeinvestmiddlemegaIMG,

  // Asset Management
  'mutual-funds':            assetMegamutual,
  'portfolio-management':    assetMegaportfolio,
  'hedge-fund':              assetMegahedge,
  'investment-advisory':     assetMegainvestment,

    // Private Equity
  'business-incubation':     businesincubationinvestment,
  'health-investment':       healthinvestment,
  'hospitality-entertainment': hospitalityandentatainment,
  'private-equity-funds':    privateequityfunds,
  'real-estate-investment':  realestateinvestnent,

   // Security Trading
  'stock-broking':            stockbroking,
  'equties':                 equties,
  'derivatives-instrument':   derivativeinstrment,
  'commodities-trading':    commoditytrading,
  'security-dealing':         securitydealing,
  'fixed-income-securities': fixedincomesecurities,
  'foreign-exchange':          foreignexchange,


 // Trustees
  'secured-unsecured':           securedandunsecurednoteissuances ,
  'bond-trustship':                bondtrustship,
  'private-trust':              privatetrust,
  'corporate-trust':    coporatetrust,
  'estate-planning':     estatcplanning,


   // Venture Capital
  // 'mutual-funds':            mutualFundsImg,
  // 'portfolio-management':    portfolioImg,
  // 'hedge-fund':              hedgeFundImg,
  // 'investment-advisory':     investAdvisoryImg,


}


const productImages: Record<string, string> = {
  mutual:            mutualfunds,
 'exchange-traded': exchangetraededfund,  // key must match the ProductsSub type exactly
  alternative: ALTERNATEINVESTMENTSSCHEME,
}


const prodmiddleImages: Record<string, string> = {
  //Mutual Funds
  'money-market' :    moneymarketfund,
  'equity-fund' :     eqityfund,
  'private-fixed-income': privatedfixedincomefund,
  'ethical-funds':        ethicalfund,


  //Exchange Traded Funds
  'agro-etf' :    AGROETF,
  'gold-etf' :     GOLDETF,




  // Alternative Investment Schemes
  'private-wealth' :    INSTITUTIOALASSETMANAGEN,
  'instution-asset-management' :     PRIVATEASSETMANAGEMENT,

}




const prodhoveredMiddle = ref<string | null>(null)






// Computed: middle hover takes priority, else use left service/product image
const rightPanelImage = computed(() => {
  // Products mega menu
  if (activeMega.value === 'products') {
    if (prodhoveredMiddle.value && prodmiddleImages[prodhoveredMiddle.value]) {
      return prodmiddleImages[prodhoveredMiddle.value]
    }
    return productImages[activeProductsSub.value ?? 'mutual'] ?? '/navigation1.png'
  }

  // Services mega menu (default)
  if (hoveredMiddle.value && middleImages[hoveredMiddle.value]) {
    return middleImages[hoveredMiddle.value]
  }
  return serviceImages[activeServicesSub.value ?? 'asset'] ?? '/navigation1.png'
})



const hoveredResource = ref<string | null>(null)


// ─── RESOURCES IMAGES ───
// import resourcesMegagallery from '@/assets/resourcesMega/resourcesMegagallery.png'
import resourcesMegagallery from '@/assets/resourcesMega/resourcesMegagallery.webp'
import resourcesMegaresourcesMegacareer from '@/assets/resourcesMega/resourcesMegacareer.webp'
import resourcesMegapolicy from '@/assets/resourcesMega/resourcesMegapolicy.webp'
import resourcesMegainvestment from '@/assets/resourcesMega/resourcesMegainvestment.webp'



const resourceImages: Record<string, string> = {
  insights:  resourcesMegagallery,
  gallery:   resourcesMegagallery,
  career:     resourcesMegaresourcesMegacareer,
  policy:     resourcesMegapolicy,
  dashboard:  resourcesMegainvestment,
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


  <RouterLink to="/venture-capital" 
  class="block px-4 py-3 rounded-lg transition-colors"
  :class="activeServicesSub === 'venture' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'venture'" 
  @click="closeAllMenus">Venture Capital</RouterLink>


  <RouterLink to="/consultancy-service" 
  class="block px-4 py-3 rounded-lg transition-colors"
  :class="activeServicesSub === 'consultancy' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
  @mouseenter="activeServicesSub = 'consultancy'" 
  @click="closeAllMenus">Consultancy Service</RouterLink>
          </ul>
        </div>

        <!-- MIDDLE -->
        <div @mouseleave="hoveredMiddle = null">
          <p class="text-xs tracking-widest text-gray-400 mb-4">WHAT WE DO</p>

          <div v-if="activeServicesSub === 'asset'" class="space-y-4">
<RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('mutual-funds')"
>Mutual Funds </RouterLink>

<!-- <RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('wealth-management')"
>Wealth Management </RouterLink> -->


<RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter= "hoveredMiddle = 'portfolio-management'"
  @click="navigateToSection('wealth-management')"
>Portfolio Management</RouterLink>


<RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter= "hoveredMiddle = 'hedge-fund'"
  @click="navigateToSection('hedge-fund')"
>Hedge Fund</RouterLink>

           

           
           <RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter= "hoveredMiddle = 'investment-advisory'"
  @click="navigateToSection('venture-capital')"
>Venture Capital</RouterLink>





<RouterLink 
  to="/Asset-Management" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter= "hoveredMiddle = 'investment-advisory'"
  @click="navigateToSection('investment-advisory')"
>Investment Advisory</RouterLink>
           
           
          </div>

          <div v-if="activeServicesSub === 'investment'" class="space-y-4">
           <div v-if="activeServicesSub === 'investment'" class="space-y-4">
  <RouterLink to="/Investment-Banking" 
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'corporate-finance'"
    
    @click="navigateToSection('corporate-finance')"
  >Corporate Finance</RouterLink>

  <RouterLink to="/Investment-Banking"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'mergers-acquisitions'"
   
    @click="navigateToSection('mergersacquisitions')"
  >Mergers and Acquisitions</RouterLink>

  <RouterLink to="/Investment-Banking"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'financial-advisory'"
    
    @click="navigateToSection('financial-advisory')"
  >Financial Advisory</RouterLink>

  <RouterLink to="/Investment-Banking"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'project-finance'"
   
    @click="navigateToSection('project-finance')"
  >Project Finance</RouterLink>

  <RouterLink to="/Investment-Banking"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'equity-debt-capital'"
   
    @click="navigateToSection('equity-debt-capital-market')"
  >Equity and Debt Capital Market</RouterLink>

  <RouterLink to="/Investment-Banking"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'alternative-investments'"
   
    @click="navigateToSection('alternative-investments')"
  >Alternative Investments</RouterLink>
</div>
           
           
           

          </div>

          <div v-if="activeServicesSub === 'private'" class="space-y-4">
          <RouterLink to="/Private-Equity"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'private-equity-funds'"
    @click="closeAllMenus"
    >Private Equity Funds</RouterLink>


      <RouterLink to="/Private-Equity"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'business-incubation'"
    @click="closeAllMenus"
    >Business Incubation Investment</RouterLink>


      <RouterLink to="/Private-Equity"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'health-investment'"
    @click="closeAllMenus"
    >Health Investment</RouterLink>


    <RouterLink to="/Private-Equity"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'hospitality-entertainment'"
    @click="closeAllMenus"
    >Hospitality & Entertainment Investment</RouterLink>

    <RouterLink to="/Private-Equity"
    class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
    @mouseenter="hoveredMiddle = 'real-estate-investment'"
    @click="closeAllMenus"
    >Real Estate Investment Trust</RouterLink>
  
            <!-- <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Private Equity Funds</RouterLink> -->
            <!-- <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Business Incubation Investment</RouterLink> -->
            <!-- <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Health Investment</RouterLink> -->
            <!-- <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Hospitality & Entertainment Investment</RouterLink> -->
            <!-- <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Real Estate Investment Trust</RouterLink> -->
          </div>

          <div v-if="activeServicesSub === 'securities'" class="space-y-4">

            <RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'stock-broking'"
  @click="navigateToSection('stock-broking')"
> Stock Broking</RouterLink>


 <RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'equities'"
  @click="navigateToSection('equities')"

> Equities</RouterLink>


 <RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @click="navigateToSection('derivatives-instrument')"
> Derivatives Instrument</RouterLink>

 <RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'commodities-trading'"
  @click="navigateToSection('commodities-trading')"
> Commodites Trading</RouterLink>

<RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"

  @mouseenter="hoveredMiddle = 'security-dealing'"
  @click="navigateToSection('security-dealing')"
> Security Dealing</RouterLink>


<RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 

  @mouseenter="hoveredMiddle = 'fixed-income-securities'"
  @click="navigateToSection('fixed-income-securities')"
> Fixed Income Securities</RouterLink>

<RouterLink 
  to="/Securities-Trading" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'foreign-exchange'"
  @click="navigateToSection('foreign-exchange')"
> Foreign Exhchange </RouterLink>
            

            
<!----TRUSTEES SERVICES-->
            
            <!-- <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @click="closeAllMenus">Economic Profiling</RouterLink> -->
          </div>

          <div v-if="activeServicesSub === 'trustees'" class="space-y-4">
             <RouterLink 
  to="/Trustees" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
   @mouseenter="hoveredMiddle = 'secured-unsecured'"
  @click="navigateToSection('secured-unsecured')"
> Secured and unsecured note issuances</RouterLink>


         <RouterLink 
  to="/Trustees" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'bond-trustship'"
  @click="navigateToSection('bond-trustship')"
> Bond Trusteeship</RouterLink>

         <RouterLink 
  to="/Trustees" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'private-trust'"
  @click="navigateToSection('private-trust')"
> Private Trust</RouterLink>
            

     <RouterLink 
  to="/Trustees" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="hoveredMiddle = 'corporate-trust'"
  @click="navigateToSection('corporate-trust')"
> Corporate Trust</RouterLink>

<RouterLink 
  to="/Trustees" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  
  @mouseenter="hoveredMiddle = 'estate-planning'"
  @click="navigateToSection('estate-planning')"
> Estate Planning </RouterLink>
            
           
            
            
          </div>
        </div>

        <!-- RIGHT -->
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
         <img 
    :src="rightPanelImage" 
    alt="Our Businesses" 
    class="rounded-lg mb-4 w-full h-48 object-cover transition-all duration-300" 
  />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>

      </div>
      <!-- ========== END SERVICES ========== -->


      <!-- ========== PRODUCTS ========== -->
      <div v-if="activeMega === 'products'" class="grid grid-cols-[260px_1fr_360px] gap-8">

        <!-- LEFT -->
        <div class="border-r pr-4" @mouseenter="prodhoveredMiddle = null">
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
          <p class="text-xs tracking-widest text-black mb-4">WHAT WE DO</p>

          <div v-if="activeProductsSub === 'mutual'" class="space-y-4">
            <RouterLink 
  to="/mutual-funds" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
    @mouseenter = "prodhoveredMiddle = 'money-market'"
   
  @click="navigateToSection('money-market')"
>Deutsche Money Market Fund</RouterLink>


        <RouterLink 
  to="/mutual-funds" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter = "prodhoveredMiddle = 'equity-fund'"
  
  @click="navigateToSection('equity-fund')"
>Deutsche Equity Fund</RouterLink>
            

    <RouterLink 
  to="/mutual-funds" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter = "prodhoveredMiddle = 'private-fixed-income'"
  
  @click="navigateToSection('fixed-income')"
>Deutsche Private Fixed Income Fund</RouterLink>


    <RouterLink 
  to="/mutual-funds" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter = "prodhoveredMiddle = 'ethical-funds'"
 
  @click="navigateToSection('ethical-funds')"
>Deutsche Ethical Funds</RouterLink>


           
       
           
          </div>

          <div v-if="activeProductsSub === 'exchange-traded'" class="space-y-4">
                <RouterLink 
  to="/exchange-traded-funds" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="prodhoveredMiddle = 'agro-etf'"
  @click="navigateToSection('ethical-funds')"

>Deutsche Agro-ETF</RouterLink>

<RouterLink 
  to="/exchange-traded-funds" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter="prodhoveredMiddle = 'gold-etf'"
  @click="navigateToSection('gold-etf')"
>Deutsche Gold-ETF</RouterLink>
            
           
          </div>

          <div v-if="activeProductsSub === 'alternative'" class="space-y-4">

            <RouterLink 
  to="/alternative-investment" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter = "prodhoveredMiddle = 'private-wealth'"
  @click="navigateToSection('private-wealth-management')"
>Deutsche Private Wealth Management</RouterLink>


          <RouterLink 
  to="/alternative-investment" 
  class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" 
  @mouseenter = "prodhoveredMiddle = 'instution-asset-management'"
  @click="navigateToSection('asset-manange')"
>Deutsche Institutional Asset Management</RouterLink>

           
            
          </div>
        </div>

        <!-- RIGHT -->
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img :src="rightPanelImage"  alt="Our Businesses" class="rounded-lg mb-4" />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>

      </div>
      <!-- ========== END PRODUCTS ========== -->


      <!-- ========== RESOURCES ========== -->
     
<div v-if="activeMega === 'resources'" class="grid grid-cols-[1fr_360px] gap-8">

  <!-- LEFT -->
  <div class="space-y-2" @mouseleave="hoveredResource = null">
    <RouterLink to="/Insight"
      class="block px-4 py-3 hover:bg-green-50 rounded-lg"
      @mouseenter="hoveredResource = 'insights'"
    
      @click="closeAllMenus">Insights</RouterLink>

    <RouterLink to="/gallery"
      class="block px-4 py-3 hover:bg-green-50 rounded-lg"
      @mouseenter="hoveredResource = 'gallery'"
      
      @click="closeAllMenus">Gallery</RouterLink>

    <RouterLink to="/career"
      class="block px-4 py-3 hover:bg-green-50 rounded-lg"
      @mouseenter="hoveredResource = 'career'"
     
      @click="closeAllMenus">Career</RouterLink>

    <RouterLink to="/cookies-policy"
      class="block px-4 py-3 hover:bg-green-50 rounded-lg"
      @mouseenter="hoveredResource = 'policy'"
   
      @click="closeAllMenus">Policy</RouterLink>

    <RouterLink to="/investmentdashboard"
      class="block px-4 py-3 hover:bg-green-50 rounded-lg"
      @mouseenter="hoveredResource = 'dashboard'"

      @click="closeAllMenus">Investment Dashboard</RouterLink>
  </div>

  <!-- RIGHT -->
  <div class="hidden md:block">
    <img
      :src="hoveredResource ? resourceImages[hoveredResource] : '/navigation2.png'"
      alt="Resources"
      class="w-full h-full object-cover rounded-lg transition-all duration-300"
    />
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