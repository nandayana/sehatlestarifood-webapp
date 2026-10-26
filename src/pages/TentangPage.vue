<template>
  <div class="min-h-screen bg-base text-slate-900">
    <section class="bg-white py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div class="grid gap-10 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-emerald-500">{{ t('nav.tentang') }}</p>
            <h1 class="mt-4 text-4xl font-semibold sm:text-5xl">{{ t('tentang.title') }}</h1>
            <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600">{{ t('tentang.subtitle') }}</p>
          </div>
          <div class="rounded-[2rem] bg-emerald-50 p-8 text-slate-900 shadow-soft">
            <p class="text-sm uppercase tracking-[0.3em] text-primary">{{ t('home.orderWhatsApp') }}</p>
            <h2 class="mt-4 text-2xl font-semibold">{{ t('tentang.orderTitle') }}</h2>
            <p class="mt-3 text-sm leading-7 text-slate-700">{{ t('tentang.orderText') }}</p>
            <a :href="whatsappText.bumbu" target="_blank" rel="noreferrer"
              class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/80">{{
                t('buttons.orderNow') }}</a>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="text-center mt-4 text-2xl font-semibold">{{ t('tentang.email.sendEmail') }}</div>
          <form @submit.prevent="sendEmail" class="space-y-4">
            <div class="grid lg:grid-cols-2 gap-4">
              <input v-model="form.name" type="text" :placeholder="t('tentang.email.name')" required class="border-2  border-primary rounded-lg px-2 py-3 w-full" />
              <input v-model="form.email" type="email" :placeholder="t('tentang.email.email')" required class="border-2  border-primary rounded-lg px-2 py-3 w-full" />
            </div>
            <textarea v-model="form.message" :placeholder="t('tentang.email.messages')" required class="border-2  border-primary rounded-lg p-2 h-24 w-full"></textarea>

            <div class="w-full flex justify-end">
              <button type="submit" :disabled="loading" class="bg-primary text-white w-full lg:w-80 px-6 py-4 rounded-full">
                {{ loading ? t('tentang.email.sending') : t('tentang.email.send') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] border border-slate-200 bg-white text-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="imageUrls['product1.png']" alt="Resep Sate" class="h-64 w-full object-cover" />
          <div class="p-6">
            <span class="text-xs uppercase tracking-[0.28em] text-emerald-500">Produk Halal</span>
            <h2 class="mt-4 text-2xl font-semibold text-slate-900">Rasa Autentik Indonesia</h2>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ t('tentang.step1') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="imageUrls['product2.png']" alt="Resep Gado Gado" class="h-64 w-full object-cover" />
          <div class="p-6">
            <span class="text-xs uppercase tracking-[0.28em] text-emerald-500">Kemasan Siap Ekspor</span>
            <h2 class="mt-4 text-2xl font-semibold text-slate-900">Kualitas Global</h2>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ t('tentang.step2') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="imageUrls['product3.png']" alt="Resep Pecel" class="h-64 w-full object-cover" />
          <div class="p-6">
            <span class="text-xs uppercase tracking-[0.28em] text-emerald-500">Dukungan Pelanggan</span>
            <h2 class="mt-4 text-2xl font-semibold text-slate-900">Layanan Cepat</h2>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ t('tentang.step3') }}</p>
          </div>
        </article>
      </div>
    </section> -->

    <section class="mx-auto max-w-6xl px-4 pb-20 py-16 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-primary p-10 text-white shadow-soft">
        <div class="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-semibold">{{ t('tentang.cardTitle') }}</h2>
            <p class="mt-4 text-base leading-8 text-slate-300">{{ t('tentang.cardText') }}</p>
          </div>
          <div class="rounded-[2rem] bg-base p-6">
            <p class="text-sm uppercase tracking-[0.28em] text-emerald-950">{{ t('nav.kontak') }}?</p>
            <p class="mt-3 text-sm leading-7 text-primary">{{ t('tentang.orderText') }}</p>
            <a :href="whatsappText.bumbu" target="_blank" rel="noreferrer"
              class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900">{{
                t('buttons.chatWhatsApp') }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { t, whatsappText } from '../i18n'
import { imageUrls } from '../assets/imageUrls'

const loading = ref(false)
const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendEmail = async () => {
  loading.value = true
  try {
    // Ambil kunci dari environment variables (.env) atau masukkan langsung string ID-nya
    const SERVICE_ID = 'service_j8mz9hn'
    const TEMPLATE_ID = 'template_dnrjxn3'
    const PUBLIC_KEY = 'jJFCopf8noAExkrKq'

    // Parameter disesuaikan dengan variabel {{name}}, {{email}}, dan {{message}} di EmailJS
    const templateParams = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    alert('Pesan berhasil dikirim!')
    
    // Reset form setelah sukses
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    console.error('Gagal mengirim email:', error)
    alert('Terjadi kesalahan, gagal mengirim pesan.')
  } finally {
    loading.value = false
  }
}
</script>