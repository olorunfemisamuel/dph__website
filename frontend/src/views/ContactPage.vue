<script setup lang="ts">

</script>


<template>
  <div class="bg-white">

    <!-- ================= HERO ================= -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative min-h-45 sm:min-h-55 md:min-h-70 rounded-2xl overflow-hidden">
        <img
          src="@/assets/contactimg.png"
          alt="Get in touch"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>

        <div class="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-10">
          <h2 class=" capitalize text-white text-2xl sm:text-2xl md:text-3xl font-bold mb-2">
          Gain Insights And Data Driven Research
          </h2>
          <!-- <p class="text-white/80 text-sm sm:text-base max-w-md">
            We are here to support your investment and financial growth.
          </p> -->
        </div>
      </div>
    </section>

    <!-- ================= LOCATIONS ================= -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        <!-- Card -->
        <!-- <div class="bg-white rounded-xl shadow-sm p-4 sm:p-5 flex gap-4 items-center">
          <img src="@/assets/contactimg.png" class="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover" />
          <div>
            <h4 class="font-semibold text-sm">Lagos</h4>
            <p class="text-xs text-gray-500">
              7th Floor, UBA House, Marina
            </p>
          </div>
        </div> -->

        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-5 flex gap-4 items-center">
          <img src="@/assets/contactimg.png" class="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover" />
          <div>
            <h4 class="font-semibold text-sm">Abuja</h4>
            <p class="text-xs text-gray-500">
             Plot 3 Peter Obang Close, Off O.P. Fingesi Street, Utako District, Abuja
            </p>
          </div>
        </div>

       

      </div>
    </section>

    <!-- ================= CONTACT + FORM ================= -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-14">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        <!-- Contact Info -->
        <div class="bg-[#f4f7f9] rounded-xl p-6 sm:p-8">
          <h3 class="text-green-700 font-semibold mb-3 sm:mb-4">
            Contact us
          </h3>

          <p class="text-sm text-gray-600 mb-5 sm:mb-6">
            Have questions or need assistance? Get in touch with us today.
          </p>

          <ul class="space-y-4 text-sm">
            <li class="flex items-center gap-3">
              <span class="text-green-700">📧</span>
              info@company.com
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-700">📞</span>
              +234 800 000 0000
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-700">📍</span>
             Plot 3 Peter Obang Close, Off O.P. Fingesi Street, Utako District, Abuja
            </li>
          </ul>
        </div>

        <!-- Form -->
        <div>
          <h3 class="text-green-700 font-semibold mb-4">
            Get in Touch
          </h3>

          <form class="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />

            <textarea
              rows="4"
              placeholder="How can we help you?"
              class="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            ></textarea>

            <button
              class="w-full sm:w-auto bg-green-700 text-white text-sm px-8 py-3 rounded-md hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>

    <!-- ================= MAP ================= -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
    <iframe
  class="w-full h-55 sm:h-65 md:h-65 rounded-xl border-0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=Plot%203%20Peter%20Obang%20Close,%20Off%20O.P.%20Fingesi%20Street,%20Utako%20District,%20Abuja&output=embed"
></iframe>
    </section>

  </div>
</template>
