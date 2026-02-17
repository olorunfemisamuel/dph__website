<script setup lang = 'ts'>
</script>

<template>
    <div>
            <!-- HERO SECTION -->
      <section class="w-full overflow-hidden shadow-lg">
        <div class="relative w-full h-64 md:h-96 overflow-hidden">
          <img 
            src="@/assets/corporateTrust/corporatetrustIMG.png" 
            alt="About Banner" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
          <h3 class="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white font-bold text-3xl md:text-5xl z-10">
          Cooporate Trust
          </h3>
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section class="bg-gray-100 py-12 px-6 md:px-16">
        <div class="bg-white rounded-md shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          
          <!-- Image -->
          <div class="w-full md:w-1/2">
            <img 
              src="@/assets/corporateTrust/corporatetrustIMG2.png" 
              alt="Growth Chart" 
              class="w-full h-64 object-cover rounded-md"
            />
          </div>

          <!-- Text -->
          <div class="w-full md:w-1/2 text-gray-600 text-sm leading-relaxed">
            <p>
              We provide independent fiduciary services in trust legal and corporate and financial transactions, safeguarding the interests of investors and lenders.
              Our reputable fiduciary team ensures transparency and accountability.
            </p>
            <br />
            <p>
              We focus on confidentiality and compliance in corporate transactions and escrow services. Our services cut across Africa and the Middle East, 
              ensuring compliance with regulatory requirements, market best practices and safeguarding of client interests.
            </p>
          </div>
        </div>
      </section>

      <!-- SERVICES SECTION -->
      <section class="bg-gray-200 py-12 px-6 md:px-16">
        <h3 class="text-2xl font-semibold mb-8 text-gray-800">Our Services</h3>

        <div class="flex flex-wrap gap-6">
          
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-md shadow-sm w-full md:w-[30%]">
            <h4 class="font-semibold mb-3">Corporate Bond</h4>
            <p class="text-sm text-gray-600">
              We act as trustees to corporate debt securities issued by corporate entities or financial institutions and improve market structure of interest.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-md shadow-sm w-full md:w-[30%]">
            <h4 class="font-semibold mb-3">Loan Syndication</h4>
            <p class="text-sm text-gray-600">
              We serve as security trustee/agent in loan syndication and consortium lending transactions.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-md shadow-sm w-full md:w-[30%]">
            <h4 class="font-semibold mb-3">Debenture</h4>
            <p class="text-sm text-gray-600">
              We provide advisory services on debenture instruments, including the structuring and administration of fixed income securities.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="bg-white p-6 rounded-md shadow-sm w-full md:w-[30%]">
            <h4 class="font-semibold mb-3">Escrow Agency</h4>
            <p class="text-sm text-gray-600">
              We serve as escrow agents, securely holding funds/documents until the fulfilment of pre-defined transaction terms.
            </p>
          </div>

          <!-- Card 5 -->
          <div class="bg-white p-6 rounded-md shadow-sm w-full md:w-[30%]">
            <h4 class="font-semibold mb-3">Securitization</h4>
            <p class="text-sm text-gray-600">
              We act as trustee and security trustee to structure pooling, issuance and servicing of asset-backed securities.
            </p>
          </div>

          <!-- Card 6 -->
          <div class="bg-white p-6 rounded-md shadow-sm w-full md:w-[30%]">
            <h4 class="font-semibold mb-3">Note Issuance</h4>
            <p class="text-sm text-gray-600">
              We serve as note trustee and paying agent in issuance and servicing of commercial papers and structured note programmes.
            </p>
          </div>

        </div>
      </section>

    </div>
</template>
