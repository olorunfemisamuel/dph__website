<script setup lang = 'ts'>
import aboutusImage from '@/assets/aboutusImage.png'

</script>

<template>
  <div>
    <!-- HERO SECTION (UNCHANGED) -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-100 sm:h-64 md:h-96 overflow-hidden">
        <img 
          src="@/assets/assetmangbanner.jpg" 
          alt="About Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
     Financial Advisory
        </h3>
      </div>
    </section>

    <!-- GREEN INTRO SECTION -->
    <section class="bg-green-700 text-white py-12 px-6 md:px-16">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">
       
      </h2>
      <p class="text-sm md:text-base leading-relaxed max-w-4xl">
        We provide strategic financial advisory services designed to help organizations,
        institutions, and individuals make informed decisions, manage risk, and unlock
        sustainable value. Our expertise spans corporate finance, investment advisory,
        project structuring, and capital optimization.
      </p>
    </section>

 <!-- WHAT WE DO TITLE -->
<section class="bg-white py-10 px-6 md:px-16">
  <h2 class="text-green-700 text-xl font-semibold">
    What We Do
  </h2>
</section>

<!-- WHAT WE DO GRID WITH DARK BACKGROUND -->
<section
  class="py-16 px-6 md:px-16 bg-cover bg-center relative"
  :style="{ backgroundImage: `url(${aboutusImage})` }"
>
  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-black/70"></div>

  <!-- Content -->
  <div class="relative">
    <!-- <div class="max-w-6xl mx-auto border-2 border-blue-600 p-6"> -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
            Financial Strategy & Structuring
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            We support clients in designing robust financial strategies including capital
            structuring, funding options analysis, and long-term financial planning aligned
            with organizational objectives.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
            Transaction & Investment Advisory
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            DPH advises clients on full transaction lifecycle—covering project appraisal,
            business and asset valuation, investment analysis, due diligence support and
            transaction structuring for both public and private sector engagements.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
            Project & Infrastructure Finance
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            We assist in developing bankable projects by delivering end-to-end financial
            advisory services including project financing, PPP structuring, funding
            arrangements, and financial optimization to attract local and international capital.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
            Development & Public Finance Advisory
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Our team works with governments, MDAs, and development partners to strengthen
            financial governance, improve project funding mechanisms, and align financial
            decisions with development priorities and institutional objectives.
          </p>
        </div>

      </div>
  
  </div>
</section>


<!-- OUR APPROACH -->
<section class="py-14 px-6 md:px-16 bg-white">
  <h2 class="text-green-700 text-xl font-semibold mb-8">
    Our Approach
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
    
    <!-- Card 1 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
        Insight-Driven
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
        We offer precise financial modeling and stress-testing to evaluate investment
        opportunities and mitigate risks before capital is deployed.
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
        Independent & Objective
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
        Our deep understanding of global financial trends and lender requirements enables
        us to structure favorable terms and navigate complex regulatory environments
        effectively.
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
        Execution-Focused
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
        Achieving financial excellence requires meticulous planning and flawless
        implementation. We partner closely with our clients, providing high-quality
        advice and execution while maintaining the utmost discretion and integrity.
      </div>
    </div>

  </div>
</section>

  </div>
</template>
