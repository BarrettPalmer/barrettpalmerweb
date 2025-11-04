<script setup lang="ts">
import { doc, getDoc, getDocs, collection, query, where, Timestamp } from 'firebase/firestore'

interface ArticleDetail {
  id: string
  title: string
  excerpt: string
  body?: string
  publishedAt?: string
  readTime?: string
  tags: string[]
}

const route = useRoute()
const router = useRouter()
const { $firebaseFirestore } = useNuxtApp()

const article = ref<ArticleDetail | null>(null)
const isLoading = ref(true)
const loadError = ref<string | null>(null)

const hydrateArticle = (id: string, data: Record<string, any>): ArticleDetail => {
  const publishedAtRaw = data.publishedAt
  const publishedAt =
    publishedAtRaw instanceof Timestamp
      ? publishedAtRaw.toDate()
      : typeof publishedAtRaw === 'number'
        ? new Date(publishedAtRaw)
        : publishedAtRaw

  const readMinutes = data.readMinutes ?? data.readTime ?? null

  return {
    id,
    title: data.title ?? 'Untitled article',
    excerpt: data.excerpt ?? '',
    body: data.body ?? data.content ?? '',
    publishedAt:
      publishedAt instanceof Date && !Number.isNaN(publishedAt.valueOf())
        ? publishedAt.toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        : typeof publishedAt === 'string'
          ? publishedAt
          : undefined,
    readTime: typeof readMinutes === 'number' ? `${readMinutes} min read` : readMinutes ?? undefined,
    tags: Array.isArray(data.tags) ? data.tags : []
  }
}

const fetchArticle = async () => {
  if (!$firebaseFirestore) {
    loadError.value = 'Unable to connect to the content service.'
    isLoading.value = false
    return
  }

  const slugOrId = route.params.id?.toString()
  if (!slugOrId) {
    loadError.value = 'Article not found.'
    isLoading.value = false
    return
  }

  try {
    // Try direct document lookup first
    const directDoc = await getDoc(doc($firebaseFirestore, 'articles', slugOrId))
    if (directDoc.exists()) {
      article.value = hydrateArticle(directDoc.id, directDoc.data())
      return
    }

    // Fall back to slug query
    const slugQuery = query(
      collection($firebaseFirestore, 'articles'),
      where('slug', '==', slugOrId)
    )
    const slugSnapshot = await getDocs(slugQuery)
    if (!slugSnapshot.empty) {
      const docMatch = slugSnapshot.docs[0]
      article.value = hydrateArticle(docMatch.id, docMatch.data())
      return
    }

    loadError.value = 'Article not found.'
  } catch (err) {
    console.warn('[articles] Failed to load article detail.', err)
    loadError.value = 'There was a problem loading this article.'
  } finally {
    isLoading.value = false
  }
}

if (process.client) {
  fetchArticle()
}
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-10 rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-soft backdrop-blur-xl md:p-12">
    <button
      type="button"
      class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
      @click="router.back"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>

    <div v-if="isLoading" class="space-y-6" aria-busy="true">
      <div class="h-8 w-3/4 animate-pulse rounded-full bg-slate-200" />
      <div class="h-5 w-full animate-pulse rounded-full bg-slate-200" />
      <div class="h-5 w-11/12 animate-pulse rounded-full bg-slate-200" />
      <div class="space-y-2">
        <div class="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div class="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div class="h-4 w-10/12 animate-pulse rounded bg-slate-200" />
      </div>
    </div>

    <div v-else-if="loadError" class="space-y-6 text-center">
      <h1 class="text-3xl font-semibold text-slate-900">Article unavailable</h1>
      <p class="text-slate-600">
        {{ loadError }}
      </p>
      <NuxtLink
        to="/articles"
        class="inline-flex items-center gap-2 rounded-pill border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
      >
        Go back to articles
      </NuxtLink>
    </div>

    <article v-else class="space-y-6">
      <div class="space-y-3">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          {{ article?.publishedAt || 'Recently published' }}
        </p>
        <h1 class="text-4xl font-semibold tracking-tight text-slate-900">
          {{ article?.title }}
        </h1>
        <p class="text-base text-slate-600">
          {{ article?.excerpt }}
        </p>
        <div class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <span v-if="article?.readTime">{{ article?.readTime }}</span>
          <span
            v-for="tag in article?.tags"
            :key="tag"
            class="rounded-full border border-slate-200 bg-white px-3 py-1"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div
        v-if="article?.body"
        class="prose prose-slate max-w-none"
        v-html="article.body"
      />
      <p v-else class="text-sm text-slate-500">
        Detailed content for this article is coming soon.
      </p>
    </article>
  </div>
</template>
