<script setup lang="ts">
import newsletterimg1 from '@/assets/newsletterimg/newsletterimg1.png'
import newsletterimg2 from '@/assets/newsletterimg/newsletterimg2.png'
import newsletterimg3 from '@/assets/newsletterimg/newsletterimg3.png'
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
    },
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
})

import { ref, computed } from 'vue'

type InsightCard = {
  img: string
  title: string
  desc: string
}

const cards: InsightCard[] = [
  {
    img: newsletterimg1,
    title: 'Market Trends 2024',
    desc: 'An in-depth analysis of the current market trends and what to expect in the coming year.',
  },
  {
    img: newsletterimg2,
    title: 'Investment Strategies',
    desc: "Explore effective investment strategies to maximize your portfolio's growth potential.",
  },
  {
    img: newsletterimg3,
    title: 'Investment Strategies',
    desc: "Explore effective investment strategies to maximize your portfolio's growth potential.",
  },
]

const currentIndex = ref(0)

/* Always show 3 cards, looping infinitely */
const visibleCards = computed<InsightCard[]>(function () {
  return Array.from({ length: 3 }, function (_, i) {
    return cards[(currentIndex.value + i) % cards.length]!
  })
})


const goTo = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="bg-gray-100 py-10">
    <h2 class="text-4xl font-bold text-gray-500 mb-10 ml-15">DPH Insights</h2>
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- News Card 1 -->
      <div
        v-for="(card, index) in visibleCards"
        :key="index"
        class="bg-white rounded-lg shadow-sm hover:shadow-black overflow-hidden transition-transform duration-300 hover:scale-110"
      >
        <img :src="card.img" alt="News Image" class="w-full h-48 object-cover" />

        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ card.title }}</h3>
          <p class="text-gray-600 mb-4">{{ card.desc }}</p>
          <RouterLink to="/news-insights" class="text-green-700 hover:underline"
            >Read More</RouterLink
          >
        </div>
      </div>

      <!-- News Card 2 -->
      <!-- <div
  v-for="(card, index) in visibleCards"
  :key="index"
  class="bg-white rounded-lg shadow-sm hover:shadow-black overflow-hidden transition-transform duration-300 hover:scale-110"
>
        <img :src="newsletterimg2" alt="News Image" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ card.title }}</h3>
         <p class="text-gray-600 mb-4">{{ card.desc }}</p>
          <a href="#" class="text-green-700 hover:underline">Read More</a>
        </div>  


        
</div> -->
      <!-- 
   <div
  v-for="(card, index) in visibleCards"
  :key="index"
  class="bg-white rounded-lg shadow-sm hover:shadow-black overflow-hidden transition-transform duration-300 hover:scale-110"
>
        <img :src="newsletterimg3" alt="News Image" class="w-full h-48 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ card.title }}</h3>
           <p class="text-gray-600 mb-4">{{ card.desc }}</p>
          <a href="#" class="text-green-700 hover:underline">Read More</a>
        </div>  
   </div> -->

      <RouterLink to="/Insight" class="">
        <button
          class="bg-transparent text-green-600 border border-green-600 rounded px-8 py-2 hover:bg-green-50 transition mt-10"
        >
          View All Insights
        </button>
      </RouterLink>

      <!----- PAGINATION -->
      <div class="flex justify-center items-center gap-3 mb-14">
        <span
          v-for="(dot, index) in cards.length"
          :key="index"
          @click="goTo(index)"
          class="w-3 h-3 rounded-full cursor-pointer transition"
          :class="
            currentIndex === index ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
          "
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
