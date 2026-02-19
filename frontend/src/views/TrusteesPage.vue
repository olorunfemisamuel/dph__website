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
        <div class="relative w-full h-40 sm:h-44 md:h-70 overflow-hidden">
        <img 
          src="@/assets/securitiesbannerimg.png" 
          alt="About Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
          Trustees
        </h3>
      </div>
    </section>

    <!-- Why Choose Us -->
     
   

<!-- IMAGE + GREEN CONTENT BLOCK -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
  <div class="flex flex-col md:flex-row items-stretch gap-6">

    <!-- LEFT IMAGE -->
    <div class="relative md:w-1/3 w-full right-[-50px]">
      <img
        src="@/assets/TrusteesBoximg.png"
        alt="Client Meeting"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>

    <!-- RIGHT GREEN BOX -->
    <div class="md:w-2/3 w-full bg-[#0B4D2E] rounded-xl p-6 sm:p-8 flex items-center h-[368px] mt-12 ">
      <p class="text-white text-sm sm:text-[13px] leading-relaxed">
        Our clients rely on us to deliver first-class trust services tailored
        to both local and international standards. Drawing on deep professional
        expertise, strong governance infrastructure, and regulatory oversight,
        we provide comprehensive fiduciary, custody, and accounting services
        for every client we serve.
      </p>
    </div>

  </div>
</section>


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
    <!-- <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 space-y-8"> -->

      <!-- Reusable Card Template -->
      <!-- <div class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg"> -->
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
      <!-- <div class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
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
      <!-- <div class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
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
      <!-- <div class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
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
        </div> -->

        <!-- <div class="md:w-1/3 w-full relative">
          <img
            src="@/assets/securitiesimage.png"
            alt="Stockbroking"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

    </section> -->




 <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6">
  <div class="relative space-y-0">

    <div class="sticky top-24 flex flex-col md:flex-row bg-[#F0F5F7] rounded-3xl overflow-hidden min-h-[350px] shadow-2xl border border-white/20 transition-all duration-500"
         style="margin-bottom: 100px;">
      <div class="md:w-2/3 w-full p-8 sm:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-sm">
        <h4 class="text-[#168223] font-bold text-2xl mb-4">Fixed Income Securities</h4>
        <p class="text-gray-800 text-base leading-relaxed">
          The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services.
        </p>
      </div>
      <div class="md:w-1/3 w-full">
        <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Securities" />
      </div>
    </div>

    <div class="sticky top-32 flex flex-col md:flex-row bg-[#CBDDCC] rounded-3xl overflow-hidden min-h-[350px] shadow-2xl border border-white/20 -mt-40 transition-all duration-500"
         style="margin-bottom: 100px;">
      <div class="md:w-2/3 w-full p-8 sm:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-sm">
        <h4 class="text-[#168223] font-bold text-2xl mb-4">Equities</h4>
        <p class="text-gray-800 text-base leading-relaxed">
          We offer secondary market trading services for clients who want to buy and sell their listed Shares and Bonds on the floor of the Nigerian Stock Exchange.
        </p>
      </div>
      <div class="md:w-1/3 w-full">
        <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Equities" />
      </div>
    </div>

    <div class="sticky top-40 flex flex-col md:flex-row bg-[#F0F5F7] rounded-3xl overflow-hidden min-h-[350px] shadow-2xl border border-white/20 -mt-40 transition-all duration-500"
         style="margin-bottom: 100px;">
      <div class="md:w-2/3 w-full p-8 sm:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-sm">
        <h4 class="text-[#168223] font-bold text-2xl mb-4">Derivatives Instrument</h4>
        <p class="text-gray-800 text-base leading-relaxed">
          Our team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions.
        </p>
      </div>
      <div class="md:w-1/3 w-full">
        <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Derivatives" />
      </div>
    </div>

    <div class="sticky top-48 flex flex-col md:flex-row bg-[#CBDDCC] rounded-3xl overflow-hidden min-h-[350px] shadow-2xl border border-white/20 -mt-40 transition-all duration-500">
      <div class="md:w-2/3 w-full p-8 sm:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-sm">
        <h4 class="text-[#168223] font-bold text-2xl mb-4">Commodities Trading</h4>
        <p class="text-gray-800 text-base leading-relaxed">
          Through our boutiques of experts, we strive to achieve a culture of excellence and innovation that remains the hallmark of our service delivery.
        </p>
      </div>
      <div class="md:w-1/3 w-full">
        <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Commodities" />
      </div>
    </div>

  </div>
</section>






  </div>
</template>
