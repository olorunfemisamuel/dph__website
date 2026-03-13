<script setup lang="ts">
import img1 from '@/assets/securitydealingIMGS/securitydealingimg1.png'
import img2 from '@/assets/securitydealingIMGS/securitydealingimg2.jpg'
import img3 from '@/assets/securitydealingIMGS/securitydealingimg3.jpg'
import img4 from '@/assets/securitydealingIMGS/securitydealingimg4.jpg'
import img5 from '@/assets/securitydealingIMGS/securitydealingimg5.jpg'

const serviceCards = [
  {
    id: 1,
    title: 'Buy-Side Dealing Solutions',
    text: 'Flexible outsourcing of all or part of your dealing function to gain superior access to liquidity and robust best execution processes.',
    img: img1,
  },
  {
    id: 2,
    title: 'Full Trade Life-Cycle Management',
    text: 'Comprehensive oversight from initial execution through to custody and fund administration.',
    img: img2,
  },
  {
    id: 3,
    title: 'Multi-Broker Order Management',
    text: 'We seamlessly manage orders within your existing list of brokers and counterparties while maintaining audit trails and detailed activity reports.',
    img: img3,
  },
  {
    id: 4,
    title: 'Regulatory & Compliance Excellence',
    text: 'Our processes are designed to meet growing global regulatory standards, providing full transparency and best execution reporting on all trading flows.',
    img: img4,
  },
  {
    id: 5,
    title: 'Global Market Integration',
    text: 'We have leveraged technology to provide instant trading capabilities from our devices, ensuring well-timed execution.',
    img: img5,
  },
]

const lastCard = serviceCards[4]!
</script>

<template>
  <div>
    <!-- HERO SECTION -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src="@/assets/assetmangbanner.jpg"
          alt="About Banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white font-bold text-3xl md:text-5xl z-10">
          Security Dealing
        </h3>
      </div>
    </section>

    <!-- INTRO SECTION -->
    <section class="w-full bg-green-700 py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="text-white leading-relaxed">
            <p>
              Insurance sector sits atop an edifice of assigned/guaranteed securities with billions
              of Naira in value. As such, optimizing this value to deliver maximum returns and
              creating flexibility in deploying these assets according to operational and regulatory
              demands is an important value creation mandate for the company.
            </p>
            <p class="mt-4">
              We provide support to our partners and clients in deploying platform for activities around
              this optimization. Our dealings platform is designed to support securities management
              efficiently and effectively, thereby creating maximum value for your business.
            </p>
          </div>
          <div class="flex justify-center md:justify-end">
            <img
              src="@/assets/assetmangbanner.jpg"
              alt="Team Meeting"
              class="rounded-lg shadow-md w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- KEY SERVICE HIGHLIGHTS -->
    <section class="w-full bg-gray-50 py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Key Service Highlights</h2>

        <!-- 2x2 grid for first 4 cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div
            v-for="card in serviceCards.slice(0, 4)"
            :key="card.id"
            class="relative rounded-2xl overflow-hidden h-52 md:h-60 group"
          >
            <img
              :src="card.img"
              :alt="card.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition duration-300"></div>
            <div class="absolute inset-0 flex flex-col justify-between p-5">
              <p class="text-white text-xs sm:text-sm leading-relaxed">{{ card.text }}</p>
              <div class="bg-green-700 rounded-lg px-4 py-2.5">
                <h4 class="text-white font-bold text-sm sm:text-base">{{ card.title }}</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- 5th card left-aligned, half width -->
        <div class="w-full sm:w-1/2">
          <div class="relative rounded-2xl overflow-hidden h-52 md:h-60 group">
            <img
              :src="lastCard.img"
              :alt="lastCard.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition duration-300"></div>
            <div class="absolute inset-0 flex flex-col justify-between p-5">
              <p class="text-white text-xs sm:text-sm leading-relaxed">{{ lastCard.text }}</p>
              <div class="bg-green-700 rounded-lg px-4 py-2.5">
                <h4 class="text-white font-bold text-sm sm:text-base">{{ lastCard.title }}</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>