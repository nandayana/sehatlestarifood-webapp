<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <section class="bg-emerald-500/10 py-16 text-slate-900">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-4 text-center">
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-500">{{ t('nav.ulasan') }}</p>
          <h1 class="text-4xl font-semibold sm:text-5xl">{{ t('ulasan.title') }}</h1>
          <p class="mx-auto max-w-2xl text-base leading-8 text-slate-700">{{ t('ulasan.highlightText') }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
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
        <article class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
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
        <article class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-xl transition">
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

    <section class="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-white p-10 shadow-soft border border-slate-200">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-semibold text-slate-900">{{ t('ulasan.highlightTitle') }}</h2>
            <p class="mt-4 text-base leading-8 text-slate-600">{{ t('ulasan.highlightText') }}</p>
          </div>
          <div class="rounded-[2rem] bg-emerald-500/10 p-8 text-slate-900">
            <p class="text-sm uppercase tracking-[0.28em] text-emerald-500">{{ t('ulasan.contactTitle') }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-700">{{ t('ulasan.contactText') }}</p>
            <a :href="whatsappText.ulasan" target="_blank" rel="noreferrer" class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">{{ t('buttons.chatWhatsApp') }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { t, whatsappText } from '../i18n'
</script>
