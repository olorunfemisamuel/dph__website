<script setup lang="ts"> 
import { ref } from 'vue';

// Track active tab: 'management' or 'board'
const activeTab = ref('management');

// Modal state
const showModal = ref(false);
const selectedLeader = ref<{ name: string; role: string; img: string } | null>(null);

// Close modal function
const closeModal = () => {
  showModal.value = false;
  selectedLeader.value = null;
};

// Sample data to differentiate the views
const managementData = [
  { name: 'DR. ONUOHA IKWOR-NNACHI', role: 'Managing Director/CEO', img: new URL('@/assets/ManagementImg/mddph.jpeg', import.meta.url).href },
  { name: 'CATHERINE NIYI-AFOLABI', role: 'Head, Business Development & CRM', img: new URL('@/assets/ManagementImg/mrscatherinimg.jpeg', import.meta.url).href },
  { name: 'AKINFENWA APATA', role: 'Fund Manager', img: new URL('@/assets/ManagementImg/mrakindphimg.jpeg', import.meta.url).href },
  { name: 'BRIGHT OYAKHILOME', role: 'Senior Investment Analyst', img: new URL('@/assets/ManagementImg/mrbrightdp.jpeg', import.meta.url).href },
  { name: 'BLESSING CHRISTOPHER', role: 'Head, Finance', img: new URL('@/assets/ManagementImg/missblessingdph.jpeg', import.meta.url).href },
  { name: 'CHIBUGOM NWAFOR', role: 'Head, Human Resource', img: new URL('@/assets/ManagementImg/hrdphimg.jpeg', import.meta.url).href },
];

const boardData = [
  { name: 'CHIEF DAVE OBASI NWACHUKWU', role: 'Chairman of the Board', img: new URL('@/assets/BoardImgs/boardofdirector4.jpeg', import.meta.url).href },
  { name: 'DR. ONUOHA IKWOR-NNACHI', role: 'Managing Director/CEO', img: new URL('@/assets/BoardImgs/mddph.jpeg', import.meta.url).href },
  { name: 'SHEIKH IBRAHIM DAHIRU BAUCHI', role: 'Non Executive Director', img: new URL('@/assets/BoardImgs/boardofdirector2.jpeg', import.meta.url).href },
  { name: 'MR. EMEKA UGWU-OJU', role: 'Non Executive Director', img: new URL('@/assets/BoardImgs/boardofdirector3.jpeg', import.meta.url).href },
  { name: 'MS RACHEL OGBONNA', role: 'Board Member', img: new URL('@/assets/BoardImgs/fifthboardmember.jpeg', import.meta.url).href },
  { name: 'HIGH CHIEF HIGGINS PETERS', role: 'Non Executive Director', img: new URL('@/assets/BoardImgs/boardofdireactor1.jpeg', import.meta.url).href },
];


import NewsLetter from '@/components/NewsLetter.vue';

</script>

<template>
  <!-- Leadership Banner -->
  <section class="w-full overflow-hidden shadow-lg">
    <div class="relative w-full h-40 sm:h-44 md:h-70 overflow-hidden">
      <img 
        src="@/assets/leadershipbanner.png" 
        alt="About Banner" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
        Leadership
      </h3>
    </div>
  </section>

  <!-- Toggle Buttons -->
<div class="flex justify-center mt-8 sm:mt-14 px-4">
    <div class="flex bg-gray-100 rounded-full p-1 shadow-sm border border-gray-200 flex-wrap gap-2">
      <button 
        @click="activeTab = 'management'"
        :class="activeTab === 'management' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-600 hover:text-gray-800'"
        class="px-6 sm:px-8 py-2 text-sm font-semibold rounded-full transition"
      >
        Management Team
      </button>
      <button 
        @click="activeTab = 'board'"
        :class="activeTab === 'board' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-600 hover:text-gray-800'"
        class="px-6 sm:px-8 py-2 text-sm font-semibold rounded-full transition"
      >
        Board of Directors
      </button>
    </div>
  </div>

  <!-- Leadership Grid -->
  <div class="max-w-7xl mx-auto mt-8 sm:mt-12 mb-16 px-4 sm:px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-10">
      <div
  v-for="(leader, index) in (activeTab === 'management' ? managementData : boardData)"
  :key="index"
  class="flex bg-[#f8fafc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition"
>
        <div class="w-24 sm:w-28 h-full overflow-hidden bg-gray-100 flex items-center justify-center">
          <template v-if="leader.img">
            <img
              :src="leader.img"
              alt="Leader"
              class="w-full h-full object-cover"
            />
          </template>
          <template v-else>
            <span class="text-[10px] text-gray-500">No Image</span>
          </template>
        </div>
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
  </div>

  <!-- Subscription Section -->
 <NewsLetter />

<!---Modal-->
<!-- MODAL -->
<div
  v-if="showModal"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
>
  <!-- Modal Card -->
  <div class="relative max-w-6xl w-full bg-white rounded-2xl shadow-2xl border border-gray-200 h-[80vh] overflow-hidden">


    <!-- Close Button -->
    <button
      @click="closeModal"
      class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
    >
      ✕
    </button>

    <div class="grid md:grid-cols-3 gap-6 p-6">
      
    
    <!-- Image -->
      <div class="md:col-span-1">
        <img
          :src="selectedLeader?.img"
          alt="Leader"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>

      <!-- Content -->
     <div class="md:col-span-2 space-y-3">
  <h3 class="text-xl font-semibold text-gray-900">
    {{ selectedLeader?.name }}
  </h3>

  <p class="text-sm text-gray-600 font-medium">
    {{ selectedLeader?.role }}
  </p>

  <!-- Social icons placeholder (as in image #1) -->
  <div class="flex gap-3 text-gray-500">
    <span class="text-sm">in</span>
    <span class="text-sm">◎</span>
  </div>

  <div class="text-sm text-gray-700 leading-relaxed space-y-3 pt-2">
    <p>
     Dr Onuoha Nnachi is an Engineer, Investor, Economist and Educationist who holds double Doctorate degrees (PhD), a masters degree and bachelors honours in Computer & Internet technology and has specialization in the telecommunication, Upstream infrastructure, Engineering & Strategy development across Nigeria and the world.Dr. Onuoha is the Group Managing Partner of Deutsche Partners Holding (Deutsche Asset Management, Deutsche Investment Banking, Deutsche Private Equity, Deutsche Securities, and Deutsche Trustee) a Group licensed by SEC as Fund/Portfolio Managers, Investment Adviser & Issuing House.He also served as the Group Managing Director/CEO of TTL Group of Companies with an asset base in excess of $1.5bn; Executive Director in Africloud Technologies Limited; Managing Partner of Africa Infrastructure Summit Group (AISG), Managing Partner of Feedback Infrastructure Services and other companies.
    </p>

    <!-- <p>
      He has served as Group Managing Director/CEO across multiple firms with
      assets in excess of $1.5bn and is licensed by SEC as a Fund/Portfolio Manager.
    </p> -->
  </div>
</div>


    </div>
  </div>
</div>


</template>
