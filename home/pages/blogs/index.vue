<template>
  <client-only>
  <div class="w-full">
     <div class="container mx-auto px-6">
    <!-- AI Top trend section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
      <!-- Display all blogs -->
      <h6 ata-aos-once="true"
          class="ml-4 font-bold leading-tight sm:pr-8 xl:pr-10"
          style="color:#030a3c;"
        >
               Publications
            </h6>
      <LandingSearch type="blog"/>
      <div class="w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
        <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
          <span class="text-header-gradient-big">Publications | Beat Expertise</span>
        </h2>
        <div class="flex flex-wrap items-center justify-center">
          <LandingBlog v-for="blogItem in blogs" :key="blogItem.id" :blog="blogItem" @open-blog="showSingleBlog(blogItem)" />
        </div>
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
    showSingleBlog(blog) {
      console.log('username :', blog.username);
      this.$router.push({ path: `/blogs/${blog.blogRoute}` });
    },
  },
  async fetch() {
    // Fetch data from the API endpoint during server-side rendering
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
              { hid: 'twitter:url', content: 'https://everlytools.com/blogs' }
            ]
        };
      }
    };
</script>
