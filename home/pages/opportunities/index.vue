<template>
  <div class="w-full pt-16">
    <div class="container mx-auto px-4 md:px-6">
      <section class="text-center py-8 mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-3">
          <span class="text-blue-600">Opportunités</span> | Beat Expertise
        </h1>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Découvrez nos offres et opportunités disponibles.
        </p>
      </section>
      <section class="mb-10">
        <LandingSearch type="blog"/>
      </section>
      <section>
        <div v-if="blogs.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="blogItem in paginatedBlogs" :key="blogItem.id"
                   class="bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-200 dark:border-dark-border">
            <div class="h-48 overflow-hidden">
              <a :href="'/opportunities/' + blogItem.blogRoute" class="block">
                <img :src="blogItem.imageUrl || oppImg" :alt="blogItem.blogTitle"
                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              </a>
            </div>
            <div class="p-5 flex-grow flex flex-col">
              <div class="mb-3">
                <span class="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {{ blogItem.blogCategory }}
                </span>
              </div>
              <a :href="'/opportunities/' + blogItem.blogRoute" class="block mb-3">
                <h3 class="text-lg font-bold text-gray-900 dark:text-dark-text line-clamp-2 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {{ blogItem.blogTitle }}
                </h3>
              </a>
              <p class="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3 text-sm">
                {{ getExcerpt(blogItem.blogCaption || blogItem.blogData) }}
              </p>
              <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                <span>{{ formatDate(blogItem.creation_date) }}</span>
                <span>{{ blogItem.realnames }}</span>
              </div>
              <div class="mt-4 pt-3 border-t border-gray-100 dark:border-dark-border">
                <a :href="'/opportunities/' + blogItem.blogRoute"
                   class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center justify-center transition-colors duration-300 group">
                  Lire la suite
                  <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center items-center mt-10 space-x-2">
          <button @click="currentPage > 1 && (currentPage--)" :disabled="currentPage === 1"
                  class="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            Précédent
          </button>
          <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                  :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-surface'"
                  class="w-10 h-10 rounded-lg font-medium transition-colors">
            {{ page }}
          </button>
          <button @click="currentPage < totalPages && (currentPage++)" :disabled="currentPage === totalPages"
                  class="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            Suivant
          </button>
        </div>
        <div v-if="!loading && !blogs.length" class="text-center py-12">
          <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Aucune opportunité disponible</h3>
          <p class="text-gray-500 dark:text-gray-400">Revenez plus tard pour découvrir de nouvelles opportunités.</p>
        </div>
        <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import oppImg from '~/assets/img/opp.jpg'

definePageMeta({ layout: 'blog' })

useHead({
  title: 'Opportunités & Offres | Beat Expertise - Carrières à Goma, RDC',
  meta: [
    { name: 'description', content: 'Découvrez les opportunités d\'emploi et offres proposées par BEAT Expertise à Goma, RDC. Rejoignez une équipe dynamique et innovante.' },
    { name: 'keywords', content: 'opportunités Beat Expertise, emploi Goma, offres RDC, carrières, recrutement Nord-Kivu' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Opportunités | Beat Expertise' },
    { property: 'og:description', content: 'Offres d\'emploi et opportunités chez BEAT Expertise à Goma, RDC.' },
    { property: 'og:image', content: 'https://storage.everlytools.com/beatexpertise.jpg' },
    { property: 'og:url', content: 'https://beatexpertise.com/opportunities' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'Beat Expertise' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Opportunités | Beat Expertise' },
    { name: 'twitter:description', content: 'Rejoignez BEAT Expertise. Découvrez nos offres d\'emploi.' },
    { name: 'twitter:image', content: 'https://storage.everlytools.com/beatexpertise.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://beatexpertise.com/opportunities' }
  ]
})

const config = useRuntimeConfig()
const blogs = ref([])
const loading = ref(true)
const currentPage = ref(1)
const perPage = 12

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return blogs.value.slice(start, start + perPage)
})
const totalPages = computed(() => Math.ceil(blogs.value.length / perPage))

function getExcerpt(content) {
  if (!content) return ''
  const plainText = content.replace(/<[^>]*>/g, '')
  return plainText.length > 120 ? plainText.substring(0, 120) + '...' : plainText
}

function formatDate(dateString) {
  if (!dateString) return ''
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(dateString))
}

onMounted(async () => {
  try {
    const response = await $fetch(config.public.baseURL + '/blog/getall')
    blogs.value = (response.blogs || []).filter(blog => blog.publicPost == '1').sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
  } catch (error) {
    console.error('Error fetching opportunities:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style>
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>
