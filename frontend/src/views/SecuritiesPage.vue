<script setup lang="ts">
  const managementData = [
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive Officer', img: new URL('@/assets/leadershipIMGS/mdIMG.jpg', import.meta.url).href },
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/mrijomaIMG.jpg', import.meta.url).href },
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/misscatherineIMG.jpg', import.meta.url).href },

]
</script>

<template>
  <div class="bg-white min-h-screen pb-20">
    
    <!-- Banner -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-52 sm:h-64 md:h-96 overflow-hidden">
        <img 
          src="@/assets/securitiesbannerimg.png" 
          alt="About Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
          Securties Trading
        </h3>
      </div>
    </section>



    <!-- Green Highlight Section -->
<section class="max-w-7xl mx-auto mt-12 px-4 sm:px-6">
  <div class="bg-[#0F3D1F] rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch">

    <!-- LEFT TEXT -->
    <div class="md:w-2/3 w-full p-6 sm:p-8 md:p-10 text-white">
      <p class="text-sm sm:text-[13px] leading-relaxed space-y-4">
        We have excellent IT processes and have also leveraged technology to provide
        instant trading capabilities to our clients from our devices. Our team is
        committed to helping clients make informed decisions that lead to maximized
        investment returns.
        <br /><br />
        Our Securities trading business provides access to primary market opportunities
        for listed equities (IPOs, Right issues, Offer for Sale and Offer for Subscription)
        and fixed income securities (Bonds and Treasury bills).
        <br /><br />
        In addition to this, we offer secondary market trading services for clients who
        want to buy and sell their listed Shares and Bonds on the floor of the Nigerian
        Stock Exchange.
      </p>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="md:w-1/3 w-full relative">
      <img
        src="@/assets/securitiesTradingimg.png"
        alt="Securities Meeting"
        class="w-full h-full object-cover"
      />
    </div>

  </div>
</section>


    <!-- Why Choose Us -->
    <!-- LEADERSHIP PREVIEW SECTION -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Our Leadership</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div
        v-for="(leader, index) in managementData.slice(0, 3)"
        :key="index"
        class="flex bg-[#f8fafc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <img
          :src="leader.img"
          alt="Leader"
          class="w-24 sm:w-28 h-full object-cover"
        />
        <div class="p-3 sm:p-5 flex flex-col justify-center">
          <h4 class="font-bold text-gray-800 text-sm sm:text-base">
            {{ leader.name }}
          </h4>
          <p class="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-1 font-medium">
            {{ leader.role }}
          </p>
        </div>
      </div>
    </div>
  </section>


    <!-- Securities Sections -->
    <!-- <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 space-y-8">
<div class="relative space-y-0"> -->


      <!-- Reusable Card Template -->
      <!-- <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-10 sticky top-24"> -->
        <!-- LEFT CONTENT -->
        <!-- <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Fixed Income Securities
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div> -->

        <!-- RIGHT IMAGE -->
        <!-- <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div> -->

      <!-- Equities Section -->
     <!-- <div
  class="flex flex-col md:flex-row bg-[#CBDDCC] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-20 sticky top-32 -mt-24">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Equities
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div> -->

        <!-- <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div> -->

      <!-- Derivatives Section -->
      <!-- <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-30 sticky top-40 -mt-24">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Derivatives Instrument
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div>

        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div> -->

      <!-- Commodities Trading -->
      <!-- <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-30 sticky top-40 -mt-24">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Commodities Trading
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div>

        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
      </div>

    </section> -->



<section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 space-y-8">

      <!-- Reusable Card Template -->
      <div class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
        <!-- LEFT CONTENT -->
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
           Stock Broking
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
           We provide world-class stockbroking services to both local and international investors in the Nigerian capital market. Our team offers a full range of capital market services, including trading, asset management, and strategic investment guidance. Clients retain control over investment decisions, while we execute trades and manage portfolios based on research, market insights, and professional experience.
          </p>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <!-- Equities Section -->
      <div class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Equities
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div>

        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <!-- Derivatives Section -->
      <div class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Derivatives Instrument
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div>

        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <!-- Commodities Trading -->
      <div class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-semibold text-lg mb-3">
            Commodities Trading
          </h4>
          <p class="text-black/90 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding
            is one of the leading M&A advisors in Africa. Providing the full spectrum
            of strategic Financial Advisory Services. Our Team delivers expert
            guidance and execution for mergers, acquisitions, divestitures, and
            cross-border transactions, offering innovative, fully integrated
            solutions to help clients navigate complex deals and achieve
            strategic goals.
          </p>
        </div>

        <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

    </section>



  </div>
</template>
