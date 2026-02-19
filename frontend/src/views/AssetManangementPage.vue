<script setup lang="ts">
import { ref } from 'vue'


const showMutualFunds = ref(false)
const showWealthManagement = ref(false)
const showPortfolioManagement = ref(false)
const showHedgeFund = ref(false)
const showVentureCapital = ref(false)
const showInvestmentAdvisory= ref(false)
const showInstitutionalAssetManagement= ref(false)

  const managementData = [
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive Officer', img: new URL('@/assets/leadershipIMGS/mdIMG.jpg', import.meta.url).href },
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/mrijomaIMG.jpg', import.meta.url).href },
  { name: 'Dr Onuoha Nnachi', role: 'Chief Executive', img: new URL('@/assets/leadershipIMGS/misscatherineIMG.jpg', import.meta.url).href },

]
</script>


<template>
  <!-- HERO SECTION -->
  <section class="w-full overflow-hidden shadow-lg">
  <div class="relative w-full h-40 sm:h-44 md:h-70 overflow-hidden">
      <img 
        src="@/assets/assetmangbanner.jpg" 
        alt="About Banner" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
       Asset Management
      </h3>
    </div>
  </section>



  <!-- IMAGE + TEXT SECTION (New from design)  -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
    <div class="grid md:grid-cols-2 gap-0  rounded-2xl overflow-hidden ">
      <!-- Image Side -->
      <div class="relative h-50 md:h-auto">
        <img
          src="@/assets/assetmanagement1.png"
          alt="Team collaboration"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Text Side -->
      <div class="bg-gradient-to-br from-green-900 to-green-800 p-2 md:p-8  flex flex-col justify-center text-white">
        <p class="text-xs md:text-sm leading-relaxed mb-4">
          We invest in practice such as Equity, Fixed Income, Real Estate, Commodities, Alternative Investments and Mutual funds. Accounts held by financial institutions often include checking, savings, certificates of deposit, and. MMFs which includes the automated sweep of cash balances into a sweep account that earns interest.
        </p>

        <p class="text-sm md:text-sm leading-relaxed">
          We deliver top of the line Investment Management services to our clients and engage funds by Institutions and Corporate Entities.
        </p>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->
   <!-- LEADERSHIP PREVIEW SECTION -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
    <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Our Leadership</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div
        v-for="(leader, index) in managementData.slice(0, 3)"
        :key="index"
        class="flex bg-[#f8fafc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <img
          :src="leader.img"
          alt="Leader"
          class="w-24 sm:w-28 h-full object-cover"
        />
        <div class="p-3 sm:p-5 flex flex-col justify-center">
          <h4 class="font-bold text-gray-800 text-sm sm:text-base">
            {{ leader.name }}
          </h4>
          <p class="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-1 font-medium">
            {{ leader.role }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->

  <!-- CONTENT SECTIONS -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-20">

    <!-- SECTION 1 -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
       <div
  class="border-l-4 border-[#2e8b3b] pl-5 cursor-pointer"
  @click="showMutualFunds = true"
>
  <h4 class="font-bold text-gray-800 text-base mb-3 transition-colors duration-300 hover:text-[#2e8b3b]">Mutual Funds</h4>
  <p class="text-gray-600 text-sm leading-relaxed">
    We offer professionally managed mutual funds...
  </p>
</div>


        <div class="border-l-4 border-gray-400 pl-5 cursor-pointer" @click="showWealthManagement = true">
          <h4 class="font-bold text-gray-800 text-base mb-3 transition-colors duration-300 hover:text-[#2e8b3b]">Wealth Management</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Our wealth management services provide personalized solutions...
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <img
          src="@/assets/assetmanagementPRODUCT.png"
          class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm"
        />
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 flex justify-center">
        <img
          src="@/assets/assetimgProd.png"
          class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm"
        />
      </div>

      <div class="order-1 md:order-2 space-y-8">
        <div class="border-l-4 border-[#2e8b3b] pl-5 cursor-pointer"  @click="showPortfolioManagement = true">
          <h4 class="font-bold text-[#2e8b3b] text-base mb-3 transition-colors duration-300 hover:text-[#06410e]">
            Portfolio Management
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We manage investment portfolios on behalf of clients...
          </p>
        </div>

        <div class="border-l-4 border-gray-400 pl-5 cursor-pointer" @click="showHedgeFund = true">
          <h4 class="font-bold text-gray-800 text-base mb-3 transition-colors duration-300 hover:text-[#2e8b3b]">Hedge Fund</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Our hedge fund strategies focus on alternative investments...
          </p>
        </div>
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <div class="border-l-4 border-[#2e8b3b] pl-5 cursor-pointer" @click = "showVentureCapital = true">
          <h4 class="font-bold text-gray-800 text-base mb-2 transition-colors duration-300 hover:text-[#2e8b3b]">Venture Capital</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We invest in high-growth businesses with strong fundamentals...
          </p>
        </div>

        <div class="border-l-4 border-gray-400 pl-5 cursor-pointer" @click="showInvestmentAdvisory= true">
          <h4 class="font-bold text-gray-800 text-base mb-2 transition-colors duration-300 hover:text-[#2e8b3b]">
            Investment Advisory
          </h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Our advisory services offer expert guidance...
          </p>
        </div>

        <div class="border-l-4 border-gray-800 pl-5 cursor-pointer" @click="showInstitutionalAssetManagement= true">
         <h4
  class="font-bold text-gray-800 text-base mb-2 transition-colors duration-300 hover:text-[#2e8b3b]"
>
  Institutional Asset Management
</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            We design and manage tailored investment solutions for institutions...
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <img
          src="@/assets/assetimgProd1.png"
          class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm"
        />
      </div>
    </div>
  </section>

  <!-- CONTACT FORM -->
 <section class="bg-gray-100 mt-20 py-12 md:py-16">
  <div class="max-w-2xl mx-auto px-4 sm:px-6">
    <!-- Form Container with border -->
    <div class="bg-transparent rounded-lg p-8 md:p-10">
      <h4 class="text-center font-normal text-blue-600 text-sm md:text-base mb-8 uppercase tracking-wide">
        Consultation with an Asset Management Advisor
      </h4>

      <form class="space-y-5">
        <!-- First Name -->
        <div>
          <input 
            type="text"
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500" 
            placeholder="First Name" 
          />
        </div>

        <!-- Last Name -->
        <div>
          <input 
            type="text"
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500" 
            placeholder="Last Name" 
          />
        </div>

        <!-- Email Address -->
        <div>
          <input 
            type="email"
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500" 
            placeholder="Email Address" 
          />
        </div>

        <!-- Phone Number -->
        <div>
          <input 
            type="tel"
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500" 
            placeholder="Phone Number" 
          />
        </div>

        <!-- Message -->
        <div>
          <textarea 
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500 resize-none" 
            rows="1" 
            placeholder="Leave a Message"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button 
            type="submit"
            class="bg-blue-600 text-white px-8 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

<!-- MUTUAL FUNDS MODAL -->
<div
  v-if="showMutualFunds"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showMutualFunds = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
      Mutual Funds
    </h3>

    <hr class="mb-6" />

    <!-- Content (from your second image) -->
    <p class="text-gray-700 text-sm leading-relaxed">
      We present a unique and highly rewarding investment opportunity to
      investors to set their money working efficiently and effectively
      independent of them, with the ultimate goal of achieving long-term
      returns that are uncorrelated with the Nigerian equities market by
      investing in a portfolio of Federal Government Bonds, Money Market
      Securities and Cash that have been approved by the Securities and
      Exchange Commission of Nigeria for our investors.
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showMutualFunds = false"
      >
        Close
      </button>
    </div>
  </div>
</div>

<!-- WEALTH MANAGEMENT MODAL -->
<div
  v-if="showWealthManagement"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showWealthManagement = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
    Wealth Management
    </h3>

    <hr class="mb-6" />

    <!-- Text Content-->
    <p class="text-gray-700 text-sm leading-relaxed">
      We build and preserve wealth across diverse asset classes, including equities, real estate, digital markets, commodities, energy, agriculture, and currency investments. Our client-focused structure minimises costs, allowing investors to retain more of their returns and grow their wealth over time.
We also offer a comprehensive lending portfolio spanning office buildings, warehouses, mixed-use, multi-family, and retail properties, with competitive terms and long-term funding strategies designed to deliver attractive returns throughout the real estate cycl 
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showWealthManagement = false"
      >
        Close
      </button>
    </div>
  </div>
</div>


<!----Portfolio Management Modal-->
<div
  v-if="showPortfolioManagement"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showPortfolioManagement = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
    Portfolio Management
    </h3>

    <hr class="mb-6" />

    <!-- Text Content-->
    <p class="text-gray-700 text-sm leading-relaxed">
    We manage client wealth with a strategic focus on achieving superior market performance, tailored to individual investment objectives. Our Discretionary Portfolio Management Services (DPMS) serve high-net-worth and institutional clients, delivering bespoke portfolio solutions through a combination of extensive investment resources, rigorous research, local market insights, and advanced risk management.
DPMS empowers clients to directly own a diversified portfolio of individual securities, providing greater control and transparency than traditional mutual funds. We work closely with clients to define investment policies, select optimal strategies, and construct portfolios aligned with their goals.
Our team leverages deep local market knowledge to identify high-potential investment opportunities while providing disciplined execution and attentive service. Portfolios are strategically diversified across sectors, markets, and asset classes, with a clear focus on generating superior risk-adjusted returns through careful investment selection and proactive management.
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showPortfolioManagement = false"
      >
        Close
      </button>
    </div>
  </div>
</div>


<!----Hedge Fund Modal-->
<div
  v-if="showHedgeFund"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showHedgeFund = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
   Hedge Fund
    </h3>

    <hr class="mb-6" />

    <!-- Text Content-->
    <p class="text-gray-700 text-sm leading-relaxed">
    We manage client wealth with a strategic focus on achieving superior market performance, tailored to individual investment objectives. Our Discretionary Portfolio Management Services (DPMS) serve high-net-worth and institutional clients, delivering bespoke portfolio solutions through a combination of extensive investment resources, rigorous research, local market insights, and advanced risk management.
DPMS empowers clients to directly own a diversified portfolio of individual securities, providing greater control and transparency than traditional mutual funds. We work closely with clients to define investment policies, select optimal strategies, and construct portfolios aligned with their goals.
Our team leverages deep local market knowledge to identify high-potential investment opportunities while providing disciplined execution and attentive service. Portfolios are strategically diversified across sectors, markets, and asset classes, with a clear focus on generating superior risk-adjusted returns through careful investment selection and proactive management.
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showHedgeFund = false"
      >
        Close
      </button>
    </div>
  </div>
</div>

<!----Venture Capital Modal-->
<div
  v-if="showVentureCapital"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showVentureCapital = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
   Venture Capital
    </h3>

    <hr class="mb-6" />

    <!-- Text Content-->
    <p class="text-gray-700 text-sm leading-relaxed">
   We provide tailored venture capital services through a client-focused model supported by advanced technology and multi-jurisdictional capabilities. Our services include fund administration, SPV administration, depositary services, regulatory reporting, and corporate support.
Clients benefit from detailed investment analytics, performance tracking, and exposure reporting, enabling easy monitoring of investments. Leveraging global expertise and innovative solutions, we help venture capital investors navigate complex fund structures while meeting both internal and investor requirements efficiently.
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showVentureCapital = false"
      >
        Close
      </button>
    </div>
  </div>
</div>

<!----Investment Advisory Modal-->
<div
  v-if="showInvestmentAdvisory"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showInvestmentAdvisory = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
Investment Advisory
    </h3>

    <hr class="mb-6" />

    <!-- Text Content-->
    <p class="text-gray-700 text-sm leading-relaxed">
 Our professional advisors help clients maximise the potential of their assets through tailored investment strategies aligned with individual objectives and risk preferences. We keep clients informed of market developments, regularly review portfolios, and adjust strategies to meet changing conditions.
Our structured approach includes defining investor profiles, designing optimal account structures, setting investment guidelines, implementing portfolios, and monitoring performance quarterly. This ensures disciplined, transparent, and results-driven asset management for superior long-term outcomes.
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showInvestmentAdvisory = false"
      >
        Close
      </button>
    </div>
  </div>
</div>

<!---Institutional Assest Management Modal-->
<div
  v-if="showInstitutionalAssetManagement"
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <!-- Dark overlay -->
  <div
    class="absolute inset-0 bg-black/60"
    @click="showInstitutionalAssetManagement = false"
  ></div>

  <!-- Modal content -->
  <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
    
    <!-- Title -->
    <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">
Institutional Asset Management
    </h3>

    <hr class="mb-6" />

    <!-- Text Content-->
    <p class="text-gray-700 text-sm leading-relaxed">
 We provide independent investment advice and management for institutional clients, including family offices, foundations, endowments, and pension plans. Each investment plan is tailored to meet the unique objectives and liabilities of the organization.
Our approach combines technology, structured advice, and personalized planning to deliver portfolios that are transparent, cost-efficient, liquid, and aligned with long-term goals. Services include establishing investment policies, selecting funds, monitoring performance, controlling expenses, and diversifying assets according to specific risk and return objectives.
Whether short, medium, or long term, we design strategies that help institutions achieve their goals while managing risk effectively.
    </p>

    <!-- Close button -->
    <div class="mt-8 text-center">
      <button
        class="text-sm text-gray-500 hover:text-gray-800"
        @click="showInstitutionalAssetManagement = false"
      >
        Close
      </button>
    </div>
  </div>
</div>

</template>
