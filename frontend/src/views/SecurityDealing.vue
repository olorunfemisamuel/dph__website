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
              Security Dealing
          </h3>
        </div>
      </section>

      <!-- INTRO SECTION WITH IMAGE -->
      <section class="w-full bg-green-700 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Text Content -->
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
            <!-- Image -->
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

      <!-- KEY SERVICE HIGHLIGHTS SECTION -->
      <section class="w-full bg-gray-50 py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Key Service Highlights</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md">
              <div class="bg-green-700 text-white px-6 py-4">
                <h3 class="font-bold text-lg">Buy-Side Dealing Solutions</h3>
              </div>
              <div class="p-6 text-gray-700">
                <p>
                  Our platform provides seamless capabilities for broking deals in the primary and 
                  secondary bond and equity markets through integration with market infrastructure 
                  and other execution points and platforms.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md">
              <div class="bg-green-700 text-white px-6 py-4">
                <h3 class="font-bold text-lg">KYC Validation/Due Diligence/KYT</h3>
              </div>
              <div class="p-6 text-gray-700">
                <p>
                  We provide end-to-end processing and validation services for onboarding clients, 
                  service work and information on vendors and third parties.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md">
              <div class="bg-green-700 text-white px-6 py-4">
                <h3 class="font-bold text-lg">Liquidity/Funding/Asset Management</h3>
              </div>
              <div class="p-6 text-gray-700">
                <p>
                  We seamlessly manage dealing orders and activity through integration with multiple 
                  platforms and counterparties with relevance to cash and non-derivative bond 
                  markets.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md">
              <div class="bg-green-700 text-white px-6 py-4">
                <h3 class="font-bold text-lg">Regulatory Compliance Provisions</h3>
              </div>
              <div class="p-6 text-gray-700">
                <p>
                  Our proprietary and designed-to-suit service portals support optimized automation 
                  and management for regulatory reporting in a timely fashion.
                </p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md">
              <div class="bg-green-700 text-white px-6 py-4">
                <h3 class="font-bold text-lg">GDPR/Privacy Integration</h3>
              </div>
              <div class="p-6 text-gray-700">
                <p>
                  End-to-end workflows for boosting business outlook management/privacy protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>