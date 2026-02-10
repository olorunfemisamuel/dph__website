<script setup lang="ts">
</script>

<template>
  <div>

    <!-- HERO SECTION -->
    <section class="w-full overflow-hidden">
      <div class="relative w-full h-56 sm:h-72 md:h-96">
        <img
          src="@/assets/assetmangbanner.jpg"
          alt="Project Finance Banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>

        <h3
          class="absolute bottom-6 left-6 md:bottom-10 md:left-10
                 text-white font-bold text-3xl md:text-5xl z-10"
        >
          Project Finance
        </h3>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="max-w-6xl mx-auto px-4 py-20 space-y-20">

      <!-- INTRO CARD -->
      <div class="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
        <p class="text-gray-700 leading-relaxed text-sm md:text-base">
          Sophisticated large infrastructure and specialized projects or ventures require tailored
          financial engineering to ensure long-term viability. At Deutsche Partners Holding (DPH),
          our Project Finance specialists structure deals that blend debt, equity, and hybrid capital
          to fund transformative initiatives—ranging from renewable energy plants to urban transit
          systems, healthcare facilities, and beyond. We focus on delivering risk-mitigated, bankable
          projects that align with stakeholder expectations and regulatory requirements.
        </p>
      </div>

      <!-- SERVICES -->
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold text-green-700 mb-10">
          Our Comprehensive Project<br />Finance Services
        </h2>

        <div class="grid md:grid-cols-3 gap-12">
          <div>
            <h3 class="text-green-700 font-semibold mb-3">
              Special Purpose Entities
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              We assist in the creation and governance of SPVs designed for single projects,
              safeguarding investors through ring-fencing of assets and revenue streams.
            </p>
          </div>

          <div>
            <h3 class="text-green-700 font-semibold mb-3">
              Risk Mitigation & Guarantees
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Our team coordinates with multilateral agencies, export credit agencies, and
              private insurers to secure guarantees and political risk insurance.
            </p>
          </div>

          <div>
            <h3 class="text-green-700 font-semibold mb-3">
              Equity Partnerships
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              We act as liaison between clients and strategic equity investors to ensure
              a balanced and sustainable capital structure.
            </p>
          </div>
        </div>
      </div>

      <!-- OUR APPROACH -->
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
          Our Approach
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card -->
          <div class="shadow-sm">
            <div class="bg-green-700 text-white px-6 py-4 font-semibold rounded-t-md">
              Detailed Feasibility
            </div>
            <div class="bg-gray-100 p-6 rounded-b-md">
              <p class="text-sm text-gray-700 leading-relaxed">
                We run extensive financial modeling covering construction costs, operational
                efficiency, revenue projections, and sensitivity analyses.
              </p>
            </div>
          </div>

          <div class="shadow-sm">
            <div class="bg-green-700 text-white px-6 py-4 font-semibold rounded-t-md">
              Contractual Alignment
            </div>
            <div class="bg-gray-100 p-6 rounded-b-md">
              <p class="text-sm text-gray-700 leading-relaxed">
                From EPC agreements to offtake contracts, we ensure clear allocation of
                responsibilities and liabilities across stakeholders.
              </p>
            </div>
          </div>

          <div class="shadow-sm">
            <div class="bg-green-700 text-white px-6 py-4 font-semibold rounded-t-md">
              Stakeholder Coordination
            </div>
            <div class="bg-gray-100 p-6 rounded-b-md">
              <p class="text-sm text-gray-700 leading-relaxed">
                We collaborate closely with governments, sponsors, lenders, and contractors
                to ensure transparent governance and execution.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
