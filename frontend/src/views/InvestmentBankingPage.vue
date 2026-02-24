<script setup lang="ts">
</script>

<template>
  <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-40 sm:h-44 md:h-70 overflow-hidden">
      <img
        src="@/assets/Investmentbankingbanner.png"
        alt="About Banner"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
        Investment Banking
      </h3>
    </div>
  </section>

  <!-- Intro Section -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
    <div class="flex flex-col md:flex-row gap-6 items-start">
      <div class="w-full md:w-1/3">
        <img
          src="@/assets/InvestFirstImg.jpg"
          alt="Professional"
          class="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
      <div class="w-full md:w-2/3 bg-[#0D4D5C] text-white p-6 md:p-8 rounded-lg shadow-md">
        <p class="text-xs md:text-sm leading-relaxed mb-4">
          Deutsche Partners Holdings provides strategic financial solutions to help clients maximize value. We advise on mergers, acquisitions, project finance, and investments across multiple sectors, using expert analysis and financial modeling to guide capital decisions effectively.
        </p>
        <p class="text-xs md:text-sm leading-relaxed mb-4">
          We leverage technology and data to provide a computerized system of methods that are critical for success. For detailed studies, we utilize advanced tools and prediction models to help bring our transition to diverse environments.
        </p>
        <p class="text-xs md:text-sm leading-relaxed">
          Our team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross-border transactions, offering innovative, fully integrated solutions.
        </p>
      </div>
    </div>
  </section>

  <!-- Cards Section — unstacked, normal flow -->
  <section class="max-w-7xl mx-auto py-16 px-6 space-y-8">

    <!-- Mergers and Acquisitions (first) -->
    <!-- <div class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Mergers and Acquisitions</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <button class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300">
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div> -->

    <!-- Corporate Finance -->
    <div id="corporate-finance" class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Corporate Finance</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <RouterLink
              to="/corporate-finance"
              class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
            >
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Mergers and Acquisitions (second) -->
    <div id="mergersacquisitions" class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Mergers and Acquisitions</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <RouterLink
              to="/merger-acquisition"
              class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
            >
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Project Finance -->
    <div id="project-finance" class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Project Finance</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <RouterLink
              to="/corporate-finance"
              class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
            >
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Financial Advisory -->
    <div id="financial-advisory" class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Financial Advisory</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <RouterLink
              to="/financial-advisory"
              class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
            >
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Equity and Debt Capital Market -->
    <div id="equity-debt-capital-market" class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Equity and Debt Capital Market</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <RouterLink
              to="/equity-debt-capital-market"
              class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
            >
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Alternative Investments -->
    <div id="alternative-investments" class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden shadow-lg">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Alternative Investments</h4>
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
            The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          </p>
          <div class="md:w-auto">
            <RouterLink
              to="/alternative-invest"
              class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
            >
              Read More
              <span class="flex items-center -space-x-1 text-lg"><span>›</span><span>›</span></span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-64 md:h-auto">
        <img src="@/assets/InvestmentBankingimg2.png" class="w-full h-full object-cover" />
      </div>
    </div>

  </section>
</template>