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
  <div class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      
      <!-- MAIN HEADING -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Deutsche Partner Holding
        </h2>
        <div class="w-24 h-1 bg-green-700 mx-auto"></div>
      </div>

      <!-- IMAGE + TEXT LAYOUT -->
      <div class="flex flex-col lg:flex-row gap-12 items-start">

        <!-- IMAGE (LEFT SIDE) -->
        <div class="w-full lg:w-[420px] flex-shrink-0 mx-auto lg:mx-0">
          <img
            src="@/assets/ManagementImg/mddph.jpeg"
            alt="Dr. Onuoha I. Nnachi - Managing Partner"
            class="w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>

        <!-- TEXT (RIGHT SIDE) -->
        <div class="flex-1 text-base md:text-lg text-gray-800 leading-relaxed space-y-6">
          <p class="text-lg md:text-xl leading-loose">
            Deutsche Partner Holding was built on a simple conviction: that capital, well understood and well deployed, is one of the most powerful tools for building resilient economies. As Managing Partner, I have the privilege of leading a Holding whose subsidiaries — <strong>Deutsche Capital</strong>, <strong>Deutsche Securities</strong>, <strong>Deutsche Asset Management</strong>, and <strong>Deutsche Pensions</strong> — together offer clients a full spectrum of capital markets, wealth management, mergers and acquisitions, securities trading, and pension solutions.
          </p>

          <p class="leading-loose">
            My own path into this work has been shaped by two disciplines that rarely sit side by side — engineering and finance. With doctoral training in Petroleum Engineering (Upstream Infrastructure Economics) and Telecommunication Engineering, alongside postgraduate qualifications in Petroleum Economics and Information Technology Systems, and further training in Corporate Finance and Investment, Financial Risk and Cash Flow Analysis, and Investment Banking Analysis from institutions including Columbia Business School and the New York Institute of Finance, I have spent my career at the intersection of technical rigour and financial strategy. That combination informs how Deutsche Partner Holding approaches every mandate: we do not simply manage capital, we understand the assets, sectors, and structures behind it before we commit to it.
          </p>

          <p class="leading-loose">
            This philosophy runs through each of our subsidiaries. Deutsche Capital and Deutsche Securities give clients access to capital raising, mergers and acquisitions, and securities trading expertise. Deutsche Asset Management stewards portfolios with the discipline our clients expect of a fiduciary. And Deutsche Pensions is built to safeguard and grow the long-term retirement savings entrusted to us. Across all four, our standard is the same: institutional-grade rigour, delivered with integrity.
          </p>

          <p class="leading-loose">
            I remain, above all, a believer in the power of sound institutions and good governance to unlock opportunity for individuals, for businesses, and for the wider economy. Whether the conversation is about wealth management, a capital raise, or securing a pension for the future, Deutsche Partner Holding's role is to bring capital, expertise, and integrity to bear on our clients' most consequential financial decisions.
          </p>

          <p class="leading-loose font-medium">
            I invite you to explore what we do, and to partner with us as we build.
          </p>

          <!-- SIGNATURE -->
          <div class="pt-8 border-t border-gray-200 mt-10">
            <p class="italic text-gray-900 font-semibold text-lg">Dr. Onuoha I. Nnachi, Ph.D.</p>
            <p class="text-gray-600 font-medium mt-1">Managing Partner</p>
            <p class="text-gray-600">Deutsche Partner Holding</p>
          </div>
        </div>

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
