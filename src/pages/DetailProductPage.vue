<template>
  <div class="min-h-screen bg-base text-slate-900 overflow-x-hidden py-12">
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Tampilan Jika Produk Ditemukan -->
      <div v-if="product"
        class="grid gap-10 rounded-3xl bg-white p-6 shadow-soft border border-slate-200 lg:grid-cols-2 lg:p-10">

        <!-- Kolom Gambar Produk -->
        <div class="flex flex-col items-center justify-center">
          <div class="w-full overflow-hidden rounded-2xl bg-slate-50 p-6 flex justify-center">
            <img :src="imageUrls[product.image] || product.image" :alt="product.product_name"
              class="h-80 w-auto object-contain transition duration-300 hover:scale-105" />
          </div>
          <p v-if="product.brand" class="mt-4 text-xs font-medium text-slate-500">
            Brand: <span class="text-slate-800 font-semibold">{{ product.brand }}</span>
          </p>
        </div>

        <!-- Kolom Detail Informasi -->
        <div class="flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <span
                class="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {{ product.category }}
              </span>
              <span v-if="product.net_weight" class="text-xs font-semibold text-slate-500">
                {{ content.product.weight }}: {{ product.net_weight }}
              </span>
            </div>

            <h1 class="text-3xl font-bold text-slate-900 sm:text-4xl">{{ product.product_name }}</h1>

            <p class="text-sm leading-relaxed !text-slate-600 sm:text-base">
              {{ product.description }}
            </p>

            <!-- Peringatan Alergen -->
            <div v-if="product.allergen_warning"
              class="rounded-2xl bg-amber-50 p-4 text-xs leading-5 text-amber-800 border border-amber-200/60">
              <span class="font-bold">⚠️ {{ content.product.alergenAllert }}:</span> {{ product.allergen_warning }}
            </div>

            <!-- Daftar Komposisi (Ingredients) -->
            <div v-if="product.ingredients?.length">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">{{
                content.product.ingredients }}:</h3>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="(ingredient, index) in product.ingredients" :key="index"
                  class="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {{ ingredient }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tombol Aksi / Pesan -->
          <div class="pt-4 border-t border-slate-100">
            <a :href="whatsappText.product" target="_blank" rel="noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90 shadow-md">
              {{ t('buttons.orderNow') || 'Pesan via WhatsApp' }}
            </a>
          </div>
        </div>

        <!-- Tabel Informasi Nilai Gizi (Nutrition Facts) -->
        <div v-if="product.nutrition_facts"
          class="lg:col-span-2 mt-4 rounded-2xl bg-slate-50 p-6 border border-slate-200">
          <h3 class="text-lg font-bold text-slate-900 mb-2">{{ content.product.nutritionFact }}</h3>

          <div class="flex flex-wrap gap-4 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-200">
            <p v-if="product.nutrition_facts.servings_per_container">
              {{ content.product.servingPerPackage }}: <strong>{{ product.nutrition_facts.servings_per_container }}</strong>
            </p>
            <p v-if="product.nutrition_facts.serving_size">
              {{ content.product.servingSize }}: <strong>{{ product.nutrition_facts.serving_size }}</strong>
            </p>
            <p v-if="product.nutrition_facts.total_energy">
              {{ content.product.totalEnergy }}: <strong>{{ product.nutrition_facts.total_energy }}</strong>
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-slate-700">
              <thead class="bg-slate-200/60 uppercase text-slate-600 font-semibold">
                <tr>
                  <th class="p-2.5 rounded-l-lg">{{ content.product.nutrient }}</th>
                  <th class="p-2.5">{{ content.product.ammountPerServing }}</th>
                  <th class="p-2.5 rounded-r-lg text-right">% {{ content.product.dailyValue }}*</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr v-for="(item, idx) in product.nutrition_facts.nutrients" :key="idx" class="hover:bg-slate-100/50">
                  <td class="p-2.5 font-medium">{{ item.nutrient }}</td>
                  <td class="p-2.5">{{ item.amount || '-' }}</td>
                  <td class="p-2.5 text-right">{{ item.daily_value_percent || '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- State Jika Produk Tidak Ditemukan -->
      <div v-else class="rounded-3xl bg-white p-12 text-center shadow-soft border border-slate-200">
        <h2 class="text-2xl font-bold text-slate-800">Produk Tidak Ditemukan</h2>
        <p class="mt-2 text-sm text-slate-600">Produk yang Anda cari tidak tersedia atau URL tidak valid.</p>
        <router-link to="/product"
          class="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white">
          Lihat Semua Produk
        </router-link>
      </div>

    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { content, t, whatsappText } from '../i18n'
import { imageUrls } from '../assets/imageUrls'

const route = useRoute()

// Menggunakan computed agar data produk otomatis diperbarui ketika slug URL atau bahasa berubah
const product = computed(() => {
  const slug = route.params.slug
  const productsList = content.value?.products || []
  return productsList.find(item => item.slug === slug) || null
})
</script>