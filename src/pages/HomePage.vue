<template>
  <div class="min-h-screen bg-base text-slate-900 overflow-x-hidden">
    <!-- HERO SECTION -->
    <section 
      class="relative w-full overflow-hidden bg-primary text-white rounded-b-[40px] select-none cursor-grab active:cursor-grabbing"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp"
    >
      <!-- Track Slider -->
      <div 
        class="flex w-full transition-transform duration-500 ease-in-out pointer-events-none" 
        :style="`transform: translateX(-${activeHeroSlide * 100}%);`"
      >
        <div 
          v-for="(hero, index) in heroSlides" 
          :key="index" 
          class="w-full min-w-full flex-shrink-0"
        >
          <div class="mx-auto max-w-7xl px-4 py-16 md:py-32 flex flex-col md:grid md:grid-cols-2 gap-8 items-center pointer-events-auto">
            <div class="w-full flex justify-center items-center">
              <img 
                class="h-[300px] md:h-[420px] w-full max-w-lg object-cover rounded-2xl" 
                :src="imageUrls[hero.image]" 
                :alt="hero.title"
                draggable="false"
              >
            </div>
            <div class="flex flex-col gap-6 justify-center text-base">
              <div class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {{ hero.title }}
              </div>
              <div class="text-slate-100 leading-relaxed">
                {{ hero.subtitle }}
              </div>
              <a 
                :href="whatsappText.product" 
                target="_blank" 
                class="bg-secondary text-white w-full md:w-fit flex justify-center px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Tombol Navigasi Panah (Hanya Muncul di Desktop) -->
      <button 
        @click="prevHero" 
        class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition z-10 items-center justify-center"
      >
        ❮
      </button>
      <button 
        @click="nextHero" 
        class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition z-10 items-center justify-center"
      >
        ❯
      </button>

      <!-- Indikator Dots -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button 
          v-for="(_, index) in heroSlides" 
          :key="index" 
          @click="activeHeroSlide = index" 
          :class="['h-3 rounded-full transition-all duration-300', activeHeroSlide === index ? 'w-8 bg-secondary' : 'w-3 bg-white/50']"
        ></button>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-4">
      <!-- <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="space-y-4 lg:max-w-xl">
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-500">{{ t('home.sliderLabel') }}</p>
          <h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">{{ t('home.sliderTitle') }}</h2>
          <p class="max-w-2xl text-base leading-8 text-slate-600">{{ t('home.sliderDesc') }}</p>
        </div>
        <div class="flex items-center gap-3">
          <button @click="prevSlide" class="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">{{ t('home.prev') }}</button>
          <button @click="nextSlide" class="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-4 text-sm font-semibold text-white transition hover:bg-emerald-400">{{ t('home.next') }}</button>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div class="flex transition-transform duration-500" :style="`transform: translateX(-${activeSlide * 100}%);`">
          <div v-for="slide in slides" :key="slide.title" class="min-w-full p-8 sm:p-10">
            <div class="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
              <div class="space-y-6">
                <span class="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">{{ slide.category }}</span>
                <h3 class="text-3xl font-semibold text-slate-900">{{ slide.title }}</h3>
                <p class="max-w-2xl text-base leading-8 text-slate-600">{{ slide.description }}</p>
                <div class="flex flex-wrap items-center gap-3">
                  <router-link :to="slide.link" class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">{{ t('home.productButton') }}</router-link>
                  <a :href="whatsappText.product" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">{{ t('home.orderButton') }}</a>
                </div>
              </div>
              <div class="overflow-hidden rounded-[2rem] bg-slate-100">
                <img :src="imageUrls[slide.image]" :alt="slide.title" class="h-96 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div class="text-sm text-slate-500">{{ t('home.slideStatus', { current: activeSlide + 1, total: slides.length }) }}</div>
        <div class="flex items-center gap-2">
          <button v-for="(_, index) in slides" :key="index" @click="activeSlide = index" :class="['h-3 w-3 rounded-full transition', activeSlide === index ? 'bg-emerald-500' : 'bg-slate-300']"></button>
        </div>
      </div> -->

      <div class=" w-full">
        <div class="space-y-4 flex flex-col justify-center items-center w-full">
          <div class="flex flex-col md:flex-row w-full justify-center gap-8">
            <div v-for="category in content.categories">
              <div class="bg-white border w-full md:w-[420px] items-center rounded-3xl justify-center gap-4 flex flex-col p-4">
                <img class="h-96 w-96 md:w-full object-cover rounded-2xl" :src="imageUrls[category.image]" alt="">
                <div class="font-bold text-xl">{{ category.title }}</div>
                <div class="text-gray-500">{{ category.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="space-y-12 flex flex-col justify-center items-center w-full">
        <div class="flex flex-col justify-center items-center">
          <div class="text-3xl font-bold">Most Popular Products</div>
          <div class="text-gray-500 text-center">Browse our most-loved spices, trusted by customers for consistent
            flavor</div>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div v-for="card in content.products.slice(0, 3)" :key="card.title" class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl" @click="router.push({ name: 'Detail-Product', params: {slug: card.slug} })">
            <img :src="imageUrls[card.image]" :alt="card.alt" class="h-80 w-full object-cover" />
            <div class="p-6">
              <p class="text-xs uppercase tracking-[0.28em] text-emerald-500">{{ card.category }}</p>
              <h3 class="mt-4 text-xl font-semibold text-slate-900">{{ card.product_name }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600 line-clamp-2">{{ card.description }}</p>
            </div>
          </div>
        </div>
        <div @click="router.push({ name: 'Product' })" class="bg-secondary px-8 py-4 text-base rounded-xl w-full md:w-fit flex justify-center cursor-pointer">View All Products
        </div>
      </div>
    </section>

    <section class="bg-primary">
      <div class="grid grid-cols-1 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:flex gap-6 justify-center">
       <!--  <div class="flex text-base gap-4 items-center">
          <checkIcon class="h-10" />
          <div class="text-xl">Halal Certified</div>
        </div> -->
        <div class="flex text-base gap-4 items-center">
          <checkIcon class="h-10" />
          <div class="text-xl">BPOM Indonesia Certified</div>
        </div>
        <div class="flex text-base gap-4 items-center">
          <checkIcon class="h-10" />
          <div class="text-xl">Naturaly</div>
        </div>
        <div class="flex text-base gap-4 items-center">
          <checkIcon class="h-10" />
          <div class="text-xl">Authentic Recipe </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-3">
        <article
          class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
          <div class="flex items-center gap-3">
            <div class="h-12 w-12 rounded-full bg-emerald-500 text-white grid place-items-center font-semibold">IR</div>
            <div>
              <p class="font-semibold text-slate-900">Ibu Rina</p>
              <p class="text-sm text-slate-500">Jakarta</p>
            </div>
          </div>
          <p class="mt-6 text-sm leading-7 text-slate-600">{{ t('ulasan.review1') }}</p>
          <div class="mt-6 flex gap-1 text-amber-400">★★★★★</div>
        </article>
        <article
          class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
          <div class="flex items-center gap-3">
            <div class="h-12 w-12 rounded-full bg-emerald-500 text-white grid place-items-center font-semibold">PS</div>
            <div>
              <p class="font-semibold text-slate-900">Pak Satria</p>
              <p class="text-sm text-slate-500">Bandung</p>
            </div>
          </div>
          <p class="mt-6 text-sm leading-7 text-slate-600">{{ t('ulasan.review2') }}</p>
          <div class="mt-6 flex gap-1 text-amber-400">★★★★★</div>
        </article>
        <article
          class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
          <div class="flex items-center gap-3">
            <div class="h-12 w-12 rounded-full bg-emerald-500 text-white grid place-items-center font-semibold">ID</div>
            <div>
              <p class="font-semibold text-slate-900">Ibu Diah</p>
              <p class="text-sm text-slate-500">Surabaya</p>
            </div>
          </div>
          <p class="mt-6 text-sm leading-7 text-slate-600">{{ t('ulasan.review3') }}</p>
          <div class="mt-6 flex gap-1 text-amber-400">★★★★★</div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { content, locale, t, whatsappText, slidesByLocale } from '../i18n'
import { imageUrls } from '../assets/imageUrls'
import checkIcon from '../assets/icons/checkIcon.vue'
import { router } from '../router/index.js'

const activeSlide = ref(0)
const activeHeroSlide = ref(0)
const slides = computed(() => content.value.products)
const heroSlides = computed(() => content.value.home.heroSlides)
const currentHero = computed(() => heroSlides.value[activeHeroSlide.value] || heroSlides.value[0] || {})
const intervalId = ref(null)
const heroIntervalId = ref(null)

const touchStartX = ref(0)
const touchEndX = ref(0)
const isDragging = ref(false)

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}

function prevSlide() {
  activeSlide.value = (activeSlide.value - 1 + slides.value.length) % slides.value.length
}

function nextHero() {
  activeHeroSlide.value = (activeHeroSlide.value + 1) % heroSlides.value.length
}

function prevHero() {
  activeHeroSlide.value = (activeHeroSlide.value - 1 + heroSlides.value.length) % heroSlides.value.length
}

// Logika Touch (HP / Tablet)
function handleTouchStart(e) {
  touchStartX.value = e.touches[0].clientX
}

function handleTouchMove(e) {
  touchEndX.value = e.touches[0].clientX
}

function handleTouchEnd() {
  handleSwipe()
}

// Logika Mouse Drag (Desktop)
function handleMouseDown(e) {
  isDragging.value = true
  touchStartX.value = e.clientX
}

function handleMouseMove(e) {
  if (isDragging.value) {
    touchEndX.value = e.clientX
  }
}

function handleMouseUp() {
  if (isDragging.value) {
    handleSwipe()
    isDragging.value = false
  }
}

function handleSwipe() {
  const distance = touchStartX.value - touchEndX.value
  const minSwipeDistance = 50 // Jarak minimal usap (piksel)

  if (distance > minSwipeDistance) {
    nextHero() // Geser ke Kiri (Lanjut)
  } else if (distance < -minSwipeDistance) {
    prevHero() // Geser ke Kanan (Kembali)
  }

  // Reset nilai
  touchStartX.value = 0
  touchEndX.value = 0
}

onMounted(() => {
  intervalId.value = window.setInterval(nextSlide, 5000)
  heroIntervalId.value = window.setInterval(nextHero, 7000)
})

onUnmounted(() => {
  window.clearInterval(intervalId.value)
  window.clearInterval(heroIntervalId.value)
})
</script>
