<script setup lang="ts">
const featured = {
  title: 'Shipping secure systems without shipping fear',
  date: 'Dec 12, 2024',
  readTime: '9 min read',
  excerpt: 'Patterns I lean on at EntrustMyLife to keep iOS, Android, and web teams confident while hardening their platforms.',
  link: '#'
}

const articles = [
  {
    title: 'What Amazon FBA taught me about velocity',
    date: 'Oct 25, 2024',
    readTime: '6 min read',
    excerpt: 'The Squeeze Bras launch hit #1 fast, but the real lesson was codifying ops in automation-friendly playbooks.',
    tags: ['Growth', 'Automation']
  },
  {
    title: 'Choosing Firebase when security matters',
    date: 'Aug 18, 2024',
    readTime: '7 min read',
    excerpt: 'Why I back Google Cloud and Firebase for reliability, and where I draw the line compared to AWS.',
    tags: ['Security', 'Architecture']
  },
  {
    title: 'Leading from the console',
    date: 'May 9, 2024',
    readTime: '8 min read',
    excerpt: 'Book two in progress: frameworks for leaders who need to stay hands-on with their code and their teams.',
    tags: ['Leadership']
  },
  {
    title: 'Designing with the Composition API',
    date: 'Mar 14, 2024',
    readTime: '5 min read',
    excerpt: 'How Nuxt’s Composition API keeps my components honest and testable—even when the stack spans multiple apps.',
    tags: ['Nuxt.js', 'Engineering']
  }
]
</script>

<template>
  <div class="space-y-16">
    <section class="rounded-[2.75rem] border border-white/60 bg-white/85 p-10 shadow-soft backdrop-blur-xl lg:p-14">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Writing
          </p>
          <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Notes on security-led engineering, leadership, and the build-up of EntrustMyLife.
          </h1>
        </div>
        <NuxtLink
          to="mailto:hello@barrettpalmer.com"
          class="inline-flex items-center gap-2 self-start rounded-pill border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
        >
          Get early access
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <article class="mt-10 rounded-[2.5rem] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Featured
          </span>
          <span class="text-sm text-slate-500">
            {{ featured.date }} · {{ featured.readTime }}
          </span>
        </div>
        <h2 class="mt-4 text-2xl font-semibold text-slate-900">
          {{ featured.title }}
        </h2>
        <p class="mt-3 text-base leading-7 text-slate-600">
          {{ featured.excerpt }}
        </p>
        <NuxtLink
          :to="featured.link"
          class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3"
        >
          Read the story
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </article>
    </section>

    <section class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="article in articles"
        :key="article.title"
        class="rounded-[2rem] border border-white/60 bg-white/80 p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur"
      >
        <div class="flex items-center justify-between text-xs text-slate-400">
          <span class="font-semibold uppercase tracking-[0.3em]">{{ article.date }}</span>
          <span class="text-slate-500">{{ article.readTime }}</span>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-slate-900">
          <NuxtLink :to="'#'">
            {{ article.title }}
          </NuxtLink>
        </h3>
        <p class="mt-3 text-sm leading-6 text-slate-600">
          {{ article.excerpt }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-500"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </section>

    <section class="rounded-[2.5rem] border border-dashed border-slate-300/70 bg-white/70 p-8 text-sm text-slate-600">
      <h2 class="text-base font-semibold text-slate-900">
        Coming soon: Live articles from Firestore
      </h2>
      <p class="mt-3 leading-6">
        I’m wiring this section to Firebase Firestore next so posts publish straight from my writing workflow.
        The Firebase config is loaded client-side and ready for the collection hookup.
      </p>
    </section>
  </div>
</template>
