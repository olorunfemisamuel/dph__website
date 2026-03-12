<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import InsightsPage from '@/components/InsightsPage.vue'
import NewsLetter from '@/components/NewsLetter.vue'

import whatwedoIMG1invest from '@/assets/whatwedoIMGS/whatwedoIMG1invest.jpg'
import whatwedoIMG2asset from '@/assets/whatwedoIMGS/whatwedoIMG2asset.webp'
import whatwedoIMG3private from '@/assets/whatwedoIMGS/whatwedoIMG3private.webp'
import whatwedoIMG4security from '@/assets/whatwedoIMGS/whatwedoIMG4security.webp'
import whatwedoIMG5trustees from '@/assets/whatwedoIMGS/whatwedoIMG5trustees.webp'
import whatwedoIMG6venture from '@/assets/whatwedoIMGS/whatwedoIMG6venture.webp'
import whatwedoIMG7consult from '@/assets/whatwedoIMGS/whatwedoIMG7consult.webp'
import HeroImage from '@/assets/HeroImage.webp'
import investheroIMG from '@/assets/heroIMGS/investheroIMG.webp'
import thirdsliderImage from '@/assets/thirdsliderImage.webp'
import fourthsliderImage from '@/assets/fourthsliderImage.webp'
import fifthsliderImage from '@/assets/fifthsliderImage.webp'
import venturecapitalimage from '@/assets/venturecapitalimg.webp'

type SlideType = {
  type: string
  src: string
  title: string
  subtitle: string
  description: string
  buttonText: string
  link: string
}

const slides: SlideType[] = [
  {
    type: 'image', src: HeroImage,
    title: 'Creating Wealth', subtitle: 'For The Future',
    description: 'At DPH we create unique solution to make your asset grow',
    buttonText: 'More About Us \u2192', link: '/about',
  },
  {
    type: 'image', src: investheroIMG,
    title: 'INVESTMENT BANKING', subtitle: '',
    description: 'We provide bespoke Financial Advisory and capital raising services to Individuals, Corporate clients and Government Institutions.',
    buttonText: 'Explore \u2192', link: '/Investment-Banking',
  },
  {
    type: 'image', src: investheroIMG,
    title: 'ASSET MANAGEMENT', subtitle: '',
    description: 'We deliver top of the line Investment Management services to our clients and manage funds for Individuals and Companies.',
    buttonText: 'Explore \u2192', link: '/Asset-Management',
  },
  {
    type: 'image', src: thirdsliderImage,
    title: 'PRIVATE EQUITY', subtitle: '',
    description: 'We create wealth by providing world-class private equity services backed up with intense and thorough research.',
    buttonText: 'Explore \u2192', link: '/Private-Equity',
  },
  {
    type: 'image', src: fourthsliderImage,
    title: 'SECURITIES', subtitle: '',
    description: 'We create value by providing well timed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
    buttonText: 'Explore \u2192', link: '/Securities-Trading',
  },
  {
    type: 'image', src: fifthsliderImage,
    title: 'TRUSTEES', subtitle: '',
    description: 'We create value by providing well timed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
    buttonText: 'Explore \u2192', link: '/Securities-Trading',
  },
  {
    type: 'image', src: venturecapitalimage,
    title: 'VENTURE CAPITAL', subtitle: '',
    description: 'We create value by providing well timed execution services underpinned by reliable processes and seasoned personnel overseeing these processes.',
    buttonText: 'Explore \u2192', link: '/Securities-Trading',
  },
]

const activeSlide = ref(0)
const sliderEl = ref<HTMLElement | null>(null)
let sliderTimer: ReturnType<typeof setInterval> | null = null

const currentSlide = computed<SlideType>(() => slides[activeSlide.value] ?? slides[0] as SlideType)

function nextSlide() { activeSlide.value = (activeSlide.value + 1) % slides.length }
function prevSlide() { activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length }
function goToSlide(index: number) { activeSlide.value = index; resetTimer() }
function startTimer() { sliderTimer = setInterval(nextSlide, 5000) }
function resetTimer() { if (sliderTimer) clearInterval(sliderTimer); startTimer() }

// Single onMounted — observer + timer + swipe all together
onMounted(async () => {
  await nextTick()

  // Reveal animation
  const revealEls = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target) } })
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' })
  revealEls.forEach((el) => io.observe(el))

  // Auto-play
  startTimer()

  // Swipe — attached to the real DOM element, so z-index layers don't matter
  const el = sliderEl.value
  if (!el) return

  let startX = 0
  let startY = 0
  let isPointerDown = false

  // Touch (mobile)
  el.addEventListener('touchstart', (e: TouchEvent) => {
    const t = e.touches[0]
    if (!t) return
    startX = t.clientX
    startY = t.clientY
  }, { passive: true })

  el.addEventListener('touchend', (e: TouchEvent) => {
    const t = e.changedTouches[0]
    if (!t) return
    const dx = startX - t.clientX
    const dy = startY - t.clientY
    if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return
    dx > 0 ? nextSlide() : prevSlide()
    resetTimer()
  }, { passive: true })

  // Mouse (desktop) — mouseup on window so drag-then-release outside still works
  el.addEventListener('mousedown', (e: MouseEvent) => {
    startX = e.clientX
    isPointerDown = true
  })

  const handleMouseUp = (e: MouseEvent) => {
    if (!isPointerDown) return
    isPointerDown = false
    const dx = startX - e.clientX
    if (Math.abs(dx) < 40) return
    dx > 0 ? nextSlide() : prevSlide()
    resetTimer()
  }
  window.addEventListener('mouseup', handleMouseUp)

  // Clean up window listener on unmount
  onBeforeUnmount(() => window.removeEventListener('mouseup', handleMouseUp))
})

onBeforeUnmount(() => {
  if (sliderTimer) clearInterval(sliderTimer)
})
</script>

<template>
  <main class="overflow-x-hidden">

    <!-- HERO SLIDER -->
    <div
      ref="sliderEl"
      class="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden select-none"
    >
      <!-- Slide backgrounds — pointer-events-none so touch events reach the ref wrapper -->
      <div class="absolute inset-0 pointer-events-none">
        <transition name="fade-slide">
          <div :key="activeSlide" class="absolute inset-0 will-change-transform">

            <!-- Slide 0: black split layout -->
            <div v-if="activeSlide === 0" class="w-full h-full bg-black flex items-center justify-center">
              <div class="max-w-screen-2xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-8 sm:py-12">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-16 xl:gap-20">
                  <div class="text-white text-center lg:text-left order-2 lg:order-1">
                    <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-4 md:mb-6">
                      Creating Wealth <br />For The <span class="text-green-400">Future</span>
                    </h2>
                    <p class="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-6 md:mb-8">
                      {{ currentSlide.description }}
                    </p>
                    <RouterLink :to="currentSlide.link" class="pointer-events-auto">
                      <button class="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base">
                        {{ currentSlide.buttonText }}
                      </button>
                    </RouterLink>
                  </div>
                  <div class="flex justify-center lg:justify-end order-1 lg:order-2">
                    <img
                      :src="currentSlide.src"
                      class="w-full object-contain max-h-[28vh] sm:max-h-[40vh] md:max-h-none max-w-[160px] sm:max-w-[280px] md:max-w-[480px] lg:max-w-[520px] h-auto"
                      alt="Hero Image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Slides 1+: full background image -->
            <img v-else :src="currentSlide.src" class="w-full h-full object-cover" alt="Slide background" />

          </div>
        </transition>
      </div>

      <!-- Dark overlay + text for slides 1+ — pointer-events-none on wrapper, auto on content -->
      <div v-if="activeSlide !== 0" class="absolute inset-0 z-10 bg-black/40 pointer-events-none">
        <transition name="content-slide" mode="out-in">
          <div
            :key="activeSlide"
            class="absolute left-4 right-4 sm:left-6 sm:right-auto md:left-12 lg:left-16 xl:left-20 top-1/2 -translate-y-1/2 text-left max-w-xl lg:max-w-2xl"
          >
            <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-3 md:mb-5 text-white">
              {{ currentSlide.title }}
              <span v-if="currentSlide.subtitle" class="block">{{ currentSlide.subtitle }}</span>
            </h2>
            <p class="text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-md lg:max-w-xl">
              {{ currentSlide.description }}
            </p>
            <RouterLink :to="currentSlide.link" class="pointer-events-auto">
              <button class="text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-md bg-green-700 text-white hover:bg-green-800 transition duration-300">
                {{ currentSlide.buttonText }}
              </button>
            </RouterLink>
          </div>
        </transition>
      </div>

      <!-- Pagination dots -->
      <div class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 pointer-events-auto">
        <button
          v-for="(_, i) in slides" :key="i"
          @click.stop="goToSlide(i)"
          class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all"
          :class="activeSlide === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'"
          :aria-label="`Go to slide ${i + 1}`"
        />
      </div>
    </div>

    <!-- WHAT WE DO -->
    <div class="bg-[#F0F5F7] py-1">
      <h2 class="reveal text-4xl font-bold text-gray-500 mt-20 mb-10 ml-6 sm:ml-20">What We Do</h2>
      <p class="reveal text-gray-600 mx-6 sm:mx-10 md:mx-20 mb-8 md:mb-10 text-justify">
        Deutsche Partners Holding (DPH) is an independently owned financial services group with core
        expertise in Asset Management, Investment Banking, Private Equity, Securities, and Trusteeship.
        DPH is deeply committed to the success, development, and sustainable growth of its clients and their assets.
      </p>

      <div class="px-4 sm:px-10 md:px-16 mb-20">
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <RouterLink to="/Investment-Banking" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG1invest" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Investment Banking</div>
          </RouterLink>
          <RouterLink to="/Asset-Management" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG2asset" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Asset Management</div>
          </RouterLink>
          <RouterLink to="/Private-Equity" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG3private" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Private Equity</div>
          </RouterLink>
          <RouterLink to="/Securities-Trading" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG4security" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Security Trading</div>
          </RouterLink>
        </div>

        <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
          <RouterLink to="/Trustees" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG5trustees" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Trustees</div>
          </RouterLink>
          <RouterLink to="/Venture-Capital" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG6venture" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Venture Capital</div>
          </RouterLink>
          <RouterLink to="/Consultancy-Service" class="relative w-[47%] sm:w-[23%] h-36 sm:h-44 rounded-2xl overflow-hidden reveal group cursor-pointer shrink-0">
            <img :src="whatwedoIMG7consult" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-black/70 rounded-b-2xl transition-all duration-500 group-hover:h-12 group-hover:bg-black/40"></div>
            <div class="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Consultancy Service</div>
          </RouterLink>
        </div>
      </div>
    </div>

    <InsightsPage />
    <NewsLetter />
  </main>
</template>

<style scoped>
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