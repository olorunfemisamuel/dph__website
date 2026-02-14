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
      <section class="w-full bg-green-700 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <p class="text-white text-sm md:text-base leading-relaxed">
            Our platform delivers a fully integrated foreign exchange solution, combining real-time FX data, advanced trading tools, 
            and robust risk management capabilities across spot, forward, and options markets. Designed to support corporate treasurers, 
            institutional traders, and portfolio managers, our FX solution enables efficient currency management, seamless execution, 
            and strategic hedging in a fast-moving global marketplace. With comprehensive coverage of major and emerging market currencies, 
            powerful analytics, and deep liquidity access, we empower clients to navigate currency volatility, optimize cross-border 
            transactions, and achieve superior outcomes in their FX operations.
          </p>
        </div>
      </section>

      <!-- COMPREHENSIVE COMMODITY PORTFOLIO SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Comprehensive Commodity Portfolio</h2>

          <div class="space-y-8">
            <!-- Item 1 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Spot & Forward FXUnds</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Execute spot transactions and forward contracts across a wide range of currency pairs. Our platform offers competitive 
                pricing and deep liquidity, enabling clients to manage FX exposure and lock in future exchange rates with confidence.
              </p>
            </div>

            <!-- Item 2 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Foreign Currency Swaps</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Utilize currency swaps to efficiently manage cross-border funding and mitigate exchange rate risk. Our tools streamline 
                swap execution, collateral management, and ongoing valuation for complex FX strategies.
              </p>
            </div>

            <!-- Item 3 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Hedging Strategies</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Protect your business from adverse currency movements with tailored hedging solutions. Whether using forwards, options, 
                or structured products, our platform provides the analytics and execution capabilities to implement effective FX hedges 
                aligned with your risk appetite and business objectives.
              </p>
            </div>

            <!-- Item 4 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Cross-Border Payment Solutions</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Streamline international payments with our integrated FX and payment infrastructure. Benefit from transparent pricing, 
                fast settlement, and seamless connectivity to global payment networks, reducing costs and operational complexity.
              </p>
            </div>

            <!-- Item 5 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Multi-Currency Management</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Manage portfolios denominated in multiple currencies with ease. Our tools support consolidated reporting, real-time 
                valuation, and scenario analysis, giving you a holistic view of your FX exposures and the agility to respond to market 
                shifts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>