<template>
  <div class="w-full pt-16">
    <div class="container mx-auto px-4 md:px-6">
      <div v-if="isLoading" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
      <div v-else-if="details" class="max-w-4xl mx-auto">
        <div class="mb-6">
          <a href="/blogs" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Retour aux publications
          </a>
        </div>
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
            {{ details.blogCategory }}
          </span>
          <span class="text-gray-500 dark:text-gray-400 text-sm">{{ formatDate(details.creation_date) }}</span>
          <span v-if="details.realnames" class="text-gray-500 dark:text-gray-400 text-sm">par {{ details.realnames }}</span>
        </div>
        <h1 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-6 leading-tight">
          {{ details.blogTitle }}
        </h1>
        <div v-if="details.imageUrl" class="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img :src="details.imageUrl" :alt="details.blogTitle" class="w-full max-h-[500px] object-cover">
        </div>
        <div v-if="details.youtubeLink" class="mb-8">
          <div class="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe :src="getYoutubeEmbed(details.youtubeLink)" class="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>
        <div class="prose prose-lg max-w-none dark:prose-invert mb-10 text-gray-800 dark:text-gray-200"
             v-html="details.blogData"></div>
        <div class="border-t border-gray-200 dark:border-dark-border pt-6 mb-10">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">Partager cet article</h3>
          <div class="flex gap-3">
            <a :href="'https://wa.me/?text=' + encodeURIComponent(details.blogTitle + ' ' + currentUrl)"
               target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl)"
               target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(details.blogTitle)"
               target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(currentUrl) + '&title=' + encodeURIComponent(details.blogTitle)"
               target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <div v-if="details.comments && details.comments.length" class="border-t border-gray-200 dark:border-dark-border pt-6 mb-10">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">Commentaires ({{ details.comments.length }})</h3>
          <div v-for="comment in details.comments" :key="comment.id" class="mb-4 p-4 bg-gray-50 dark:bg-dark-surface rounded-lg">
            <div class="flex items-center mb-2">
              <span class="font-semibold text-gray-800 dark:text-dark-text">{{ comment.realnames }}</span>
              <span class="text-gray-400 text-sm ml-3">{{ formatDate(comment.creation_date) }}</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ comment.comment }}</p>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">Article introuvable</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6">Cet article n'existe pas ou a été supprimé.</p>
        <a href="/blogs" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Voir toutes les publications
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({ layout: 'blog' })
    const route = useRoute()
    return { route }
  },
  data() {
    return {
      details: null,
      isLoading: true,
      currentUrl: ''
    }
  },
  mounted() {
    this.currentUrl = window.location.href
    this.loadData()
  },
  methods: {
    async loadData() {
      const config = useRuntimeConfig()
      const blogRoute = this.route.params.blogRoute
      try {
        const response = await $fetch(config.public.baseURL + '/blog/getall', {
          params: { route: blogRoute }
        })
        if (response.blogs && response.blogs.length > 0) {
          this.details = response.blogs[0]
          useHead({
            title: this.details.blogTitle + ' | Beat Expertise',
            meta: [
              { name: 'description', content: this.getExcerpt(this.details.blogCaption || this.details.blogData) },
              { name: 'author', content: this.details.realnames || 'Beat Expertise' },
              { property: 'og:title', content: this.details.blogTitle },
              { property: 'og:description', content: this.getExcerpt(this.details.blogCaption || this.details.blogData) },
              { property: 'og:image', content: this.details.imageUrl || 'https://storage.everlytools.com/beatexpertise.jpg' },
              { property: 'og:url', content: this.currentUrl },
              { property: 'og:type', content: 'article' },
              { property: 'og:locale', content: 'fr_FR' },
              { property: 'og:site_name', content: 'Beat Expertise' },
              { property: 'article:published_time', content: this.details.creation_date },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:title', content: this.details.blogTitle },
              { name: 'twitter:description', content: this.getExcerpt(this.details.blogCaption || this.details.blogData) },
              { name: 'twitter:image', content: this.details.imageUrl || 'https://storage.everlytools.com/beatexpertise.jpg' },
            ],
            link: [
              { rel: 'canonical', href: 'https://beatexpertise.com/blogs/' + this.route.params.blogRoute }
            ]
          })
        }
      } catch (error) {
        console.error('Error loading blog:', error)
      } finally {
        this.isLoading = false
      }
    },
    getExcerpt(content) {
      if (!content) return ''
      const plainText = content.replace(/<[^>]*>/g, '')
      return plainText.length > 160 ? plainText.substring(0, 160) + '...' : plainText
    },
    formatDate(dateString) {
      if (!dateString) return ''
      return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dateString))
    },
    getYoutubeEmbed(url) {
      if (!url) return ''
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?#]+)/)
      return match ? 'https://www.youtube.com/embed/' + match[1] : url
    }
  }
}
</script>

<style scoped>
:deep(.prose img) { border-radius: 0.75rem; }
:deep(.prose a) { color: #2563eb; }
:deep(.dark .prose a) { color: #60a5fa; }
</style>
