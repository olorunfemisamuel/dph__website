<script setup lang = 'ts'>
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
            Foreign Exchange
          </h3>
        </div>
      </section>

      <!-- GREEN INFO SECTION -->
      <!-- GREEN INFO SECTION -->
      <section class="w-full bg-white py-8 md:py-12">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <div class="bg-green-700 rounded-2xl py-10 px-8 md:px-12">
          <p class="text-white text-sm md:text-base leading-relaxed">
            Our platform delivers a fully integrated foreign exchange solution, combining real-time FX data, advanced trading tools, 
            and robust risk management capabilities across spot, forward, and options markets. Designed to support corporate treasurers, 
            institutional traders, and portfolio managers, our FX solution enables efficient currency management, seamless execution, 
            and strategic hedging in a fast-moving global marketplace. With comprehensive coverage of major and emerging market currencies, 
            powerful analytics, and deep liquidity access, we empower clients to navigate currency volatility, optimize cross-border 
            transactions, and achieve superior outcomes in their FX operations.
          </p>
          </div>
        </div>
      </section>

      <!-- COMPREHENSIVE COMMODITY PORTFOLIO SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-green-700 mb-10 text-center">Comprehensive Commodity Portfolio</h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <!-- Card 1 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56 ">
              <img src="@/assets/foreignexchangeIMG/ForeignexchangeIMG.jpg" alt="Spot Purchase & Sales" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm">Spot Purchase & Sales</p>
            </div>

            <!-- Card 2 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/foreignexchangeIMG/ForeignexchangeIMG.jpg" alt="Foreign Exchange Forward" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm">Foreign Exchange Forward</p>
            </div>

            <!-- Card 3 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/foreignexchangeIMG/ForeignexchangeIMG.jpg" alt="Cross Currency Trading" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm">Cross Currency Trading</p>
            </div>

            <!-- Card 4 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/foreignexchangeIMG/ForeignexchangeIMG.jpg" alt="Currency Swap" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm">Currency Swap</p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>