<script lang="ts" setup>

import InsightsPage from '@/components/InsightsPage.vue'
import whatwedoIMG1invest from '@/assets/whatwedoIMGS/whatwedoIMG1invest.jpg'
import whatwedoIMG2asset from '@/assets/whatwedoIMGS/whatwedoIMG2asset.jpg'
import whatwedoIMG3private from '@/assets/whatwedoIMGS/whatwedoIMG3private.jpg'
import whatwedoIMG4security from '@/assets/whatwedoIMGS/whatwedoIMG4security.jpg'
import whatwedoIMG5trustees from '@/assets/whatwedoIMGS/whatwedoIMG5trustees.jpg'
import HeroImage from "@/assets/HeroImage.png"
import secondsliderImage from '@/assets/secondsliderImage.png'
import thirdsliderImage from '@/assets/thirdsliderImage.png'
import fourthsliderImage from '@/assets/fourthsliderImage.png'
import fifthsliderImage from '@/assets/fifthsliderImage.png'
import sixthsliderImage from '@/assets/sixthsliderImage.png'
import venturecapitalimage from '@/assets/venturecapitalimg.png'

import whatwedoIMG6venture from '@/assets/whatwedoIMGS/whatwedoIMG6venture.jpg'
import whatwedoIMG7consult from '@/assets/whatwedoIMGS/whatwedoIMG7consult.jpg'


import { computed } from 'vue'

import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

type SlideType = {
  type: string
  src: string
  title: string
  subtitle: string
  description: string
  buttonText: string
  link: string
}


let observer: IntersectionObserver | null = null

onMounted(async () => {
  await nextTick() // ✅ wait for DOM

  const elements = document.querySelectorAll('.reveal')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer?.unobserve(entry.target) // animate once
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px',
    },
  )

  elements.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const cardClass =
  'flex items-stretch w-full md:w-[31%] bg-white rounded-2xl shadow-md overflow-hidden h-28 transition hover:shadow-lg'

  // HERO SLIDER LOGIC
const slides: SlideType[] = [
  {
    type: 'image',
    src: HeroImage,
    title: 'Creating Wealth',
    subtitle: 'For The Future',
    description: 'At DPH we create unique solution to make your asset grow',
    buttonText: 'More About Us →',
    link: '/about',
  },

 {
    type: 'image',
    src: sixthsliderImage,
    title: 'INVESTMENT BANKING',
    subtitle: '',
    description:
      'We create value by providing well tWe provide bespoke Financial Advisory and capital raising services to Individuals, Corporate clients and Government Institutions.imed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
    buttonText: 'Explore →',
    link: '/Securities-Trading',
  },

  {
    type: 'image',
    src: secondsliderImage,
    title: 'ASSET MANAGEMENT',
    subtitle: '',
    description: 'We deliver top of the line Investment Management services to our clients and manage funds for Individuals and Companies.',
    buttonText: 'Explore →',
    link: '/Asset-Management',
  },

  {
    type: 'image',
    src: thirdsliderImage,
    title: 'PRIVATE EQUITY',
    subtitle: '',
    description: 'We create wealth by providing world-class private equity services backed up with intense and thorough research.',
    buttonText: 'Explore →',
    link: '/Private-Equity'
  },

  {
    type: 'image',
    src: fourthsliderImage,
    title: 'SECURITIES',
    subtitle: '',
    description: 'We create value by providing well timed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
     buttonText: 'Explore →',
      link: '/Securities-Trading'
  },
  {
    type: 'image',
    src: fifthsliderImage,
    title: 'TRUSTEES',
    subtitle: '',
    description: 'We create value by providing well timed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
    buttonText: 'Explore →',
    link: '/Securities-Trading'
  },

   {
    type: 'image',
    src: venturecapitalimage,
    title: 'VENTURE CAPITAL',
    subtitle: '',
    description: 'We create value by providing well timed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
    buttonText: 'Explore →',
    link: '/Securities-Trading'
  }

]

const activeSlide = ref(0)
let sliderTimer: number | null = null

const goToSlide = (index: number) => {
  activeSlide.value = index
}

function startSlider() {
  sliderTimer = window.setInterval(function () {
    activeSlide.value = (activeSlide.value + 1) % slides.length
  }, 5000) // 6 seconds
}


onMounted(() => {
  startSlider()
})

onBeforeUnmount(() => {
  if (sliderTimer) clearInterval(sliderTimer)
})


const isFirstSlide = () => activeSlide.value === 0

const currentSlide = computed<SlideType>(() => {
  return (slides[activeSlide.value] ?? slides[0]) as SlideType
})
</script>

<template>
  <main class="overflow-x-hidden">
 <div class="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-10 md:py-16">
  <!-- SLIDES -->
  <div class="absolute inset-0">
    <transition name="fade-slide">
      <div
        :key="activeSlide"
        class="absolute inset-0 will-change-transform"
      >
        <!-- VIDEO SLIDE -->
        <video
          v-if="currentSlide.type === 'video'"
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        >
          <source :src="currentSlide.src" type="video/mp4" />
        </video>

        <!-- FIRST SLIDE: CUSTOM BLACK SPLIT LAYOUT -->
        <div
          v-if="activeSlide === 0"
          class="w-full h-full bg-black flex items-center justify-center py-8 md:py-12"
        >
          <div class="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
              
              <!-- LEFT TEXT -->
              <div class="text-white z-20 text-center lg:text-left order-2 lg:order-1">
                <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-4 md:mb-6">
                  Creating Wealth <br />
                  For The <span class="text-green-400">Future</span> 
                </h2>

                <p class="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-6 md:mb-8">
                  {{ currentSlide.description }}
                </p>

                <RouterLink :to="currentSlide.link">
                  <button
                    class="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base"
                  >
                    {{ currentSlide.buttonText }}
                  </button>
                </RouterLink>
              </div>

              <!-- RIGHT IMAGE -->
              <div class="flex justify-center lg:justify-end order-1 lg:order-2">
                <img
                  :src="currentSlide.src"
                  class="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto object-contain"
                  alt="Hero Image"
                />
              </div>

            </div>
          </div>
        </div>

        <!-- OTHER SLIDES: FULL BACKGROUND IMAGE -->
        <img
          v-else
          :src="currentSlide.src"
          class="w-full h-auto object-cover"
          alt="Slide background"
        />

      </div>
    </transition>
  </div>

  <!-- OVERLAY -->
  <div
    class="absolute inset-0 z-10"
    :class="activeSlide === 0 ? 'pointer-events-none' : 'bg-black/40'"
  >
    <transition name="content-slide" mode="out-in">
      <div
        v-if="activeSlide !== 0"
        :key="activeSlide"
       class="absolute left-4 right-4 sm:left-6 sm:right-auto md:left-12 lg:left-16 xl:left-20 top-1/2 -translate-y-1/2 text-left max-w-xl lg:max-w-2xl"
      >
        <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-3 md:mb-4 lg:mb-5 text-white">
          <span class="block">
            {{ currentSlide.title }}
          </span>
          <span v-if="currentSlide.subtitle" class="block">
            {{ currentSlide.subtitle }}
          </span>
        </h2>

        <div class="text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-md lg:max-w-xl">
          {{ currentSlide.description }}
        </div>

        <RouterLink :to="currentSlide.link">
          <button
            class="text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition duration-300"
            :class="isFirstSlide()
              ? 'border border-white text-white hover:bg-white hover:text-black'
              : 'bg-green-700 text-white hover:bg-green-800'"
          >
            {{ currentSlide.buttonText }}
          </button>
        </RouterLink>
      </div>
    </transition>
  </div>

  <!-- PAGINATION DOTS -->
  <div class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
    <button
      v-for="(_, index) in slides"
      :key="index"
      @click="goToSlide(index)"
      class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all"
      :class="activeSlide === index
        ? 'bg-white scale-125'
        : 'bg-white/50 hover:bg-white'"
      :aria-label="`Go to slide ${index + 1}`"
    />
  </div>
</div>
    <!---What we do section-->
    <!---What we do section-->
<div class="bg-[#F0F5F7] py-1">
  <h2 class="reveal text-4xl font-bold text-gray-500 mt-20 mb-10 ml-20">
    What We Do
  </h2>

  <p class="reveal text-gray-600 mx-6 sm:mx-10 md:mx-20 mb-8 md:mb-10 text-justify">
    Deutsche Partners Holding (DPH) is an independently owned financial services group with core
    expertise in Asset Management, Investment Banking, Private Equity, Securities, and
    Trusteeship. DPH is deeply committed to the success, development, and sustainable growth of
    its clients and their assets.
  </p>

  <!-- CARDS WRAPPER -->
 <!-- FLEX IMAGE CARDS -->
<!-- FLEX IMAGE CARDS -->
<div class="flex flex-wrap justify-center gap-8 px-10 md:px-20 mb-20">

  <!-- Investment Banking -->
  <RouterLink to="/Investment-Banking"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG1invest" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Investment Banking
    </div>
  </RouterLink>

  <!-- Asset Management -->
  <RouterLink to="/Asset-Management"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG2asset" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Asset Management
    </div>
  </RouterLink>

  <!-- Private Equity -->
  <RouterLink to="/Private-Equity"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG3private" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Private Equity
    </div>
  </RouterLink>

  <!-- Securities Trading -->
  <RouterLink to="/Securities-Trading"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG4security" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Security Trading
    </div>
  </RouterLink>

  <!-- Trustees -->
  <RouterLink to="/Trustees"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG5trustees" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Trustees
    </div>
  </RouterLink>

  <!-- Venture Capital -->
  <RouterLink to="/Venture-Capital"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG6venture" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Venture Capital
    </div>
  </RouterLink>

  <!-- Consultancy Service -->
  <RouterLink to="/Consultancy-Service"
    class="relative w-full sm:w-[48%] lg:w-[31%] h-52 rounded-2xl overflow-hidden reveal group cursor-pointer">
    <img :src="whatwedoIMG7consult" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-14 group-hover:bg-black/40"></div>
    <div class="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-sm tracking-wide drop-shadow-md transition-all duration-500 group-hover:bottom-3">
      Consultancy Service
    </div>
  </RouterLink>

</div>
</div>
 
    <InsightsPage />

    <!---End of Latest News and Insights-->

    <!---News letter section -->
    <div class="bg-green-700 text-white py-10">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="mb-6">
          Stay updated with the latest news and insights from Deutsche Partners Holding.
        </p>
        <form
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
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
      </div>
    </div>
  </main>
</template>

<style scoped>
/* IMAGE FADE + ZOOM */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: scale(1);
}


/* TEXT SLIDE UP */
.content-slide-enter-active,
.content-slide-leave-active {
  transition: all 0.6s ease;
}

.content-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.content-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease-out;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>