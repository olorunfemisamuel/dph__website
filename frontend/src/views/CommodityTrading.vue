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
    <!-- INTRO TEXT SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-10 items-center">
          <p class="text-gray-700 text-sm md:text-base leading-relaxed md:w-1/2">
            Delivering a holistic, feature-rich Commodities Office, with a powerful combination of real-time market data, 
            advanced analytics, and seamless integration across trading, risk management, and compliance functions. Designed 
            to empower commodity traders and portfolio managers with the tools they need to navigate volatile markets, optimize 
            strategies, and ensure operational efficiency. Our solution supports a wide range of commodities—from energy and 
            metals to agriculture—offering unparalleled flexibility and scalability to meet the unique demands of your business. 
            With cutting-edge technology and deep industry expertise, we enable smarter decisions, faster execution, and sustained 
            competitive advantage in the global commodities market.
          </p>
          <div class="md:w-1/2">
            <img
              src="@/assets/assetmangbanner.jpg"
              alt="Commodity Trading"
              class="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <!-- COMPREHENSIVE COMMODITY PORTFOLIO SECTION -->

      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-green-700 mb-4 text-center">Comprehensive Commodity Portfolio</h2>
          <p class="text-gray-700 text-sm md:text-base leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            Our platform provides seamless access to a diverse range of commodities, empowering traders and investors to capitalize 
            on opportunities across global markets.
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <!-- Card 1 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/assetimgProd.png" alt="Precious Metals" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">Precious Metals</p>
            </div>

            <!-- Card 2 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/assetimgProd1.png" alt="Agricultural Goods" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">Agricultural Goods</p>
            </div>

            <!-- Card 3 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/assetimgProd1.png" alt="Chemical Exports" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">Chemical Exports</p>
            </div>

            <!-- Card 4 -->
            <div class="relative rounded-xl overflow-hidden shadow-md h-48 md:h-56">
              <img src="@/assets/assetimgProd1.png" alt="Industrial Materials" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">Industrial Materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>