<script setup lang="ts">
// No logic required for this static layout
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
    <!-- <section class="bg-white w-full py-12 sm:py-16 px-4 sm:px-6 mt-10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div class="md:w-1/3">
          <h2 class="text-2xl sm:text-3xl md:text-3xl font-bold text-[#2e8b3b]">Why CHOOSE US ?</h2>
        </div>
        
        <div class="md:w-2/3 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
          <p class="text-gray-700 leading-relaxed text-sm sm:text-[13px]">
            We have excellent IT processes and have leveraged technology to provide instant trading capabilities to our clients from our devices. Our team is committed to helping clients make informed decisions that lead to maximized investment returns. Our Securities trading business provides access to primary market opportunities for listed equities (IPOs, Right issues, Offer for Sale and Offer for Subscription) and fixed income securities (Bonds and Treasury bills). In addition, we offer secondary market trading services for clients who want to buy and sell their listed Shares and Bonds on the floor of the Nigerian Stock Exchange.
          </p>
        </div>     
      </div>
    </section> -->

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
