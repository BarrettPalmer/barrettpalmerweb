<script setup lang="ts">
const projects = [
  {
    name: 'EntrustMyLife Platform',
    timeframe: '2024 — Present',
    description: 'A secure Planning Center companion that gives churches granular control over communication, volunteer flow, and data ownership.',
    stack: ['Nuxt 3', 'Firebase', 'Cloud Run', 'TypeScript'],
    link: '#'
  },
  {
    name: 'Squeeze Bras',
    timeframe: '2023',
    description: 'Bootstrapped an Amazon FBA brand to #1 in category within three months—building the supply-chain automation, analytics, and storefront.',
    stack: ['Next.js', 'Google Cloud', 'BigQuery', 'Stripe'],
    link: '#'
  },
  {
    name: 'Introduction to ProPresenter',
    timeframe: '2021',
    description: 'Authored a practical handbook for production teams. Designed companion resources, landing pages, and an online learning stack.',
    stack: ['Nuxt', 'Contentful', 'Vercel', 'Mailcoach'],
    link: '#'
  },
  {
    name: 'Security Enablement Consulting',
    timeframe: '2019 — 2022',
    description: 'Partnered with startups to harden iOS, Android, and web applications—introducing repeatable threat modeling and rapid-response playbooks.',
    stack: ['Swift', 'Kotlin', 'Nuxt', 'Firebase', 'Cloud Armor'],
    link: '#'
  }
]
</script>

<template>
  <div class="space-y-16">
    <section class="rounded-[2.75rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl lg:p-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Portfolio
      </p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Products that prove secure systems can still move fast.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        From e-commerce sprints to long-running SaaS platforms, these builds funded EntrustMyLife and shaped how I lead teams today.
      </p>
    </section>

    <section class="space-y-6">
      <article
        v-for="project in projects"
        :key="project.name"
        class="grid gap-6 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur sm:grid-cols-[1.2fr_minmax(0,0.8fr)] sm:p-10"
      >
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            <span>{{ project.name }}</span>
            <span class="text-slate-500">{{ project.timeframe }}</span>
          </div>
          <p class="text-base leading-7 text-slate-600">
            {{ project.description }}
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-500"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        <div class="flex flex-col justify-between gap-6">
          <div class="h-48 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-inner">
            <div class="flex h-full items-center justify-center text-slate-400">
              Coming soon
            </div>
          </div>
          <NuxtLink
            :to="project.link"
            class="inline-flex items-center gap-2 rounded-pill border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            View case study
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </article>
    </section>
  </div>
</template>
