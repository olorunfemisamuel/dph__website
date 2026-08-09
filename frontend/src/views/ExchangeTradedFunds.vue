<script setup lang="ts">
import advisoryImg from '@/assets/ExchangeIMGS/exchangeIMG.jpg'
import clinicsImg from '@/assets/ExchangeIMGS/exchangeIMG2.jpg'
import etfHeroImg from '@/assets/exchangetradedfund/exchangetraededfund.webp'
import agroEtfImg from '@/assets/exchangetradedfund/AGROETF.webp'
import goldEtfImg from '@/assets/exchangetradedfund/GOLDETF.webp'

const programmes = [
  {
    id: 'premium-business-advisory-programme-1',
    navId: 'agro-etf',
    eyebrow: 'Flagship advisory',
    title: 'DPH Premium Business Advisory Programme',
    image: advisoryImg,
    description:
      'Our flagship executive advisory engagement is designed for high-growth, founder-led businesses seeking to transition into professionally managed, scalable, and investment-ready institutions.',
    features: [
      'Business strategy and growth architecture',
      'Institutional structuring and governance',
      'Financial discipline and investment readiness',
      'Leadership development',
      'Organisational transformation',
      'Capital readiness and enterprise positioning',
    ],
  },
  {
    id: 'quarterly-business-clinics',
    navId: 'gold-etf',
    eyebrow: 'Executive learning',
    title: 'DPH Quarterly Business Clinics',
    image: clinicsImg,
    description:
      'Practical executive learning programmes for business owners, senior executives, and leadership teams building resilient and high-performing organisations.',
    features: [
      'Financial management and tax planning',
      'Cash flow optimisation',
      'Funding readiness',
      'Leadership and corporate governance',
      'Process improvement and productivity',
      'Market expansion and strategic partnerships',
    ],
  },
  {
    id: 'ceo-breakfast-series',
    eyebrow: 'Market intelligence',
    title: 'DPH CEO Breakfast Series',
    image: etfHeroImg,
    description:
      'An exclusive executive roundtable where business leaders, investors, policymakers, and industry experts exchange ideas and explore strategic opportunities.',
    features: [
      'Executive leadership',
      'Economic and market outlook',
      'Strategic business discussions',
      'Investment opportunities',
      'CEO networking',
      'Investor and strategic partner engagement',
    ],
  },
  {
    id: 'virtual-sme-workshop',
    eyebrow: 'SME capacity building',
    title: 'DPH Virtual SME Workshop',
    image: agroEtfImg,
    description:
      'A practical business growth workshop that gives entrepreneurs and growing businesses the tools to strengthen structures, improve financial management, and prepare for capital.',
    features: [
      'Business structuring',
      'Financial management',
      'Business strategy',
      'Sales and business growth',
      'Governance essentials',
      'Access to capital',
    ],
  },
  {
    id: 'private-ceo-consultation',
    eyebrow: 'Confidential advisory',
    title: 'DPH Private CEO Consultation',
    image: goldEtfImg,
    description:
      'A bespoke one-on-one advisory service for business owners, chief executives, and leadership teams making critical growth, governance, capital, or restructuring decisions.',
    features: [
      'Strategic business reviews',
      'Corporate governance',
      'Business expansion',
      'Capital raising',
      'Succession planning',
      'Executive decision support',
    ],
  },
]
</script>

<template>
  <div class="w-full bg-[#f4f7f4]">
    <section class="relative isolate overflow-hidden bg-[#082818] text-white">
      <img
        :src="etfHeroImg"
        alt="Business advisory and exchange traded funds"
        class="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-[#062216]/78"></div>

      <div class="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-24 lg:px-10">
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-green-300">
            Business Advisory
          </p>
          <h1 class="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Exchange-Traded Fund Advisory Programmes
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Advisory programmes, executive forums, and SME workshops built to help leaders scale stronger businesses and prepare for investment opportunities.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 border-l-4 border-green-400 bg-white/10 p-6 backdrop-blur-sm">
          <div class="border border-white/15 bg-white/10 p-4">
            <p class="text-3xl font-bold">05</p>
            <p class="mt-1 text-xs uppercase tracking-[0.16em] text-green-100">Programmes</p>
          </div>
          <div class="border border-white/15 bg-white/10 p-4">
            <p class="text-3xl font-bold">01:1</p>
            <p class="mt-1 text-xs uppercase tracking-[0.16em] text-green-100">Consultation</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Programmes
          </p>
          <h2 class="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
            Built for business leaders at different growth moments
          </h2>
        </div>

        <div class="space-y-8">
          <article
            v-for="(programme, index) in programmes"
            :id="programme.id"
            :key="programme.id"
            class="scroll-mt-28 overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <span
              v-if="programme.navId"
              :id="programme.navId"
              class="block scroll-mt-28"
              aria-hidden="true"
            ></span>

            <div
              class="grid lg:grid-cols-[0.95fr_1.05fr]"
              :class="index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''"
            >
              <div class="relative min-h-[260px] overflow-hidden sm:min-h-[340px]">
                <img
                  :src="programme.image"
                  :alt="programme.title"
                  class="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
                <p class="absolute bottom-5 left-5 bg-green-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  {{ programme.eyebrow }}
                </p>
              </div>

              <div class="grid bg-white md:grid-cols-[1fr_280px]">
                <div class="p-6 sm:p-8">
                  <p class="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                    {{ String(index + 1).padStart(2, '0') }}
                  </p>
                  <h3 class="mt-4 text-2xl font-bold leading-snug text-gray-950 sm:text-3xl">
                    {{ programme.title }}
                  </h3>
                  <p class="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    {{ programme.description }}
                  </p>
                </div>

                <div class="bg-[#0b4d2e] p-6 text-white sm:p-8">
                  <h4 class="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
                    Focus Areas
                  </h4>
                  <ul class="mt-5 space-y-3 text-sm leading-6">
                    <li
                      v-for="feature in programme.features"
                      :key="feature"
                      class="flex gap-3"
                    >
                      <span class="mt-1 h-2 w-2 shrink-0 bg-green-300"></span>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
