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
            Secured and Unsecured Notes Insurance
          </h3>
        </div>
      </section>

      <!-- INTRO SECTION WITH IMAGE -->
      <section class="w-full bg-white py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Image -->
            <div>
              <img 
                src="@/assets/assetmangbanner.jpg" 
                alt="Growth Chart" 
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <!-- Text Content -->
            <div class="text-gray-700  rounded-xl bg-gray-100 text-sm md:text-base leading-relaxed">
              <p>
                Our platform is designed to help safeguard secured and unsecured notes with comprehensive insurance solutions tailored 
                to your needs. Whether you are managing investment-grade debt, high-yield bonds, or structured notes, our tools provide 
                seamless policy management, risk assessment, and claims processing to protect your portfolio from default and credit 
                events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- OUR SERVICES SECTION -->
      <section class="w-full bg-gray-50 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Our Services</h2>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Service 1 -->
            <div class="flex gap-4">
              <div class="w-1 bg-green-700 flex-shrink-0"></div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">Underwriting services and agency forms</h3>
                <p class="text-gray-700 text-sm leading-relaxed">for support of insurance</p>
              </div>
            </div>

            <!-- Service 2 -->
            <div class="flex gap-4">
              <div class="w-1 bg-green-700 flex-shrink-0"></div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">Writing Support to Death/Maturity, including</h3>
                <p class="text-gray-700 text-sm leading-relaxed">the management of structured lending</p>
              </div>
            </div>

            <!-- Service 3 -->
            <div class="flex gap-4">
              <div class="w-1 bg-green-700 flex-shrink-0"></div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">Processing and distributing</h3>
                <p class="text-gray-700 text-sm leading-relaxed">correspondence for life/pensions contracts</p>
              </div>
            </div>

            <!-- Service 4 -->
            <div class="flex gap-4">
              <div class="w-1 bg-green-700 flex-shrink-0"></div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">Structures where new insurance and liabilities</h3>
                <p class="text-gray-700 text-sm leading-relaxed">onto SECURED/financial institutions</p>
              </div>
            </div>

            <!-- Service 5 -->
            <div class="flex gap-4">
              <div class="w-1 bg-green-700 flex-shrink-0"></div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">Managing finance, like mass WAGE</h3>
                <p class="text-gray-700 text-sm leading-relaxed">schemes</p>
              </div>
            </div>

            <!-- Service 6 -->
            <div class="flex gap-4">
              <div class="w-1 bg-green-700 flex-shrink-0"></div>
              <div>
                <h3 class="font-bold text-gray-800 text-base mb-2">Facilitating Legal/regulatory/tax</h3>
                <p class="text-gray-700 text-sm leading-relaxed">processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>