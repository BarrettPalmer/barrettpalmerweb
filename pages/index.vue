<script setup lang="ts">
const navItems = ['About', 'Articles', 'Projects', 'Speaking', 'Uses']

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80',
    alt: 'Cockpit view from a small aircraft'
  },
  {
    src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80',
    alt: 'Speaker presenting at a conference'
  },
  {
    src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80',
    alt: 'Minimal desktop workspace'
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    alt: 'Mountain landscape above the clouds'
  },
  {
    src: 'https://images.unsplash.com/photo-1526481280695-3c46917b26b6?auto=format&fit=crop&w=600&q=80',
    alt: 'Mars-like desert canyon'
  }
]
</script>

<template>
  <main class="relative isolate overflow-hidden text-slate-900">
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),rgba(15,23,42,0.8))]"
    />
    <div class="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(140%_90%_at_50%_0%,rgba(148,163,184,0.4),rgba(15,23,42,0.95))]" />

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-14 lg:px-8 lg:pt-20">
      <header class="flex justify-center">
        <nav class="flex items-center gap-6 rounded-pill border border-white/60 bg-white/90 px-6 py-3 text-sm font-medium text-slate-600 shadow-2xl shadow-indigo-900/10 backdrop-blur">
          <NuxtLink
            v-for="item in navItems"
            :key="item"
            to="#"
            class="rounded-pill px-3 py-1 transition hover:bg-slate-900 hover:text-white"
          >
            {{ item }}
          </NuxtLink>
        </nav>
      </header>

      <section class="mt-16 grid flex-1 items-start gap-12 lg:grid-cols-[1.4fr_minmax(0,0.8fr)] lg:items-stretch lg:gap-16">
        <article class="relative rounded-[2.75rem] border border-white/60 bg-white/80 p-10 shadow-soft backdrop-blur-xl lg:p-12">
          <div class="absolute -top-6 left-8 hidden h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg lg:block">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
              alt="Portrait of Barrett Palmer"
              class="h-full w-full object-cover"
            >
          </div>

          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between text-sm font-medium text-slate-500">
                <span class="hidden items-center gap-2 rounded-pill border border-slate-200 px-3 py-1 lg:flex">
                  <span class="h-2 w-2 rounded-full bg-emerald-500" />
                  Available for new projects
                </span>
                <button
                  type="button"
                  class="ml-auto flex items-center gap-2 rounded-pill border border-slate-200 px-3 py-1 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                >
                  <span class="sr-only">Toggle theme</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>
              </div>

              <div class="flex items-start gap-5 lg:hidden">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                  alt="Portrait of Barrett Palmer"
                  class="h-14 w-14 flex-none rounded-full object-cover"
                >
                <div>
                  <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Software designer, founder, and amateur astronaut.
                  </h1>
                  <p class="mt-4 text-base text-slate-600 sm:text-lg">
                    I’m Barrett, a software designer and entrepreneur based in New York City. I craft experiences that marry delightful design with resilient engineering to help forward-thinking teams scale their impact.
                  </p>
                </div>
              </div>

              <div class="hidden lg:block">
                <h1 class="max-w-xl text-5xl font-extrabold tracking-tight text-slate-900">
                  Software designer, founder, and amateur astronaut.
                </h1>
                <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                  I’m Barrett, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
                </p>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 text-slate-500">
              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 transition hover:border-transparent hover:bg-slate-900 hover:text-white"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.47v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 transition hover:border-transparent hover:bg-slate-900 hover:text-white"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="1.6" />
                  <path
                    stroke-width="1.6"
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  />
                  <path d="M17.5 6.5h.01" stroke-linecap="round" stroke-width="2" />
                </svg>
              </a>
              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 transition hover:border-transparent hover:bg-slate-900 hover:text-white"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="M9 19c-5 1-5-2-7-2m14 4v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77 5.44 5.44 0 003.5 7.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 17.13V21"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 transition hover:border-transparent hover:bg-slate-900 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6z"
                  />
                  <rect x="2" y="9" width="4" height="12" stroke-width="1.6" />
                  <path d="M4 4a2 2 0 110 4 2 2 0 010-4z" stroke-width="1.6" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <aside class="relative flex items-start justify-center lg:justify-end">
          <div class="relative w-full max-w-sm rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-xl">
            <div class="flex items-center justify-between text-sm text-slate-500">
              <button type="button" class="rounded-pill border border-slate-200 px-3 py-1">
                Menu
              </button>
              <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200">
                <span class="sr-only">Toggle theme</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
            </div>

            <div class="mt-8 flex flex-col gap-6 text-center text-slate-600">
              <div class="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                  alt="Portrait of Barrett Palmer"
                  class="h-full w-full object-cover"
                >
              </div>

              <div>
                <h2 class="text-2xl font-bold text-slate-900">
                  Software designer, founder, and amateur astronaut.
                </h2>
                <p class="mt-4 text-sm leading-6">
                  I’m Barrett, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
                </p>
              </div>

              <div class="flex items-center justify-center gap-4 text-slate-500">
                <span class="sr-only">Social links</span>
                <a href="#" class="transition hover:text-slate-900" aria-label="Twitter small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.6"
                      d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.47v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    />
                  </svg>
                </a>
                <a href="#" class="transition hover:text-slate-900" aria-label="Instagram small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="1.6" />
                    <path
                      stroke-width="1.6"
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    />
                    <path d="M17.5 6.5h.01" stroke-linecap="round" stroke-width="2" />
                  </svg>
                </a>
                <a href="#" class="transition hover:text-slate-900" aria-label="GitHub small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.6"
                      d="M9 19c-5 1-5-2-7-2m14 4v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77 5.44 5.44 0 003.5 7.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 17.13V21"
                    />
                  </svg>
                </a>
                <a href="#" class="transition hover:text-slate-900" aria-label="LinkedIn small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.6"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6z"
                    />
                    <rect x="2" y="9" width="4" height="12" stroke-width="1.6" />
                    <path d="M4 4a2 2 0 110 4 2 2 0 010-4z" stroke-width="1.6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section class="mt-16">
        <div class="flex gap-6 overflow-x-auto pb-4">
          <div
            v-for="photo in photos"
            :key="photo.src"
            class="relative flex-none overflow-hidden rounded-[2rem] shadow-xl shadow-slate-900/20 transition hover:-translate-y-1 hover:shadow-2xl"
            style="width: 220px; height: 260px;"
          >
            <img :src="photo.src" :alt="photo.alt" class="h-full w-full object-cover">
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
