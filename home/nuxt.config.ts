// https://nuxt.com/docs/api/configuration/nuxt-config
const APP_STATUS = "production" // production
let baseURL = "https://api.beatexpertise.com/api"
let storageUrl = "https://api.beatexpertise.com/storage/"

if (APP_STATUS == "development") {
  baseURL = "http://127.0.0.1:8000/api"
  storageUrl = "http://127.0.0.1:8000/storage/"
}

export default defineNuxtConfig({
  ssr: true,
  
  // App configuration
  app: {
    head: {
      title: 'Beat Expertise',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1a56db' },
        { name: 'description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },

  // Global CSS
  css: [
    '@/assets/css/main.css',
    'aos/dist/aos.css'
  ],

  // Plugins are auto-scanned from ~/plugins/ in Nuxt 3

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  // Runtime config
  runtimeConfig: {
    public: {
      baseURL: baseURL,
      storageUrl: storageUrl,
      apiBase: baseURL
    }
  },

  // Image module configuration
  image: {
    domains: ['api.beatexpertise.com', 'storage.everlytools.com', 'beatexpertise.com'],
    formats: ['webp', 'avif', 'jpg', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    quality: 80,
    provider: 'ipx',
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 50,
          height: 50,
          quality: 80
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 200,
          quality: 80
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 1920,
          height: 1080,
          quality: 85
        }
      }
    }
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://beatexpertise.com',
    gzip: true,
    exclude: ['/admin/**', '/anonymous/**'],
    routes: async () => {
      try {
        const response = await fetch(baseURL + '/blog/sitemap-urls');
        const data = await response.json();
        const routes = data.urls || [];
        
        const staticRoutes = [
          { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
          { url: '/blogs', changefreq: 'daily', priority: 0.9, lastmod: new Date().toISOString() },
          { url: '/apropos', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
        ];
        
        const blogRoutes = routes.map((route: string) => ({
          url: `/blogs/${route}`,
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: new Date().toISOString()
        }));
        
        return [...staticRoutes, ...blogRoutes];
      } catch (error) {
        console.error('Sitemap generation error:', error);
        return [
          { url: '/', changefreq: 'daily', priority: 1.0 },
          { url: '/blogs', changefreq: 'daily', priority: 0.9 }
        ];
      }
    }
  },

  // Build configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;'
        }
      }
    }
  },

  // Nitro configuration for build optimization
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  // Experimental features
  experimental: {
    payloadExtraction: false
  },

  // PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Dev tools
  devtools: { enabled: true },

  // Compatibility
  compatibilityDate: '2024-07-30'
})
