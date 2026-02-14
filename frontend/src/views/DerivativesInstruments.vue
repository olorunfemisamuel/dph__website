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

      <!-- OUR COMPREHENSIVE PROJECT FINANCE SERVICE SECTION -->
      <section class="w-full bg-gray-50 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Our Comprehensive Project Finance Service</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="inline-block bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                Financial Structuring
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">
                We design robust financial frameworks that align with your project's unique requirements. Our team ensures optimal 
                capital allocation and risk distribution across all stakeholders.
              </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="inline-block bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                Risk Assessment
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">
                Our experts conduct thorough risk evaluations, identifying potential challenges and developing mitigation strategies 
                to safeguard your investment and ensure project success.
              </p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="inline-block bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                Funding Facilitation
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">
                Leverage our extensive network to secure the necessary funding for your project. We connect you with lenders, 
                investors, and financial institutions to meet your capital needs.
              </p>
            </div>

            <!-- Card 4 -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="inline-block bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                Transaction Advisory
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">
                From due diligence to deal closure, our advisory services guide you through every phase of the transaction, ensuring 
                transparency, compliance, and value maximization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CORE DERIVATIVES SERVICE SECTION -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Core Derivatives Service</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Item 1 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Swaps</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Interest rate swaps, currency swaps, and commodity swaps
              </p>
            </div>

            <!-- Item 2 -->
            <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Options</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Call and put options on various underlying assets
              </p>
            </div>

             <div>
              <h3 class="font-bold text-gray-800 text-base md:text-lg mb-3">Swaps</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Interest rate swaps, currency swaps, and commodity swaps
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
</template>