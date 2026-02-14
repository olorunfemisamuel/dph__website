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
             Equities
          </h3>
        </div>
      </section>

      <!-- INTRO TEXT SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <p class="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Our services in straightforward equity trading solutions designed to simplify stock transactions while maximizing 
            returns. We offer seamless access to a diverse range of equities, supported by intuitive tools and expert insights, 
            ensuring efficient execution and strategic growth for investors at all levels.
          </p>
          <p class="text-gray-700 text-sm md:text-base leading-relaxed">
            We empower users to make informed decisions effortlessly while navigating the equity markets with confidence and clarity, 
            driving sustainable portfolio growth and long-term financial success.
          </p>
        </div>
      </section>

      <!-- PLACEHOLDER IMAGE SECTION -->
      <section class="w-full bg-white pb-12 md:pb-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <div class="w-full h-48 md:h-64 bg-gray-300 rounded-lg"></div>
        </div>
      </section>

      <!-- CORE EQUITIES SERVICES SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Core Equities Services</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div>
              <h3 class="font-bold text-green-700 text-base md:text-lg mb-3">Equity Research Access</h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                Gain real-time insights into market trends with our comprehensive equity research platform. Access detailed 
                reports, stock analysis, and forecasts to make informed investment decisions.
              </p>
            </div>

            <!-- Card 2 -->
            <div>
              <h3 class="font-bold text-green-700 text-base md:text-lg mb-3">Investment-Grade Utilities</h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                Our state-of-the-art tools provide in-depth analysis of investment-grade stocks and utilities, offering insights 
                into credit ratings, financial health, and market positioning for safer equity investments.
              </p>
            </div>

            <!-- Card 3 -->
            <div>
              <h3 class="font-bold text-green-700 text-base md:text-lg mb-3">International Capabilities</h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                Expand your portfolio with access to global equity markets. Our platform enables seamless trading and investment 
                across international exchanges, diversifying your portfolio with global opportunities.
              </p>
            </div>

            <!-- Card 4 -->
            <div>
              <h3 class="font-bold text-green-700 text-base md:text-lg mb-3">Equity Derivatives & Risk Management</h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                Safeguard your investments with advanced risk management strategies and equity derivatives. Our tools allow 
                you to hedge positions, manage volatility, and optimize returns with precision.
              </p>
            </div>

            <!-- Card 5 -->
            <div>
              <h3 class="font-bold text-green-700 text-base md:text-lg mb-3">Personalized Allocation Strategies</h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                Tailored investment strategies designed to suit individual risk profiles and financial goals. Leverage our 
                AI-powered insights to allocate equity assets effectively.
              </p>
            </div>

            <!-- Card 6 -->
            <div>
              <h3 class="font-bold text-green-700 text-base md:text-lg mb-3">Alternative Equities Options</h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                Explore alternative equity investments including ESG-focused stocks, thematic funds, and niche market opportunities 
                for diversified exposure and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>