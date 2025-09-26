
const axios = require('axios');

const APP_STATUS = "production" // production
let baseURL = "https://api.beatexpertise.com/api"
let storageUrl = "https://api.beatexpertise.com/storage/"

if (APP_STATUS == "development") {
  baseURL = "http://127.0.0.1:8000/api"
  storageUrl = "http://127.0.0.1:8000/storage/"
}

module.exports = {
  ssr: true,
  target: 'server', // This is the default
  head: {
    title: 'Beat Expertise',
    meta: [
      { charset: 'utf-8' }, // Ensures correct encoding
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    htmlAttrs: {
      lang: 'en',
    },
   script: [
      {
        hid: 'smartsupp-chat',
        innerHTML: `
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = '397e838a791a5461fc16ba17caad84ac66ac1a16';
          window.smartsupp||(function(d) {
            var s,c,o=smartsupp=function(){ o._.push(arguments)};
            o._=[];
            s=d.getElementsByTagName('script')[0];
            c=d.createElement('script');
            c.type='text/javascript';
            c.charset='utf-8';
            c.async=true;
            c.src='https://www.smartsuppchat.com/loader.js?';
            s.parentNode.insertBefore(c,s);
          })(document);
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],
  components: true,
  buildModules: ['@nuxt/postcss8', '@nuxtjs/axios'],
  publicRuntimeConfig: {
    baseURL: baseURL,
    storageUrl: storageUrl
  },
  env: {
    baseURL: baseURL,
    storageUrl: storageUrl
  },
  modules: ['@nuxtjs/sitemap', '@nuxt/image', '@nuxtjs/axios'],
  image: {
    domains: ['*'],
    format: ['auto'],
    quality: 50,
    loading: 'lazy',
    placeholder: 'blur',
    presets: {
      default: {
        loading: 'lazy',
        format: 'auto',
        quality: 50,
        placeholder: 'blur', 
      }
    }
  },
  axios: {
    baseURL: baseURL
  },
  
  build: {
    filenames: {
      app: () => process.env.NODE_ENV === 'development' ? '[name].js' : '[contenthash].js',
      chunk: () => process.env.NODE_ENV === 'development' ? '[name].js' : '[contenthash].js',
      css: () => process.env.NODE_ENV === 'development' ? '[name].css' : '[contenthash].css'
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },
  sitemap: {
    hostname: 'https://beatexpertise.com',
    path: '/sitemap.xml',
    exclude: ['**/*.js'],
    routes: [async () => {
      try {
        const { response } = await axios.get(baseURL + '/sitemap-urls');
        return response.data.urls;
      }
      catch (error) {
        return ['https://beatexpertise.com']
      }
    }
    ],
    cacheTime: 900000,
    etag: {
      weak: false
    },
    gzip: false,
    trailingSlash: false,
    defaults: {
      changefreq: 'daily',
      priority: 1
    },
    pathGzip: '/sitemap.xml'
  },
  //buildDir: 'public',
}
