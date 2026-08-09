<script setup lang="ts">

</script>

<template>
  <div class="alternative-investment bg-gradient-to-b from-gray-50 to-white">
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-[#092719] text-white">
      <img
        src="@/assets/ExchangeTradedimg.png"
        alt="Alternative Investment"
        class="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div class="absolute inset-0 -z-10 bg-gradient-to-br from-[#061b11]/95 via-[#092719]/90 to-[#0b4d2e]/85"></div>

      <div class="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32 lg:px-12 lg:py-40">
        <div class="max-w-4xl space-y-6">
          <p class="inline-block rounded-full bg-green-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-300 backdrop-blur-sm">
            Investment Solutions
          </p>
          <h1 class="text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
            Fund Management
          </h1>
          <p class="max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Diversified investment strategies tailored to your financial objectives, risk tolerance, and long-term wealth creation goals.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Content -->
    <section class="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      <div class="mx-auto max-w-7xl space-y-32">

        <!-- DISCRETIONARY PORTFOLIO MANAGEMENT -->
        <div id="discretionary-portfolio-management" class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <!-- Text Column -->
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-lg font-bold text-white shadow-md">
                  01
                </span>
                <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Portfolio Management
                </span>
              </div>
              <h2 class="text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
                Discretionary Portfolio Management
              </h2>
            </div>

            <p class="text-lg leading-relaxed text-gray-600">
              Our Discretionary Portfolio Management service enables clients to delegate investment decisions to experienced portfolio managers who actively manage investments in line with agreed objectives, risk tolerance, and investment mandates. This allows for timely execution of investment opportunities and proactive portfolio management.
            </p>

            <div class="space-y-5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
                Key Features
              </p>
              <ul class="grid gap-4 sm:grid-cols-2">
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Personalized Investment Portfolios</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Active Portfolio Management</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Asset Allocation Strategies</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Portfolio Rebalancing</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Performance Monitoring & Reporting</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Risk Management Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Image Column -->
          <div class="relative">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="@/assets/alternativeinvestIMAGE.png"
                class="h-[400px] w-full object-cover transition duration-300 hover:scale-105 lg:h-[500px]"
                alt="Discretionary Portfolio Management"
              />
            </div>
          </div>
        </div>

        <!-- NON-DISCRETIONARY PORTFOLIO MANAGEMENT -->
        <div id="non-discretionary-portfolio-management" class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          <!-- Image Column (First on Desktop) -->
          <div class="relative order-2 lg:order-1">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="@/assets/alternativeinvestIMAGE.png"
                class="h-[400px] w-full object-cover transition duration-300 hover:scale-105 lg:h-[500px]"
                alt="Non-Discretionary Portfolio Management"
              />
            </div>
          </div>

          <!-- Text Column -->
          <div class="space-y-8 order-1 lg:order-2">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-lg font-bold text-white shadow-md">
                  02
                </span>
                <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Advisory Services
                </span>
              </div>
              <h2 class="text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
                Non-Discretionary Portfolio Management
              </h2>
            </div>

            <p class="text-lg leading-relaxed text-gray-600">
              Our Non-Discretionary Portfolio Management service combines professional investment advice with client-directed decision making. Clients retain full control over investment decisions while benefiting from DPH's market insights, research capabilities, and tailored portfolio recommendations.
            </p>

            <div class="space-y-5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
                Key Features
              </p>
              <ul class="grid gap-4 sm:grid-cols-2">
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Investment Advisory Services</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Portfolio Review & Analysis</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Research & Market Intelligence</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Asset Allocation Recommendations</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Investment Performance Reporting</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Wealth Advisory Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- MUTUAL FUNDS -->
        <div id="mutual-funds" class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <!-- Text Column -->
          <div class="space-y-8">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-lg font-bold text-white shadow-md">
                  03
                </span>
                <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Investment Funds
                </span>
              </div>
              <h2 class="text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
                Mutual Funds
              </h2>
            </div>

            <p class="text-lg leading-relaxed text-gray-600">
              Our Mutual Funds provide professionally managed investment solutions designed to help individuals and institutions achieve their financial objectives through diversified portfolios, disciplined risk management, and long-term wealth creation. The funds offer investors access to a range of asset classes tailored to different investment goals and risk appetites.
            </p>

            <div class="space-y-5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
                Key Offerings
              </p>
              <ul class="grid gap-4">
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Money Market Funds</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Balanced Mutual Funds</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Real Estate Investment Trusts (REITs)</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Exchange Traded Funds (ETFs)</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Foreign Funds</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Image Column -->
          <div class="relative">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="@/assets/alternativeinvestIMAGE.png"
                class="h-[400px] w-full object-cover transition duration-300 hover:scale-105 lg:h-[500px]"
                alt="Mutual Funds"
              />
            </div>
          </div>
        </div>

        <!-- ALTERNATIVE INVESTMENT -->
        <div id="alternative-investment-services" class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          <!-- Image Column (First on Desktop) -->
          <div class="relative order-2 lg:order-1">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="@/assets/alternativeinvestIMAGE.png"
                class="h-[400px] w-full object-cover transition duration-300 hover:scale-105 lg:h-[500px]"
                alt="Alternative Investment"
              />
            </div>
          </div>

          <!-- Text Column -->
          <div class="space-y-8 order-1 lg:order-2">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-700 text-lg font-bold text-white shadow-md">
                  04
                </span>
                <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                  Specialized Investments
                </span>
              </div>
              <h2 class="text-4xl font-bold leading-tight text-gray-950 sm:text-5xl">
                Alternative Investment
              </h2>
            </div>

            <p class="text-lg leading-relaxed text-gray-600">
              Our Alternative Investments platform provides access to specialized investment opportunities beyond traditional asset classes, enabling investors to diversify portfolios, enhance long-term returns, and participate in high-growth sectors of the economy through carefully structured investment solutions.
            </p>

            <div class="space-y-5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
                Key Offerings
              </p>
              <ul class="grid gap-4">
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Private Equity</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Venture Capital</span>
                </li>
                <li class="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    ✓
                  </span>
                  <span class="text-sm text-gray-700">Infrastructure Funds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>