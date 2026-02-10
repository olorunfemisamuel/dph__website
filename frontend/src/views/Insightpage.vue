<script lang="ts" setup>
import InsightsPage from '@/components/InsightsPage.vue';
import newsletterimg1 from '@/assets/newsletterimg/newsletterimg1.png';

const featuredCards = Array.from({ length: 3 })
const notes = Array.from({ length: 12 })



</script>


<template>
  <!-- HERO (UNCHANGED) -->
  <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-52 sm:h-64 md:h-96 overflow-hidden">
      <img 
        src="@/assets/insightsimg.png" 
        alt="About Banner" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3
        class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10"
      >
        Gain Insights and Data Driven Research
      </h3>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-16">

    <!-- FEATURED CARDS -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
  <RouterLink
    v-for="(_, i) in featuredCards"
    :key="i"
    :to="`/news-insights/`"
    class="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition block"
  >
    <img :src="newsletterimg1"
      class="w-full h-44 object-cover"
      alt="Research"
    />

    <div class="p-4">
      <p class="text-xs text-green-600 font-semibold mb-1">
        Private Company
      </p>
      <h4 class="font-bold text-sm">
        Strategies at the Age of AI
      </h4>
      <p class="text-xs text-gray-400 mt-2">
        August 2025
      </p>
    </div>
  </RouterLink>
</div>


    <!-- <InsightsPage /> -->

    <!-- NOTES GRID -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6 mb-12"
    >
      <div
        v-for="(_, i) in notes"
        :key="i"
        class="flex flex-col items-center text-center"
      >
        <div
          class="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center shadow"
        >
          <span class="text-white text-[10px] font-semibold text-center leading-tight px-2">
            Media Financial<br />Market Notes
          </span>
        </div>
        <p class="text-xs mt-3 text-gray-600">
          Media Financial Market Notes
        </p>
      </div>
    </div>

    <!-- PAGINATION -->
    <div class="flex justify-center items-center gap-3 mb-14">
      <span class="w-3 h-3 rounded-full bg-gray-300"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300"></span>
      <span class="w-3 h-3 rounded-full bg-green-600 scale-125"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300"></span>
      <span class="w-3 h-3 rounded-full bg-gray-300"></span>
    </div>
  </section>

  <!-- SUBSCRIBE BAR -->
  <section class="bg-green-800 text-white py-6">
       <form class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
        <input 
          type="email" 
          placeholder="Your Email Address" 
          class="w-full sm:flex-1 bg-white/10 border border-white/30 px-4 sm:px-6 py-3 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20" 
        />
        <button 
          type="submit" 
          class="w-full sm:w-auto border-2 border-white px-8 sm:px-10 py-3 rounded font-bold hover:bg-white hover:text-[#2e8b3b] transition duration-300 uppercase text-sm sm:text-base tracking-widest"
        >
          Subscribe
        </button>  
      </form>
  </section>
</template>
