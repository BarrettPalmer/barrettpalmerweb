<script setup lang="ts">
const milestones = [
  {
    year: '2025',
    title: 'EntrustMyLife Platform Pilot',
    description: 'Designing a secure Planning Center integration that hands more control to teams managing real-world ministry logistics.'
  },
  {
    year: '2023',
    title: 'Squeeze Bras hits #1 on Amazon',
    description: 'Launched, scaled, and fulfilled a DTC brand that topped its category within three months while hardening the backend for rapid growth.'
  },
  {
    year: '2021',
    title: 'Published “Introduction to ProPresenter”',
    description: 'Shipped a practical guide for production leaders and kicked off research for the follow-up book focused on confident leadership.'
  },
  {
    year: '2019',
    title: 'Founded EntrustMyLife LLC',
    description: 'Turned a consulting practice into a product company focused on security-first experiences across mobile and web.'
  }
]

const principles = [
  {
    name: 'Security is a feature',
    description: 'Hard-earned trust is my competitive edge. Every surface—mobile, web, or cloud—is designed assuming it will be tested.'
  },
  {
    name: 'Code every day',
    description: 'Staying hands-on keeps my instincts sharp. I prototype in Nuxt, ship in native stacks, and pair with teams to keep execution grounded.'
  },
  {
    name: 'Teach what you learn',
    description: 'Books, workshops, and leadership coaching are how I multiply impact. Knowledge should move from notebooks into teams quickly.'
  }
]
</script>

<template>
  <div class="space-y-20">
    <section class="rounded-[2.75rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl lg:p-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Biography
      </p>
      <h1 class="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Security-minded founder building tools that empower leaders to ship with confidence.
      </h1>
      <div class="mt-6 space-y-5 text-lg leading-8 text-slate-600">
        <p>
          I’m Barrett Palmer, co-founder and CEO of EntrustMyLife LLC. My career has been anchored in full-stack engineering and security—shipping iOS, Android, and web apps that guard sensitive data without slowing teams down.
        </p>
        <p>
          The work spans SaaS platforms, native utilities, and consumer brands. I’ve built commerce systems that scale fast, production tools that leaders rely on, and integrations that bridge legacy products with modern workflows.
        </p>
        <p>
          Between projects I write—my first book, “Introduction to ProPresenter,” equips production teams everywhere, and book two is underway to help builders lead with composure. Teaching and mentoring are baked into everything I do.
        </p>
      </div>
    </section>

    <section class="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-start lg:gap-16">
      <div class="rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
        <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Career timeline
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          A shorthand of the teams and missions that shaped how I build.
        </p>
        <div class="mt-10 space-y-6">
          <article
            v-for="milestone in milestones"
            :key="milestone.year"
            class="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {{ milestone.year }}
              </span>
              <h3 class="text-lg font-semibold text-slate-900">
                {{ milestone.title }}
              </h3>
            </div>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              {{ milestone.description }}
            </p>
          </article>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div class="rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
          <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Principles
          </h2>
          <p class="mt-4 text-lg text-slate-600">
            Shared values that show up in every engagement.
          </p>
          <dl class="mt-8 space-y-6">
            <div v-for="principle in principles" :key="principle.name" class="rounded-3xl border border-slate-200 bg-white/80 p-6">
              <dt class="text-base font-semibold text-slate-900">
                {{ principle.name }}
              </dt>
              <dd class="mt-3 text-sm leading-6 text-slate-600">
                {{ principle.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
          <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Currently exploring
          </h2>
          <ul class="mt-6 grid gap-4 text-sm text-slate-600">
            <li class="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-white/70 px-5 py-3">
              <span class="h-2 w-2 rounded-full bg-emerald-500" />
              Deep integrations between Planning Center and Firebase-native tooling
            </li>
            <li class="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-white/70 px-5 py-3">
              <span class="h-2 w-2 rounded-full bg-amber-500" />
              Writing the follow-up to “Introduction to ProPresenter” on confident leadership
            </li>
            <li class="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-white/70 px-5 py-3">
              <span class="h-2 w-2 rounded-full bg-sky-500" />
              Security coaching frameworks for founders scaling their first teams
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
