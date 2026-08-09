<script setup lang="ts">
const services = [
  {
    id: 'money-market',
    label: 'Advisory 01',
    title: 'Privatization & Concession Advisory',
    description:
      'We advise governments and public institutions on the planning, structuring, and execution of privatization and concession transactions, helping unlock value, attract private investment, and improve operational efficiency.',
    benefits: [
      'Transaction structuring',
      'PPP and concession advisory',
      'Privatization strategy',
      'Bid process management',
      'Regulatory and stakeholder advisory',
    ],
  },
  {
    id: 'equity-fund',
    label: 'Advisory 02',
    title: 'Debt & Equity Capital Raising',
    description:
      'We support clients in raising capital through debt and equity markets by developing tailored financing strategies, structuring transactions, and connecting businesses with suitable funding sources to achieve their growth objectives.',
    benefits: [
      'Debt financing solutions',
      'Equity capital raising',
      'Capital structure advisory',
      'Investor engagement',
      'Transaction execution support',
    ],
  },
  {
    id: 'fixed-income',
    label: 'Advisory 03',
    title: 'Public & Private Sector Advisory',
    description:
      'We provide strategic financial and investment advisory services to governments, public institutions, and private enterprises, delivering solutions that enhance project execution, financial sustainability, and long-term economic value.',
    benefits: [
      'Financial advisory',
      'Infrastructure and project advisory',
      'Policy and institutional support',
      'Investment strategy',
      'Business transformation',
    ],
  },
  {
    id: 'ethical-funds',
    label: 'Advisory 04',
    title: 'Mergers & Acquisitions and Leveraged Buyouts',
    description:
      'We advise clients throughout the transaction lifecycle, from opportunity identification and valuation to negotiation and execution, helping businesses pursue strategic acquisitions, mergers, divestitures, and leveraged buyouts with confidence.',
    benefits: [
      'Buy-side and sell-side advisory',
      'Business valuation',
      'Financial due diligence',
      'Deal structuring and negotiation',
      'Transaction execution',
    ],
  },
  {
    id: 'financial-restructuring',
    label: 'Advisory 05',
    title: 'Financial Restructuring & Capital Optimization',
    description:
      'We help organizations strengthen financial performance through capital restructuring, balance sheet optimization, debt restructuring, and strategic financial planning, positioning businesses for resilience, efficiency, and sustainable growth.',
    benefits: [
      'Debt restructuring',
      'Capital optimization',
      'Balance sheet restructuring',
      'Liquidity management',
      'Financial recovery planning',
    ],
  },
]
</script>

<template>
  <div class="mutual-funds-page bg-gradient-to-b from-[#f5f8f6] to-white">
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-[#092719] text-white">
      <img
        src="@/assets/ExchangeTradedimg.png"
        alt="Mutual Funds"
        class="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-br from-[#061b11]/95 via-[#092719]/90 to-[#0b4d2e]/85"></div>

      <div class="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-12 lg:py-32">
        <div class="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-16">
          <!-- Left Column -->
          <div class="max-w-3xl space-y-8">
            <p class="inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-300 backdrop-blur-sm">
              Deutsche Partners Holding
            </p>
            <h1 class="text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
              Corporate Finance Advisory
            </h1>
            <p class="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Practical transaction support for public institutions, private enterprises, investors, and boards making capital decisions.
            </p>
          </div>

          <!-- Right Column - Focus Areas Card -->
          <div class="rounded-lg border border-green-400/30 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p class="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              Focus Areas
            </p>
            <div class="grid gap-4 text-sm">
              <span class="rounded border border-white/20 bg-white/10 px-4 py-3.5 text-center font-medium text-white transition hover:bg-white/20">
                Capital Raising
              </span>
              <span class="rounded border border-white/20 bg-white/10 px-4 py-3.5 text-center font-medium text-white transition hover:bg-white/20">
                M&A Advisory
              </span>
              <span class="rounded border border-white/20 bg-white/10 px-4 py-3.5 text-center font-medium text-white transition hover:bg-white/20">
                Restructuring
              </span>
              <span class="rounded border border-white/20 bg-white/10 px-4 py-3.5 text-center font-medium text-white transition hover:bg-white/20">
                Public Sector
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <!-- Section Header -->
        <div class="mb-16 max-w-3xl space-y-5">
          <p class="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            What We Deliver
          </p>
          <h2 class="text-4xl font-bold leading-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Structured advice for complex transactions
          </h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Each service is built around the same discipline: define the transaction path, prepare the capital story, align stakeholders, and support execution through close.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid gap-8 lg:grid-cols-2">
          <article
            v-for="(service, index) in services"
            :id="service.id"
            :key="service.id"
            class="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl"
            :class="index === 0 ? 'lg:col-span-2' : ''"
          >
            <div class="grid h-full gap-0" :class="index === 0 ? 'md:grid-cols-[1.4fr_1fr]' : 'md:grid-cols-1'">
              <!-- Content Section -->
              <div class="space-y-6 p-8 sm:p-10 lg:p-12">
                <!-- Number Badge and Label -->
                <div class="flex items-center gap-4">
                  <span class="flex h-14 w-14 items-center justify-center rounded-lg bg-green-700 text-lg font-bold text-white shadow-md">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                    {{ service.label }}
                  </span>
                </div>

                <!-- Title and Description -->
                <div class="space-y-4">
                  <h3 class="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
                    {{ service.title }}
                  </h3>
                  <p class="text-base leading-relaxed text-gray-600 sm:text-lg">
                    {{ service.description }}
                  </p>
                </div>
              </div>

              <!-- Benefits Section -->
              <div class="space-y-6 bg-gradient-to-br from-[#0b4d2e] to-[#092719] p-8 text-white sm:p-10 lg:p-12">
                <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
                  Key Benefits
                </h4>
                <ul class="space-y-5">
                  <li
                    v-for="benefit in service.benefits"
                    :key="benefit"
                    class="flex gap-4"
                  >
                    <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-green-400 text-sm font-bold text-[#0b4d2e] shadow-md">
                      ✓
                    </span>
                    <span class="leading-relaxed">{{ benefit }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
