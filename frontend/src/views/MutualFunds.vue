<template>
  <div class="mutual-funds-page">

    <!-- Hero Banner -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-40 sm:h-44 md:h-70 overflow-hidden">
        <img
          src="@/assets/ExchangeTradedimg.png"
          alt="Mutual Funds"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-10">
          <h2 class="capitalize text-white text-2xl sm:text-2xl md:text-3xl font-bold mb-1">
            Mutual Funds
          </h2>
        </div>
      </div>
    </section>

    <!-- Fund Sections -->
    <section class="w-full bg-gray-100 py-10 px-3 sm:px-6 md:px-10 space-y-10">

      <!-- ── MONEY MARKET FUND ── -->
      <div id="money-market" class="bg-white rounded-xl shadow-sm">

        <!-- Risk badge -->
        <div class="px-6 pt-6 pb-2">
          <span class="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Low Risk</span>
        </div>

        <!-- Title + Description LEFT | Key Features RIGHT -->
        <div class="flex flex-col md:flex-row gap-6 px-3 sm:px-6 pt-2 pb-6 items-stretch">

          <!-- LEFT -->
          <div class="md:w-2/3 space-y-3">
            <h3 class="text-gray-900 text-xl font-bold">Money Market Fund</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Deutsche Money Market Fund aims to generate income as well as preserve investors' capital by diversifying investment across a range of high-quality, short-term debt securities or money market instruments as approved by the SEC; and short-term debt securities of varying maturities of not more than 365 days, issued or guaranteed by the Federal Government of Nigeria. It will operate as an Open-ended Fund which allows investors to buy and sell units of the Fund on a continuous basis from the Fund Manager. The Fund seeks to provide current income while maintaining liquidity and a stable price of N5,000 for all classes of investors that value liquidity and security of assets. The Fund is aimed at investors who are interested in a steady stream of income at money market rates while preserving the value of their investment. The Fund is marketable to all retail investors, and as appropriate to other institutional investors.
            </p>
          </div>

          <!-- RIGHT: Key Features -->
          <div class="md:w-1/3 self-stretch">
            <div class="bg-green-700 text-white rounded-xl px-4 py-5 h-full flex flex-col">
              <h4 class="font-bold text-xs mb-4 bg-green-600 inline-block self-start px-3 py-1 rounded-full">Key Benefits</h4>
              <ul class="text-xs space-y-2.5 flex-1">
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Low initial investment threshold</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Capital Preservation Focus</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Investment in high quality, short-term instruments</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> High Liquidity with continuous subscription and redemption</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Competitive money market returns</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Returns Superior to standard Savings account</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Flexible Additional contributions at any time</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Assets held in an independent custodian account</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Suitable for both retail and institutional investors</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Unified dark bottom section -->
        <div class="bg-[#0f1520] text-white rounded-b-xl pt-10 pb-6">
          <!-- Stats row: white rounded card on dark bg -->
          <div class="mx-4 my-6 px-6 py-6 rounded-2xl bg-white shadow-sm flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Initial</p>
              <p class="text-2xl font-bold text-gray-900">#1000</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Additional</p>
              <p class="text-2xl font-bold text-gray-900">#500</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Risk Level</p>
              <p class="text-2xl font-bold text-gray-900">LOW</p>
            </div>
          </div>
          <!-- What the Fund Invests In -->
          <div class="px-4 sm:px-6 py-6">
            <h4 class="text-white font-bold text-base mb-1">What the Fund Invests in</h4>
            <p class="text-gray-400 text-xs mb-6 max-w-xs leading-relaxed">The fund diversifies across high-quality short-term instruments to preserve capital and generate income.</p>
            <div class="space-y-5">
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Short Term Govt Securities</span>
                  <span class="text-green-400 text-xs font-semibold">25% - 95%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 75%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Other Money Market Instruments</span>
                  <span class="text-green-400 text-xs font-semibold">5% - 75%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 40%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── DPH EQUITY FUND ── -->
      <div id="equity-fund" class="bg-gray-100 rounded-xl shadow-sm">

        <!-- Risk badge -->
        <div class="px-6 pt-6 pb-4">
          <span class="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">High Risk</span>
        </div>

        <!-- Title + Description LEFT | Key Features RIGHT -->
        <div class="flex flex-col md:flex-row gap-6 px-3 sm:px-6 pb-6 items-start">

          <!-- LEFT: gray card -->
          <div class="md:flex-1 bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 self-stretch">
            <h3 class="text-gray-900 text-2xl font-bold">Dph Equity Funds</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              The DPH Equity Fund is an open-ended unit trust scheme structured to deliver long-term capital appreciation through active investment in Nigerian equities. The Fund invests predominantly in high-quality companies listed on the Nigerian Exchange (NGX), selected through a rigorous research-driven investment process.
            </p>
            <p class="text-sm text-gray-600 leading-relaxed">
              A minimum of 70% of the Fund's assets is allocated to equities, while up to 30% may be invested in short-term money market instruments and deposits to manage liquidity and moderate volatility. The Fund is designed for investors seeking growth over the long term.
            </p>
          </div>

          <!-- RIGHT: tall narrow green card -->
          <div class="w-64 shrink-0 self-stretch">
            <div class="bg-green-700 text-white rounded-xl px-5 py-5 h-full flex flex-col">
              <span class="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-5">Key Benefits</span>
              <ul class="text-xs space-y-3 flex-1">
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Minimum 70% exposure to Nigerian listed equities</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Research driven stock selection process</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Active Portfolio management</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Diversification across sectors</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Liquidity management through fixed income allocation</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Competitive long term potential</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Tax-efficient structure</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Programmed and disciplined investment approach</li>
                <li class="flex items-start gap-2"><span class="text-green-300 shrink-0 mt-0.5">✓</span> Suitable for individuals, institutions, and diaspora investors</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Unified dark bottom section -->
        <div class="bg-[#0f1520] text-white rounded-b-xl pt-10 pb-6">
          <div class="mx-4 my-6 py-6 px-6 rounded-2xl bg-white shadow-sm flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Initial</p>
              <p class="text-2xl font-bold text-gray-900">#1000</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Additional</p>
              <p class="text-2xl font-bold text-gray-900">#500</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Risk Level</p>
              <p class="text-2xl font-bold text-gray-900">HIGH</p>
            </div>
          </div>
          <div class="px-4 sm:px-6 py-6">
            <h4 class="text-white font-bold text-base mb-1">What the Fund Invests in</h4>
            <p class="text-gray-400 text-xs mb-6 max-w-xs leading-relaxed">Predominantly Nigerian equities listed on the NSE, with a portion in money market instruments for liquidity.</p>
            <div class="space-y-5">
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Nigerian Equities (NSE Listed)</span>
                  <span class="text-green-400 text-xs font-semibold">70% - 100%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Money Market Instruments</span>
                  <span class="text-green-400 text-xs font-semibold">0% - 30%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 30%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── FIXED INCOME FUND ── -->
      <div id="fixed-income" class="bg-white rounded-xl shadow-sm">

        <div class="px-6 pt-6 pb-2">
          <span class="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Low Risk</span>
        </div>

        <div class="flex flex-col md:flex-row gap-6 px-3 sm:px-6 pt-2 pb-6">
          <div class="md:w-3/5 space-y-3">
            <h3 class="text-gray-900 text-xl font-bold">Deutsche Private Fixed Income Fund</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Deutsche Income Fund is an open-ended fund that is authorized and registered in Nigeria as a unit trust scheme under section 160 of the investments and securities Act 2007. The fund has been designed to suit the needs of discerning investors seeking to achieve stable capital appreciation and returns in Nigeria-based investments. Deutsche Income Fund seeks returns above the rate of inflation through investment in Fixed Income grade securities. The returns will be shared pro-rata based on each investor's contribution. The fund manager invests in Naira denominated securities issued by the Central Bank of Nigeria, Corporates, States, and the Federal government of Nigeria. The fund is suitable for individuals as well as institutional investors, employee schemes, trust companies, insurance companies, government parastatals, investment clubs, and other associations. The Fund is ideal for conservative investors seeking to preserve their capital over the medium to the long-term horizon (> 2 years).
            </p>
          </div>
          <div class="md:w-2/5">
            <div class="bg-green-700 text-white rounded-xl px-6 py-6 h-full">
              <h4 class="font-bold text-sm mb-4">Key Features</h4>
              <ul class="text-sm space-y-2">
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Guaranteed principal and interest</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Attractive yields compared to other instruments</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Low-risk investment target, excludes equities</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Returns are tax exempt</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> High-level security</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Professional Management</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Funds are held in a custodian account</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Unified dark bottom section -->
        <div class="bg-[#0f1520] text-white rounded-b-xl pt-10 pb-6">
          <div class="mx-4 my-6 px-6 py-6 rounded-2xl bg-white shadow-sm flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Initial</p>
              <p class="text-2xl font-bold text-gray-900">#1000</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Additional</p>
              <p class="text-2xl font-bold text-gray-900">#500</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Risk Level</p>
              <p class="text-2xl font-bold text-gray-900">LOW</p>
            </div>
          </div>
          <div class="px-4 sm:px-6 py-6">
            <h4 class="text-white font-bold text-base mb-1">What the Fund Invests in</h4>
            <p class="text-gray-400 text-xs mb-6 max-w-xs leading-relaxed">Naira-denominated fixed income securities issued by the CBN, corporates, states, and the federal government.</p>
            <div class="space-y-5">
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">FGN & State Bonds</span>
                  <span class="text-green-400 text-xs font-semibold">60% - 80%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 70%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Corporate Bonds & Securities</span>
                  <span class="text-green-400 text-xs font-semibold">20% - 40%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 30%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── ETHICAL FUND ── -->
      <div id="ethical-funds" class="bg-white rounded-xl shadow-sm">

        <div class="px-6 pt-6 pb-2">
          <span class="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Low Risk</span>
        </div>

        <div class="flex flex-col md:flex-row gap-6 px-3 sm:px-6 pt-2 pb-6">
          <div class="md:w-3/5 space-y-3">
            <h3 class="text-gray-900 text-xl font-bold">Deutsche Ethical Funds</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Deutsche Ethical Fund is a fund that invests in strict compliance with the investor's ethical values e.g. moral, religious, social, etc. This fund is invested in equities and fixed income securities that comply with individual investors' ethical values. Being a discretionary open-ended collective investment scheme, the fund manager leaves the offer and redemption of units open throughout the lifespan of the fund. The objectives guarding this fund are strict adherence to investors' ethical values; ensure generation of competitive returns on investment and preserve investors' capital. Deutsche Ethical Fund is suitable for individuals whose ethical values cannot be compromised as well as groups, organizations, and institutions founded on some ethical values that cannot be compromised.
            </p>
          </div>
          <div class="md:w-2/5">
            <div class="bg-green-700 text-white rounded-xl px-6 py-6 h-full">
              <h4 class="font-bold text-sm mb-4">Key Features</h4>
              <ul class="text-sm space-y-2">
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Professional Fund and portfolio Management</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Tax advantage</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Competitive returns</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Diversification of portfolio</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Risk Mitigation</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Programmed Investment</li>
                <li class="flex items-start gap-2"><span class="text-green-300 mt-0.5">✓</span> Transparency and strict compliance with ethical investment rules</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Unified dark bottom section -->
        <div class="bg-[#0f1520] text-white rounded-b-xl pt-10 pb-6">
          <div class="mx-4 my-6 px-6 py-6 rounded-2xl bg-white shadow-sm flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Initial</p>
              <p class="text-2xl font-bold text-gray-900">#1000</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Minimum Additional</p>
              <p class="text-2xl font-bold text-gray-900">#500</p>
            </div>
            <div class="flex-1 px-6 py-5">
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-1">Risk Level</p>
              <p class="text-2xl font-bold text-gray-900">LOW</p>
            </div>
          </div>
          <div class="px-4 sm:px-6 py-6">
            <h4 class="text-white font-bold text-base mb-1">What the Fund Invests in</h4>
            <p class="text-gray-400 text-xs mb-6 max-w-xs leading-relaxed">Equities and fixed income securities that strictly comply with investors' ethical, moral, and religious values.</p>
            <div class="space-y-5">
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Ethical Equities</span>
                  <span class="text-green-400 text-xs font-semibold">50% - 70%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 60%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1.5">
                  <span class="text-gray-300 text-xs font-medium">Fixed Income & Compliant Instruments</span>
                  <span class="text-green-400 text-xs font-semibold">30% - 50%</span>
                </div>
                <div class="w-full bg-white/10 rounded-full h-1">
                  <div class="bg-green-500 h-1 rounded-full" style="width: 40%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>