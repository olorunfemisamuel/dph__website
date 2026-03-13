<script setup lang="ts">
import { ref } from 'vue'

const showMutualFunds = ref(false)
const showWealthManagement = ref(false)
const showPortfolioManagement = ref(false)
const showHedgeFund = ref(false)
const showVentureCapital = ref(false)
const showInvestmentAdvisory = ref(false)
const showInstitutionalAssetManagement = ref(false)

// Consultation form
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
})

const loading = ref(false)
const formMessage = ref('')
const formSuccess = ref(false)

async function handleSubmit() {
  loading.value = true
  formMessage.value = ''

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/consultation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (!res.ok) throw new Error('Submission failed')

    formSuccess.value = true
    formMessage.value = 'Your message has been sent! We will get back to you shortly.'
    form.value = { firstName: '', lastName: '', email: '', phoneNumber: '', message: '' }
    setTimeout(() => { formMessage.value = '' }, 4000)
  } catch (err: any) {
    formSuccess.value = false
    formMessage.value = err.message || 'Something went wrong. Please try again.'
    setTimeout(() => { formMessage.value = '' }, 4000)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <!-- HERO SECTION -->
  <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-48 sm:h-64 md:h-[420px] overflow-hidden">
      <img src="@/assets/assetmangbanner.jpg" alt="About Banner" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
        Asset Management
      </h3>
    </div>
  </section>

  <!-- IMAGE + TEXT SECTION -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
    <div class="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
      <div class="relative h-50 md:h-auto">
        <img src="@/assets/assetmanagement1.png" alt="Team collaboration" class="w-full h-full object-cover" />
      </div>
      <div class="bg-gradient-to-br from-green-900 to-green-800 p-2 md:p-8 flex flex-col justify-center text-white">
        <p class="text-xs md:text-sm leading-relaxed mb-4">
          We invest in practice such as Equity, Fixed Income, Real Estate, Commodities, Alternative Investments and Mutual funds. Accounts held by financial institutions often include checking, savings, certificates of deposit, and MMFs which includes the automated sweep of cash balances into a sweep account that earns interest.
        </p>
        <p class="text-sm md:text-sm leading-relaxed">
          We deliver top of the line Investment Management services to our clients and engage funds by Institutions and Corporate Entities.
        </p>
      </div>
    </div>
  </section>

  <!-- CONTENT SECTIONS -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-20">

    <!-- SECTION 1 -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <div id="mutual-funds" class="border-l-4 border-[#2e8b3b] pl-5 cursor-pointer" @click="showMutualFunds = true">
          <RouterLink to="/mutual-funds" class="font-bold text-gray-800 text-base mb-3 transition-colors duration-300 hover:text-[#2e8b3b]">Mutual Funds</RouterLink>
          <p class="text-gray-600 text-sm leading-relaxed">We offer professionally managed mutual funds...</p>
        </div>
        <div id="wealth-management" class="border-l-4 border-gray-400 pl-5 cursor-pointer" @click="showWealthManagement = true">
          <h4 class="font-bold text-gray-800 text-base mb-3 transition-colors duration-300 hover:text-[#2e8b3b]">Wealth Management</h4>
          <p class="text-gray-600 text-sm leading-relaxed">Our wealth management services provide personalized solutions...</p>
        </div>
      </div>
      <div class="flex justify-center">
        <img src="@/assets/assetmanagementPRODUCT.png" class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm" />
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1 flex justify-center">
        <img src="@/assets/assetimgProd.png" class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm" />
      </div>
      <div class="order-1 md:order-2 space-y-8">
        <div id="portfolio-management" class="border-l-4 border-[#2e8b3b] pl-5 cursor-pointer" @click="showPortfolioManagement = true">
          <h4 class="font-bold text-[#2e8b3b] text-base mb-3 transition-colors duration-300 hover:text-[#06410e]">Portfolio Management</h4>
          <p class="text-gray-600 text-sm leading-relaxed">We manage investment portfolios on behalf of clients...</p>
        </div>
        <div id="hedge-fund" class="border-l-4 border-gray-400 pl-5 cursor-pointer" @click="showHedgeFund = true">
          <h4 class="font-bold text-gray-800 text-base mb-3 transition-colors duration-300 hover:text-[#2e8b3b]">Hedge Fund</h4>
          <p class="text-gray-600 text-sm leading-relaxed">Our hedge fund strategies focus on alternative investments...</p>
        </div>
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <div id="venture-capital" class="border-l-4 border-[#2e8b3b] pl-5 cursor-pointer" @click="showVentureCapital = true">
          <RouterLink to="/venture-capital" class="font-bold text-gray-800 text-base mb-2 transition-colors duration-300 hover:text-[#2e8b3b]">Venture Capital</RouterLink>
          <p class="text-gray-600 text-sm leading-relaxed">We invest in high-growth businesses with strong fundamentals...</p>
        </div>
        <div class="border-l-4 border-gray-400 pl-5 cursor-pointer" @click="showInvestmentAdvisory = true">
          <h4 class="font-bold text-gray-800 text-base mb-2 transition-colors duration-300 hover:text-[#2e8b3b]">Investment Advisory</h4>
          <p class="text-gray-600 text-sm leading-relaxed">Our advisory services offer expert guidance...</p>
        </div>
        <div id="investment-advisory" class="border-l-4 border-gray-800 pl-5 cursor-pointer" @click="showInstitutionalAssetManagement = true">
          <h4 class="font-bold text-gray-800 text-base mb-2 transition-colors duration-300 hover:text-[#2e8b3b]">Institutional Asset Management</h4>
          <p class="text-gray-600 text-sm leading-relaxed">We design and manage tailored investment solutions for institutions...</p>
        </div>
      </div>
      <div class="flex justify-center">
        <img src="@/assets/assetimgProd1.png" class="w-full max-w-sm sm:max-w-md rounded-3xl object-cover shadow-sm" />
      </div>
    </div>
  </section>

  <!-- CONTACT FORM -->
  <section class="bg-gray-100 mt-20 py-12 md:py-16">
    <div class="max-w-2xl mx-auto px-4 sm:px-6">
      <div class="bg-transparent rounded-lg p-8 md:p-10">
        <h4 class="text-center font-normal text-blue-600 text-sm md:text-base mb-8 uppercase tracking-wide">
          Consultation with an Asset Management Advisor
        </h4>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <input
            v-model="form.firstName"
            type="text"
            placeholder="First Name"
            required
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500 bg-transparent"
          />
          <input
            v-model="form.lastName"
            type="text"
            placeholder="Last Name"
            required
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500 bg-transparent"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            required
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500 bg-transparent"
          />
          <input
            v-model="form.phoneNumber"
            type="tel"
            placeholder="Phone Number"
            required
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500 bg-transparent"
          />
          <textarea
            v-model="form.message"
            placeholder="Leave a Message"
            rows="1"
            required
            class="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-blue-600 focus:ring-0 outline-none text-sm placeholder-gray-500 resize-none bg-transparent"
          ></textarea>

          <div class="pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="bg-blue-600 text-white px-8 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
            >
              {{ loading ? 'Sending...' : 'Submit' }}
            </button>
          </div>

          <p
            v-if="formMessage"
            :class="formSuccess ? 'text-green-600' : 'text-red-500'"
            class="text-xs text-center pt-1"
          >
            {{ formMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>

  <!-- MUTUAL FUNDS MODAL -->
  <div v-if="showMutualFunds" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showMutualFunds = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Mutual Funds</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        We present a unique and highly rewarding investment opportunity to investors to set their money working efficiently and effectively independent of them, with the ultimate goal of achieving long-term returns that are uncorrelated with the Nigerian equities market by investing in a portfolio of Federal Government Bonds, Money Market Securities and Cash that have been approved by the Securities and Exchange Commission of Nigeria for our investors.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showMutualFunds = false">Close</button>
      </div>
    </div>
  </div>

  <!-- WEALTH MANAGEMENT MODAL -->
  <div v-if="showWealthManagement" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showWealthManagement = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Wealth Management</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        We build and preserve wealth across diverse asset classes, including equities, real estate, digital markets, commodities, energy, agriculture, and currency investments. Our client-focused structure minimises costs, allowing investors to retain more of their returns and grow their wealth over time. We also offer a comprehensive lending portfolio spanning office buildings, warehouses, mixed-use, multi-family, and retail properties, with competitive terms and long-term funding strategies designed to deliver attractive returns throughout the real estate cycle.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showWealthManagement = false">Close</button>
      </div>
    </div>
  </div>

  <!-- PORTFOLIO MANAGEMENT MODAL -->
  <div v-if="showPortfolioManagement" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showPortfolioManagement = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Portfolio Management</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        We manage client wealth with a strategic focus on achieving superior market performance, tailored to individual investment objectives. Our Discretionary Portfolio Management Services (DPMS) serve high-net-worth and institutional clients, delivering bespoke portfolio solutions through a combination of extensive investment resources, rigorous research, local market insights, and advanced risk management. DPMS empowers clients to directly own a diversified portfolio of individual securities, providing greater control and transparency than traditional mutual funds.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showPortfolioManagement = false">Close</button>
      </div>
    </div>
  </div>

  <!-- HEDGE FUND MODAL -->
  <div v-if="showHedgeFund" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showHedgeFund = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Hedge Fund</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        Our hedge fund strategies focus on alternative investments, employing advanced techniques to generate returns uncorrelated with traditional markets. We leverage global macro, long/short equity, and event-driven strategies to deliver consistent, risk-adjusted performance for sophisticated investors.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showHedgeFund = false">Close</button>
      </div>
    </div>
  </div>

  <!-- VENTURE CAPITAL MODAL -->
  <div v-if="showVentureCapital" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showVentureCapital = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Venture Capital</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        We provide tailored venture capital services through a client-focused model supported by advanced technology and multi-jurisdictional capabilities. Our services include fund administration, SPV administration, depositary services, regulatory reporting, and corporate support. Clients benefit from detailed investment analytics, performance tracking, and exposure reporting, enabling easy monitoring of investments.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showVentureCapital = false">Close</button>
      </div>
    </div>
  </div>

  <!-- INVESTMENT ADVISORY MODAL -->
  <div v-if="showInvestmentAdvisory" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showInvestmentAdvisory = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Investment Advisory</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        Our professional advisors help clients maximise the potential of their assets through tailored investment strategies aligned with individual objectives and risk preferences. We keep clients informed of market developments, regularly review portfolios, and adjust strategies to meet changing conditions. Our structured approach includes defining investor profiles, designing optimal account structures, setting investment guidelines, implementing portfolios, and monitoring performance quarterly.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showInvestmentAdvisory = false">Close</button>
      </div>
    </div>
  </div>

  <!-- INSTITUTIONAL ASSET MANAGEMENT MODAL -->
  <div v-if="showInstitutionalAssetManagement" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/60" @click="showInstitutionalAssetManagement = false"></div>
    <div class="relative bg-white max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-8">
      <h3 class="text-center text-[#2e8b3b] font-semibold text-sm mb-4">Institutional Asset Management</h3>
      <hr class="mb-6" />
      <p class="text-gray-700 text-sm leading-relaxed">
        We provide independent investment advice and management for institutional clients, including family offices, foundations, endowments, and pension plans. Each investment plan is tailored to meet the unique objectives and liabilities of the organization. Our approach combines technology, structured advice, and personalized planning to deliver portfolios that are transparent, cost-efficient, liquid, and aligned with long-term goals.
      </p>
      <div class="mt-8 text-center">
        <button class="text-sm text-gray-500 hover:text-gray-800" @click="showInstitutionalAssetManagement = false">Close</button>
      </div>
    </div>
  </div>

</template>