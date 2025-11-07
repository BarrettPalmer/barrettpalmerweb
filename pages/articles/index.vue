<script setup lang="ts">
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore'

interface ArticleCard {
  id: string
  title: string
  dateLabel: string
  readTime: string
  excerpt: string
  tags: string[]
  link: string
  featured?: boolean
}

const { $firebaseFirestore } = useNuxtApp()

const formatDate = (value: Date | string | null | undefined) => {
  if (!value) return ''
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) {
    return typeof value === 'string' ? value : ''
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

const featuredArticle = ref<ArticleCard | null>(null)
const otherArticles = ref<ArticleCard[]>([])
const isLoading = ref(true)
const hasError = ref(false)

const loadArticles = async () => {
  isLoading.value = true
  if (!$firebaseFirestore) {
    hasError.value = true
    isLoading.value = false
    return
  }

  try {
    const snapshot = await getDocs(
      query(collection($firebaseFirestore, 'articles'), orderBy('publishedAt', 'desc'))
    )

    if (snapshot.empty) {
      hasError.value = true
      featuredArticle.value = null
      otherArticles.value = []
      return
    }

    const mapped = snapshot.docs.map<ArticleCard>((doc) => {
      const data = doc.data()
      const publishedAtRaw = data.publishedAt
      const publishedAt =
        publishedAtRaw instanceof Timestamp
          ? publishedAtRaw.toDate()
          : typeof publishedAtRaw === 'number'
            ? new Date(publishedAtRaw)
            : publishedAtRaw

      const readMinutes = data.readMinutes ?? data.readTime ?? 6
      const link =
        data.link ??
        (data.slug ? `/articles/${data.slug}` : `/articles/${doc.id}`)

      return {
        id: doc.id,
        title: data.title ?? 'Untitled article',
        dateLabel: formatDate(publishedAt) || 'TBD',
        readTime: typeof readMinutes === 'number' ? `${readMinutes} min read` : String(readMinutes),
        excerpt: data.excerpt ?? 'Summary coming soon.',
        tags: Array.isArray(data.tags) ? data.tags : [],
        link,
        featured: Boolean(data.featured)
      }
    })

    const nextFeatured = mapped.find((item) => item.featured) ?? mapped[0]
    const remaining = mapped.filter((item) => item.id !== nextFeatured.id)

    featuredArticle.value = nextFeatured
    otherArticles.value = remaining
    hasError.value = false
  } catch (err) {
    console.warn('[articles] Firestore fetch failed, falling back to static content.', err)
    hasError.value = true
    featuredArticle.value = null
    otherArticles.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadArticles()
})
</script>

<template>
  <div class="space-y-16">
    <section class="rounded-[2.75rem] border border-white/60 bg-white/85 p-10 shadow-soft backdrop-blur-xl lg:p-14">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="space-y-3">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Writing
          </p>
          <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Notes on security-led engineering, leadership, and the build-up of EntrustMyLife.
          </h1>
          <p
            v-if="hasError"
            class="text-xs font-medium uppercase tracking-[0.25em] text-amber-600"
          >
            Offline mode — showing fallback articles
          </p>
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

      <article
        class="mt-10 rounded-[2.5rem] border border-slate-200/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-200"
        :aria-busy="isLoading"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Featured
          </span>
          <span class="text-sm text-slate-500">
            <span v-if="isLoading">Loading…</span>
            <template v-else-if="featuredArticle">
              {{ featuredArticle.dateLabel }} · {{ featuredArticle.readTime }}
            </template>
          </span>
        </div>
        <h2 class="mt-4 text-2xl font-semibold text-slate-900">
          <span v-if="isLoading" class="block h-7 w-3/4 animate-pulse rounded-full bg-slate-200" />
          <template v-else-if="featuredArticle">
            {{ featuredArticle.title }}
          </template>
        </h2>
        <p class="mt-3 text-base leading-7 text-slate-600">
          <span v-if="isLoading" class="block h-5 w-full animate-pulse rounded-full bg-slate-200" />
          <span v-if="isLoading" class="mt-2 block h-5 w-5/6 animate-pulse rounded-full bg-slate-200" />
          <template v-else-if="featuredArticle">
            {{ featuredArticle.excerpt }}
          </template>
          <span v-else class="text-sm text-slate-500">
            No published articles yet. Add one in Firestore and refresh.
          </span>
        </p>
        <NuxtLink
          :to="isLoading || !featuredArticle ? '#' : featuredArticle.link || '#'"
          class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3"
          :class="{ 'pointer-events-none opacity-40': isLoading || !featuredArticle }"
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
        v-for="article in otherArticles"
        :key="article.id"
        class="rounded-[2rem] border border-white/60 bg-white/80 p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur"
      >
        <div class="flex items-center justify-between text-xs text-slate-400">
          <span class="font-semibold uppercase tracking-[0.3em]">{{ article.dateLabel }}</span>
          <span class="text-slate-500">{{ article.readTime }}</span>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-slate-900">
          <NuxtLink :to="article.link || '#'">
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

      <article
        v-if="isLoading && !otherArticles.length"
        class="rounded-[2rem] border border-white/60 bg-white/80 p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur"
      >
        <div class="flex items-center justify-between text-xs text-slate-400">
          <span class="block h-4 w-1/3 animate-pulse rounded-full bg-slate-200" />
          <span class="block h-4 w-16 animate-pulse rounded-full bg-slate-200" />
        </div>
        <div class="mt-4 h-6 w-3/4 animate-pulse rounded-full bg-slate-200" />
        <div class="mt-3 h-4 w-full animate-pulse rounded-full bg-slate-200" />
        <div class="mt-2 h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
        <div class="mt-4 flex gap-2">
          <span class="block h-6 w-16 animate-pulse rounded-full bg-slate-200" />
          <span class="block h-6 w-20 animate-pulse rounded-full bg-slate-200" />
        </div>
      </article>
    </section>

    <section
      v-if="!isLoading && !featuredArticle"
      class="rounded-[2.5rem] border border-dashed border-slate-300/70 bg-white/70 p-8 text-sm text-slate-600"
    >
      <h2 class="text-base font-semibold text-slate-900">
        No live articles yet
      </h2>
      <p class="mt-3 leading-6">
        Add your first document to the <code>articles</code> collection and refresh this page to see it here.
      </p>
    </section>

    <section
      v-else
      class="rounded-[2.5rem] border border-dashed border-slate-300/70 bg-white/70 p-8 text-sm text-slate-600"
    >
      <h2 class="text-base font-semibold text-slate-900">
        Managed in Firebase
      </h2>
      <p class="mt-3 leading-6">
        Add or edit documents in the <code>articles</code> collection (fields: <code>title</code>, <code>excerpt</code>,
        <code>publishedAt</code>, <code>readMinutes</code>, <code>tags</code>, optional <code>slug</code>, <code>body</code>) and
        they’ll appear here instantly—no deploy needed.
      </p>
      <p
        v-if="hasError"
        class="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700"
      >
        Sync issue — showing fallback posts
      </p>
    </section>
  </div>
</template>
