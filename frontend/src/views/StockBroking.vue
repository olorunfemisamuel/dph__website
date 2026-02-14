<script setup lang = 'ts'>

</script>

<template>
    <div>
           <!-- HERO SECTION (UNCHANGED) -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-100 sm:h-64 md:h-96 overflow-hidden">
        <img 
          src="@/assets/assetmangbanner.jpg" 
          alt="About Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
            Stock Broking
        </h3>
      </div>
    </section>


    <!-- INFO SECTION -->
<section class="bg-green-900 py-12 px-6 md:px-16">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    <!-- TEXT CONTENT -->
    <p class="text-white text-sm leading-relaxed max-w-xl">
      Deutsche Partners Holdings provides world-class stockbroking services to a global
      base of local and foreign investors navigating the Nigerian capital market. Our
      approach combines technical excellence with seasoned expertise, allowing our
      clients to make informed stock management decisions supported by thorough research
      and real-time streaming quotes. We act as a dedicated partner, making sales and
      purchasing decisions based on deep market experience and technical expectations
      to maximize investment returns.
    </p>

    <!-- IMAGE -->
    <div class="flex justify-center md:justify-end">
      <img
        src="@/assets/securitieshomepage.png"
        alt="Business meeting"
        class="rounded-xl w-full max-w-sm object-cover"
      />
    </div>

  </div>
</section>



<!-- OUR CORE STOCKBROKING FUNCTION -->
<section class="py-25 px-16 md:px-16 bg-white">
  <h2 class="text-2xl font-semibold text-gray-900 mb-12">
    Our Core Stockbroking<br />
    Function
  </h2>

  <!-- ROW 1 -->
  <div class="flex flex-col md:flex-row gap-6 mb-6">
    <div class="flex-1 bg-gray-200 p-6">
      <h3 class="font-semibold mb-2">Trade Execution</h3>
      <p class="text-sm text-gray-700">
        Professional purchase and sale of shares on behalf of clients on the floor of
        the Nigerian Stock Exchange.
      </p>
    </div>

    <div class="flex-1 bg-gray-200 p-6">
      <h3 class="font-semibold mb-2">Active Stock Trading</h3>
      <p class="text-sm text-gray-700">
        Implementing a strategic "Buy Low, Sell High" approach to capitalize on market
        volatility.
      </p>
    </div>
  </div>

  <!-- ROW 2 -->
  <div class="flex flex-col md:flex-row gap-6 mb-6">
    <div class="flex-1 bg-gray-200 p-6">
      <h3 class="font-semibold mb-2">Administrative Support</h3>
      <p class="text-sm text-gray-700">
        Managing certificate and dividend recovery, revalidation at the Registrar, and
        the transmission of deceased investors' shares to beneficiaries.
      </p>
    </div>

    <div class="flex-1 bg-gray-200 p-6">
      <h3 class="font-semibold mb-2">Position Taking and Strategy</h3>
      <p class="text-sm text-gray-700">
        Developing specific strategies for position taking on stocks, tailored to the
        unique goals and risk appetites of each client.
      </p>
    </div>
  </div>

  <!-- ROW 3 (CENTERED CARD) -->
  <div class="flex justify-center">
    <div class="w-full md:w-1/2 bg-gray-200 p-6">
      <h3 class="font-semibold mb-2">Dedicated Account Management</h3>
      <p class="text-sm text-gray-700">
        Every client is assigned a fund manager to administer and monitor funds,
        providing timely account reports and continuous feedback.
      </p>
    </div>
  </div>
</section>


<!-- THE INNOVATIVE EDGE -->
<section class="py-16 px-6 md:px-16 bg-gray-100">
  <div class="max-w-7xl mx-auto">
    
    <!-- Section Title -->
    <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
      The Innovative Edge
    </h2>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Card 1 -->
      <div class="bg-gray-200">
        <div class="bg-green-700 text-white px-4 py-3 font-semibold text-sm">
          Seamless Digital Asset
        </div>
        <div class="p-6 text-sm text-gray-700 leading-relaxed">
          Clients enjoy seamless online access to their accounts, allowing them to
          monitor portfolio, track order placements, and confirm trade execution in real-time.
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-gray-200">
        <div class="bg-green-700 text-white px-10 py-5 font-semibold text-sm">
          Specialized Equity Sales Force
        </div>
        <div class="p-6 text-sm text-gray-700 leading-relaxed">
          Our team prioritizes investor research findings into actionable investment
          opportunities, ensuring that specific client objectives are met with precision.
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-gray-200">
        <div class="bg-green-700 text-white px-6 py-5 font-semibold text-sm">
          Instant Trading Capabilities
        </div>
        <div class="p-6 text-sm text-gray-700 leading-relaxed">
          We have leveraged technology to provide instant trading capabilities from our
          devices, ensuring well-timed execution.
        </div>
      </div>

      <!-- Card 4 -->
      <div class="bg-gray-200">
        <div class="bg-green-700 text-white px-4 py-3 font-semibold text-sm">
          Instant Trading Capabilities
        </div>
        <div class="p-6 text-sm text-gray-700 leading-relaxed">
          We have leveraged technology to provide instant trading capabilities from our
          devices, ensuring well-timed execution.
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
</template>