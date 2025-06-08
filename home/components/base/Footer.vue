<template>
<client-only>
<footer class="max-w-screen-xl px-8 mx-auto mb-0">
    <!-- Advanced trending tools section -->
  
    <!-- Getting started section -->
    <section v-if="isHomepage" class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Nos actualités les plus recentes
        </h2>
        <div
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-3 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="blog in blogs" :key="blog.id" :blog="blog" @open-blog="showSingleOpportunity(blog)"/>
        </div>
      </div>
    </section>

  <section class="partners-grid py-8 bg-white">
  <h2 class="text-center text-2xl font-semibold mb-6">Nos partenaires</h2>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full px-2 sm:px-4 mx-auto">
    <a v-for="partner in partners" :key="partner.name" :href="partner.link" target="_blank" rel="noopener noreferrer">
      <img 
        :src="partner.logo" 
        class="h-20 sm:h-28 object-contain rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg" 
        :alt="partner.name" 
      />
    </a>
  </div>
  </section>

    <section v-if="isHomepage" id="contact" class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <form @submit.prevent="sendMessage">
            <div v-if="addedRequest" class="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
              Votre message a été enregistré avec succès, nous allons vous contacter dans les plus brefs délais.
            </div>
            <div v-if="failedRequest" class="bg-orange-500 text-white px-4 py-2 rounded-md mb-4">
              Une erreur est survénue, veuillez réassayer plustard.
            </div>
          <h2 class="text-4xl font-semibold">Entrez en contact avec nous.</h2>
          <br><input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Votre nom ou organisation"
              v-model="visitorname"
            /><br>
            <input
              type="text"
              class="w-full mt-2 px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Entrez votre adresse mail *"
              v-model="visitoremail"
            />
            <textarea
              rows="3"
              class="w-full px-2 mt-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Votre message ici"
              v-model="visitormessage"
            /><br> 
             
            <hr>
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Vous aimeriez qu'on vous appele? Entrez votre numero *"
              v-model="visitorphone"
            />
            <br><br>
          <div class="flex flex-col sm:flex-row"> 
            <BaseButton 
              class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
              type="submit"
            >
              Envoyer un message
            </BaseButton>
             
          </div>
          </form>
        </div> 
        <LandingTradingToolImage class="hidden sm:block" />
      </div>
    </section>
 
    <div class="relative z-10 flex flex-col sm:flex-row justify-between items-center sm:items-start w-full p-6 space-y-6 sm:space-y-0 sm:space-x-6">
      <!-- Left Side: Image and Company Text -->
      <div class="flex flex-col sm:flex-row items-center w-full sm:w-2/4 text-center sm:text-left">
      <!-- Left Section: Logo -->
      <div class="w-full sm:w-1/3 flex justify-center sm:justify-start">
        <a href="/"><img src="~/assets/img/logo/logo.png" class="w-34 xl:w-58 object-contain h-34" alt="Beat Expertise Logo"/></a>
      </div>

      <!-- Right Section: Text -->
      <div class="w-full sm:w-3/4">
        <span class="text-base sm:text-lg text-gray-800">
          BEAT est un bureau d'expertise et d'accompagnement technique basé à Goma, dédié à offrir des solutions innovantes pour le développement technologique de la région.
        </span>
      </div>
    </div>


      <!-- Middle Section: Navigation Links -->
      <nav class="flex flex-col items-center sm:items-start w-full sm:w-1/4 space-y-2 sm:space-y-3 text-gray-700">
        <a href="/blogs" class="hover:text-blue-600">Actualités</a>
        <a href="/#services" class="hover:text-blue-600">Services</a>
        <a href="/#projets" class="hover:text-blue-600">projets</a> 
        <a href="/opportunities" class="hover:text-blue-600">Appels & offre</a>
        <a href="/apropos" class="hover:text-blue-600">A propos de nous</a>
      </nav>

      <!-- Right Side: Newsletter Form -->
      <form @submit.prevent="addToUsersList" class="flex flex-col items-center w-full sm:w-1/3 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md p-4">
        <span v-if="addedUser" class="bg-green-500 text-white px-4 py-2 rounded-md mb-2 text-sm sm:text-base">Merci d'avoir rejoins notre communauté, vous serez desormais informé de toute nos actualités.</span>
        <span v-if="userExists" class="bg-orange-500 text-white px-4 py-2 rounded-md mb-2 text-sm sm:text-base">Cette adresse mail est déjà enregistré.</span>
        <div class="text-center text-gray-700 mb-2 text-sm sm:text-base">Ne jamais rien manquer de nous en souscrivant sur ce newsletter.</div>
        <input type="email" class="w-full px-3 py-2 rounded-md border border-[#AAAAAA] placeholder-[#888] text-sm sm:text-base" placeholder="Entrer votre adresse mail" v-model="email" />
        <button class="px-4 py-2 mt-2 rounded-md text-white hover:shadow-md transition duration-300 w-full sm:w-auto" type="submit" style="background-color:#030a3c;">
          <ArrowRightIcon :size="20" />
        </button>
      </form>
    </div>
 
   
    <div class="flex items-center justify-center">
        <!-- WhatsApp share button -->
        <a href="https://wa.me/+243995277023" target="_blank" rel="noopener noreferrer" class="share-button">
            <base-button class="w-10 h-10 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <Whatsapp :size="24" />
            </base-button>
        </a>
        <!-- Facebook share button -->
        <a href="#" target="_blank" rel="noopener noreferrer" class="share-button">
            <base-button class="w-10 h-10 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <Facebook :size="24" />
            </base-button>
        </a>
        <!-- Twitter share button -->
        <a href="#" target="_blank" rel="noopener noreferrer" class="share-button">
            <base-button class="w-10 h-10 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <Twitter :size="24" />
            </base-button>
        </a>
        <!-- Instagram share button -->
        <a href="#" target="_blank" rel="noopener noreferrer" class="share-button">
            <base-button class="w-10 h-10 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <Instagram :size="24" />
            </base-button>
        </a>
        <!-- Instagram share button -->
        <a href="#" target="_blank" rel="noopener noreferrer" class="share-button">
            <base-button class="w-10 h-10 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <Linkedin :size="24" />
            </base-button>
        </a>
    </div>

    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900" style="position: relative; z-index: 1;">
      &copy; Copyright {{ year }} <a href="/apropos">Beat Expertise. </a> Tous droits reservés
      <br>
      <a href="/apropos" class="mr-1 ml-1 mb-4 hover:text-blue-900">A propos de BeatExpertise </a>  
    </div>
  </footer>
</client-only>
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    isHomepage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      year: `${new Date().toLocaleString('en-us', { year: 'numeric' })}`,
      blogs: [],
      visitorname: '',
      visitoremail: '',
      visitorphone: '',
      visitormessage: '',
      email: '',
      addedRequest: false,
      addedUser:false,
      userExists: false,
      failedRequest: false,
      partners: [ 
        { name: "UniGom", logo: require('~/assets/img/unigom.png'), link: "https://unigom.ac.cd/" },
        { name: "Cafod", logo: require('~/assets/img/cafod.webp'), link: "https://cafod.org.uk/" },
        { name: "Olame", logo: require('~/assets/img/olame.jpeg'), link: "https://olamerdc.org/" },
        { name: "Cafod", logo: require('~/assets/img/cafod.webp'), link: "https://cafod.org.uk/" },
      ]
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.get('/blog/getall');
      // limit to 4 only 
      this.blogs = response.data.blogs.filter(blog => blog.publicPost == '0').slice(0, 3);
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
  window.addEventListener('resize', () => {
    this.isMobile = window.innerWidth < 1024;
  });

  // Smartsupp integration
  if (process.client) {
    const smartsuppScript = document.createElement('script');
    smartsuppScript.type = 'text/javascript';
    smartsuppScript.charset = 'utf-8';
    smartsuppScript.async = true;
    smartsuppScript.src = 'https://www.smartsuppchat.com/loader.js?';

    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = '397e838a791a5461fc16ba17caad84ac66ac1a16';
    const o = function () { o._.push(arguments); };
    o._ = [];
    window.smartsupp = window.smartsupp || o;

    document.body.appendChild(smartsuppScript);
  }

  // Load user session if available
  if (typeof sessionStorage !== 'undefined' && typeof localStorage !== 'undefined') {
    const token = sessionStorage.getItem('token');
    this.user = sessionStorage.getItem('username');
    this.accesshash = sessionStorage.getItem('accesshash') || localStorage.getItem('accesshash');
    if (token) {
      this.userLogged = true;
    }
  }
},

  methods: {
    showSingleBlog(blog) {
      this.$router.push({ path: `blogs/${blog.blogRoute}` });
    },

    async sendMessage() {
      try {
        const response = await this.$axios.post('/visitor/message', {
          visitorname: this.visitorname,
          visitoremail: this.visitoremail,
          visitormessage: this.visitormessage,
          visitorphone: this.visitorphone
        });
        console.log(response);
        if (response.data.status_code === 200) {
            this.addedRequest = true;
        }
        else {
            this.failedRequest = true;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async addToUsersList() {
      try {
        const response = await this.$axios.post("/user/register", {
          email: this.email,
          accesshash: 'everlytools_newsletter'
        });
        console.log(response);
        if (response.data.status_code === 200) {
          // console.log('added to the list');
          this.addedUser = true;
        }
        else{
          // console.log('Failed to save user');
          this.userExists = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-header-gradient-big {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5em;
  color:#030a3c;
}

.bg-partner {
  background: url('../../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../../assets/img/bg-trading-tools.png');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.animate-scroll {
  display: flex;
  animation: scroll 12s linear;
}

</style>

