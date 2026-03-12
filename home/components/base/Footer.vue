<template>
<footer class="max-w-screen-xl px-4 md:px-8 mx-auto mb-0">
    <!-- Recent news section -->
    <section v-if="isHomepage" class="bg-white dark:bg-dark-card relative max-w-full sm:mx-4 xl:mx-10 my-12 md:my-16 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-dark-border">
      <div class="w-full py-8 md:py-12 flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-semibold text-center text-gray-800 dark:text-dark-text mb-6 md:mb-8">
          Nos actualités les plus récentes
        </h2>

        <div class="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 xl:px-8">
          <LandingStep v-for="blog in blogs" :key="blog.id" :blog="blog" @open-blog="showSingleBlog(blog)"/>
        </div>
      </div>
    </section>

    <!-- Partners section -->
    <section class="partners-section py-10 md:py-14 bg-gray-50 dark:bg-dark-surface">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-800 mb-8">
          Nos partenaires
        </h2>


        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 dark:from-dark-surface to-transparent z-10"></div>
          <div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 dark:from-dark-surface to-transparent z-10"></div>

          <div
            ref="partnersContainer"
            class="flex items-center gap-8 overflow-x-auto pb-6 px-4 hide-scrollbar partners-scroll-container"
            @mouseenter="pauseAutoScroll"
            @mouseleave="resumeAutoScroll"
          >
            <a
              v-for="partner in partners"
              :key="partner.name"
              :href="partner.link"
              target="_blank"
              rel="noopener noreferrer"
              class="partner-logo flex-shrink-0 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-4 border border-transparent dark:border-dark-border"
            >
              <img
                :src="partner.logo"
                class="h-16 md:h-20 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                :alt="partner.name"
              />
            </a>
          </div>

          <div class="md:hidden text-xs text-gray-500 mt-3 flex items-center justify-center gap-2">
            <PauseIcon
              v-if="isScrollingPaused"
              :size="14"
              class="cursor-pointer"
              @click="resumeAutoScroll"
            />
            <PlayIcon
              v-else
              :size="14"
              class="cursor-pointer"
              @click="pauseAutoScroll"
            />
            <span>Swipe or let it scroll automatically</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact section -->
    <section v-if="isHomepage" id="contact" class="bg-white dark:bg-dark-card relative max-w-full sm:mx-4 my-12 md:my-16 py-8 md:py-12 shadow-lg rounded-xl border border-gray-200 dark:border-dark-border">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8 md:mb-10">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-dark-text mb-4">Contactez-nous</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
          <div class="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-base">
            <div class="flex items-center justify-center">
              <MapPinIcon :size="18" class="text-blue-600 mr-2" />
              <span>Goma, Nord-Kivu, RDC</span>
            </div>
            <div class="flex items-center justify-center">
              <PhoneIcon :size="18" class="text-blue-600 mr-2" />
              <span>+243 995 277 023</span>
            </div>
            <div class="flex items-center justify-center">
              <EmailIcon :size="18" class="text-blue-600 mr-2" />
              <span>direction@beatexpertise.com</span>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Contact form -->
          <form @submit.prevent="sendMessage" class="lg:w-1/2 max-w-lg mx-auto lg:mx-0 bg-gray-50 dark:bg-dark-surface p-6 md:p-8 rounded-xl">
            <div v-if="addedRequest" class="bg-green-100 text-green-700 px-4 py-3 rounded-md mb-4 flex items-center">
              <CheckCircleIcon :size="20" class="mr-2" />
              <span>Votre message a été envoyé avec succès. Nous vous contacterons bientôt.</span>
            </div>
            <div v-if="failedRequest" class="bg-orange-100 text-orange-700 px-4 py-3 rounded-md mb-4 flex items-center">
              <AlertCircleIcon :size="20" class="mr-2" />
              <span>Une erreur est survenue, veuillez réessayer plus tard.</span>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Votre nom ou organisation</label>
                <input
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom complet"
                  v-model="visitorname"
                  required
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Adresse email *</label>
                <input
                  type="email"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="exemple@email.com"
                  v-model="visitoremail"
                  required
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                <textarea
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Comment pouvons-nous vous aider ?"
                  v-model="visitormessage"
                  required
                ></textarea>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone (optionnel)</label>
                <input
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+243 XXX XXX XXX"
                  v-model="visitorphone"
                />
              </div>
              
              <button 
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <SendIcon :size="18" class="mr-2" />
                Envoyer le message
              </button>
            </div>
          </form>
          
          <!-- Google Maps -->
          <div class="lg:w-1/2">
            <div class="bg-gray-100 rounded-xl overflow-hidden shadow-md h-full">
              <div class="p-4 bg-blue-600 text-white">
                <h3 class="font-semibold flex items-center">
                  <MapPinIcon :size="20" class="mr-2" />
                  Localisation de notre bureau
                </h3>
                <p class="text-sm mt-1">Goma, Nord-Kivu, République Démocratique du Congo</p>
              </div>
              <div class="h-80 md:h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085951.67416805!2d26.553710875!3d-1.239759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19da4dce0d5d7c3f%3A0x1e3e5f5f5f5f5f5f!2sGoma%2C%20Nord-Kivu%2C%20R%C3%A9publique%20D%C3%A9mocratique%20du%20Congo!5e0!3m2!1sfr!2sus!4v1633456789012!5m2!1sfr!2sus" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-b-xl"
                ></iframe>
              </div>
              <div class="p-4 bg-gray-50 text-center">
                <p class="text-sm text-gray-600">
                  <ClockOutlineIcon :size="16" class="inline mr-1" />
                  Horaires d'ouverture: Lun - Ven, 8h - 17h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- Main footer section -->
    <div class="py-8 md:py-10 border-t border-gray-200 dark:border-dark-border">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <!-- Logo and description -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left max-w-md mx-auto md:mx-0">
          <a href="/" class="mb-4">
            <img :src="logoImg" class="w-28 md:w-32 object-contain" alt="Beat Expertise Logo"/>
          </a>
          <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            BEAT est un bureau d'expertise et accompagnement technique basé à Goma, dédié à offrir des solutions innovantes pour le développement technologique de la région.
          </p>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col items-center md:items-start space-y-3 text-gray-700 dark:text-gray-300 mx-auto md:mx-0">
          <h3 class="font-semibold text-gray-800 dark:text-dark-text mb-2 text-center md:text-left">Navigation</h3>
          <a href="/blogs" class="hover:text-blue-600 transition-colors text-sm md:text-base">Actualités</a>
          <a href="/#mission" class="hover:text-blue-600 transition-colors text-sm md:text-base">Mission</a>
          <a href="/#domaines" class="hover:text-blue-600 transition-colors text-sm md:text-base">Domaines</a> 
          <a href="/opportunities" class="hover:text-blue-600 transition-colors text-sm md:text-base">Offres & Opportunités</a>
          <a href="/apropos" class="hover:text-blue-600 transition-colors text-sm md:text-base">À propos de nous</a>
        </nav>

        <!-- Newsletter -->
        <div class="bg-gray-50 dark:bg-dark-surface rounded-lg p-4 md:p-6 max-w-md w-full mx-auto md:mx-0 border border-gray-200 dark:border-dark-border">
          <form @submit.prevent="addToUsersList" class="space-y-3">
            <div v-if="addedUser" class="bg-green-100 text-green-700 px-3 py-2 rounded-md text-xs md:text-sm flex items-center">
              <CheckCircleIcon :size="16" class="mr-1" />
              <span>Merci d'avoir rejoint notre communauté</span>
            </div>
            <div v-if="userExists" class="bg-orange-100 text-orange-700 px-3 py-2 rounded-md text-xs md:text-sm flex items-center">
              <AlertCircleIcon :size="16" class="mr-1" />
              <span>Cette adresse mail est déjà enregistrée</span>
            </div>
            
            <h3 class="font-semibold text-gray-800 dark:text-dark-text text-center text-sm md:text-base">Rejoindre notre newsletter</h3>
            
            <div class="flex">
              <input 
                type="email" 
                class="flex-grow px-3 md:px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" 
                placeholder="Votre adresse email" 
                v-model="email" 
                required
              />
              <button 
                type="submit" 
                class="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center"
              >
                <ArrowRightIcon :size="16" />
              </button>
            </div>
            <p class="text-xs text-gray-500 text-center">Restez informé de nos dernières actualités</p>
          </form>
        </div>
      </div>
    </div>
 
    <!-- Social links and copyright -->
    <div class="py-4 md:py-6 border-t border-gray-200 dark:border-dark-border">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap justify-center gap-2">
          <a v-for="(social, index) in socialLinks" :key="index" :href="social.link" target="_blank" rel="noopener noreferrer" class="social-icon">
            <component :is="social.icon" :size="18" class="text-gray-600 hover:text-blue-600 transition-colors" />
          </a>
        </div>
        
        <div class="text-center text-gray-600 text-sm">
          &copy; {{ year }} <a href="/apropos" class="hover:text-blue-600 transition-colors">Beat Expertise</a>. Tous droits réservés
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MapPinIcon from 'vue-material-design-icons/MapMarker.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import SendIcon from 'vue-material-design-icons/Send.vue'
import AlertCircleIcon from 'vue-material-design-icons/AlertCircle.vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'
import PlayIcon from 'vue-material-design-icons/Play.vue'
import PauseIcon from 'vue-material-design-icons/Pause.vue'

import logoImg from '~/assets/img/logo/logo.png'
import logoOlame from '~/assets/img/olame.jpeg'
import logoUnigom from '~/assets/img/unigom.png'
import logoEsvUnigom from '~/assets/img/esv-unigom.png'
import logoCaritasGoma from '~/assets/img/caritasgoma.png'
import logoAustralia from '~/assets/img/australia.jpeg'
import logoKindu from '~/assets/img/kindu.jpeg'
import logoCafod from '~/assets/img/cafod.jpeg'
import logoStart from '~/assets/img/start.png'
import logoCajed from '~/assets/img/cajed.png'
import logoHub from '~/assets/img/hub.png'
import logoStartNetwork from '~/assets/img/startnetwork.jpeg'
import logoSocoac from '~/assets/img/socoac.jpg'
import logoAnglican from '~/assets/img/anglican.jpg'

export default {
  name: 'BaseFooter',
  components: {
    MapPinIcon,
    PhoneIcon,
    SendIcon,
    AlertCircleIcon,
    ClockOutlineIcon,
    PlayIcon,
    PauseIcon
  },
  props: {
    isHomepage: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const config = useRuntimeConfig()
    return { baseURL: config.public.baseURL }
  },
  data() {
    return {
      logoImg,
      year: `${new Date().toLocaleString('en-us', { year: 'numeric' })}`,
      blogs: [],
      visitorname: '',
      visitoremail: '',
      visitorphone: '',
      visitormessage: '',
      email: '',
      addedRequest: false,
      addedUser: false,
      userExists: false,
      failedRequest: false,
      partners: [
        { name: 'Olame', logo: logoOlame, link: 'https://olamerdc.org/' },
        { name: 'UniGom', logo: logoUnigom, link: 'https://unigom.ac.cd/' },
        { name: 'esv.unigom', logo: logoEsvUnigom, link: 'https://esv.unigom.ac.cd/' },
        { name: 'Caritas Goma', logo: logoCaritasGoma, link: 'https://www.caritas.org/' },
        { name: 'Australia', logo: logoAustralia, link: 'https://www.caritas.org.au/' },
        { name: 'CaritasKindu', logo: logoKindu, link: 'https://caritasdev.cd/' },
        { name: 'Cafodd', logo: logoCafod, link: 'https://cafod.org.uk/' },
        { name: 'Start', logo: logoStart, link: 'https://startnetwork.org/' },
        { name: 'Cajed', logo: logoCajed, link: 'https://www.cajed.org/' },
        { name: 'Hub', logo: logoHub, link: 'https://startnetwork.org/network/hubs/democratic-republic-congo-hub' },
        { name: 'Start Network', logo: logoStartNetwork, link: 'https://startnetwork.org/' },
        { name: 'Socoac Asbl', logo: logoSocoac, link: 'https://socoacasbl.com/' },
        { name: 'Eglise Anglicane du Congo', logo: logoAnglican, link: 'https://www.goma.anglican.org/' },
      ],
      socialLinks: [
        { icon: 'Whatsapp', link: 'https://wa.me/+243995277023' },
        { icon: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61578637741320' },
        { icon: 'Twitter', link: 'https://x.com/beatexpertise' },
        { icon: 'EmailIcon', link: 'mailto:direction@beatexpertise.com' },
        { icon: 'Linkedin', link: 'https://www.linkedin.com/company/beat-expertise/about/' },
        { icon: 'Youtube', link: 'https://www.youtube.com/channel/UCcpAAfUJtM_sxZNb9LO94sQ' }
      ],
      scrollInterval: null,
      isScrollingPaused: false,
      scrollDirection: 1,
      currentScrollPosition: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.startAutoScroll()
      }, 1000)
    })

    // Fetch blogs
    this.fetchBlogs()
  },
  beforeUnmount() {
    this.stopAutoScroll()
  },
  methods: {
    async fetchBlogs() {
      try {
        const data = await $fetch(`${this.baseURL}/blog/getall`)
        if (data && data.blogs) {
          this.blogs = data.blogs.filter(blog => blog.publicPost == '0').sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date)).slice(0, 3)
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      }
    },
    startAutoScroll() {
      this.stopAutoScroll()

      const container = this.$refs.partnersContainer
      if (!container) return

      this.scrollInterval = setInterval(() => {
        if (this.isScrollingPaused) return
        const speed = 1
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += speed
        }
      }, 20)
    },
    
    stopAutoScroll() {
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval)
        this.scrollInterval = null
      }
    },
    
    pauseAutoScroll() {
      this.isScrollingPaused = true
    },
    
    resumeAutoScroll() {
      this.isScrollingPaused = false
    },
    
    showSingleBlog(blog) {
      this.$router.push({ path: `blogs/${blog.blogRoute}` })
    },
    
    async sendMessage() {
      try {
        const data = await $fetch(`${this.baseURL}/visitor/message`, {
          method: 'POST',
          body: {
            visitorname: this.visitorname,
            visitoremail: this.visitoremail,
            visitormessage: this.visitormessage,
            visitorphone: this.visitorphone
          }
        })
        
        if (data.status_code === 200) {
          this.addedRequest = true
          this.visitorname = ''
          this.visitoremail = ''
          this.visitormessage = ''
          this.visitorphone = ''
          
          setTimeout(() => {
            this.addedRequest = false
          }, 5000)
        } else {
          this.failedRequest = true
          setTimeout(() => {
            this.failedRequest = false
          }, 5000)
        }
      } catch (error) {
        console.error(error)
        this.failedRequest = true
        setTimeout(() => {
          this.failedRequest = false
        }, 5000)
      }
    },
    
    async addToUsersList() {
      try {
        const data = await $fetch(`${this.baseURL}/user/register`, {
          method: 'POST',
          body: {
            email: this.email,
            accesshash: 'beat_newsletter'
          }
        })
        
        if (data.status_code === 200) {
          this.addedUser = true
          this.email = ''
          
          setTimeout(() => {
            this.addedUser = false
          }, 5000)
        } else {
          this.userExists = true
          setTimeout(() => {
            this.userExists = false
          }, 5000)
        }
      } catch (error) {
        console.error(error)
        this.userExists = true
        setTimeout(() => {
          this.userExists = false
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.partners-section {
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
}

:global(.dark) .partners-section {
  background: linear-gradient(to bottom, #1e293b, #1e293b);
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  width: 160px;
  height: 100px;
}

:global(.dark) .partner-logo {
  background: #334155;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #475569;
}

.partner-logo:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.partners-scroll-container {
  will-change: scroll-position;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f3f4f6;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
}

:global(.dark) .social-icon {
  background: #334155;
}

:global(.dark) .social-icon:hover {
  background: #475569;
}

.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  .partner-logo {
    width: 140px;
    height: 90px;
    margin: 0 0.4rem;
  }
  
  .partner-logo:first-child {
    margin-left: 0.5rem;
  }
  
  .partner-logo:last-child {
    margin-right: 0.5rem;
  }
}
</style>
