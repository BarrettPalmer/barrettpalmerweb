<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f5f5f7] via-white to-[#f0f0f5] text-slate-900">
    <div class="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white via-white/60 to-transparent" />

    <div class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-24 pt-8 sm:px-8 lg:pt-14">
      <SiteHeader />
      <main class="mt-12 flex-1">
        <slot />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
