<script lang="ts" setup>
// static page – no logic needed

import InsightsPage from '@/components/InsightsPage.vue';
</script>

<template>
 <section class="bg-white min-h-screen pt-28 pb-12 px-4">
    <!-- ARTICLE WRAPPER -->
    <div class="max-w-3xl mx-auto">

      <!-- CATEGORY -->
      <p class="text-xs uppercase tracking-widest text-gray-400 mb-3 text-center">
      MARKET TRENDS
      </p>

      <!-- TITLE -->
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
      Market Trends 2024
      </h1>

      <!-- FEATURED IMAGE -->
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="@/assets/insightsimg.png"
          alt="Private Banking"
          class="w-full h-56 sm:h-64 object-cover"
        />
      </div>

      <!-- ARTICLE CONTENT -->
      <div class="space-y-5 text-sm text-gray-700 leading-relaxed">
        <p>
          High net-worth individuals continue to seek innovative private banking
          solutions that combine access, flexibility, and long-term value
          creation. As markets evolve, the demand for personalized wealth
          management strategies has become increasingly important.
        </p>

        <p>
          At Deutsche Partners Holding, our private banking offering is designed
          to provide clients with a holistic financial experience — combining
          investment advisory, structured products, estate planning, and
          succession strategies tailored to individual objectives.
        </p>

        <p>
          Through advanced technology, robust governance frameworks, and deep
          market insight, we deliver solutions that enable clients to preserve
          wealth, capitalize on emerging opportunities, and navigate complex
          financial landscapes with confidence.
        </p>

        <p>
          Our relationship-driven approach ensures transparency, discretion, and
          long-term alignment with client goals while maintaining the highest
          ethical and regulatory standards.
        </p>
      </div>

      <!-- RELATED STORIES -->
      <div class="mt-14">
        <h3 class="text-sm font-semibold uppercase tracking-widest text-gray-700 mb-6">
          Related Stories
        </h3>

        <!-- <div class="grid grid-cols-1 sm:grid-cols-3 gap-4"> -->
          <!-- CARD -->
          <!-- <div class="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
            <img
              src="@/assets/insightsimg.png"
              alt="Story 1"
              class="w-full h-24 object-cover"
            />
            <div class="p-3">
              <p class="text-xs text-gray-500 mb-1">Investment Banking</p>
              <p class="text-xs font-medium text-gray-800">
                Understanding Capital Market Trends
              </p>
            </div>
          </div> -->

          <!-- CARD -->
          <!-- <div class="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
            <img
              src="@/assets/insightsimg.png"
              alt="Story 2"
              class="w-full h-24 object-cover"
            />
            <div class="p-3">
              <p class="text-xs text-gray-500 mb-1">Asset Management</p>
              <p class="text-xs font-medium text-gray-800">
                Portfolio Structuring for Long-Term Growth
              </p>
            </div>
          </div> -->

          <!-- CARD -->
          <!-- <div class="bg-white border rounded-lg overflow-hidden hover:shadow-md transition">
            <img
              src="@/assets/insightsimg.png"
              alt="Story 3"
              class="w-full h-24 object-cover"
            />
            <div class="p-3">
              <p class="text-xs text-gray-500 mb-1">Private Equity</p>
              <p class="text-xs font-medium text-gray-800">
                Unlocking Value in Emerging Markets
              </p>
            </div>
          </div> -->

          <InsightsPage />
        </div>
      </div>

    <!-- </div> -->
  </section>
</template>
