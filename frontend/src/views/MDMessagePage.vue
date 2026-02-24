<template>
  <!-- GREEN HEADER -->
  <section class="w-full overflow-hidden shadow-lg">
  <div class="relative w-full h-40 sm:h-44 md:h-70 overflow-hidden">
      <img 
        src="@/assets/mdIMG/mdIMG2.jpg" 
        alt="About Banner" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
      MD's Message
      </h3>
    </div>
  </section>


  <!-- WHITE SECTION WITH IMAGE + TEXT -->
  <div class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">

      <!-- IMAGE (LEFT SIDE) -->
      <div class="w-full md:w-[380px] flex-shrink-0">
        <img
          src="@/assets/mdIMG/Onuoha-NNACHI-DPH-Managing-Partner.jpg.webp"
          alt="Managing Director"
          class="w-full rounded-xl shadow-lg object-cover"
        />
      </div>

      <!-- TEXT (RIGHT SIDE) -->
      <div class="flex-1 text-sm text-gray-700 leading-relaxed">
        <p class="mb-6">
          At Deutsche Partners Holdings, our mission is clear. To provide insightful,
          ethical, and high impact financial and investment advisory solutions that
          support sustainable growth across Africa and beyond. We are a Pan African
          institution with a global perspective, built to serve governments,
          corporations, institutional investors, and private clients with excellence
          and integrity.
        </p>

        <p class="mb-6">
          I firmly believe in Africa’s long term potential. Despite existing
          challenges, the continent remains one of the most compelling frontiers for
          investment, innovation, and wealth creation.
        </p>

        <p class="mb-6">
          Our firm combines deep regional knowledge with global best practices to
          deliver strategic financial advisory and investment solutions across
          corporate finance, capital markets, infrastructure, energy, and public
          sector development.
        </p>
      </div>

    </div>
  </div>

  <!-- NEWSLETTER -->
  <div class="bg-green-700 text-white py-10">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p class="mb-6">
        Stay updated with the latest news and insights from Deutsche Partners Holding.
      </p>
      <form
        class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
      >
        <input
          type="email"
          placeholder="Your Email Address"
          class="w-full sm:flex-1 bg-white/10 border border-white/30 px-4 sm:px-6 py-3 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20"
        />
        <button
          type="submit"
          class="w-full sm:w-auto border-2 border-white px-8 sm:px-10 py-3 rounded font-bold hover:bg-white hover:text-[#2e8b3b] transition duration-300 uppercase text-sm sm:text-base tracking-widest"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>