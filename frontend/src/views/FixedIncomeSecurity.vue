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
             Fixed Income Security
          </h3>
        </div>
      </section>

      <!-- INTRO TEXT SECTION -->
      <section class="w-full bg-blue-900 py-8 md:py-12">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <p class="text-white text-sm md:text-base leading-relaxed">
            Our leading-edge solutions enhance investment decision-making and operational efficiency through real-time access 
            to comprehensive fixed income data and analytics. We empower clients to navigate complex markets with confidence, 
            delivering actionable insights and seamless integration to drive superior investment outcomes and strategic growth 
            in the evolving fixed income landscape.
          </p>
        </div>
      </section>

      <!-- KEY SERVICE HIGHLIGHTS SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Key Service Highlights</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div class="bg-blue-900 text-white px-6 py-4">
                <h3 class="font-bold text-base md:text-lg">Comprehensive Coverage & Corporate Trading</h3>
              </div>
              <div class="p-6 text-gray-700 text-sm md:text-base">
                <p>
                  Support trading and investments in FGN Bonds, Treasury Bills, T-Bills, and State Governments Bonds securities 
                  and investment.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div class="bg-blue-900 text-white px-6 py-4">
                <h3 class="font-bold text-base md:text-lg">Green & Social's Market Access</h3>
              </div>
              <div class="p-6 text-gray-700 text-sm md:text-base">
                <p>
                  Dedicated platform to service the fast-growing space within including green bonds and social/sustainability 
                  linked securities.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div class="bg-blue-900 text-white px-6 py-4">
                <h3 class="font-bold text-base md:text-lg">Optimized Asset Allocation</h3>
              </div>
              <div class="p-6 text-gray-700 text-sm md:text-base">
                <p>
                  Leverage AI-driven models to optimize your fixed income portfolio, balancing risk and return across various 
                  securities. Our tools provide tailored asset allocation strategies for maximum efficiency.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div class="bg-blue-900 text-white px-6 py-4">
                <h3 class="font-bold text-base md:text-lg">Multi-Asset Portfolio Management</h3>
              </div>
              <div class="p-6 text-gray-700 text-sm md:text-base">
                <p>
                  Manage portfolios that seamlessly integrate multiple fixed income asset classes. Our platform offers flexibility 
                  to switch between asset classes and tailor portfolios to client-specific needs.
                </p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div class="bg-blue-900 text-white px-6 py-4">
                <h3 class="font-bold text-base md:text-lg">Yield Optimization</h3>
              </div>
              <div class="p-6 text-gray-700 text-sm md:text-base">
                <p>
                  Maximize returns through cutting-edge tools for yield curve analysis and bond pricing, enabling informed 
                  investment decisions.
                </p>
                <p class="mt-3">
                  Our technology employs proprietary and open-source quantitative models to enhance portfolio yields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>