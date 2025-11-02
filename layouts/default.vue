<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-950 text-slate-900">
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),rgba(15,23,42,0.8))]"
    />
    <div class="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(140%_90%_at_50%_0%,rgba(148,163,184,0.4),rgba(15,23,42,0.95))]" />

    <div class="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
      <SiteHeader />
      <main class="mt-14 flex-1">
        <slot />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>
