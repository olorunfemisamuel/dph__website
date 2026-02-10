<script lang="ts" setup>

</script>

    <template>
    <section class="w-full bg-gray-900 text-white py-10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                
                <!-- Column 1: ABOUT US -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-green-400">ABOUT US</h3>
                    <ul class="space-y-2">
                        <li><RouterLink to="/about" class="text-gray-300 hover:text-white transition">Who we are</RouterLink></li>
                        <li><RouterLink to="/MDmessage" class="text-gray-300 hover:text-white transition">MD's Message</RouterLink></li>
                        <li><RouterLink to = "/Leadership" class="text-gray-300 hover:text-white transition">Leadership</RouterLink></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Subsidiaries</a></li>
                    </ul>
                </div>

                <!-- Column 2: OUR SERVICES -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-green-400">OUR SERVICES</h3>
                    <ul class="space-y-2">
                        <li><RouterLink to="/Asset-Management" class="text-gray-300 hover:text-white transition">Asset Management</RouterLink></li>
                        <li><RouterLink to="/Investment-Banking" class="text-gray-300 hover:text-white transition">Investment Banking</RouterLink></li>
                        <li><RouterLink to="/Private-Equity" class="text-gray-300 hover:text-white transition">Private Equity</RouterLink></li>
                        <li><RouterLink to="/Securities-Trading" class="text-gray-300 hover:text-white transition">Security Trading</RouterLink></li>
                        <li><RouterLink to="/Trustees" class="text-gray-300 hover:text-white transition">Trustees</RouterLink></li>
                        <li><RouterLink to="/Trustees" class="text-gray-300 hover:text-white transition">Venture Capital</RouterLink></li>
                    </ul>
                </div>

                <!-- Column 3: PRODUCT -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-green-400">PRODUCTS</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition"></a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Mutual Funds</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Exchange Traded Funds</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Alternative Investment Scheme</a></li>
                        <!-- <li><a href="#" class="text-gray-300 hover:text-white transition">Trustees</a></li> -->
                    </ul>
                </div>

                <!-- Column 4: INVESTOR RELATIONS -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-green-400">RESOURCES</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Gallery</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Insights</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Policy</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white transition">Career</a></li>
                    </ul>
                </div>

                <!-- Column 5: NEWS & INSIGHT -->
                <div>
                    <h3 class="text-lg font-bold mb-4 text-green-400">CONTACT</h3>
                   <address>
                3 Peter Obang Close, Off O.P. Fingesi Road, District, Abuja
                   </address>

                   <div class="mt-6">
  <p class="text-sm text-gray-400 mb-3">Follow us</p>

  <div class="flex gap-4">
    <!-- Instagram -->
    <a
      href="https://www.instagram.com/deutschepartners?igsh=MWxhMWd1aTdheDBpdg=="
      target="_blank"
      aria-label="Instagram"
      class="text-gray-400 hover:text-green-400 transition"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.507 5.507 0 0012 7.5zm0 9A3.5 3.5 0 1115.5 13 3.504 3.504 0 0112 16.5zM18 6.75a1.25 1.25 0 10-1.25-1.25A1.25 1.25 0 0018 6.75z"/>
      </svg>
    </a>

    <!-- Facebook -->
    <a
      href="https://www.facebook.com/deutschepartners.deutschepartners"
      target="_blank"
      aria-label="Facebook"
      class="text-gray-400 hover:text-green-400 transition"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
      </svg>
    </a>

    <!-- Twitter / X -->
    <a
      href="https://x.com/home"
      target="_blank"
      aria-label="Twitter"
      class="text-gray-400 hover:text-green-400 transition"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.213-6.817-5.97 6.817H1.676l7.73-8.835L1.25 2.25h6.83l4.713 6.231L18.244 2.25z"/>
      </svg>
    </a>
  </div>
</div>


                </div>

                <!-- Column 6: Empty or for spacing -->
                <div class="md:col-span-2 lg:col-span-1">
                    <!-- This column can be used for additional content or left empty for spacing -->
                </div>

            </div>
        </div>
    </section>
</template>
    