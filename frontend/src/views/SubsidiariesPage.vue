<script setup lang="ts">
import subsidiariesIMAGE from '@/assets/subsidiariesIMAGE/subsidiariesIMAGE.png'
</script>

<template>
  <div class="w-full">

    <!-- HERO SECTION (UNCHANGED) -->
    <section
      class="relative h-[60vh] flex items-center justify-center text-center text-white"
    >
      <!-- Background image -->
      <img
        :src="subsidiariesIMAGE"
        alt="Buildings"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-3xl px-4">
        <p class="text-sm tracking-widest mb-2 uppercase">
          Our Subsidiaries
        </p>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          Building Value Across Industries
        </h1>
        <p class="text-gray-200">
          We operate across multiple sectors, delivering innovative
          financial and real estate solutions tailored to our clients.
        </p>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="max-w-7xl mx-auto px-4 py-20 space-y-32">
    
        <!----Card 0-Intial Card Position-->
          <div class="relative flex flex-col md:flex-row-reverse items-start gap-0">
        <!-- Tall Text Box -->
        <div id="capital-limited" class="bg-neutral-900 text-white p-10 rounded-lg w-full md:w-[380px] h-[500px] flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Deutsche Capital Limited</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
             We provide a wide range of financial advisory and capital raising services to our clients. Working closely with our clients to understand their exact needs bringing tailor made solutions. Delivering strategic advice and solutions including capital raising, risk management, and trade finance. We are adept at building long term relationships with our clients.
            </p>
          </div>
          <Router-Link to = "/Investment-Banking" class="bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition w-fit">
            View Services
          </Router-Link>
        </div>

        <!-- Image overlapping -->
        <img
          :src="subsidiariesIMAGE"
          alt="Real estate building"
          class="rounded-lg w-full md:w-[600px] h-[300px] object-cover md:absolute md:-mr-0 md:right-[380px] md:top-16 mt-6 md:mt-0"
        />
      </div>

      <!-- CARD 1 - Image overlaps on tall text box (left side) -->
      <div class="relative flex flex-col md:flex-row items-start gap-0">
        <!-- Tall Text Box -->
        <div id= "asset-managment-limited" class="bg-neutral-900 text-white p-10 rounded-lg w-full md:w-[380px] h-[500px] flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Deutsche Asset Management Limited</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
             We partner with our clients to protect their wealth for the future and bring immense value to transactions. We offer wealth creation opportunities through a unique blend of traditional asset management and alternative investment services. We enable businesses to thrive, and help our clients to maximize their returns, whilst ensuring that their objectives are realized. We are strategically positioned to take advantage of growth opportunities in Africa on behalf of our clients.
            </p>
          </div>
          <Router-Link to= "/Asset-Management" class="bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition w-fit">
            View Services
          </Router-link>
        </div>

        <!-- Image overlapping -->
        <img
          :src="subsidiariesIMAGE"
          alt="Finance building"
          class="rounded-lg w-full md:w-[600px] h-[300px] object-cover md:absolute md:-ml-0 md:left-[380px] md:top-16 mt-6 md:mt-0"
        />
      </div>

      <!-- CARD 2 - Image overlaps on tall text box (right side) -->
      <div class="relative flex flex-col md:flex-row-reverse items-start gap-0">
        <!-- Tall Text Box -->
        <div id = "securities-limited" class="bg-neutral-900 text-white p-10 rounded-lg w-full md:w-[380px] h-[500px] flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Deutsche Securities Limited</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Our asset management arm focuses on innovative investment
              strategies across real estate, equities, and fixed income.
              We combine rigorous analysis with strategic positioning to
              maximize returns while managing risk effectively for our
              institutional and private clients.
            </p>
          </div>
          <Router-Link to = "/Securities-Trading" class="bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition w-fit">
            View Services
          </Router-Link>
        </div>

        <!-- Image overlapping -->
        <img
          :src="subsidiariesIMAGE"
          alt="Real estate building"
          class="rounded-lg w-full md:w-[600px] h-[300px] object-cover md:absolute md:-mr-0 md:right-[380px] md:top-16 mt-6 md:mt-0"
        />
      </div>

      <!-- CARD 3 - Image overlaps on tall text box (left side) -->
      <div class="relative flex flex-col md:flex-row items-start gap-0">
        <!-- Tall Text Box -->
        <div id= "private-limited" class="bg-neutral-900 text-white p-10 rounded-lg w-full md:w-[380px] h-[500px] flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold mb-4"> Deutsche Private Equity Limited</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Our securities division offers comprehensive brokerage and
              trading services across multiple asset classes. We provide
              institutional-grade execution, research, and advisory services
              to help clients navigate complex market conditions and achieve
              their investment objectives.
            </p>
          </div>
          <button class="bg-white text-black px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition w-fit">
            View Services
          </button>
        </div>

        <!-- Image overlapping -->
        <img
          :src="subsidiariesIMAGE"
          alt="Securities chart"
          class="rounded-lg w-full md:w-[600px] h-[300px] object-cover md:absolute md:-ml-0 md:left-[380px] md:top-16 mt-6 md:mt-0"
        />
      </div>

    </section>

  </div>
</template>