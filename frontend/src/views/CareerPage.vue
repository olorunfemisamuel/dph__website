<script setup lang="ts">
import InsightsPage from '@/components/InsightsPage.vue';
</script>

<template>
  <!-- Hero Section -->
  <section class="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] overflow-hidden">
    <img
      src="@/assets/CareerBannerImg.png"
      alt="Career"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 h-full flex items-end p-4 sm:p-6 md:p-10">
      <h1 class="text-white text-2xl sm:text-3xl md:text-3xl font-semibold">Career</h1>
    </div>
  </section>

  <!-- Job Search Section -->
  <section class="max-w-7xl mx-auto mt-10 px-4 sm:px-6">
    <h2 class="text-2xl font-semibold mb-6">Find your future job</h2>

    <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="Keywords"
        class="flex-1 min-w-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
      />
      <select class="flex-1 min-w-50 border border-gray-300 rounded-md px-4 py-3">
        <option>Department</option>
      </select>
      <select class="flex-1 min-w-50 border border-gray-300 rounded-md px-4 py-3">
        <option>Location</option>
      </select>
      <button class="bg-green-700 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-green-800 transition w-full sm:w-auto">
        Search
      </button>
    </div>
  </section>

  <!-- Image and Content Section -->
  <section class="max-w-7xl mx-auto mt-16 px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 class="text-2xl sm:text-3xl font-semibold mb-4">Build the future you want at DPH</h3>
      <p class="text-gray-600 leading-relaxed">
        We believe in creating an environment where innovation thrives and people are empowered to
        grow, collaborate, and make real impact.
      </p>
    </div>

    <div class="relative w-full">
      <img src="@/assets/CareerImg.png" class="rounded-xl shadow-lg w-full h-auto" alt="Team" />
   
     
    </div>
  </section>

  <!-- Why Join DPH Section -->
  <section class="max-w-7xl mx-auto mt-16 px-4 sm:px-6">
    <h3 class="text-2xl sm:text-3xl font-semibold mb-10">Why Join DPH?</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h4 class="font-semibold mb-2">Professional Growth</h4>
        <p class="text-gray-600 text-sm">We support continuous learning and career development.</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h4 class="font-semibold mb-2">Integrity</h4>
        <p class="text-gray-600 text-sm">We uphold honesty, transparency, and accountability.</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h4 class="font-semibold mb-2">Collaborative Culture</h4>
        <p class="text-gray-600 text-sm">Work with talented teams in a supportive environment.</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h4 class="font-semibold mb-2">Impact</h4>
        <p class="text-gray-600 text-sm">Build solutions that make a real difference.</p>
      </div>
    </div>
  </section>

  <!-- Insights Page Component -->
  <InsightsPage />
</template>
