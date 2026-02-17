<script setup lang="ts">
// No logic required for this static design
</script>

<template>
 <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-52 sm:h-64 md:h-96 overflow-hidden">
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



  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
    <div class="flex flex-col md:flex-row gap-6 items-start">
      
      <!-- Image on Left -->
      <div class="w-full md:w-1/3">
        <img
          src="@/assets/InvestFirstImg.jpg"
          alt="Professional"
          class=" w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      <!-- Text Box on Right -->
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



  <!-- NEW SECTION: Image + Text Box -->
  

  <section class="max-w-7xl mx-auto py-16 px-6 space-y-10">
    <!-- STACKED SECTION -->
<div class="relative space-y-0">
  <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-10 sticky top-24">

  <div class="flex-1 p-10 flex flex-col justify-center">
    
    <h4 class="text-[#2554B9] font-bold text-3xl mb-4">
      Mergers and Acquisitions
    </h4>

    <!-- TEXT + BUTTON ROW -->
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

      <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
        The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
      </p>

      <!-- READ MORE BUTTON (IN WHITE SPACE AREA) -->
      <div class="md:w-auto">
        <button class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300">
          Read More
          <span class="flex items-center -space-x-1 text-lg">
            <span>›</span>
            <span>›</span>
          </span>
        </button>
      </div>

    </div>
  </div>

  <div class="w-full md:w-1/3 h-full">
    <img src="@/assets/InvestmentBankingimg2.png" class="w-2.5/5 h-full object-cover ml-40" />
  </div>

</div>


<!----Corporate Finance-->

      <div
  class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-10 sticky top-24">

  <div class="flex-1 p-10 flex flex-col justify-center">
    
    <h4 class="text-[#2554B9] font-bold text-3xl mb-4">
    Corporate Finance
    </h4>

    <!-- TEXT + BUTTON ROW -->
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

      <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
        The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
      </p>

      <!-- READ MORE BUTTON (IN WHITE SPACE AREA) -->
      <div class="md:w-auto">
       <RouterLink
  to="/corporate-finance"
  class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
>
  Read More
  <span class="flex items-center -space-x-1 text-lg">
    <span>›</span>
    <span>›</span>
  </span>
</RouterLink>

      </div>

    </div>
  </div>

  <div class="w-full md:w-1/3 h-full">
    <img src="@/assets/InvestmentBankingimg2.png" class="w-2.5/5 h-full object-cover ml-40" />
  </div>

</div>




         <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-10 sticky top-24">

  <div class="flex-1 p-10 flex flex-col justify-center">
    
    <h4 class="text-[#2554B9] font-bold text-3xl mb-4">
      Mergers and Acquisitions
    </h4>

    <!-- TEXT + BUTTON ROW -->
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

      <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
        The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
      </p>

      <!-- READ MORE BUTTON (IN WHITE SPACE AREA) -->
      <div class="md:w-auto">
      <RouterLink
  to="/merger-acquisition"
  class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
>
  Read More
  <span class="flex items-center -space-x-1 text-lg">
    <span>›</span>
    <span>›</span>
  </span>
</RouterLink>
      </div>

    </div>
  </div>

  <div class="w-full md:w-1/3 h-full">
    <img src="@/assets/InvestmentBankingimg2.png" class="w-2.5/5 h-full object-cover ml-40" />
  </div>

</div>


   <!-- <div
  class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-20 sticky top-32 -mt-24">

      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Corporate Finance</h4>
        <p class="text-black/90 text-xs leading-relaxed">
          Deutsche partners Holdings Provides Strategic financial solutions to help clients Maximize Value. We advise on mergers, acquisitions, Project Finance, and investments across multiple sectors, using expert analysis and financial modeling to guide capital decisions effectively.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg3.png" class="w-2.5/5 h-full object-cover" />
      </div>
    </div> -->



    <!----Project Finance-->

        
      <div
  class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-10 sticky top-24">

  <div class="flex-1 p-10 flex flex-col justify-center">
    
    <h4 class="text-[#2554B9] font-bold text-3xl mb-4">
  Project Finance
    </h4>

    <!-- TEXT + BUTTON ROW -->
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

      <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
        The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
      </p>

      <!-- READ MORE BUTTON (IN WHITE SPACE AREA) -->
      <div class="md:w-auto">
       <RouterLink
  to="/corporate-finance"
  class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
>
  Read More
  <span class="flex items-center -space-x-1 text-lg">
    <span>›</span>
    <span>›</span>
  </span>
</RouterLink>

      </div>

    </div>
  </div>

  <div class="w-full md:w-1/3 h-full">
    <img src="@/assets/InvestmentBankingimg2.png" class="w-2.5/5 h-full object-cover ml-40" />
  </div>

</div>

     <!-- <div
  class="flex flex-col md:flex-row-reverse bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-30 sticky top-40 -mt-24">

      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Structured Finance</h4>
        <p class="text-black/90 text-xs leading-relaxed">
          We provide custom-built debt solutions for clients with complex needs. Our team delivers expert guidance and execution for structured products, project finance, and asset-backed securities, offering integrated solutions to achieve strategic and long-term goals.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg4.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div> -->

    <!-- <div
  class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-40 sticky top-48 -mt-24">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Project Finance</h4>
        <p class="text-black/90 text-xs leading-relaxed">
          Our Project Finance team offers strategic financial guidance for large-scale projects across various sectors. We utilize expert financial modeling and risk assessment to ensure project feasibility and long-term sustainability.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg5.png" class="w-2.5/5 h-full object-cover" />
      </div>
    </div> -->



    <!----Financial Advisory-->

      <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-10 sticky top-24">

  <div class="flex-1 p-10 flex flex-col justify-center">
    
    <h4 class="text-[#2554B9] font-bold text-3xl mb-4">
    Financial Advisory
    </h4>

    <!-- TEXT + BUTTON ROW -->
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

      <p class="text-black/90 text-xs leading-relaxed md:w-3/4">
        The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
      </p>

      <!-- READ MORE BUTTON (IN WHITE SPACE AREA) -->
      <div class="md:w-auto">
      <RouterLink
  to="/financial-advisory"
  class="inline-flex items-center gap-1 border-2 border-[#2554B9] text-[#2554B9] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#2554B9] hover:text-white transition-all duration-300"
>
  Read More
  <span class="flex items-center -space-x-1 text-lg">
    <span>›</span>
    <span>›</span>
  </span>
</RouterLink>
      </div>

    </div>
  </div>

  <div class="w-full md:w-1/3 h-full">
    <img src="@/assets/InvestmentBankingimg2.png" class="w-2.5/5 h-full object-cover ml-40" />
  </div>

</div>

<!-- 
           <div
  class="flex flex-col md:flex-row-reverse bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-50 sticky top-50 -mt-24">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Structured Finance</h4>
        <p class="text-black/90 text-xs leading-relaxed">
          We provide custom-built debt solutions for clients with complex needs. Our team delivers expert guidance and execution for structured products, project finance, and asset-backed securities, offering integrated solutions to achieve strategic and long-term goals.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg6.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div> -->

    
       <div
  class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-50 sticky top-50 -mt-24">

      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Equity and Debt Capital Market</h4>
        <p class="text-black/90  text-xs leading-relaxed">
          The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
          
        </p>
        
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg7.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div>

      
           <!-- <div
  class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-58 sticky top-56 -mt-24">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Equity and Debt Capital Market</h4>
        <p class="text-black/90 text-sm leading-relaxed">
          Our Project Finance team offers strategic financial guidance for large-scale projects across various sectors. We utilize expert financial modeling and risk assessment to ensure project feasibility and long-term sustainability.
        </p>
      </div>
      <div class="w-full md:w-1/3 ">
        <img src="@/assets/InvestBankingimg7.png" class="w-2.5/5 h-full object-cover" />
      </div>
    </div> -->


     <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-58 sticky top-56 -mt-24">

      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Alternate Investment</h4>
        <p class="text-black/90  text-xs leading-relaxed">
          The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg4.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div>



    
       <!-- <div class="flex flex-col md:flex-row-reverse bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-60 sticky top-65 -mt-24">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Alternate Investment</h4>
        <p class="text-black/90 text-xs leading-relaxed">
        Deutsche partners Holdings Provides Strategic financial solutions to help clients Maximize Value, We advice on mergers, acquisitions, Project finance, and Investments across multiple sectors, using expert analysis and financial modeling to guide capital decisions effectively 
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/imageforinvestmentbankingdph.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div> -->

      <div
  class="flex flex-col md:flex-row bg-[#C4E5F2] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-60 sticky top-65 -mt-24">

      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Mergers and Acquisitions</h4>
        <p class="text-black/90  text-xs leading-relaxed">
          The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg4.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div>



     
       <!-- <div class="flex flex-col md:flex-row-reverse bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-60 sticky top-65 -mt-24">
      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Corporate Finance</h4>
        <p class="text-black/90 text-xs leading-relaxed">
         The Mergers and Aquisitions [M$A] Group at Deutsche parteners holding is one of the leading M$A advisior in Africa, Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divertitures, and cross border transaction, offerings innovative, fully integrated solutions to help clients navigate complexdeals and achieve statergic goals
        </p>
      </div>
      <div class="w-full md:w-1/3 ">
        <img src="@/assets/InvestBankingimg8.png" class="w-2.5/5 h-full object-cover" />
      </div>
    </div>
    </div> -->



       <div
  class="flex flex-col md:flex-row bg-[#F0F5F7] rounded-2xl overflow-hidden min-h-62.5 shadow-lg
         relative z-60 sticky top-65 -mt-24">

      <div class="flex-1 p-10 flex flex-col justify-center">
        <h4 class="text-[#2554B9] font-bold text-3xl mb-4">Corporate Finance</h4>
        <p class="text-black/90  text-xs leading-relaxed">
          The Mergers and Acquisitions (M&A) Group at Deutsche partners holding is one of the leading M&A advisors in Africa. Providing the full spectrum of strategic Financial Advisory Services. Our Team delivers expert guidance and execution for mergers, acquisitions, divestitures, and cross border transactions, offering innovative, fully integrated solutions to help clients navigate complex deals and achieve strategic goals.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/InvestBankingimg8.png" class="w-2.5/5 h-full object-cover ml-40" />
      </div>
    </div>
</div>

  </section>
</template>
