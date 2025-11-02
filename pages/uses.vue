<script setup lang="ts">
const gear = [
  {
    label: 'Hardware',
    description: 'Daily drivers for prototyping, testing, and staying hands-on.',
    items: [
      'MacBook Pro 16" (M3 Max) running everything from Nuxt builds to Android Studio',
      'Mac mini M2 for CI mirrors and home lab experiments',
      'Pixel 8 Pro and iPhone 15 Pro for dual-platform mobile testing',
      'YubiKey 5C NFC and a Faraday sleeve for security drills'
    ]
  },
  {
    label: 'Software',
    description: 'Where the ideas form and ship.',
    items: [
      'Nuxt.js + Composition API for frontends that stay reactive and disciplined',
      'Cursor, Zed, and Xcode depending on the platform in front of me',
      'Linear for product planning and Notion for writing book chapters',
      'Cron and Raycast to automate the repetitive bits'
    ]
  },
  {
    label: 'Cloud & Security',
    description: 'The backbone for EntrustMyLife deployments.',
    items: [
      'Firebase Authentication, Firestore, and Cloud Functions on Google Cloud',
      'Cloud Run with Cloud Armor policies guarding every ingress',
      'Google Secret Manager + Doppler for environment orchestration',
      'Snyk + GitHub Advanced Security for constant scanning'
    ]
  }
]
</script>

<template>
  <div class="space-y-16">
    <section class="rounded-[2.75rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl lg:p-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Uses
      </p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        The stack that keeps EntrustMyLife shipping with confidence.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        A living log of the gear, software, and security kit I reach for every day. Updated whenever I find a tool that measurably improves the work.
      </p>
    </section>

    <section class="grid gap-8 lg:grid-cols-3">
      <article
        v-for="section in gear"
        :key="section.label"
        class="flex flex-col gap-5 rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.1)] backdrop-blur"
      >
        <header>
          <h2 class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            {{ section.label }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600">
            {{ section.description }}
          </p>
        </header>
        <ul class="space-y-3 text-sm leading-6 text-slate-600">
          <li
            v-for="item in section.items"
            :key="item"
            class="flex gap-3 rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-inner shadow-slate-900/5"
          >
            <span class="mt-1 block h-2 w-2 flex-none rounded-full bg-slate-900/70" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>
