<template>
  <footer class="mt-20 border-t border-white/40 pt-10 text-sm text-slate-500">
    <div class="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between">
      <p>&copy; {{ new Date().getFullYear() }} Barrett Palmer. All rights reserved.</p>
      <div class="flex justify-center gap-6">
        <NuxtLink to="/" class="transition hover:text-slate-900">Home</NuxtLink>
        <NuxtLink to="/about" class="transition hover:text-slate-900">About</NuxtLink>
        <NuxtLink to="/articles" class="transition hover:text-slate-900">Articles</NuxtLink>
        <NuxtLink to="/projects" class="transition hover:text-slate-900">Projects</NuxtLink>
        <NuxtLink to="/speaking" class="transition hover:text-slate-900">Speaking</NuxtLink>
        <NuxtLink to="/uses" class="transition hover:text-slate-900">Uses</NuxtLink>
      </div>
    </div>
  </footer>
</template>
