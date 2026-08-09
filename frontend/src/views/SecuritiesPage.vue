<script setup lang="ts">
const managementData = [
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/mrbrightIMG.jpg', import.meta.url).href },
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/mrsamIMG.jpg', import.meta.url).href },
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/bosuIMG.jpg', import.meta.url).href },
]

const services = [
  {
    id: 'stock-broking',
    title: 'Equity Trading',
    text: 'We provide world-class stockbroking services to both local and international investors in the Nigerian capital market. Our team offers a full range of capital market services, including trading, asset management, and strategic investment guidance. Clients retain control over investment decisions, while we execute trades and manage portfolios based on research, market insights, and professional experience.',
    reverse: false,
    route: '/stockbroking',
  },
  {
    id: 'equities',
    title: 'Fixed Income Trading',
    text: 'The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.',
    reverse: true,
    route: '/Equities',
  },
  {
    id: 'derivatives-instrument',
    title: 'Proprietary Trading',
    text: 'The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.',
    reverse: false,
    route: '/derivatives-instruments',
  },
  {
    id: 'commodities-trading',
    title: 'Security Analysis',
    text: 'The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.',
    reverse: true,
    route: '/commodity-trading',
  },
  {
    id: 'security-dealing',
    title: 'Economic Profiling',
    text: 'The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.',
    reverse: true,
    route: '/Security-Dealing',
  },
  {
    id: 'fixed-income-securities',
    title: 'Fixed Income Securities',
    text: 'The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.',
    reverse: true,
    route: '/fixed-income-security',
  },
  {
    id: 'foreign-exchange',
    title: 'Foreign Exchange',
    text: 'The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.',
    reverse: true,
    route: '/Foreign-Exchange',
  },
]
</script>

<template>
  <div class="bg-white min-h-screen pb-20">

    <!-- Banner -->
    <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-48 sm:h-64 md:h-[420px] overflow-hidden">
      <img
        src="@/assets/securitiesbannerimg.png"
        alt="About Banner"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
        Securities Trading
      </h3>
    </div>
  </section>
    

    <!-- Green Highlight Section -->
    <section class="max-w-7xl mx-auto mt-12 px-4 sm:px-6">
      <div class="bg-[#0F3D1F] rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch max-h-[320px]">
        <div class="md:w-2/3 w-full p-5 sm:p-6 md:p-7 text-white">
          <p class="text-base sm:text-xl md:text-2xl leading-relaxed">
           Our securities business provides brokerage, trading, investment research, and market intelligence services, enabling clients to make informed investment decisions 
           and optimize portfolio performance.
          </p>
        </div>
        <div class="md:w-1/3 w-full relative max-h-[320px]">
          <img
            src="@/assets/securitiesTradingimg.png"
            alt="Securities Meeting"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <!-- <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Our Leadership</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="(leader, index) in managementData.slice(0, 3)"
          :key="index"
          class="flex bg-[#f8fafc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <img :src="leader.img" alt="Leader" class="w-24 sm:w-28 h-full object-cover" />
          <div class="p-3 sm:p-5 flex flex-col justify-center">
            <h4 class="font-bold text-gray-800 text-sm sm:text-base">{{ leader.name }}</h4>
            <p class="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-1 font-medium">{{ leader.role }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Service Cards -->
    <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 space-y-8">
      <div
        v-for="service in services"
        :key="service.id"
        :id="service.id"
        class="flex bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg"
        :class="[
          service.reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row',
          service.id === 'stock-broking' ? 'md:max-h-[340px]' : 'md:max-h-[300px]'
        ]"
      >
        <!-- Text Content -->
        <div :class="[
          service.id === 'stock-broking' ? 'p-4 sm:p-5' : 'p-5 sm:p-6',
          'md:w-2/3 w-full flex flex-col justify-between'
        ]">
          <div>
            <h4 :class="[
              service.id === 'stock-broking' ? 'text-2xl' : 'text-xl',
              'text-[#168223] font-semibold mb-3'
            ]">{{ service.title }}</h4>
            <p :class="[
              service.id === 'stock-broking' ? 'text-base md:text-lg' : 'text-base md:text-lg',
              'text-black/90 leading-relaxed'
            ]">{{ service.text }}</p>
          </div>

          <!-- Read more button — each links to its own page -->
          <!-- <div class="mt-6">
            <RouterLink
              :to="service.route"
              class="inline-flex items-center gap-2 text-[#168223] text-sm font-medium hover:gap-3 transition-all duration-200 group"
            >
              <span>Read more</span>
              <span class="w-6 h-6 rounded-full border-2 border-[#168223] flex items-center justify-center group-hover:bg-[#168223] group-hover:text-white transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </RouterLink>
          </div> -->
        </div>

        <!-- Image -->
        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            :alt="service.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

  </div>
</template>