<script setup lang="ts">
const route = useRoute()

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Projects', href: '/projects' },
  { label: 'Uses', href: '/uses' }
]

const mobileOpen = ref(false)

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  }
)
</script>

<template>
  <header class="flex justify-center">
    <nav
      class="flex items-center gap-4 rounded-pill border border-white/60 bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-600 shadow-2xl shadow-indigo-900/10 backdrop-blur lg:gap-6 lg:px-6 lg:py-3"
    >
      <button
        type="button"
        class="flex items-center gap-2 rounded-pill border border-slate-200 px-3 py-1 text-slate-600 transition hover:border-slate-300 hover:text-slate-800 lg:hidden"
        @click="mobileOpen = !mobileOpen"
      >
        <span>Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div class="hidden gap-4 lg:flex lg:items-center lg:gap-6">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="rounded-pill px-3 py-1 transition hover:bg-slate-900 hover:text-white"
          :class="route.path === item.href ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/20' : ''"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>

    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-30 flex items-start justify-center bg-slate-950/60 px-6 pt-28 backdrop-blur"
      >
        <div class="w-full max-w-sm rounded-3xl border border-white/40 bg-white/95 p-6 text-base font-medium text-slate-600 shadow-2xl shadow-slate-900/30">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-500">Navigation</span>
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200"
              @click="mobileOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
          <ul class="mt-4 space-y-2">
            <li v-for="item in navItems" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="block rounded-2xl px-4 py-3 transition hover:bg-slate-900 hover:text-white"
                :class="route.path === item.href ? 'bg-slate-900 text-white shadow-sm shadow-slate-900/20' : ''"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
