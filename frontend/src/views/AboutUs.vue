<script lang="ts" setup>
   
import { onMounted } from "vue";
import Ourmissionimg  from '../assets/missionvisionimg/Ourmissionimg.png';
import Ourvisionimg from '../assets/missionvisionimg/Ourvisionimg.png';


onMounted(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        // else {
        //   entry.target.classList.remove("show");  
        // }
      });
    },
    { threshold: 0.2 }
  );

   elements.forEach(el => observer.observe(el));
   });
</script>


<template>
<section class="w-full overflow-hidden shadow-lg">
  <div class="relative w-full min-h-50 m:min-h-65 md:h-96 overflow-hidden">

    <img
      src="@/assets/Aaboutusbanner.png"
      alt="About Banner"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/50"></div>
    <h3
      class="absolute bottom-6 left-4 sm:left-6 md:bottom-10 md:left-10
             text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10 reveal"
    >
      Who We Are
    </h3>
  </div>
</section>

<section class="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6">
  <div class="text-center mb-6 sm:mb-8">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 reveal">

      About Deusthe Partners Holding (DPH)
    </h2>
  </div>

  <div class="flex justify-center">
    <div class="w-full lg:w-11/12 border-l-4 border-gray-300 pl-6 reveal">
      <p class="text-black text-sm md:text-base leading-relaxed text-justify">
      
At DPH, we combine strategic insight, financial expertise, and execution excellence to deliver innovative solutions that create lasting value for our clients and stakeholders. 
Our multidisciplinary capabilities span investment banking, asset management, securities, private equity, trusteeship, and strategic advisory, enabling us to support governments, corporations, 
financial institutions, development finance institutions, and private investors across a broad spectrum of financial and investment needs.

Most recently, DPH served as Transaction Adviser and Financial Adviser to the Taraba State Government on the successful arrangement and execution of a USD 268 million financing package with the ECOWAS Bank for Investment and Development (EBID). 
The financing supports the development of an integrated industrial park, irrigated rice production and processing infrastructure, and a 50MW solar photovoltaic power plant—transformational projects expected to accelerate industrialisation, 
strengthen food security, expand access to clean energy, and promote sustainable economic growth.

Through a commitment to professionalism, integrity, and client-focused innovation, 
DPH continues to deliver tailored financial and advisory solutions that strengthen institutions, 
unlock opportunities, and contribute to long-term economic development.
      </p>
    </div>
  </div>
</section>

<section class="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

   <div 
  class="relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center text-center px-8 py-12 bg-cover bg-center reveal"
  :style="{ backgroundImage: `url(${Ourmissionimg})` }"
>

      <div id="mission" class="absolute inset-0 bg-black/90 z-0"></div>

      <div class="relative z-10 text-white">
        <h3 class="text-xl font-bold mb-4 uppercase tracking-widest">Our Mission</h3>
        <p class="leading-relaxed text-sm sm:text-base font-medium max-w-sm">
          To deliver innovative, client-focused financial and investment solutions through exceptional expertise, strategic partnerships, 
          and a commitment to excellence, creating sustainable value for our clients, stakeholders, and the communities we serve.
        </p>
      </div>
    </div>

   <div 
  class="relative overflow-hidden rounded-2xl shadow-xl min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center text-center px-8 py-12 bg-cover bg-center reveal"
  :style="{ backgroundImage: `url(${Ourvisionimg})` }"
>

      <div class="absolute inset-0 bg-black/90 z-0"></div>

      <div class="relative z-10 text-white">
        <h3 class="text-xl font-bold mb-4 uppercase tracking-widest">Our Vision</h3>
        <p class="leading-relaxed text-sm sm:text-base font-medium max-w-sm">
         To be the preferred financial services group in Africa, 
         renowned for delivering worldclass investment, advisory, 
         and asset management solutions that drive economic growth, 
         inspire confidence, and create lasting prosperity.
        </p>
      </div>
    </div>

  </div>
</section>


<section id="core-values" class="max-w-7xl mx-auto mt-20 px-4 sm:px-6">
  <div class="text-center mb-10">
    <h2 class="text-xl font-bold text-gray-800 uppercase tracking-widest">Our Core Values</h2>
    <p class="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
      DPH has five Core Values that are entranced in our everyday dealings. They describe the foundation of our approach with each other, our responsibility, our client and towards our company.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0 mb-12 md:mb-16 lg:mb-20">
    <!-- Accountability -->
   <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow hover:border-green-600 reveal" style="transition-delay: 0ms">
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <i class="far fa-list-alt text-green-600 text-2xl"></i>
        </div>
      </div>
      <h3 class="text-base font-bold text-green-700 mb-3 text-center">Professionalism</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        We conduct our business with discipline, respect, and responsibility, ensuring every client engagement reflects the highest standards of competence and integrity.
      </p>
    </div>

    <!-- Excellence -->
   <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow hover:border-green-600 reveal" style="transition-delay: 100ms">

      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <i class="far fa-star text-blue-600 text-2xl"></i>
        </div>
      </div>
      <h3 class="text-base font-bold text-blue-700 mb-3 text-center">Excellence</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        We provide top-quality advice through comprehensive individual service; anticipating and exceeding our customers' needs. Through innovation, we embrace change translated via our spirit of adaptability, flexibility and creativity.
      </p>
    </div>

    <!-- Customer Focus -->
   <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow hover:border-green-600 reveal" style="transition-delay: 200ms">
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <i class="fas fa-crosshairs text-gray-700 text-2xl"></i>
        </div>
      </div>
      <h3 class="text-base font-bold text-gray-800 mb-3 text-center">Innovation</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
       We embrace forward thinking ideas and evolving market opportunities to develop solutions that address complex financial challenges and create sustainable value
      </p>
    </div>

    <!-- Integrity -->
   <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow hover:border-green-600 reveal" style="transition-delay: 300ms">
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <i class="far fa-check-circle text-green-600 text-2xl"></i>
        </div>
      </div>
      <h3 class="text-base font-bold text-green-700 mb-3 text-center">Integrity</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        We are built on the unwavering principles of honesty, trust, dependability and reliability. We ensure Honesty and straightforwardness in customer service at all times.
      </p>
    </div>

    <!-- Social Responsibility -->
    <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow hover:border-green-600 reveal" style="transition-delay: 400ms">
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <i class="fas fa-users text-blue-600 text-2xl"></i>
        </div>
      </div>
      <h3 class="text-base font-bold text-blue-700 mb-3 text-center">Client-Centric</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
       Our clients are at the heart of everthing we do. We build enduring relationships by understanding their unique needs and delivering tailored solutions that support their long-term success.
      </p>
    </div>
</div>
</section>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all .6s ease-out;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>