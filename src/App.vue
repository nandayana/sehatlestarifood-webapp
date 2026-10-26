<template>
  <div class="min-h-screen bg-primary text-base">
    <header class="sticky top-0 z-40 border-b border-primary bg-primary backdrop-blur-lg">
      <div class="mx-auto flex md:grid md:grid-cols-3 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <router-link to="/" class="flex items-center gap-3 text-slate-900">
          <img :src="logo" alt="Sehat Lestari Food logo" class="h-10 rounded-xl object-cover" />
        </router-link>

        <nav class="hidden md:w-full items-center md:justify-center gap-8 md:flex">
          <router-link to="/" class="text-sm font-medium text-white hover:text-gray-200">{{ t('nav.home') }}</router-link>
          <router-link to="/product" class="text-sm font-medium text-white hover:text-gray-200">{{ t('nav.produk') }}</router-link>
          <!-- <router-link to="/ulasan" class="text-sm font-medium text-slate-700 hover:text-slate-900">{{ t('nav.ulasan') }}</router-link> -->
          <router-link to="/about" class="text-sm font-medium text-white hover:text-gray-200">{{ t('nav.tentang') }}</router-link>
        </nav>

        <div class="flex items-center gap-3 md:justify-end">
          <div class="hidden items-center gap-2 rounded-full border px-2 py-1 md:flex">
            <button @click="setLocale('id')" :class="['rounded-full px-3 py-1 text-sm font-semibold transition', locale === 'id' ? 'bg-secondary text-white' : 'text-white hover:bg-slate-100']">ID</button>
            <button @click="setLocale('en')" :class="['rounded-full px-3 py-1 text-sm font-semibold transition', locale === 'en' ? 'bg-secondary text-white' : 'text-white hover:bg-slate-100']">EN</button>
          </div>

          <button @click="isMenuOpen = !isMenuOpen" class="inline-flex h-10 w-10 items-center justify-center rounded-full border text-[#FAF6EB] shadow-sm transition hover:bg-slate-50 md:hidden">
            <span class="sr-only">{{ isMenuOpen ? t('aria.closeMenu') : t('aria.openMenu') }}</span>
            <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5 stroke-current"><path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div v-show="isMenuOpen" class="md:hidden border-b">
        <nav class="space-y-2 border-t bg-primary px-4 py-4">
          <router-link to="/" @click="isMenuOpen = false" class="block rounded-3xl px-4 py-3 text-sm font-medium text-base hover:bg-slate-100">{{ t('nav.home') }}</router-link>
          <router-link to="/product" @click="isMenuOpen = false" class="block rounded-3xl px-4 py-3 text-sm font-medium text-base hover:bg-slate-100">{{ t('nav.produk') }}</router-link>
          <router-link to="/about" @click="isMenuOpen = false" class="block rounded-3xl px-4 py-3 text-sm font-medium text-base hover:bg-slate-100">{{ t('nav.tentang') }}</router-link>
          <div class="flex items-center gap-2 pt-3">
            <button @click="setLocale('id')" :class="['rounded-full px-3 py-1 text-sm font-semibold transition', locale === 'id' ? 'bg-secondary text-white' : 'text-bae hover:bg-slate-100']">ID</button>
            <button @click="setLocale('en')" :class="['rounded-full px-3 py-1 text-sm font-semibold transition', locale === 'en' ? 'bg-secondary text-white' : 'text-base hover:bg-slate-100']">EN</button>
          </div>
        </nav>
      </div>
    </header>

    <main class="pt-0">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="border-t border-primary bg-primary py-8 text-center text-sm text-base">
      <div class="mx-auto md:flex gap-4 justify-between items-center max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
        <div>{{ t('footer') }}</div>
        <div class="flex items-center justify-center gap-3">
          <button @click="setLocale('id')" :class="['rounded-full px-4 py-2 text-sm font-semibold transition', locale === 'id' ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200']">ID</button>
          <button @click="setLocale('en')" :class="['rounded-full px-4 py-2 text-sm font-semibold transition', locale === 'en' ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200']">EN</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { initLocale, locale, t, setLocale } from './i18n'
import logo from './assets/images/logo.png'

const isMenuOpen = ref(false)

onMounted(() => {
  initLocale()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(18px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-18px);
}
</style>
