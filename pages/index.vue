<script setup lang="ts">
const photos = [
  {
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
    alt: 'Cockpit view from a small aircraft'
  },
  {
    src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    alt: 'Speaker presenting at a conference'
  },
  {
    src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
    alt: 'Minimal desktop workspace'
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    alt: 'Mountain landscape above the clouds'
  }
]

const fallbackProfileImage =
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
const localProfileImage = '/images/barrett-palmer.jpg'
const profileImage = ref(localProfileImage)

const onProfileImageError = () => {
  if (profileImage.value !== fallbackProfileImage) {
    profileImage.value = fallbackProfileImage
  }
}
</script>

<template>
  <section class="mx-auto max-w-5xl">
    <article class="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/80 p-10 shadow-[0_50px_120px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:p-16">
      <div class="absolute -top-24 right-24 hidden h-64 w-64 rounded-full bg-gradient-to-br from-sky-100 via-white to-transparent blur-3xl lg:block" />
      <div class="absolute -top-40 left-32 hidden h-72 w-72 rounded-full bg-gradient-to-br from-indigo-100 via-white to-transparent blur-3xl lg:block" />

      <div class="absolute -top-12 left-1/2 hidden h-28 w-28 -translate-x-1/2 overflow-hidden rounded-full border border-white/70 shadow-[0_15px_40px_rgba(15,23,42,0.15)] lg:block">
        <img
          :src="profileImage"
          alt="Barrett Palmer"
          class="h-full w-full object-cover"
          @error="onProfileImageError"
        >
      </div>

      <div class="flex flex-col gap-12 pt-4 lg:pt-12">
        <div class="flex flex-col gap-6 text-center lg:text-left">
          <div class="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/70 shadow-[0_12px_30px_rgba(15,23,42,0.12)] lg:hidden">
            <img
              :src="profileImage"
              alt="Barrett Palmer"
              class="h-full w-full object-cover"
              @error="onProfileImageError"
            >
          </div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            EntrustMyLife LLC
          </p>
          <h1 class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Secure experiences designed with the calm finesse of great hardware.
          </h1>
          <p class="text-lg leading-8 text-slate-600 sm:text-xl">
            I’m Barrett Palmer—founder, engineer, and systems thinker. I build products that feel effortless on the surface and are obsessively secure underneath, spanning iOS, Android, and the web. Nuxt.js, Google Cloud, and Firebase power the foundation so teams can operate with Apple-grade polish.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 text-slate-500 lg:justify-start">
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
              <path stroke-width="1.6" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
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
  </section>

  <section class="mt-20">
    <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
      Recent explorations
    </h2>
    <p class="mt-4 max-w-2xl text-lg text-slate-600">
      A small gallery from the build—prototyping, launches, and the leadership moments that keep the mission grounded.
    </p>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="photo in photos"
        :key="photo.src"
        class="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.15)]"
      >
        <img :src="photo.src" :alt="photo.alt" class="h-64 w-full object-cover transition duration-700 group-hover:scale-105">
      </div>
    </div>
  </section>
</template>
