<template>
  <client-only>
    <div class="w-full pt-16">
      <div class="container mx-auto px-4 md:px-6">
        <!-- Header Section -->
        <section class="text-center py-8 mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span class="text-blue-600">Publications</span> | Beat Expertise
          </h1>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos articles experts et nos analyses techniques.
          </p>
        </section>

        <!-- Search Section -->
        <section class="mb-10">
          <LandingSearch type="blog"/>
        </section>

        <!-- Blog Grid -->
        <section>
          <div v-if="blogs.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article v-for="blogItem in blogs" :key="blogItem.id" 
                     class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
              
              <!-- Blog Image with link -->
              <div class="h-48 overflow-hidden">
                <a :href="'/blogs/' + blogItem.blogRoute" class="block">
                  <img :src="blogItem.imageUrl || '/placeholder-blog.jpg'" 
                       :alt="blogItem.blogTitle"
                       class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                </a>
              </div>
              
              <!-- Blog Content -->
              <div class="p-5 flex-grow flex flex-col">
                <!-- Category -->
                <div class="mb-3">
                  <span class="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {{ blogItem.blogCategory }}
                  </span>
                </div>
                
                <!-- Title with link -->
                <a :href="'/blogs/' + blogItem.blogRoute" class="block mb-3">
                  <h3 class="text-lg font-bold text-gray-900 line-clamp-2 leading-tight hover:text-blue-600 transition-colors">
                    {{ blogItem.blogTitle }}
                  </h3>
                </a>
                
                <!-- Excerpt -->
                <p class="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm">
                  {{ getExcerpt(blogItem.blogCaption || blogItem.blogData) }}
                </p>
                
                <!-- Metadata -->
                <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{{ formatDate(blogItem.creation_date) }}</span>
                  <span>{{ blogItem.realnames }}</span>
                </div>
                
                <!-- Read More Button with same navigation -->
                <div class="mt-4 pt-3 border-t border-gray-100">
                  <a 
                    :href="'/blogs/' + blogItem.blogRoute" 
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center transition-colors duration-300 group"
                  >
                    Lire la suite
                    <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
          
          <!-- Empty State -->
          <div v-else class="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Aucune publication disponible</h3>
            <p class="text-gray-500">Revenez plus tard pour découvrir nos nouveaux articles.</p>
          </div>
        </section>
      </div>
    </div>
  </client-only>
</template>

<script>
import aosMixin from '@/mixins/aos';

export default {
  name: 'blog-component',
  layout: 'blog',
  mixins: [aosMixin],
  data() {
    return {
      year: `${new Date().toLocaleString('fr-fr', { year: 'numeric' })}`,
      blogs: []
    };
  },
  methods: {
    getExcerpt(content) {
      if (!content) return 'Aucun résumé disponible';
      
      // Remove HTML tags
      const plainText = content.replace(/<[^>]*>/g, '');
      
      // Truncate to 120 characters
      return plainText.length > 120 ? plainText.substring(0, 120) + '...' : plainText;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(date);
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get('/blog/getall'); 
      this.blogs = response.data.blogs.filter(blog => blog.publicPost == '0');
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  },

  head() {
      return {
          title: "Beat Expertise | Publications",
          meta: [
              { hid: 'description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'keywords', name: 'keywords', content: 'Beat expertise' },
              { hid: 'robots', content: 'index, follow' },
              { hid: 'googlebot', content: 'index, follow' },
              { hid: 'bingbot', content: 'index, follow' },
              { hid: 'yandex', content: 'index, follow' },
              
              // Open Graph (Facebook, LinkedIn, etc.)
              { hid: 'og:title', property: 'og:title', content: "Beat Expertise | Publications"},
              { hid: 'og:description', property: 'og:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'og:image', property: 'og:image', content: "https://storage.everlytools.com/beatexpertise.jpg" },
              { hid: 'og:url', property: 'og:url', content: "https://beatexpertise.com/blogs" },
              { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' }, // Primary language
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'zh_CN' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'hi_IN' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_ES' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_US' },
              { hid: 'og:type', property: 'og:type', content: 'website' },
              // Twitter Meta Tags
              { hid: 'twitter:title', content: "Beat Expertise | Publications"},
              { hid: 'twitter:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'twitter:image', content: "https://storage.everlytools.com/beatexpertise.jpg" },
              { hid: 'twitter:card', content: 'summary_large_image' },
              { hid: 'twitter:url', content: 'https://beatexpertise.com/blogs' }
            ]
        };
      }
    };
</script>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>