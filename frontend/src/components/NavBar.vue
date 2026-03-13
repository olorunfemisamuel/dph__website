<script setup lang="ts">

import { ref, computed } from 'vue'


//Navigation to a section
const navigateToSection = (sectionId: string) => {
  closeAllMenus()
  setTimeout(() => {
    const section = document.getElementById(sectionId)
    if (!section) return
    const navbar = document.querySelector('nav') as HTMLElement | null
    const navbarHeight = navbar?.offsetHeight ?? 80
    const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }, 200)
}


type AboutSub = 'who' | 'lead' | 'sub' | 'md' | null
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

const activeServicesSub = ref<ServicesSub>('investment')

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
  if (menu === 'services') activeServicesSub.value = 'investment'
  if (menu === 'products') activeProductsSub.value = 'mutual'
}

const closeMega = () => {
  closeTimer = window.setTimeout(() => {
    activeMega.value = null
    hoveredMiddle.value = null
    hoveredAbout.value = null
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
  hoveredAbout.value = null
}


// ─── ABOUT US IMAGES ───
import missionvisionSide from '@/assets/aboutusmegaIMG/missionvisionmegaIMG/missionvisionsideIMG.jpg'
import corevaluesSide from '@/assets/aboutusmegaIMG/missionvisionmegaIMG/corevaluessideIMG.jpg'
import boardDirectorSide from '@/assets/aboutusmegaIMG/leadershipmegaIMG/boarddirectorsideIMGmega.jpg'
import teamSide from '@/assets/aboutusmegaIMG/leadershipmegaIMG/teamsideIMGmega.jpg'
import subsidiaryAsset from '@/assets/aboutusmegaIMG/submegaIMG/subsidiaryassetsideIMGmega.png'
import subsidiaryCapital from '@/assets/aboutusmegaIMG/submegaIMG/subsidiarycapitalsideIMGmega.png'
import subsidiaryPrivate from '@/assets/aboutusmegaIMG/submegaIMG/subsidiaryprivateequityIMGmega.png'
import subsidiarySecurity from '@/assets/aboutusmegaIMG/submegaIMG/subsidiarysecuritylimitedIMGmega.png'

// ─── SERVICE LEFT PANEL IMAGES ───
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

// ─── SECURITY TRADING MIDDLE IMAGES ───
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

// ─── PRODUCT LEFT PANEL IMAGES ───
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
import PRIVATEASSETMANAGEMENT from '@/assets/alternateinvestmentsscheme/PRIVATEASSETMANAGEMENT.webp'

// ─── RESOURCES IMAGES ───
import resourcesMegagallery from '@/assets/resourcesMega/resourcesMegagallery.webp'
import resourcesMegaresourcesMegacareer from '@/assets/resourcesMega/resourcesMegacareer.webp'
import resourcesMegapolicy from '@/assets/resourcesMega/resourcesMegapolicy.webp'
import resourcesMegainvestment from '@/assets/resourcesMega/resourcesMegainvestment.webp'


// ─── ABOUT HOVERED MIDDLE ref ───
const hoveredAbout = ref<string | null>(null)

// About middle images map
const aboutMiddleImages: Record<string, string> = {
  // Who We Are
  'mission':      missionvisionSide,
  'corevalues':   corevaluesSide,
  // Leadership
  'board':        boardDirectorSide,
  'team':         teamSide,
  // Subsidiaries
  'sub-asset':    subsidiaryAsset,
  'sub-capital':  subsidiaryCapital,
  'sub-private':  subsidiaryPrivate,
  'sub-security': subsidiarySecurity,
}

// Default right panel per about sub (no hover)
const aboutDefaultImages: Record<string, string> = {
  who:  missionvisionSide,
  lead: boardDirectorSide,
  sub:  subsidiaryAsset,
}

// Computed right panel image for About
const aboutRightImage = computed(() => {
  if (hoveredAbout.value && aboutMiddleImages[hoveredAbout.value]) {
    return aboutMiddleImages[hoveredAbout.value]
  }
  return aboutDefaultImages[activeAboutSub.value ?? 'who'] ?? '/navigation1.png'
})


const hoveredMiddle = ref<string | null>(null)

const serviceImages: Record<string, string> = {
  asset:       assetMega,
  investment:  investmegaIMG,
  private:     Privateequity,
  securities:  securitiesbannerimg,
  trustees:    Trusteesbannerimg,
  venture:     VENTURECAPITAL,
  consultancy: CONSULTANCYSERVICE,
}

const middleImages: Record<string, string> = {
  'corporate-finance':         coorporatemegamiddleMegaIMG,
  'mergers-acquisitions':      macquisitionmiddlemegaIMG,
  'financial-advisory':        financialadvisorymiddlemegaIMG,
  'project-finance':           projectfinancemiddlemegaIMG,
  'equity-debt-capital':       equitydebtcapitalmiddleMegaIMG,
  'alternative-investments':   alternativeinvestmiddlemegaIMG,
  'mutual-funds':              assetMegamutual,
  'portfolio-management':      assetMegaportfolio,
  'hedge-fund':                assetMegahedge,
  'investment-advisory':       assetMegainvestment,
  'venture-capital':           assetMegaventure,
  'business-incubation':       businesincubationinvestment,
  'health-investment':         healthinvestment,
  'hospitality-entertainment': hospitalityandentatainment,
  'private-equity-funds':      privateequityfunds,
  'real-estate-investment':    realestateinvestnent,
  'stock-broking':             stockbroking,
  'equties':                   equties,
  'derivatives-instrument':    derivativeinstrment,
  'commodities-trading':       commoditytrading,
  'security-dealing':          securitydealing,
  'fixed-income-securities':   fixedincomesecurities,
  'foreign-exchange':          foreignexchange,
  'secured-unsecured':         securedandunsecurednoteissuances,
  'bond-trustship':            bondtrustship,
  'private-trust':             privatetrust,
  'corporate-trust':           coporatetrust,
  'estate-planning':           estatcplanning,
}

const productImages: Record<string, string> = {
  mutual:            mutualfunds,
  'exchange-traded': exchangetraededfund,
  alternative:       ALTERNATEINVESTMENTSSCHEME,
}

const prodmiddleImages: Record<string, string> = {
  'money-market':               moneymarketfund,
  'equity-fund':                eqityfund,
  'private-fixed-income':       privatedfixedincomefund,
  'ethical-funds':              ethicalfund,
  'agro-etf':                   AGROETF,
  'gold-etf':                   GOLDETF,
  'private-wealth':             INSTITUTIOALASSETMANAGEN,
  'instution-asset-management': PRIVATEASSETMANAGEMENT,
}

const prodhoveredMiddle = ref<string | null>(null)

const rightPanelImage = computed(() => {
  if (activeMega.value === 'products') {
    if (prodhoveredMiddle.value && prodmiddleImages[prodhoveredMiddle.value]) {
      return prodmiddleImages[prodhoveredMiddle.value]
    }
    return productImages[activeProductsSub.value ?? 'mutual'] ?? '/navigation1.png'
  }
  if (hoveredMiddle.value && middleImages[hoveredMiddle.value]) {
    return middleImages[hoveredMiddle.value]
  }
  return serviceImages[activeServicesSub.value ?? 'asset'] ?? '/navigation1.png'
})

const hoveredResource = ref<string | null>(null)

const resourceImages: Record<string, string> = {
  insights:  resourcesMegagallery,
  gallery:   resourcesMegagallery,
  career:    resourcesMegaresourcesMegacareer,
  policy:    resourcesMegapolicy,
  dashboard: resourcesMegainvestment,
}

</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">

    <nav class="w-full flex items-center justify-between py-4 px-6 md:px-12">
      <RouterLink to="/">
        <img src="/dphLogo.jpg" alt="DPH Logo" class="h-10 w-auto"/>
      </RouterLink>

      <ul class="hidden md:flex gap-8 text-black transition">
        <li>
          <RouterLink to="/" class="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full font-semibold">
            Home
          </RouterLink>
        </li>
        <li class="relative" @mouseenter="openMega('about')" @mouseleave="closeMega">
          <span class="cursor-pointer font-semibold">About Us</span>
        </li>
        <li class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full font-semibold" @mouseenter="openMega('services')" @mouseleave="closeMega">
          <span class="cursor-pointer">Our Services</span>
        </li>
        <li class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full font-semibold" @mouseenter="openMega('products')" @mouseleave="closeMega">
          <span class="cursor-pointer">Our Products</span>
        </li>
        <li class="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full font-semibold" @mouseenter="openMega('resources')" @mouseleave="closeMega">
          <span class="cursor-pointer">Resources</span>
        </li>
        <li class="relative inline-block group after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full font-semibold">
          <RouterLink to="/contact" class="cursor-pointer">Contact</RouterLink>
        </li>
      </ul>

      <button @click="toggleMenu" class="md:hidden text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <RouterLink to="/invest-now" class="hidden md:inline-block ml-2">
        <button class="px-4 py-2 rounded-xl bg-green-700 hover:bg-green-800 text-white transition">Invest Now</button>
      </RouterLink>
    </nav>

    <!-- UNIFIED MEGA MENU -->
    <div
      v-if="activeMega"
      class="fixed left-1/2 -translate-x-1/2 top-[80px] w-[1100px] bg-white rounded-2xl shadow-xl p-8 z-50"
      @mouseenter="keepMegaOpen"
      @mouseleave="closeMega"
    >

      <!-- ========== ABOUT ========== -->
      <div v-if="activeMega === 'about'" class="grid grid-cols-[260px_1fr_360px] gap-8">

        <!-- LEFT -->
        <div class="border-r pr-4">
          <p class="text-sm font-black tracking-widest text-gray-700 mb-4">About Us</p>
          <ul class="space-y-2">
            <RouterLink to="/about"
              class="block px-4 py-3 rounded-lg font-medium transition-colors"
              :class="activeAboutSub === 'who' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
              @mouseenter="activeAboutSub = 'who'; hoveredAbout = null"
              @click="closeAllMenus">Who We Are</RouterLink>

            <RouterLink to="/MDmessage"
              class="block px-4 py-3 rounded-lg font-medium transition-colors"
                :class="activeAboutSub === 'md' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
                 @mouseenter="activeAboutSub = 'md'"
              @click="closeAllMenus">MD's Message</RouterLink>

            <RouterLink to="/Leadership"
              class="block px-4 py-3 rounded-lg font-medium transition-colors"
              :class="activeAboutSub === 'lead' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
              @mouseenter="activeAboutSub = 'lead'; hoveredAbout = null"
              @click="closeAllMenus">Leadership</RouterLink>

            <RouterLink to="/subsidiaries"
              class="block px-4 py-3 rounded-lg font-medium transition-colors"
              :class="activeAboutSub === 'sub' ? 'bg-green-700 text-white' : 'hover:bg-green-100'"
              @mouseenter="activeAboutSub = 'sub'; hoveredAbout = null"
              @click="closeAllMenus">Subsidiaries</RouterLink>
          </ul>
        </div>

        <!-- MIDDLE -->
        <div @mouseleave="hoveredAbout = null">
          <p class="text-sm font-black tracking-widest text-gray-700 mb-4">OVERVIEW</p>

          <!-- Who We Are -->
          <div v-if="activeAboutSub === 'who'" class="space-y-2">
            <RouterLink
              to="/about"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'mission'"
              @click="navigateToSection('mission')"
            >Mission & Vision</RouterLink>

            <RouterLink
              to="/about"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'corevalues'"
              @click="navigateToSection('core-values')"
            >Core Values</RouterLink>
          </div>

          <!-- Leadership -->
          <div v-if="activeAboutSub === 'lead'" class="space-y-2">
            <RouterLink
              to="/Leadership"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'board'"
              @click="closeAllMenus"
            >Board Of Directors</RouterLink>

            <RouterLink
              to="/Leadership"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'team'"
              @click="closeAllMenus"
            >Team Members</RouterLink>
          </div>

          <!-- Subsidiaries -->
          <div v-if="activeAboutSub === 'sub'" class="space-y-2">
            <RouterLink
              to="/subsidiaries"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'sub-asset'"
              @click="navigateToSection('asset-managment-limited')"
            >Deutsche Asset Management Limited</RouterLink>

            <RouterLink
              to="/subsidiaries"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'sub-capital'"
              @click="navigateToSection('capital-limited')"
            >Deutsche Capital Limited</RouterLink>

            <RouterLink
              to="/subsidiaries"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'sub-private'"
              @click="navigateToSection('private-limited')"
            >Deutsche Private Equity Limited</RouterLink>

            <RouterLink
              to="/subsidiaries"
              class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100"
              @mouseenter="hoveredAbout = 'sub-security'"
              @click="navigateToSection('securities-limited')"
            >Deutsche Security Limited</RouterLink>
          </div>
        </div>

        <!-- RIGHT — reactive about image -->
        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img
            :src="aboutRightImage"
            alt="About"
            class="rounded-lg mb-4 w-full h-48 object-cover transition-all duration-300"
          />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">Business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>

      </div>
      <!-- ========== END ABOUT ========== -->


      <!-- ========== SERVICES ========== -->
      <div v-if="activeMega === 'services'" class="grid grid-cols-[260px_1fr_360px] gap-8">
        <div class="border-r pr-4">
          <p class="text-sm font-black tracking-widest text-gray-700 mb-4">OUR SERVICES</p>
          <ul class="space-y-2">
            <RouterLink to="/Investment-Banking" class="block px-4 py-3 rounded-lg font-medium transition-colors" :class="activeServicesSub === 'investment' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'investment'" @click="closeAllMenus">Investment Banking</RouterLink>
            <RouterLink to="/Asset-Management" class="block px-4 py-3 rounded-lg transition-colors" :class="activeServicesSub === 'asset' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'asset'" @click="closeAllMenus">Asset Management</RouterLink>
            <RouterLink to="/Private-Equity" class="block px-4 py-3 rounded-lg transition-colors" :class="activeServicesSub === 'private' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'private'" @click="closeAllMenus">Private Equity</RouterLink>
            <RouterLink to="/Securities-Trading" class="block px-4 py-3 rounded-lg transition-colors" :class="activeServicesSub === 'securities' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'securities'" @click="closeAllMenus">Securities Trading</RouterLink>
            <RouterLink to="/Trustees" class="block px-4 py-3 rounded-lg transition-colors" :class="activeServicesSub === 'trustees' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'trustees'" @click="closeAllMenus">Trustees</RouterLink>
            <RouterLink to="/venture-capital" class="block px-4 py-3 rounded-lg transition-colors" :class="activeServicesSub === 'venture' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'venture'" @click="closeAllMenus">Venture Capital</RouterLink>
            <RouterLink to="/consultancy-service" class="block px-4 py-3 rounded-lg transition-colors" :class="activeServicesSub === 'consultancy' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeServicesSub = 'consultancy'" @click="closeAllMenus">Consultancy Service</RouterLink>
          </ul>
        </div>

        <div @mouseleave="hoveredMiddle = null">
          <p class="text-sm font-black tracking-widest text-gray-700 mb-4">WHAT WE DO</p>

          <div v-if="activeServicesSub === 'asset'" class="space-y-2">
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'mutual-funds'" @click="navigateToSection('mutual-funds')">Mutual Funds</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'portfolio-management'" @click="navigateToSection('portfolio-management')">Portfolio Management</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'hedge-fund'" @click="navigateToSection('hedge-fund')">Hedge Fund</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'venture-capital'" @click="navigateToSection('venture-capital')">Venture Capital</RouterLink>
            <RouterLink to="/Asset-Management" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'investment-advisory'" @click="navigateToSection('investment-advisory')">Investment Advisory</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'investment'" class="space-y-2">
            <RouterLink to="/Investment-Banking" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'corporate-finance'" @click="navigateToSection('corporate-finance')">Corporate Finance</RouterLink>
            <RouterLink to="/Investment-Banking" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'mergers-acquisitions'" @click="navigateToSection('mergersacquisitions')">Mergers and Acquisitions</RouterLink>
            <RouterLink to="/Investment-Banking" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'financial-advisory'" @click="navigateToSection('financial-advisory')">Financial Advisory</RouterLink>
            <RouterLink to="/Investment-Banking" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'project-finance'" @click="navigateToSection('project-finance')">Project Finance</RouterLink>
            <RouterLink to="/Investment-Banking" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'equity-debt-capital'" @click="navigateToSection('equity-debt-capital-market')">Equity and Debt Capital Market</RouterLink>
            <RouterLink to="/Investment-Banking" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'alternative-investments'" @click="navigateToSection('alternative-investments')">Alternative Investments</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'private'" class="space-y-2">
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'private-equity-funds'" @click="closeAllMenus">Private Equity Funds</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'business-incubation'" @click="closeAllMenus">Business Incubation Investment</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'health-investment'" @click="closeAllMenus">Health Investment</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'hospitality-entertainment'" @click="closeAllMenus">Hospitality & Entertainment Investment</RouterLink>
            <RouterLink to="/Private-Equity" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'real-estate-investment'" @click="closeAllMenus">Real Estate Investment Trust</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'securities'" class="space-y-2">
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'stock-broking'" @click="navigateToSection('stock-broking')">Stock Broking</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'equties'" @click="navigateToSection('equities')">Equities</RouterLink>
           <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'derivatives-instrument'" @click="navigateToSection('derivatives-instrument')">Derivatives Instrument</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'commodities-trading'" @click="navigateToSection('commodities-trading')">Commodities Trading</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'security-dealing'" @click="navigateToSection('security-dealing')">Security Dealing</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'fixed-income-securities'" @click="navigateToSection('fixed-income-securities')">Fixed Income Securities</RouterLink>
            <RouterLink to="/Securities-Trading" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'foreign-exchange'" @click="navigateToSection('foreign-exchange')">Foreign Exchange</RouterLink>
          </div>

          <div v-if="activeServicesSub === 'trustees'" class="space-y-2">
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'secured-unsecured'" @click="navigateToSection('secured-unsecured')">Secured and Unsecured Note Issuances</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'bond-trustship'" @click="navigateToSection('bond-trustship')">Bond Trusteeship</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'private-trust'" @click="navigateToSection('private-trust')">Private Trust</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'corporate-trust'" @click="navigateToSection('corporate-trust')">Corporate Trust</RouterLink>
            <RouterLink to="/Trustees" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="hoveredMiddle = 'estate-planning'" @click="navigateToSection('estate-planning')">Estate Planning</RouterLink>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img :src="rightPanelImage" alt="Our Businesses" class="rounded-lg mb-4 w-full h-48 object-cover transition-all duration-300" />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>
      </div>
      <!-- ========== END SERVICES ========== -->


      <!-- ========== PRODUCTS ========== -->
      <div v-if="activeMega === 'products'" class="grid grid-cols-[260px_1fr_360px] gap-8">
        <div class="border-r pr-4" @mouseenter="prodhoveredMiddle = null">
          <p class="text-sm font-black tracking-widest text-gray-700 mb-4">OUR PRODUCTS</p>
          <ul class="space-y-2">
            <RouterLink to="/mutual-funds" class="block px-4 py-3 rounded-lg font-medium transition-colors" :class="activeProductsSub === 'mutual' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeProductsSub = 'mutual'" @click="closeAllMenus">Mutual Funds</RouterLink>
            <RouterLink to="/Exchange-Traded-Funds" class="block px-4 py-3 rounded-lg font-medium transition-colors" :class="activeProductsSub === 'exchange-traded' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeProductsSub = 'exchange-traded'" @click="closeAllMenus">Exchange Traded Funds</RouterLink>
            <RouterLink to="/alternative-investment" class="block px-4 py-3 rounded-lg font-medium transition-colors" :class="activeProductsSub === 'alternative' ? 'bg-green-700 text-white' : 'hover:bg-green-100'" @mouseenter="activeProductsSub = 'alternative'" @click="closeAllMenus">Alternative Investments Scheme</RouterLink>
          </ul>
        </div>

        <div>
          <p class="text-sm font-black tracking-widest text-gray-700 mb-4">WHAT WE DO</p>
          <div v-if="activeProductsSub === 'mutual'" class="space-y-2">
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'money-market'" @click="navigateToSection('money-market')">Deutsche Money Market Fund</RouterLink>
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'equity-fund'" @click="navigateToSection('equity-fund')">Deutsche Equity Fund</RouterLink>
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'private-fixed-income'" @click="navigateToSection('fixed-income')">Deutsche Private Fixed Income Fund</RouterLink>
            <RouterLink to="/mutual-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'ethical-funds'" @click="navigateToSection('ethical-funds')">Deutsche Ethical Funds</RouterLink>
          </div>
          <div v-if="activeProductsSub === 'exchange-traded'" class="space-y-2">
            <RouterLink to="/exchange-traded-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'agro-etf'" @click="navigateToSection('agro-etf')">Deutsche Agro-ETF</RouterLink>
            <RouterLink to="/exchange-traded-funds" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'gold-etf'" @click="navigateToSection('gold-etf')">Deutsche Gold-ETF</RouterLink>
          </div>
          <div v-if="activeProductsSub === 'alternative'" class="space-y-2">
            <RouterLink to="/alternative-investment" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'private-wealth'" @click="navigateToSection('private-wealth-management')">Deutsche Private Wealth Management</RouterLink>
            <RouterLink to="/alternative-investment" class="block font-medium rounded-lg px-1 py-3 hover:bg-green-100" @mouseenter="prodhoveredMiddle = 'instution-asset-management'" @click="navigateToSection('asset-manange')">Deutsche Institutional Asset Management</RouterLink>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
          <img :src="rightPanelImage" alt="Our Businesses" class="rounded-lg mb-4 w-full h-48 object-cover transition-all duration-300" />
          <p class="font-medium text-lg">Explore our<br /><span class="font-semibold">business divisions</span></p>
          <RouterLink to="/contact" class="mt-4 text-center border border-black rounded-lg py-2">Contact Us</RouterLink>
        </div>
      </div>
      <!-- ========== END PRODUCTS ========== -->


      <!-- ========== RESOURCES ========== -->
      <div v-if="activeMega === 'resources'" class="grid grid-cols-[1fr_360px] gap-8">
        <div class="space-y-2" @mouseleave="hoveredResource = null">
          <RouterLink to="/Insight" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @mouseenter="hoveredResource = 'insights'" @click="closeAllMenus">Insights</RouterLink>
          <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @mouseenter="hoveredResource = 'gallery'" @click="closeAllMenus">Gallery</RouterLink>
          <RouterLink to="/career" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @mouseenter="hoveredResource = 'career'" @click="closeAllMenus">Career</RouterLink>
          <RouterLink to="/cookies-policy" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @mouseenter="hoveredResource = 'policy'" @click="closeAllMenus">Policy</RouterLink>
          <RouterLink to="/investmentdashboard" class="block px-4 py-3 hover:bg-green-50 rounded-lg" @mouseenter="hoveredResource = 'dashboard'" @click="closeAllMenus">Investment Dashboard</RouterLink>
        </div>
        <div class="hidden md:block">
          <img :src="hoveredResource ? resourceImages[hoveredResource] : '/navigation2.png'" alt="Resources" class="w-full h-full object-cover rounded-lg transition-all duration-300" />
        </div>
      </div>
      <!-- ========== END RESOURCES ========== -->

    </div>
    <!-- END UNIFIED MEGA MENU -->


    <!-- MOBILE MENU -->
    <div v-show="isMenuOpen" class="md:hidden bg-white shadow-lg border-t px-6 py-6 space-y-6">
      <RouterLink to="/" @click="toggleMenu" class="block font-medium">Home</RouterLink>
      <div>
        <button @click="aboutOpen = !aboutOpen" class="w-full flex items-center justify-between font-medium">
          About Us
          <span class="transition-transform" :class="aboutOpen ? 'rotate-180' : ''">▼</span>
        </button>
        <div v-show="aboutOpen" class="pl-4 mt-3 space-y-2 text-sm">
          <RouterLink to="/about" @click="toggleMenu" class="block">Who we are</RouterLink>
          <RouterLink to="/MDmessage" @click="toggleMenu" class="block">MD's Message</RouterLink>
          <RouterLink to="/Leadership" @click="toggleMenu" class="block">Leadership</RouterLink>
          <RouterLink to="/subsidiaries" @click="toggleMenu" class="block">Subsidiaries</RouterLink>
        </div>
      </div>
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
      <RouterLink to="/Insight" @click="toggleMenu" class="block font-medium">Insights</RouterLink>
      <RouterLink to="/career" @click="toggleMenu" class="block font-medium">Career</RouterLink>
      <RouterLink to="/contact" @click="toggleMenu" class="block font-medium">Contact</RouterLink>
      <RouterLink to="/invest-now" @click="toggleMenu">
        <button class="w-full mt-4 bg-green-700 text-white py-3 rounded-xl">Invest Now</button>
      </RouterLink>
    </div>

  </header>
</template>