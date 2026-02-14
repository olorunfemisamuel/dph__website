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
          Alternative Investtments
        </h3>
      </div>
    </section>

    <!-- GREEN INTRO SECTION -->
    <section class="bg-green-700 text-white py-12 px-6 md:px-16">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">
       
      </h2>
      <p class="text-sm md:text-base leading-relaxed max-w-4xl">
  DPH provides a comprehensive range of advisory services focused on alternative investments, helping clients access non-traditional asset classes to achieve portfolio diversification, long-term growth, 
  and attractive risk-adjusted returns. Our approach combines rigorous analysis, strategic structuring, and practical execution to deliver solutions that meet both financial and developmental objectives.
      </p>
    </section>

 <!-- WHAT WE DO TITLE -->
<section class="bg-white py-10 px-6 md:px-16">
  <h2 class="text-green-700 text-xl font-semibold">
  Our Alternative Investment Servives
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
         Private Equity and Venture Capital
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
          We advise clients on investments in private companies across growth, expansion, 
          and restructuring stages. Our services include opportunity assessment, valuation support, 
          transaction structuring, and exit planning to maximize returns.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
         Private Credit And Structured Finance
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
           DPH provides advisory services on alternative credit solutions, including private debt, mezzanine financing, and hybrid instruments. These structures are designed to provide flexible 
           capital solutions where traditional financing may be limited.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
        Infrastructure and Real  Asset Investment
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Our team supports investments in infrastructure, real estate, energy, and other real assets, focusing on long-term value creation, stable cash flows, and effective risk management.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
            Impact and Development Investments
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
          We assist clients in structuring investments that generate measurable social, economic, 
          or environmental outcomes alongside financial returns, supporting projects in sectors such as energy, 
          housing, and community development.
          </p>
        </div>

      </div>
  
  </div>
</section>


<!-- OUR APPROACH -->
<section class="py-14 px-6 md:px-16 bg-white">
  <h2 class="text-green-700 text-xl font-semibold mb-8">
  Why Choose Dph for Altenative Investment
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
    
    <!-- Card 1 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
      Proven Track Record
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
     DPH has successfully advised investors and sponsors on a variety of alternative investment opportunities, 
     ensuring well-structured and investable solutions.
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
      Comprehensive Solutions
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
      Our services are tailored to the specific requirements of each client, combining financial insight, market knowledge, and practical execution to deliver sustainable results.
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
      Expert Advisory Team
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
        Our advisors bring extensive experience in private markets, real assets, and structured finance, 
        enabling us to provide actionable 
        insights and effective investment solutions.
      </div>
    </div>

  </div>
</section>

  </div>
</template>
