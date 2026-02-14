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
            Equity and Debt Capital Market
        </h3>
      </div>
    </section>

    <!-- GREEN INTRO SECTION -->
    <section class="bg-green-700 text-white py-12 px-6 md:px-16">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">
       
      </h2>
      <p class="text-sm md:text-base leading-relaxed max-w-4xl">
    DPH advises clients on accessing capital markets through well-structured equity and debt solutions that support growth, balance sheet optimization, and long-term financial sustainability. We work with corporates, financial institutions, project sponsors, and public sector entities to design and execute capital raising strategies aligned with market conditions, regulatory requirements, and investor expectations.

Our capital markets advisory combines market insight, financial structuring expertise, and transaction execution support to help clients raise capital efficiently and responsibly.
      </p>
    </section>

 <!-- WHAT WE DO TITLE -->
<section class="bg-white py-10 px-6 md:px-16">
  <h2 class="text-green-700 text-xl font-semibold">
    Our Capital Markets Advisory Offerings
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
          Equity Capital Markets
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
           We support clients seeking equity financing through private placements, rights issues, and other equity-linked transactions. 
           Our advisory services cover capital structuring, valuation support, transaction readiness, investor positioning, 
           and regulatory coordination to ensure successful equity raises.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
          Debt  Capital Markets
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
           DPH provides advisory on debt financing solutions including bonds, commercial papers, notes, 
           and other structured debt instruments. We assist clients in selecting appropriate instruments, pricing strategies, 
           tenor optimization, 
           and credit enhancement structures to achieve optimal funding outcomes.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
        Issuer & Sponsor Advisory
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            We advise issuers and project sponsors on capital markets strategy, transaction sequencing, and market entry timing, ensuring alignment with corporate objectives and prevailing market dynamics.
          </p>
        </div>

        <div class="bg-white p-20">
          <h3 class="font-semibold text-base mb-2">
            Public Sector & Developmnet Capital
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
           Our team supports government entities and development-focused organizations in accessing capital markets for infrastructure and development projects, 
           with a focus on sustainable funding structures and compliance with regulatory and governance frameworks.
          </p>
        </div>

      </div>
  
  </div>
</section>


<!-- OUR APPROACH -->
<section class="py-14 px-6 md:px-16 bg-white">
  <h2 class="text-green-700 text-xl font-semibold mb-8">
   How We Add Value
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
    
    <!-- Card 1 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
        Market Responsive Structuring
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
       We design capital market solutions that reflect current investor appetite, liquidity conditions, and regulatory realities
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
       Strong Transaction Discipline
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
       Our advisory emphasizes rigorous preparation, clear documentation, and coordinated execution to reduce transaction risk.
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col">
      <div class="bg-green-700 text-white py-3 text-center font-semibold text-sm">
       End to End Support
      </div>
      <div class="bg-gray-200 p-20 text-sm text-gray-700 flex-1">
       From early-stage structuring through issuance and post-transaction support, 
       we provide continuous advisory across the transaction lifecycle.
      </div>
    </div>

  </div>
</section>

  </div>
</template>
