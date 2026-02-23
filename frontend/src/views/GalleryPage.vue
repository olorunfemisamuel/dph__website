<script setup lang="ts">
// Add your actual image imports here
// For now using placeholder paths — replace with your real asset paths
const galleryImages = [
  { src: new URL('@/assets/GalleryIMGS/dphGallery1.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery2.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery3.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery4.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery5.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery6.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery7.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery8.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery9.jpg', import.meta.url).href,  tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery10.jpg', import.meta.url).href, tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery11.jpg', import.meta.url).href, tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery12.jpg', import.meta.url).href, tall: false },
  { src: new URL('@/assets/GalleryIMGS/dphGallery13.jpg', import.meta.url).href, tall: false },
//   { src: new URL('@/assets/gallery14.png', import.meta.url).href, tall: false },
//   { src: new URL('@/assets/gallery15.png', import.meta.url).href, tall: false },
]
</script>

<template>
  <div class="bg-white min-h-screen pb-20">

    <!-- Banner -->
    <section class="w-full overflow-hidden shadow-lg">
      <div class="relative w-full h-40 sm:h-44 md:h-60 overflow-hidden">
        <img
          src="@/assets/securitiesbannerimg.png"
          alt="Gallery Banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <h3 class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 text-white font-bold text-2xl sm:text-3xl md:text-5xl z-10">
          Gallery
        </h3>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 py-10">

      <!-- Heading -->
      <div class="flex items-center justify-center gap-3 mb-8">
        <div class="h-px bg-gray-300 flex-1"></div>
        <h2 class="text-[#168223] font-bold text-lg sm:text-xl tracking-widest uppercase">Gallery</h2>
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>

      <!-- Row 1: 3 equal columns, short -->
      <div class="grid grid-cols-3 gap-2 mb-2">
        <img src="@/assets/GalleryIMGS/dphGallery1.jpg"  alt="Gallery" class="w-full h-32 sm:h-40 object-cover rounded" />
        <img src="@/assets/GalleryIMGS/dphGallery2.jpg"  alt="Gallery" class="w-full h-32 sm:h-40 object-cover rounded" />
        <img src="@/assets/GalleryIMGS/dphGallery3.jpg"  alt="Gallery" class="w-full h-32 sm:h-40 object-cover rounded" />
      </div>

      <!-- Row 2: 2 columns, one wider spanning 2 cols -->
      <div class="grid grid-cols-3 gap-2 mb-2">
        <img src="@/assets/GalleryIMGS/dphGallery4.jpg"  alt="Gallery" class="w-full h-36 sm:h-48 object-cover rounded col-span-1" />
        <img src="@/assets/GalleryIMGS/dphGallery5.jpg"  alt="Gallery" class="w-full h-36 sm:h-48 object-cover rounded col-span-2" />
      </div>

      <!-- Row 3: wide + small -->
      <div class="grid grid-cols-3 gap-2 mb-2">
        <img src="@/assets/GalleryIMGS/dphGallery6.jpg"  alt="Gallery" class="w-full h-36 sm:h-48 object-cover rounded col-span-2" />
        <img src="@/assets/GalleryIMGS/dphGallery7.jpg"  alt="Gallery" class="w-full h-36 sm:h-48 object-cover rounded col-span-1" />
      </div>

      <!-- Row 4: 3 equal columns -->
      <div class="grid grid-cols-3 gap-2 mb-2">
        <img src="@/assets/GalleryIMGS/dphGallery8.jpg"  alt="Gallery" class="w-full h-32 sm:h-40 object-cover rounded" />
        <img src="@/assets/GalleryIMGS/dphGallery9.jpg"  alt="Gallery" class="w-full h-32 sm:h-40 object-cover rounded" />
        <img src="@/assets/GalleryIMGS/dphGallery10.jpg" alt="Gallery" class="w-full h-32 sm:h-40 object-cover rounded" />
      </div>

      <!-- Row 5: small + wide -->
      <div class="grid grid-cols-3 gap-2 mb-2">
        <img src="@/assets/GalleryIMGS/dphGallery11.jpg" alt="Gallery" class="w-full h-36 sm:h-48 object-cover rounded col-span-1" />
        <img src="@/assets/GalleryIMGS/dphGallery12.jpg" alt="Gallery" class="w-full h-36 sm:h-48 object-cover rounded col-span-2" />
      </div>

      <!-- Row 6: 4 small equal columns -->
      <div class="grid grid-cols-4 gap-2">
        <img src="@/assets/GalleryIMGS/dphGallery13.jpg" alt="Gallery" class="w-full h-28 sm:h-36 object-cover rounded" />
        <!-- <img src="@/assets/gallery14.png" alt="Gallery" class="w-full h-28 sm:h-36 object-cover rounded" />
        <img src="@/assets/gallery15.png" alt="Gallery" class="w-full h-28 sm:h-36 object-cover rounded" />
        <img src="@/assets/gallery16.png" alt="Gallery" class="w-full h-28 sm:h-36 object-cover rounded" /> -->
      </div>

    </section>
  </div>
</template>