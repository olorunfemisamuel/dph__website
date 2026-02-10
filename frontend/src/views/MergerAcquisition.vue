<script setup lang="ts">
</script>

<template>
    <!-- HERO SECTION -->
  <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-100 sm:h-64 md:h-96 overflow-hidden">
      <img 
        src="@/assets/assetmangbanner.jpg" 
        alt="About Banner" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
     Meger and Acquisition
      </h3>
    </div>
  </section>

  <!-- CONTENT SECTION -->
  
  <section class="max-w-6xl mx-auto px-4 py-16">
    <!-- Intro Text -->
    <div class="mb-16">
      <p class="text-gray-700 leading-relaxed mb-6">
        At Deutsche Partners Holding (DPH), we view Mergers and Acquisitions not merely as transactions, but as transformative 
        milestones in your corporate journey. Our investment banking division offers world-class advisory services, employing deep 
        industry insights with global execution capabilities. We partner with corporations, private equity firms, and institutions to 
        navigate every phase of the deal lifecycle—from origination to closing.
      </p>
      <p class="text-gray-700 leading-relaxed">
        We work alongside our clients to architect tailored growth strategies that align directly with their corporate vision, ensuring 
        they are poised to capitalize on market shifts during acquisitions, mergers, or divestitures.
      </p>
    </div>

    <!-- Core Services Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-green-700 mb-8">
        Our Core M&A<br>Advisory Services
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Strategic Growth Planing</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            We do not just execute deals; we form M&A roadmaps aligned with your long-term vision and market dynamics. Our deep industry-level expertise, supported by experts, helps competitive advantages in every turn.
          </p>
        </div>

        <!-- Service 2 -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Target Identification & Synergy Analysis</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Timing aren't our everything. We provide expert sourced valuation and identify the best partners. Our proprietary datasets and deep sector expertise combine to ensure a deal-based and—rapid integration.
          </p>
        </div>

        <!-- Service 3 -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Maximizing Shareholder Value</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            our primary focus is driving sustainable growth. We structure deal formats on favorable terms, demonstrating shareholder returns, ensuring very transaction enhances competitive strategic goals.
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="bg-green-700 text-white py-10">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="mb-6">
          Stay updated with the latest news and insights from Deutsche Partners Holding.
        </p>
        <form
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            class="w-full sm:flex-1 bg-white/10 border border-white/30 px-4 sm:px-6 py-3 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20"
          />
          <button
            type="submit"
            class="w-full sm:w-auto border-2 border-white px-8 sm:px-10 py-3 rounded font-bold hover:bg-white hover:text-[#2e8b3b] transition duration-300 uppercase text-sm sm:text-base tracking-widest"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  

</template>