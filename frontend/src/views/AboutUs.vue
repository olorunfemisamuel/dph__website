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
      
Deutsche Partners
Holding (DPH) is an
independently-owned
financial services Group with core
competence and specialty in
Asset Management, Investment
Banking, Private Equity, Securities
and Trustees.
DPH is a Group that is strongly
committed to the success,
development and growth of her
clients and their assets. We create
solutions that are relevant and
add value to the specific needs
and goals of each one of our
clients. We work with a diversified
clientele that consists of Financial
Institutions, Corporations, Private
Clients and Governments. We are
licensed and registered as
Fund/Portfolio Managers, Issuing
House, Investment Adviser
amongst others by the Securities
& Exchange Commission (SEC).
We are qualified to provide a wide
range of financial services to our
clients including individuals,
corporate & financial Institutions,
as well as high net worth
individuals.
We understand that our clients
DPH contributes to the
vitalization of household financial
assets by providing high quality
products and services that are
suitable for medium to long term
asset building for individuals.
have different needs and
objectives, and this is reflected in
our tailored investment
approach. Decisions are not
made for clients: instead, they
are advised and educated in
order to make their own
informed investment decisions.
Clients are treated with the
utmost respect as we recognize
their concerns and their financial
needs.
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
          To provide creative, world-class financial services and ethical investment solutions driven towards wealth creation.
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
          To become the leading integrated investment management firm in Africa.
        </p>
      </div>
    </div>

  </div>
</section>


<section id="core-values" class="max-w-7xl mx-auto mt-20 px-4 sm:px-6">
  <div class="text-center mb-10">
    <h2 class="text-xl font-bold text-gray-800 uppercase tracking-widest">Our Core Values</h2>
    <p class="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
      DPH has six Core Values that are entranced in our everyday dealings. They describe the foundation of our approach with each other, our responsibility, our client and towards our company.
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
      <h3 class="text-base font-bold text-green-700 mb-3 text-center">Accountability</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        Our directors and management team well recognize that they are accountable for all their decisions and actions and are liable to all stakeholders and open to assessment in accordance to the code of ethics. We Make Sound and Ethical Professional Decisions Every Time.
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
      <h3 class="text-base font-bold text-gray-800 mb-3 text-center">Customer Focus</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        We are focused on building a customer focused culture, knowing that high standards of service delivery and high levels of customer satisfaction create a win for both the stakeholders and the customers. We Treat Everyone with Care and Respect.
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
      <h3 class="text-base font-bold text-blue-700 mb-3 text-center">Social Responsibility</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        Realizing our social responsibility, we will preserve our environment and cultural heritage, and promoting human rights and supporting the transition to a green and sustainable economy.
      </p>
    </div>

    <!-- Transparency -->
   <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow hover:border-green-600 reveal" style="transition-delay: 500ms">
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <i class="far fa-eye text-gray-700 text-2xl"></i>
        </div>
      </div>
      <h3 class="text-base font-bold text-gray-800 mb-3 text-center">Transparency</h3>
      <p class="text-gray-600 text-xs leading-relaxed text-center">
        Transparency is the bedrock guiding all our decisions and policies on the disclosure of information to all stakeholders including regulators, shareholders, investors, in a timely and appropriate manner.
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