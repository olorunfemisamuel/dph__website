<script setup lang="ts">

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
          Derivatives
        </h3>
      </div>
    </section>

    <!-- OUR COMPREHENSIVE PROJECT FINANCE SERVICE -->
    <section class="w-full bg-white py-14 md:py-20">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-10">Our Comprensive Project Finance Service</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

          <!-- Card 1 -->
          <div class="bg-[#0f1f1a] rounded-xl p-5 flex flex-col gap-3">
            <div class="w-8 h-8 text-green-400">
              <!-- Shield/hedging icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
              </svg>
            </div>
            <h4 class="text-white font-semibold text-sm">Hedging and Risk Management</h4>
            <p class="text-gray-400 text-xs leading-relaxed">
              Protecting your exposure using options, swaps, and forwards throughout all risk-heightened horizons.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#0f1f1a] rounded-xl p-5 flex flex-col gap-3">
            <div class="w-8 h-8 text-green-400">
              <!-- Chart/market icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l4-4 4 4 4-6 4 2"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18"/>
              </svg>
            </div>
            <h4 class="text-white font-semibold text-sm">Amplified Market Exposure</h4>
            <p class="text-gray-400 text-xs leading-relaxed">
              Leveraging derivative power to amplify market positions on compelling opportunities across multiple asset classes.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-[#0f1f1a] rounded-xl p-5 flex flex-col gap-3">
            <div class="w-8 h-8 text-green-400">
              <!-- Lightning/speculative icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h4 class="text-white font-semibold text-sm">Speculative Trading</h4>
            <p class="text-gray-400 text-xs leading-relaxed">
              Design custom speculative strategies informed by analysis and price discovery for derivatives trading.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="bg-[#0f1f1a] rounded-xl p-5 flex flex-col gap-3">
            <div class="w-8 h-8 text-green-400">
              <!-- Building/structuring icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 21V9l9-6 9 6v12H3z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 21V12h6v9"/>
              </svg>
            </div>
            <h4 class="text-white font-semibold text-sm">Integrated Structuring</h4>
            <p class="text-gray-400 text-xs leading-relaxed">
              Customised derivative solutions for the complex needs of modern global institutions.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CORE DERIVATIVES SERVICE -->
    <section class="w-full bg-white pb-14 md:pb-20">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Core Derivatives Service</h2>

        <div class="grid grid-cols-2 gap-4">

          <!-- Future Contracts -->
          <div class="relative rounded-xl overflow-hidden h-44 md:h-52 group">
            <img
              src="@/assets/derivativeIMGS/derivativesIMG1.png"
              alt="Future Contracts"
              class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300"
            />
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h4 class="text-white font-bold text-sm md:text-base mb-1">Future Contracts</h4>
              <p class="text-gray-300 text-xs leading-relaxed">Standardised exchange-traded futures agreements.</p>
            </div>
          </div>

          <!-- Forward Contracts -->
          <div class="relative rounded-xl overflow-hidden h-44 md:h-52 group">
            <img
              src="@/assets/derivativeIMGS/derivativeIMG2.png"
              alt="Forward Contracts"
              class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300"
            />
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h4 class="text-white font-bold text-sm md:text-base mb-1">Forward Contracts</h4>
              <p class="text-gray-300 text-xs leading-relaxed">Bespoke OTC derivatives arrangements.</p>
            </div>
          </div>

          <!-- Swaps -->
          <div class="relative rounded-xl overflow-hidden h-44 md:h-52 group">
            <img
              src="@/assets/derivativeIMGS/derivativeIMG3.png"
              alt="Swaps"
              class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300"
            />
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h4 class="text-white font-bold text-sm md:text-base mb-1">Swaps</h4>
              <p class="text-gray-300 text-xs leading-relaxed">Exchange cash flows in a variety of derivatives.</p>
            </div>
          </div>

          <!-- Options -->
          <div class="relative rounded-xl overflow-hidden h-44 md:h-52 group">
            <img
              src="@/assets/derivativeIMGS/derivativeIMG4.png"
              alt="Options"
              class="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition duration-300"
            />
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <h4 class="text-white font-bold text-sm md:text-base mb-1">Options</h4>
              <p class="text-gray-300 text-xs leading-relaxed">Flexibility rights on a range of set assets.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>