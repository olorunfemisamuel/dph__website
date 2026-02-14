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
            Commodity Trading
          </h3>
        </div>
      </section>

      <!-- INTRO TEXT SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <p class="text-gray-700 text-sm md:text-base leading-relaxed">
            Delivering a holistic, feature-rich Commodities Office, with a powerful combination of real-time market data, 
            advanced analytics, and seamless integration across trading, risk management, and compliance functions. Designed 
            to empower commodity traders and portfolio managers with the tools they need to navigate volatile markets, optimize 
            strategies, and ensure operational efficiency. Our solution supports a wide range of commodities—from energy and 
            metals to agriculture—offering unparalleled flexibility and scalability to meet the unique demands of your business. 
            With cutting-edge technology and deep industry expertise, we enable smarter decisions, faster execution, and sustained 
            competitive advantage in the global commodities market.
          </p>
        </div>
      </section>

      <!-- COMPREHENSIVE COMMODITY PORTFOLIO SECTION -->
      <section class="w-full bg-gray-50 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Comprehensive Commodity Portfolio</h2>
          <p class="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            Our platform provides seamless access to a diverse range of commodities, empowering traders and investors to capitalize 
            on opportunities across global markets.
          </p>

          <div class="space-y-6">
            <!-- Item 1 -->
            <div class="border-l-4 border-green-700 pl-6">
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-2">Energy Commodities</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Trade in crude oil, natural gas, and renewable energy certificates with real-time pricing and market depth. Our tools 
                support hedging, speculative trading, and portfolio optimization.
              </p>
            </div>

            <!-- Item 2 -->
            <div class="border-l-4 border-green-700 pl-6">
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-2">Agricultural Goods</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Access markets for grains, livestock, and soft commodities like coffee and cocoa. Benefit from advanced analytics to 
                predict supply-demand dynamics and price volatility.
              </p>
            </div>

            <!-- Item 3 -->
            <div class="border-l-4 border-green-700 pl-6">
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-2">Metals and Minerals</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Engage in precious metals (gold, silver, platinum) and industrial metals (copper, aluminum, zinc) trading. Our platform 
                integrates spot and futures markets for comprehensive exposure.
              </p>
            </div>

            <!-- Item 4 -->
            <div class="border-l-4 border-green-700 pl-6">
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-2">Energy and Emission Credits</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Navigate the growing market for carbon credits and emission allowances. Stay ahead of regulatory changes with tools 
                designed for compliance and strategic positioning in ESG-focused investments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>