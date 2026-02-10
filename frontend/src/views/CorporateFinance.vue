<script setup lang="ts">

</script>

<template>
    <div>
            <!-- HERO SECTION -->
          <section class="w-full overflow-hidden shadow-lg">
            <div class="relative w-full h-100 sm:h-64 md:h-96 overflow-hidden">
              <img 
                src="@/assets/assetmangbanner.jpg" 
                alt="About Banner" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/50"></div>
              <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
                Corporate Finance
              </h3>
            </div>
          </section>

          <!-- CONTENT SECTION -->
          <section class="max-w-6xl mx-auto px-4 py-16">
            <!-- Intro Text -->
            <div class="mb-16">
              <p class="text-gray-700 leading-relaxed mb-6">
                At Deutsche Partners Holding (DPH), we view obligation and acquisitions not merely as transactions, but as transformative milestones in your corporate journey. Regardless of the size or complexity of your business, we provide hands-on advisory, meticulously supporting team delivers insights sought-after governance capabilities. We partner with corporations, private equity firms, and institutions to navigate every phase of the deal lifecycle—from origination to closing.
              </p>
              <p class="text-gray-700 leading-relaxed">
                We work alongside our clients to architect tailored growth strategies that align directly with their corporate vision, ensuring they are poised to capitalize on market shifts during acquisitions, mergers, or divestitures.
              </p>
            </div>

            <!-- Our Comprehensive Corporate Finance Services -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold text-green-700 mb-8">
                Our Comprehensive<br>Corporate Finance<br>Services
              </h2>

              <div class="grid md:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div>
                  <h3 class="text-lg font-semibold text-green-700 mb-3">Capital Structure Optimization</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    We help clients to build sophisticated, well-balanced capital structures tailored to their growth phase. Through our network to achieve the optimal blend of equity and debt financing.
                  </p>
                </div>

                <!-- Service 2 -->
                <div>
                  <h3 class="text-lg font-semibold text-green-700 mb-3">Capital Raising</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    Our versatile global access to the significant array of capital sources—including institutional investors, private equity firms, family offices and investment banks—we assist in raising capital.
                  </p>
                </div>

                <!-- Service 3 -->
                <div>
                  <h3 class="text-lg font-semibold text-green-700 mb-3">Strategic Financial Advisory</h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    Our specialists examine not just how to raise capital, but what your business truly needs to succeed. Our advice, financial structuring, risk allocation and optimal capital deployment.
                  </p>
                </div>
              </div>
            </div>

            <!-- Our Approach -->
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Approach</h2>

              <div class="grid md:grid-cols-3 gap-8">
                <!-- Approach 1 -->
                <div>
                  <div class="bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-t-lg">
                    Analytical Rigor
                  </div>
                  <div class="bg-gray-200 p-6 rounded-b-lg">
                    <p class="text-sm text-gray-700 leading-relaxed">
                      We dive into your financials behind the net and using tools to evaluate your capital structure, cash flow dynamics, operational metrics and key metrics performance relative to peers.
                    </p>
                  </div>
                </div>

                <!-- Approach 2 -->
                <div>
                  <div class="bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-t-lg">
                    Market Knowledge
                  </div>
                  <div class="bg-gray-200 p-6 rounded-b-lg">
                    <p class="text-sm text-gray-700 leading-relaxed">
                      Our team understands all global markets inside-out and they work in conjunction with local knowledge that delivers real market insight, and capital opportunities.
                    </p>
                  </div>
                </div>

                <!-- Approach 3 -->
                <div>
                  <div class="bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-t-lg">
                    Seamless Execution
                  </div>
                  <div class="bg-gray-200 p-6 rounded-b-lg">
                    <p class="text-sm text-gray-700 leading-relaxed">
                      Beyond strategy, we ensure flawless implementation. We orchestrate negotiations, work capital structures, coordinate legal reviews, supervise regulatory filings and manage closing processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
    </div>


     <div class="bg-green-700 text-white py-10">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="mb-6">
          Stay updated with the latest news and insights from Deutsche Partners Holding.
        </p>
        <form
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            class="w-full sm:flex-1 bg-white/10 border border-white/30 px-4 sm:px-6 py-3 rounded text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20"
          />
          <button
            type="submit"
            class="w-full sm:w-auto border-2 border-white px-8 sm:px-10 py-3 rounded font-bold hover:bg-white hover:text-[#2e8b3b] transition duration-300 uppercase text-sm sm:text-base tracking-widest"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
</template>