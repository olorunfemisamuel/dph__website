<script setup lang="ts">

import { ref } from 'vue'

type AboutSub = 'who'| 'lead' | 'sub' | null
const activeAboutSub = ref<AboutSub>('who')



//  type LeadershipSub = 'Lead' | null
//  const activeLeadershipSub = ref <LeadershipSub>(null) 

const isMenuOpen = ref(false)
const aboutOpen = ref(false)
const businessOpen = ref(false)


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}







type MegaMenu = 'about' | 'services' | 'resources' | 'products' | null

const activeMega = ref<MegaMenu>(null)


  //ServicesSub
 type ServicesSub =
  | 'asset'
  | 'investment'
  | 'private'
  | 'securities'
  | 'trustees'
  | null

const activeServicesSub = ref<ServicesSub>('asset')

//ProductsSub
type ProductsSub = 
  | 'mutual'
  | 'exchange-traded'
  | 'alternative'
  | null


const activeProductsSub = ref<ProductsSub>('mutual')


let closeTimer: number | null = null

const openMega = (menu: MegaMenu) => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }

  activeMega.value = menu

  // DEFAULT SUB MENUS
  if (menu === 'about') {
    activeAboutSub.value = 'who'
  }

  if (menu === 'services') {
    activeServicesSub.value = 'asset'
  }

  if (menu === 'products') {
    activeProductsSub.value = 'mutual'
  }
}




const closeMega = () => {
  closeTimer = window.setTimeout(() => {
    activeMega.value = null
  }, 180)
}


const closeAllMenus = () => {
  activeMega.value = null
  activeAboutSub.value = null
  activeServicesSub.value = null
  isMenuOpen.value = false
}



</script>

<template>
 <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">

   
    <nav class="w-full
     flex items-center justify-between
     py-4 px-6 md:px-12">
         <img src = "/dphLogo.jpg" alt="DPH Logo" class="h-10 w-auto"/>
        
          <!-- <img src="dphLogo.jpg" alt="DPH Logo" class="h-10 w-auto"/> -->
        

        <ul class="hidden md:flex gap-8 text-black transition">
            <li>
    <RouterLink
      to="/"
      class="relative inline-block
             after:content-['']
             after:absolute after:left-0 after:-bottom-1
             after:h-0.5 after:w-0
             after:bg-green-700
             after:transition-all after:duration-300
             hover:after:w-full"
    >
      Home
    </RouterLink>
  </li>


  <li
  class="relative"
  @mouseenter="openMega('about')"
  @mouseleave="closeMega"
>
  <span class="cursor-pointer relative hover:after:w-full">
    About Us
  </span>

  <div
  v-show="activeMega === 'about'"
  @mouseleave="activeAboutSub = null"
  class="absolute left-11/12 top-full mt-6 -translate-x-1/2
         w-[1100px] bg-white rounded-2xl shadow-xl
         p-6 z-50 ml-60"
>

    <div class="grid grid-cols-[240px_1fr_320px] gap-6">

      <!-- LEFT -->
      <div class="border-r pr-4">
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          About Us
        </p>

        <ul class="space-y-2">
         <RouterLink
  to="/about"
  class="block px-4 py-3 rounded-lg hover:bg-green-100 font-medium"
  @mouseenter="activeAboutSub = 'who'"
@click="closeAllMenus"
>
  Who We Are
</RouterLink>



          <RouterLink to="/MDmessage"
            class="block px-4 py-3 rounded-lg hover:bg-green-100"
             @click="closeAllMenus">
            MD's Message
          </RouterLink>

          <RouterLink to="/Leadership"
            class="block px-4 py-3 rounded-lg hover:bg-green-100 font-medium"
             @mouseenter="activeAboutSub = 'lead'"
             @click="closeAllMenus"
           > 
            Leadership
          </RouterLink>

            <RouterLink to="/subsidiaries"
            class="block px-4 py-3 rounded-lg hover:bg-green-100 font-medium"
            @mouseenter="activeAboutSub ='sub'"
            @click="closeAllMenus"
           > 
          Subsidiaries
          </RouterLink>
        </ul>
      </div>

      <!-- MIDDLE MENU FOR WHO WE ARE -->
<div>
  <p class="text-xs tracking-widest text-gray-400 mb-4">
    OVERVIEW
  </p>

  <!-- WHO WE ARE CONTENT -->
  <div v-if="activeAboutSub === 'who'" class="space-y-8">
    <RouterLink
      to="/about#mission"
      class="block font-medium hover:text-green-700"
      @click="closeAllMenus"
    >
      Mission
    </RouterLink>

    <RouterLink
      to="/about#vision"
      class="block font-medium hover:text-green-700"
      @click="closeAllMenus"
    >
      Vision
    </RouterLink>

    <RouterLink
      to="/about#core-values"
      class="block font-medium hover:text-green-700"
      @click="closeAllMenus"
    >
      Core Values
    </RouterLink>
  </div>

  <!----END OF MIDDLE MENU FOR WHO WE ARE -->







<!---Middle Menu For Leadership Sub Menu-->

   <div v-if="activeAboutSub === 'lead'" class="space-y-8">

       <RouterLink
      to="/Leadership"
      class="block font-medium hover:text-green-700"
      @click="closeAllMenus"
    >
      Board Of Directors
    </RouterLink>

       <RouterLink
      to="/Leadership"
      class="block font-medium hover:text-green-700"
      @click="closeAllMenus"
    >
    Team Members
    </RouterLink>
   </div>


   <!---End of Middle Menu For Leadership Sub Menu-->









  <!----MIDDLE MENU FOR Subsidiaries -->
<div v-if="activeAboutSub === 'sub'" class="space-y-8">
  <RouterLink to="/about#mission" class="block font-medium hover:text-green-700"
  @click="closeAllMenus">
    Deutsche Asset Management Limited
  </RouterLink>

  <RouterLink to="/about#mission" class="block font-medium hover:text-green-700"
 @click="closeAllMenus"
  >
    Deutsche Capital Limited
  </RouterLink>

  <RouterLink to="/about#mission" class="block font-medium hover:text-green-700"
  @click="closeAllMenus"
  >
    Deutsche Private Equity Limited
  </RouterLink>

  <RouterLink to="/about#mission" class="block font-medium hover:text-green-700"
  @click="closeAllMenus">
    Deutsche Security Limited
  </RouterLink>

  <RouterLink to="/about#mission" class="block font-medium hover:text-green-700"
  @click="closeAllMenus">
    Deutsche Trustees Limited
  </RouterLink>
</div>





</div>


      <!-- RIGHT -->
      <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
        <img
          src="/navigation1.png"
          alt="Our Businesses"
          class="rounded-lg mb-4"
        />

        <p class="font-medium text-lg">
          Explore our<br />
          <span class="font-semibold">Business divisions</span>
        </p>

        <RouterLink
          to="/contact"
          class="mt-4 text-center border border-black rounded-lg py-2"
        >
          Contact Us
        </RouterLink>
      </div>


      


    </div>
  </div>
</li>





<li
  class="relative
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full"
  @mouseenter="openMega('services')"
  @mouseleave="closeMega"
>
  <span class="cursor-pointer relative hover:after:w-full">
    Our Services
  </span>

  <div
    v-show="activeMega === 'services'"
    class="absolute left-1/2 top-full mt-6 -translate-x-1/2
           w-[1100px] bg-white rounded-2xl shadow-xl
           p-6 z-50 ml-37"
  >
    <div class="grid grid-cols-[240px_1fr_320px] gap-6">

      <!-- LEFT -->
      <div class="border-r pr-4">
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          OUR SERVICES
        </p>

        <ul class="space-y-2">
          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100 font-medium"
              @mouseenter="activeServicesSub = 'investment'"
              @click="closeAllMenus">
           Investment Banking
          </RouterLink>

          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100"
            @mouseenter = "activeServicesSub = 'asset'"
            @click="closeAllMenus">
        Asset Management
          </RouterLink>

          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100"
            @mouseenter = "activeServicesSub = 'private'"
            @click="closeAllMenus">
            Private Equity
          </RouterLink>

          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100" 
            @mouseenter = "activeServicesSub = 'securities'"
            @click="closeAllMenus">
            Securities Trading
          </RouterLink>

          <RouterLink to="/Trustees"
            class="block px-4 py-3 rounded-lg hover:bg-green-100"
            @mouseenter = "activeServicesSub = 'trustees'"
            @click="closeAllMenus">
            Trustees
          </RouterLink>
        </ul>
      </div>

      <!-- MIDDLE -->
      <div>
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          WHAT WE DO
        </p>

         <div v-if="activeServicesSub === 'asset'" class="space-y-8">
          <div>
           <RouterLink to="/Asset-Management"> <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Private Wealth Management</p></RouterLink>
            <p class="text-sm text-gray-500">
            
            </p>
          </div>

          <div>
            <RouterLink to="/Asset-Management">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Fund Management and Advisory</p>
            <p class="text-sm text-gray-500">
         
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Asset-Management">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Collective Investment Scheme</p>
            <p class="text-sm text-gray-500">
            
            </p>
            </RouterLink>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Special Investment Scheme</p>
            <p class="text-sm text-gray-500">
            </p>
          </div>

          <div>
            <RouterLink to = "/Asset-Management">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Portofolio Management</p>
            <p class="text-sm text-gray-500">
              
            </p>
          </RouterLink>
          </div>
        </div>




 <div v-if="activeServicesSub === 'investment'" class="space-y-8">
          <div>
            <RouterLink to ="/Investment-Banking">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Corporate Finance</p>
            <p class="text-sm text-gray-500">
             
            </p>
         </RouterLink>
          </div>

          <div>
             <RouterLink to ="/Investment-Banking">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Public Sector Advisory</p>
            <p class="text-sm text-gray-500">
              </p>
               </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Investment-Banking">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Structured Finance</p>

            <p class="text-sm text-gray-500">
           
            </p>
            </RouterLink>
            
          </div>

          <div>
            <RouterLink to = "/Investment-Banking">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Research & Intelligence</p>
            <p class="text-sm text-gray-500">
             
            </p>
            </RouterLink>
            
          </div>

          
        </div>




        <div v-if="activeServicesSub === 'private'" class="space-y-8">
          <div>
            <RouterLink to = "/Private-Equity">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Private Equity Funds</p>
            <p class="text-sm text-gray-500">
            
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Private-Equity">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Business Incubation Investment</p>
            <p class="text-sm text-gray-500">
         
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to ="/Private-Equity">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Health Investment</p>
            <p class="text-sm text-gray-500">
            
            </p>
          </RouterLink>
          </div>

          <div>
             <RouterLink to ="/Private-Equity">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Hospitality & Entertainment Investment</p>
            <p class="text-sm text-gray-500">
            </p>
            </RouterLink>
          </div>

          <div>
             <RouterLink to ="/Private-Equity">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Real Estate Investment Trust</p>
            <p class="text-sm text-gray-500">
              
            </p>
            </RouterLink>
          </div>
        </div>



        <div v-if="activeServicesSub === 'securities'" class="space-y-8">
          <div>
            <RouterLink to = "/Securities-Trading">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Equity Trading</p>
            <p class="text-sm text-gray-500">
            
            </p>
          </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Securities-Trading">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Fixed Income Trading</p>
            <p class="text-sm text-gray-500">
         
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Securities-Trading">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Propriety Trading</p>
            <p class="text-sm text-gray-500">
            
            </p>
          </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Securities-Trading">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Security Analysis</p>
            <p class="text-sm text-gray-500">
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Securities-Trading">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Economic Profiling</p>
            <p class="text-sm text-gray-500">
              
            </p>
            </RouterLink>
          </div>
        </div>


        <div v-if="activeServicesSub === 'trustees'" class="space-y-5">
          <div>
            <RouterLink to = "/Trustees">
            <p class="cursor-pointer px-1 py-3 rounded-lg hover:bg-green-100 font-medium">Secured and unsecured note issuances</p>
            <p class="text-sm text-gray-500 ">
            
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Trustees">
            <p class="font-medium cursor-pointer px-1 py-3 rounded-lg hover:bg-green-100">Securitization and structured financings</p>
            <p class="text-sm text-gray-500">
         
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Trustees">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">EMTN Programmes</p>
            <p class="text-sm text-gray-500">
            
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to = "/Trustees">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Retail bonds</p>
            <p class="text-sm text-gray-500">
            </p>
            </RouterLink> 
          </div>

          <div>
            <RouterLink to = "/Trustees">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">High Yield and emerging markets bonds</p>
            <p class="text-sm text-gray-500">
              
            </p>
          </RouterLink>
          </div>

           <div>
            <RouterLink to = "/Trustees">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Convertible and Equity linked bonds</p>
            <p class="text-sm text-gray-500">
            </p>
          </RouterLink>
          </div>
        </div>


      </div>






    


























      <!-- RIGHT -->
      <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
        <img
          src="/navigation1.png"
          alt="Our Businesses"
          class="rounded-lg mb-4"
        />

        <p class="font-medium text-lg">
          Explore our<br />
          <span class="font-semibold">business divisions</span>
        </p>

        <RouterLink
          to="/contact"
          class="mt-4 text-center border border-black rounded-lg py-2"
        >
          Contact Us
        </RouterLink>
      </div>

    </div>
  </div>
</li>





<!---Products NavBar-->
<li
  class="relative
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full"
  @mouseenter="openMega('products')"
  @mouseleave="closeMega"
>
  <span class="cursor-pointer relative hover:after:w-full">
    Our Products
  </span>

  <div
    v-show="activeMega === 'products'"
    class="absolute left-1/2 top-full mt-6 -translate-x-1/2
           w-[1100px] bg-white rounded-2xl shadow-xl
           p-6 z-50"
  >
    <div class="grid grid-cols-[240px_1fr_320px] gap-6">

      <!-- LEFT -->
      <div class="border-r pr-4">
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          OUR PRODUCTS
        </p>

        <ul class="space-y-2">
          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100 font-medium"
              @mouseenter="activeProductsSub = 'mutual'"
              @click="closeAllMenus">
            Mutual Funds
          </RouterLink>

          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100"
            @mouseenter = "activeProductsSub = 'exchange-traded'"
            @click="closeAllMenus">
           Exchange Traded Funds
          </RouterLink>

          <RouterLink to="/"
            class="block px-4 py-3 rounded-lg hover:bg-green-100"
            @mouseenter = "activeProductsSub = 'alternative'"
            @click="closeAllMenus">
           Alternative Investments Scheme
          </RouterLink>

          
        </ul>
      </div>

      <!-- MIDDLE -->
      <div>
        <p class="text-xs tracking-widest text-gray-400 mb-4">
          WHAT WE DO
        </p>

         <div v-if="activeProductsSub === 'mutual'" class="space-y-8">
          <div>
           <RouterLink to="/mutual-funds"> <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Money Market Fund</p></RouterLink>
            <p class="text-sm text-gray-500">
            
            </p>
          </div>

          <div>
            <RouterLink to="/mutual-funds">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Equity Fund</p>
            <p class="text-sm text-gray-500">
         
            </p>
          </RouterLink>
          </div>

          <div>
            <RouterLink to="/mutual-funds">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Private Fixed Income Fund</p>
            <p class="text-sm text-gray-500">
            
            </p>
            </RouterLink> 
          </div>

          <div>
            <RouterLink to="/mutual-funds">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Ethical Funds</p>
            <p class="text-sm text-gray-500">
            </p>
          </RouterLink>
          </div>

          <!-- <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Portofolio Management</p>
            <p class="text-sm text-gray-500">
              
            </p>
          </div> -->
        </div>




 <div v-if="activeProductsSub === 'exchange-traded'" class="space-y-8">
          <div>
            <RouterLink to="/exchange-traded-funds">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Agro-ETF</p>
            <p class="text-sm text-gray-500">
             
     </p>
    </RouterLink>
          </div>

          <div>
            <RouterLink to="/exchange-traded-funds">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Gold-ETF</p>
            <p class="text-sm text-gray-500">
              
            </p>

            </RouterLink>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100"></p>

            <p class="text-sm text-gray-500">
           
            </p>

             <p class="text-sm text-gray-500">
         
            </p>

             <p class="text-sm text-gray-500">
         
            </p>

             <p class="text-sm text-gray-500">
          
            </p>

              <p class="text-sm text-gray-500">
         
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100"></p>
            <p class="text-sm text-gray-500">
             
            </p>

             <p class="text-sm text-gray-500">
              
            </p>

             <p class="text-sm text-gray-500">
            
            </p>

             <p class="text-sm text-gray-500">
             
            </p>
          </div>

          
        </div>




        <div v-if="activeProductsSub === 'alternative'" class="space-y-8">
          <div>
            <RouterLink to="/alternative-investment">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Private Wealth Management:</p>
            <p class="text-sm text-gray-500">
            
            </p>
            </RouterLink>
          </div>

          <div>
            <RouterLink to="/alternative-investment">
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Deutsche Institutional Asset Management</p>
            <p class="text-sm text-gray-500">
         
            </p>
            </RouterLink>
          </div>

       

          

          
        </div>



        <div v-if="activeServicesSub === 'securities'" class="space-y-8">
          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Equity Trading</p>
            <p class="text-sm text-gray-500">
            
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Fixed Income Trading</p>
            <p class="text-sm text-gray-500">
         
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Propriety Trading</p>
            <p class="text-sm text-gray-500">
            
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Security Analysis</p>
            <p class="text-sm text-gray-500">
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Economic Profiling</p>
            <p class="text-sm text-gray-500">
              
            </p>
          </div>
        </div>


        <div v-if="activeServicesSub === 'trustees'" class="space-y-5">
          <div>
            <p class="cursor-pointer px-1 py-3 rounded-lg hover:bg-green-100 font-medium">Secured and unsecured note issuances</p>
            <p class="text-sm text-gray-500 ">
            
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer px-1 py-3 rounded-lg hover:bg-green-100">Securitization and structured financings</p>
            <p class="text-sm text-gray-500">
         
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">EMTN Programmes</p>
            <p class="text-sm text-gray-500">
            
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Retail bonds</p>
            <p class="text-sm text-gray-500">
            </p>
          </div>

          <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">High Yield and emerging markets bonds</p>
            <p class="text-sm text-gray-500">
              
            </p>
          </div>

           <div>
            <p class="font-medium cursor-pointer rounded-lg px-1 py-3 hover:bg-green-100">Convertible and Equity linked bonds</p>
            <p class="text-sm text-gray-500">
            </p>
          </div>
        </div>


      </div>






    


























      <!-- RIGHT -->
      <div class="bg-gray-50 rounded-xl p-4 flex flex-col justify-between">
        <img
          src="/navigation1.png"
          alt="Our Businesses"
          class="rounded-lg mb-4"
        />

        <p class="font-medium text-lg">
          Explore our<br />
          <span class="font-semibold">business divisions</span>
        </p>

        <RouterLink
          to="/contact"
          class="mt-4 text-center border border-black rounded-lg py-2"
        >
          Contact Us
        </RouterLink>
      </div>

    </div>
  </div>
</li>






<li
  class="relative
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full"
  @mouseenter="openMega('resources')"
  @mouseleave="closeMega"
>

        

          <span class="cursor-pointer relative hover:after:w-full">
   Resources
  </span>















  <!-- Dropdown -->
  <div
    v-show="activeMega === 'resources'"
    class="absolute left-1/2 top-full mt-6 -translate-x-1/2
           w-[1100px] bg-white rounded-2xl shadow-xl
           p-6 z-50 mr-37"
  >
   <div class="grid grid-cols-[1fr_320px] gap-6">

  
  <!-- LEFT: LINKS -->
  <div class="space-y-2">
   <RouterLink to="/Insight" class="block px-4 py-3 hover:bg-green-50">Insights</RouterLink>
    <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50">Gallery</RouterLink> 
    <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50">Career</RouterLink> 
    <RouterLink to="/gallery" class="block px-4 py-3 hover:bg-green-50">Policy</RouterLink> 
      <RouterLink to="/investmentdashboard" class="block px-4 py-3 hover:bg-green-50">Investment Dashboard</RouterLink> 


    
  </div>

  <!-- RIGHT: IMAGE -->
  <div class="hidden md:block">
    <img
      src="/navigation2.png"
      alt="Our Businesses"
      class="w-full h-full object-cover rounded-lg"
    />
  </div>

</div>


</div>
         
        </li>


               <!-- <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full"> -->
        
        <!-- <RouterLink to="/career" class="cursor-pointer">Career </RouterLink> -->

  <!-- Dropdown -->
  <!-- <div class="absolute left-0 mt-2 w-100 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Research Article</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Case Study</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Financial Education Content</a>
     
  </div> -->
<!-- </li> -->


        

                 <li class="relative inline-block group
         after:content-['']
         after:absolute after:left-0 after:-bottom-1
         after:h-0.5 after:w-0
         after:bg-green-700
         after:transition-all after:duration-300
         hover:after:w-full">
        
          <RouterLink to="/contact" class="cursor-pointer"> Contact </RouterLink>

        <!-- Dropdown -->
  <!-- <div class="absolute left-0 mt-2 w-100 bg-white shadow-lg rounded-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50">

    <a href="#" class="block px-4 py-3 hover:bg-green-50">Annual Statement/Financial Report</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Investment Opportunities</a>
    <a href="#" class="block px-4 py-3 hover:bg-green-50">Stock Information</a> 

    
     
  </div> -->
         
        </li>
        </ul>

          <!---Hamburger Menu-->
          <button @click="toggleMenu" class="md:hidden text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        
      <!-----Router Link--->
       <RouterLink to="/invest-now" class="hidden md:inline-block ml-2">
  <button 
    class="px-4 py-2 rounded-xl 
           bg-green-700 hover:bg-green-800 text-white transition"
  >
    Invest Now
  </button>
</RouterLink>




</nav>
<!-- ================= MOBILE MENU ================= -->
<div
  v-show="isMenuOpen"
  class="md:hidden bg-white shadow-lg border-t px-6 py-6 space-y-6"
>

  <RouterLink to="/" @click="toggleMenu" class="block font-medium">
    Home
  </RouterLink>

  <!-- About -->
   <div>
    <button
      @click="aboutOpen = !aboutOpen"
      class="w-full flex items-center justify-between font-medium"
    >
      About Us
      <span
        class="transition-transform"
        :class="aboutOpen ? 'rotate-180' : ''"
      >
        ▼
      </span>
    </button>

    <div
      v-show="aboutOpen"
      class="pl-4 mt-3 space-y-2 text-sm"
    >
      <RouterLink to="/about" @click="toggleMenu" class="block">
        Who we are
      </RouterLink>
      <RouterLink to="/MDmessage" @click="toggleMenu" class="block">
        MD’s Message
      </RouterLink>
      <RouterLink to="/Leadership" @click="toggleMenu" class="block">
        Leadership
      </RouterLink>
    </div>
  </div>

  <!-- Our Businesses -->
   <div>
    <button
      @click="businessOpen = !businessOpen"
      class="w-full flex items-center justify-between font-medium"
    >
      Our Businesses
      <span
        class="transition-transform"
        :class="businessOpen ? 'rotate-180' : ''"
      >
        ▼
      </span>
    </button>

    <div
      v-show="businessOpen"
      class="pl-4 mt-3 space-y-2 text-sm"
    >
      <RouterLink to="/Asset-Management" @click="toggleMenu" class="block">
        Asset Management
      </RouterLink>
      <RouterLink to="/Investment-Banking" @click="toggleMenu" class="block">
        Investment Banking
      </RouterLink>
      <RouterLink to="/Private-Equity" @click="toggleMenu" class="block">
        Private Equity
      </RouterLink>
      <RouterLink to="/Securities-Trading" @click="toggleMenu" class="block">
        Securities Trading
      </RouterLink>
      <RouterLink to="/Trustees" @click="toggleMenu" class="block">
        Trustees
      </RouterLink>
    </div>
  </div>

  <!-- Insights -->
  <div>
    <RouterLink to="/Insight" @click="toggleMenu" class="block font-medium mb-2">Insights</RouterLink>
  </div>

  <RouterLink to="/career" @click="toggleMenu" class="block font-medium">
    Career
  </RouterLink>

  <RouterLink to="/contact" @click="toggleMenu" class="block font-medium">
    Contact
  </RouterLink>

  <!-- CTA -->
  <RouterLink to="/invest-now" @click="toggleMenu">
    <button class="w-full mt-4 bg-green-700 text-white py-3 rounded-xl">
      Invest Now
    </button>
  </RouterLink>

</div>

   </header> 

</template>

