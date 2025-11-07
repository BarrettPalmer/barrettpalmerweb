<template>
  <footer class="mt-24 border-t border-slate-200 pt-10 text-sm text-slate-500">
    <div class="flex flex-col gap-4 text-center sm:text-left lg:flex-row lg:items-center lg:justify-between">
      <p class="text-slate-400">&copy; {{ new Date().getFullYear() }} Barrett Palmer. Crafted with care.</p>
      <div class="flex flex-wrap justify-center gap-6 lg:justify-end">
        <NuxtLink to="/" class="transition hover:text-slate-900">Home</NuxtLink>
        <NuxtLink to="/about" class="transition hover:text-slate-900">About</NuxtLink>
        <NuxtLink to="/articles" class="transition hover:text-slate-900">Articles</NuxtLink>
        <NuxtLink to="/projects" class="transition hover:text-slate-900">Projects</NuxtLink>
        <NuxtLink to="/uses" class="transition hover:text-slate-900">Uses</NuxtLink>
      </div>
    </div>
  </footer>
</template>
