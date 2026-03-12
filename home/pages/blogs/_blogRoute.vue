<template>
  <client-only>
    <!-- Loading state -->
    <section v-if="isLoading" class="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-dark-bg px-4 pt-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p class="text-gray-600 dark:text-gray-400">Chargement en cours...</p>
    </section>

    <!-- Content section -->
    <section v-else class="bg-white dark:bg-dark-bg relative w-full mx-auto pt-20 md:pt-24 pb-4 md:pb-8 px-4 md:px-0 transition-colors duration-300">
      <div class="max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden card-dark">
        <div class="px-4 sm:px-6 py-6 md:py-8">
          <!-- Breadcrumb and metadata -->
          <div class="mb-6">
            <nav class="text-sm text-gray-500 dark:text-gray-400 mb-4 flex flex-wrap items-center">
              <a href="/blogs" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a> 
              <span class="mx-2">/</span>
              <span class="text-gray-800 dark:text-gray-200 font-medium truncate">{{ details.blogCategory }}</span>
            </nav>
            
            <h6 class="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">
              <span class="text-blue-600 dark:text-blue-400">{{ titleMessage }}</span>
            </h6>
            
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
              {{ details.blogTitle }}
            </h1>

            <!-- Author and date information -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 py-4 border-t border-b border-gray-100">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-blue-600 font-semibold">{{ getInitials(details.realnames) }}</span>
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a v-if="details.creator" :href="'/profile/' + details.creator" class="hover:text-blue-600">
                      {{ details.realnames }}
                    </a>
                    <a v-else href="#" class="hover:text-blue-600">
                      {{ details.realnames }}
                    </a>
                  </p>
                  <div class="flex flex-wrap items-center text-sm text-gray-500 mt-1">
                    <span>Publié le {{ formatDate(details.creation_date) }}</span>
                    <span class="mx-2 hidden sm:inline">•</span>
                    <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs mt-1 sm:mt-0 ml-0 sm:ml-2">
                      {{ details.blogCategory }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Share buttons -->
              <div class="flex items-center justify-start sm:justify-end mt-4 sm:mt-0">
                <span class="text-sm text-gray-600 mr-3 hidden sm:block">Partager :</span>
                <div class="flex space-x-2">
                  <a v-for="(social, index) in socialButtons" :key="index" 
                     :href="social.url" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                     :title="'Partager sur ' + social.name">
                    <component :is="social.icon" :size="16" :class="social.color" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Featured image or YouTube video -->
          <div class="mb-6 md:mb-8 rounded-lg overflow-hidden">
            <img v-if="!isYoutubeLink && details.imageUrl" 
                 :src="details.imageUrl" 
                 :alt="details.blogTitle"
                 class="w-full h-auto max-h-96 object-cover rounded-lg shadow-md" />
            
            <div v-if="isYoutubeLink" class="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-md">
              <iframe 
                class="absolute top-0 left-0 w-full h-full"
                :src="getYoutubeEmbedUrl(details.blogData)" 
                :title="details.blogTitle"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          </div>

          <!-- Blog content -->
          <article class="max-w-none mb-6 md:mb-8 blog-content-container">
            <div v-if="!isYoutubeLink" v-html="details.blogData"></div>
          </article>

          <!-- Tags (if available) -->
          <div v-if="details.tags" class="mb-6 md:mb-8">
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, index) in details.tags.split(',')" :key="index"
                    class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                #{{ tag.trim() }}
              </span>
            </div>
          </div>

          <!-- Call to action -->
          <div class="bg-blue-50 p-4 rounded-lg mb-6 md:mb-8">
            <p class="text-blue-800 text-center font-medium">
              Cet article vous a plu ? 
              <a href="#comments" class="underline hover:text-blue-600 font-semibold" @click.prevent="scrollToComments">
                Laissez un commentaire
              </a> 
              ou partagez-le !
            </p>
          </div>

          <!-- Comments section -->
          <div id="comments" class="border-t border-gray-200 pt-6 md:pt-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Commentaires</h3>
            <LandingComment type="blog" :id="details.id" :route="details.blogRoute" :creator="details.creator"/>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
// Import des icônes (à adapter selon votre configuration)
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';

export default {
  layout: 'blog',
  components: {
    Whatsapp,
    Facebook,
    Twitter,
    Linkedin
  },
  watchQuery: ['_blogRoute'],
  data() {
    return {
      year: `${new Date().toLocaleString('fr-FR', { year: 'numeric' })}`,
      details: null,
      isLoading: true,
      isYoutubeLink: false,
      blogRoute: null,
      socialButtons: [
        {
          name: 'WhatsApp',
          icon: 'Whatsapp',
          url: '',
          color: 'text-green-500'
        },
        {
          name: 'Facebook',
          icon: 'Facebook',
          url: '',
          color: 'text-blue-600'
        },
        {
          name: 'Twitter',
          icon: 'Twitter',
          url: '',
          color: 'text-blue-400'
        },
        {
          name: 'LinkedIn',
          icon: 'Linkedin',
          url: '',
          color: 'text-blue-700'
        }
      ]
    };
  },
  head() {
    if (!this.details) {
      return {
        title: 'Article | BEAT Expertise',
        meta: [
          { hid: 'description', name: 'description', content: 'Découvrez nos articles sur l\'expertise et l\'accompagnement technique' }
        ]
      };
    }
    
    const title = `${this.details.blogTitle} | BEAT Expertise`;
    const description = this.details.blogCaption || this.details.blogTitle;
    const imageUrl = this.details.imageUrl || 'https://storage.everlytools.com/beatexpertise.jpg';
    const url = `https://beatexpertise.com/blogs/${this.blogRoute}`;
    const publishedTime = this.details.creation_date;
    const modifiedTime = this.details.updated_at || publishedTime;
    
    // Créer le structured data JSON-LD pour les articles
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: this.details.blogTitle,
      description: description,
      image: imageUrl,
      datePublished: publishedTime,
      dateModified: modifiedTime,
      author: {
        '@type': 'Person',
        name: this.details.realnames || 'BEAT Expertise'
      },
      publisher: {
        '@type': 'Organization',
        name: 'BEAT Expertise',
        logo: {
          '@type': 'ImageObject',
          url: 'https://beatexpertise.com/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    };
    
    // Ajouter les tags si disponibles
    if (this.details.tags) {
      structuredData.keywords = this.details.tags;
    }
    
    // Ajouter la catégorie
    if (this.details.blogCategory) {
      structuredData.articleSection = this.details.blogCategory;
    }
    
    return {
      title: title,
      meta: [
        // Basic Meta Tags
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: this.details.tags || 'BEAT, Expertise, Accompagnement technique, Goma, RDC' },
        { hid: 'author', name: 'author', content: this.details.realnames || 'BEAT Expertise' },
        { hid: 'robots', name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: imageUrl },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:site_name', property: 'og:site_name', content: 'BEAT Expertise' },
        { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' },
        { hid: 'article:published_time', property: 'article:published_time', content: publishedTime },
        { hid: 'article:modified_time', property: 'article:modified_time', content: modifiedTime },
        { hid: 'article:author', property: 'article:author', content: this.details.realnames || 'BEAT Expertise' },
        { hid: 'article:section', property: 'article:section', content: this.details.blogCategory || 'Articles' },
        
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:image', name: 'twitter:image', content: imageUrl },
        { hid: 'twitter:site', name: 'twitter:site', content: '@beatexpertise' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@beatexpertise' },
        
        // Additional SEO
        { hid: 'theme-color', name: 'theme-color', content: '#1a56db' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: 'fr', href: url },
        { rel: 'alternate', hreflang: 'x-default', href: url }
      ],
      script: [
        {
          hid: 'structured-data',
          type: 'application/ld+json',
          innerHTML: JSON.stringify(structuredData)
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    };
  },
  computed: {
    titleMessage() {
      return this.details?.blogCategory ? `Catégorie: ${this.details.blogCategory}` : 'Article de blog';
    },
    whatsappShareUrl() {
      const text = `Découvrez cet article: ${this.details?.blogTitle} ${window.location.href}`;
      return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    },
    facebookShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    },
    twitterShareUrl() {
      const text = this.details?.blogTitle || 'Découvrez cet article';
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    },
    linkedinShareUrl() {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    }
  },
  mounted() {
    this.initializeSocialUrls();
    this.blogRoute = this.$route.params.blogRoute || 
                    this.$route.query.blogRoute || 
                    window.location.pathname.split('/').pop();
    
    if (this.blogRoute && this.blogRoute !== 'blogs') {
      this.loadBlogData();
    }
    
    // Ajouter un délai pour s'assurer que le DOM est complètement chargé
    setTimeout(() => {
      this.adjustContentPosition();
    }, 100);
  },
  watch: {
    "$route": {
      immediate: true,
      handler(to) {
        this.blogRoute = to.params.blogRoute || 
                        to.query.blogRoute || 
                        window.location.pathname.split('/').pop();
        if (this.blogRoute && this.blogRoute !== 'blogs') {
          this.loadBlogData();
        }
      }
    }
  },
  methods: {
    adjustContentPosition() {
      // Ajuster la position du contenu en fonction de la hauteur de la navbar
      const navbar = document.querySelector('nav, header');
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        const contentSection = document.querySelector('section.bg-white');
        if (contentSection) {
          contentSection.style.marginTop = `${navbarHeight}px`;
        }
      }
    },
    initializeSocialUrls() {
      this.socialButtons = this.socialButtons.map(button => {
        return {
          ...button,
          url: this[`${button.name.toLowerCase()}ShareUrl`]
        };
      });
    },
    getInitials(name) {
      if (!name) return 'U';
      return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(date);
    },
    getYoutubeEmbedUrl(input) {
      if (!input) return '';
      let url = input.trim();

      const iframeMatch = input.match(/iframe[^>]*src="([^"]+)"/i);
      if (iframeMatch) {
        url = iframeMatch[1];
      } else {
        const anchorMatch = input.match(/href="([^"]+)"/i);
        if (anchorMatch) {
          url = anchorMatch[1];
        } else {
          const urlMatch = input.match(/https:\/\/(?:www\.)?(youtube\.com|youtu\.be)\/[^\s<"]+/);
          if (urlMatch) {
            url = urlMatch[0];
          }
        }
      }

      const idMatch = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/);
      const videoId = idMatch?.[1];

      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    },
    scrollToComments() {
      const commentsSection = document.getElementById('comments');
      if (commentsSection) {
        // Ajuster la position de défilement pour tenir compte de la navbar fixe
        const navbar = document.querySelector('nav, header');
        const offset = navbar ? navbar.offsetHeight : 0;
        
        const elementPosition = commentsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    async loadBlogData() {
      if (!this.blogRoute || this.blogRoute.length < 3) {
        console.error("Error: Invalid blogRoute detected!");
        return;
      }
      
      try {
        const response = await this.$axios.get(`/blog/getall?route=${this.blogRoute}`);
        this.details = response?.data?.blog?.[0] || {};
        
        this.isYoutubeLink = this.details.blogData && 
                            (this.details.blogData.includes('youtube') || 
                             this.details.blogData.includes('youtu.be')) && 
                            this.details.blogData.length < 999;

        this.isLoading = false;
        this.initializeSocialUrls();
        
        // Update meta tags for SEO
        this.updateMetaTags();
        
        // Ajuster à nouveau la position après le chargement des données
        this.$nextTick(() => {
          this.adjustContentPosition();
        });
        
      } catch (error) {
        console.error("API Error loading blog:", error);
        this.isLoading = false;
      }
    },
    updateMetaTags() {
      if (this.details && typeof document !== 'undefined') {
        // Update meta title
        document.title = `${this.details.blogTitle} | BEAT Expertise`;
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', this.details.blogTitle);
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription && this.details.blogCaption) {
          ogDescription.setAttribute('content', this.details.blogCaption);
        }
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage && this.details.imageUrl) {
          ogImage.setAttribute('content', this.details.imageUrl);
        }
        
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', window.location.href);
      }
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant */
.desktopview {
  margin: 0 auto;
  max-width: 1200px;
}

/* Pour les écrans très petits */
@media (max-width: 360px) {
  .text-2xl {
    font-size: 1.4rem;
  }
}

/* Ajustement pour les écrans mobiles */
@media (max-width: 768px) {
  section.bg-white {
    padding-top: 5rem !important;
  }
}
</style>

<style>
/* Styles globaux pour le contenu du blog */
.blog-content-container {
  width: 100%;
  overflow-x: hidden;
}

.blog-content-container h1,
.blog-content-container h2,
.blog-content-container h3,
.blog-content-container h4 {
  color: #1f2937;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  overflow-wrap: break-word;
  scroll-margin-top: 100px; /* Pour l'ancrage avec la navbar fixe */
}

/* Dark mode support for blog content */
.dark .blog-content-container h1,
.dark .blog-content-container h2,
.dark .blog-content-container h3,
.dark .blog-content-container h4 {
  color: #f1f5f9;
}

.blog-content-container h1 {
  font-size: 1.75rem;
}

.blog-content-container h2 {
  font-size: 1.5rem;
}

.blog-content-container h3 {
  font-size: 1.25rem;
}

.blog-content-container p {
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  overflow-wrap: break-word;
}

.dark .blog-content-container p {
  color: #cbd5e1;
}

.blog-content-container img {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
  max-width: 100%;
  height: auto;
}

.dark .blog-content-container img {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
}

.blog-content-container a {
  color: #2563eb;
  text-decoration: underline;
  overflow-wrap: break-word;
}

.blog-content-container a:hover {
  color: #1e40af;
}

.dark .blog-content-container a {
  color: #60a5fa;
}

.dark .blog-content-container a:hover {
  color: #93c5fd;
}

.blog-content-container ul,
.blog-content-container ol {
  list-style-position: outside;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.blog-content-container ul {
  list-style-type: disc;
}

.blog-content-container ol {
  list-style-type: decimal;
}

.blog-content-container li {
  margin-bottom: 0.5rem;
  overflow-wrap: break-word;
}

.blog-content-container blockquote {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  font-style: italic;
  color: #4b5563;
  margin: 1.5rem 0;
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
}

.dark .blog-content-container blockquote {
  background-color: #1e293b;
  color: #94a3b8;
  border-left-color: #60a5fa;
}

.blog-content-container code {
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;
  font-size: 0.875rem;
  font-family: monospace;
  overflow-x: auto;
  display: inline-block;
  max-width: 100%;
}

.dark .blog-content-container code {
  background-color: #334155;
  color: #e2e8f0;
}

.blog-content-container pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  max-width: 100%;
}

.dark .blog-content-container pre {
  background-color: #0f172a;
  border: 1px solid #334155;
}

.blog-content-container pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  white-space: pre-wrap;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .blog-content-container h1 {
    font-size: 1.5rem;
  }
  
  .blog-content-container h2 {
    font-size: 1.3rem;
  }
  
  .blog-content-container h3 {
    font-size: 1.15rem;
  }
  
  .blog-content-container p,
  .blog-content-container li {
    font-size: 0.95rem;
  }
  
  .blog-content-container blockquote {
    padding: 0.75rem;
    margin: 1rem 0;
  }
  
  .blog-content-container pre {
    padding: 0.75rem;
    margin: 1rem 0;
  }
}

@media (max-width: 480px) {
  .blog-content-container ul,
  .blog-content-container ol {
    margin-left: 1rem;
  }
  
  .blog-content-container img {
    margin: 1rem 0;
  }
}

/* Pour les tables (si présentes dans le contenu) */
.blog-content-container table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  display: block;
  overflow-x: auto;
}

.blog-content-container th,
.blog-content-container td {
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
  text-align: left;
}

.blog-content-container th {
  background-color: #f9fafb;
  font-weight: 600;
}

/* Correction pour le chevauchement avec la navbar */
html {
  scroll-padding-top: 80px; /* Ajuster selon la hauteur de votre navbar */
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 70px; /* Ajustement pour mobile */
  }
}
</style>