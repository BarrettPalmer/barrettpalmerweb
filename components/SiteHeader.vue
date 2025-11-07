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
    <div
      class="flex w-full items-center justify-between rounded-full bg-white/80 px-5 py-3 text-sm font-medium text-slate-600 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur"
    >
      <NuxtLink to="/" class="text-base font-semibold text-slate-900 transition hover:text-slate-500">
        Barrett Palmer
      </NuxtLink>

      <button
        type="button"
        class="flex items-center gap-2 rounded-full border border-transparent px-3 py-1 text-slate-600 transition hover:bg-slate-100 lg:hidden"
        @click="mobileOpen = !mobileOpen"
      >
        Menu
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <nav class="hidden items-center gap-6 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="transition hover:text-slate-900"
          :class="route.path === item.href ? 'text-slate-900' : ''"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>

    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-40 flex items-start justify-end bg-black/20 px-4 pt-24 backdrop-blur-sm lg:hidden"
        @click.self="mobileOpen = false"
      >
        <div class="w-full max-w-xs rounded-3xl bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.15)]">
          <div class="mb-4 flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-500">Navigate</span>
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500"
              @click="mobileOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
          <ul class="space-y-2 text-base text-slate-600">
            <li v-for="item in navItems" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="block rounded-2xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900"
                :class="route.path === item.href ? 'bg-slate-100 text-slate-900' : ''"
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
