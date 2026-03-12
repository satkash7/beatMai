<template>
  <div class="w-full">
    <div class="container mx-auto px-6 pt-16">
      <section class="max-w-full my-0">
        <h6 class="ml-4 font-bold leading-tight sm:pr-8 xl:pr-10 text-gray-900 dark:text-dark-text">
          Publications
        </h6>
        <LandingSearch type="blog"/>
        <div class="w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-dark-text">
            <span class="text-blue-600">Publications</span> | Beat Expertise
          </h2>
          <div v-if="blogs.length" class="flex flex-wrap items-center justify-center">
            <LandingBlog v-for="blogItem in blogs" :key="blogItem.id" :blog="blogItem" @open-blog="showSingleBlog(blogItem)" />
          </div>
          <div v-else-if="!loading" class="py-12">
            <p class="text-gray-500 dark:text-gray-400">Aucune publication disponible.</p>
          </div>
          <div v-if="loading" class="py-12">
            <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

definePageMeta({ layout: 'blog' })

useHead({
  title: 'Publications | Beat Expertise',
  meta: [
    { name: 'description', content: 'D\u00e9couvrez les publications et articles de BEAT Expertise.' },
    { property: 'og:title', content: 'Publications | Beat Expertise' },
    { property: 'og:image', content: 'https://api.beatexpertise.com/storage/logo.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
})

const config = useRuntimeConfig()
const blogs = ref([])
const loading = ref(true)

function showSingleBlog(blog) {
  router.push('/blogs/' + blog.blogRoute)
}

onMounted(async () => {
  try {
    const response = await $fetch(config.public.baseURL + '/blog/getall')
    blogs.value = (response.blogs || []).filter(blog => blog.publicPost == '0').sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
  } catch (error) {
    console.error('Error fetching blogs:', error)
  } finally {
    loading.value = false
  }
})
</script>
