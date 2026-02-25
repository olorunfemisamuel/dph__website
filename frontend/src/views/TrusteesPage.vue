<script setup lang="ts">
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

    <!-- Image + Green Content Block -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div class="flex flex-col md:flex-row items-stretch gap-6">

        <!-- Left Image -->
        <div class="relative md:w-1/3 w-full right-[-50px]">
          <img
            src="@/assets/TrusteesBoximg.png"
            alt="Client Meeting"
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <!-- Right Green Box -->
        <div class="md:w-2/3 w-full bg-[#0B4D2E] rounded-xl p-6 sm:p-8 flex items-center h-[368px] mt-12">
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

    <!-- Cards Section — unstacked, normal flow -->
    <section class="max-w-7xl mx-auto py-12 px-4 sm:px-6 space-y-6">

      <!-- Secured and Unsecured Note Issuances -->
      <div id="secured-unsecured" class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-3xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-bold text-2xl mb-3">Secured and Unsecured Note Issuances</h4>
          <p class="text-gray-800 text-sm leading-relaxed">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services.
          </p>
        </div>
        <div class="md:w-1/3 w-full h-48 md:h-auto">
          <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Securities" />
        </div>
      </div>

      <!-- Bond Trusteeship -->
      <div id="bond-trusteeship" class="flex flex-col md:flex-row bg-[#CBDDCC] rounded-3xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-bold text-2xl mb-3">Bond Trusteeship</h4>
          <p class="text-gray-800 text-sm leading-relaxed">
            We offer secondary market trading services for clients who want to buy and sell their listed Shares and Bonds on the floor of the Nigerian Stock Exchange.
          </p>
        </div>
        <div class="md:w-1/3 w-full h-48 md:h-auto">
          <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Equities" />
        </div>
      </div>

      <!-- Private Trust -->
      <div id="private-trust" class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-3xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-bold text-2xl mb-3">Private Trust</h4>
          <p class="text-gray-800 text-sm leading-relaxed">
            Our team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions.
          </p>
        </div>
        <div class="md:w-1/3 w-full h-48 md:h-auto">
          <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Derivatives" />
        </div>
      </div>

      <!-- Corporate Trust -->
      <div id="corporate-trust" class="flex flex-col md:flex-row bg-[#CBDDCC] rounded-3xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-bold text-2xl mb-3">Corporate Trust</h4>
          <p class="text-gray-800 text-sm leading-relaxed">
            Through our boutiques of experts, we strive to achieve a culture of excellence and innovation that remains the hallmark of our service delivery.
          </p>
        </div>
        <div class="md:w-1/3 w-full h-48 md:h-auto">
          <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Corporate Trust" />
        </div>
      </div>

      <!-- Estate Planning -->
      <div id="estate-planning" class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-3xl overflow-hidden shadow-lg">
        <div class="md:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h4 class="text-[#168223] font-bold text-2xl mb-3">Estate Planning</h4>
          <p class="text-gray-800 text-sm leading-relaxed">
            Through our boutiques of experts, we strive to achieve a culture of excellence and innovation that remains the hallmark of our service delivery.
          </p>
        </div>
        <div class="md:w-1/3 w-full h-48 md:h-auto">
          <img src="@/assets/securitiesimage.png" class="w-full h-full object-cover" alt="Estate Planning" />
        </div>
      </div>

    </section>

  </div>
</template>