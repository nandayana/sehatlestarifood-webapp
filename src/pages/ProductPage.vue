<template>
  <div class="min-h-screen bg-base text-slate-900">
    <section class="relative overflow-hidden bg-gradient-to-r from-primary/25 via-base to-primary/10 py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
          <div class="space-y-6">
            <p class="text-sm uppercase tracking-[0.3em] text-primary">{{ t('nav.produk') }}</p>
            <h1 class="text-4xl font-semibold sm:text-5xl">{{ t('product.title') }}</h1>
            <p class="max-w-2xl text-lg leading-8 text-slate-700">{{ t('product.description') }}</p>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a :href="whatsappText.product" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/80">{{ t('home.orderWhatsApp') }}</a>
              <router-link to="/" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">{{ t('buttons.backHome') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 class="mt-4 text-3xl font-semibold text-slate-900">{{ t('product.sectionTitle') }}</h2>
        </div>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <article v-for="product in content.products" class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft cursor-pointer" @click="detailProduct(product.slug)">
          <img :src="imageUrls[product.image]" alt="Bumbu Gado-Gado" class="h-64 w-full rounded-[1.5rem] object-cover" />
          <div class="mt-6 space-y-3">
            <span class="text-xs uppercase tracking-[0.3em] text-primary">{{ product.category }}</span>
            <h3 class="text-2xl font-semibold text-slate-900">{{ product.product_name }}</h3>
            <p class="text-sm leading-7 text-slate-600 line-clamp-2">{{ product.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-white p-10 shadow-soft border border-slate-200">
        <div class="grid gap-10 lg:grid-cols-[0.75fr_0.5fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-semibold text-slate-900">{{ t('product.advantageTitle') }}</h2>
            <p class="mt-4 text-base leading-8 text-slate-600">{{ t('product.advantageSub') }}</p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div v-for="item in content.product.advantageItems" class="rounded-3xl bg-slate-50 p-5 text-slate-700">
                <p class="font-semibold">{{ item.title }}</p>
                <p class="mt-2 text-sm text-slate-600">Sertifikat halal dan hygiene pangan terjamin.</p>
              </div>
            </div>
          </div>
          <div class="rounded-[2rem] bg-primary/10 p-8 text-slate-900">
            <h3 class="text-2xl font-semibold">{{ t('product.orderCardTitle') }}</h3>
            <p class="mt-4 text-sm leading-7 text-slate-700">{{ t('product.orderCardText') }}</p>
            <a :href="whatsappText.product" target="_blank" rel="noreferrer" class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/80">{{ t('buttons.chatWhatsApp') }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { t, whatsappText, content } from '../i18n'
import { imageUrls } from '../assets/imageUrls'
import {router} from '../router';

const detailProduct = (item) => {
  console.log('SLUG = ', item)
  router.push({ name: 'Detail-Product', params: {slug: item}})
}
</script>
