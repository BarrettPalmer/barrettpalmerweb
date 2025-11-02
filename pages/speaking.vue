<script setup lang="ts">
const upcoming = [
  {
    event: 'Firebase Summit Leadership Lab',
    location: 'Chicago, IL',
    date: 'March 21, 2025',
    topic: 'Architecting trustworthy experiences with Firebase and Nuxt'
  },
  {
    event: 'TechLead Collective',
    location: 'Virtual',
    date: 'May 8, 2025',
    topic: 'Coaching engineering teams to stay hands-on while scaling'
  }
]

const past = [
  {
    event: 'GDG Security Day',
    location: 'Atlanta, GA',
    date: 'Oct 2024',
    topic: 'Mobile threat modeling for founders wearing every hat'
  },
  {
    event: 'Leadership in Motion',
    location: 'Austin, TX',
    date: 'Jun 2024',
    topic: 'Building confidence in new technical leaders'
  },
  {
    event: 'Nuxt Nation',
    location: 'Online',
    date: 'Mar 2024',
    topic: 'Composition API patterns for multi-platform teams'
  }
]
</script>

<template>
  <div class="space-y-16">
    <section class="rounded-[2.75rem] border border-white/60 bg-white/85 p-10 shadow-soft backdrop-blur-xl lg:p-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Speaking
      </p>
      <h1 class="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Conversations about security, leadership, and building products that scale with integrity.
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        I serve founders, engineering leads, and production teams through keynotes, workshops, and hands-on coaching. Expect stories from the trenches and frameworks you can ship tomorrow.
      </p>
      <NuxtLink
        to="mailto:hello@barrettpalmer.com"
        class="mt-8 inline-flex items-center gap-2 rounded-pill border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.15)]"
      >
        Request availability
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </section>

    <section class="grid gap-10 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-16">
      <div class="rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
        <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Upcoming engagements
        </h2>
        <div class="mt-8 space-y-6">
          <article
            v-for="event in upcoming"
            :key="event.event"
            class="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div class="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>{{ event.event }}</span>
              <span class="text-slate-500">{{ event.location }} — {{ event.date }}</span>
            </div>
            <p class="mt-4 text-base leading-7 text-slate-600">
              {{ event.topic }}
            </p>
          </article>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl">
        <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Recent appearances
        </h2>
        <div class="mt-8 space-y-6">
          <article
            v-for="talk in past"
            :key="talk.event"
            class="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
          >
            <div class="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>{{ talk.event }}</span>
              <span class="text-slate-500">{{ talk.location }} — {{ talk.date }}</span>
            </div>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              {{ talk.topic }}
            </p>
            <NuxtLink
              to="#"
              class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3"
            >
              Watch recording
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
