<template>
  <client-only>
    <nav id="navbar" :key="userLogged" class="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md text-neutral-800">
      <div class="flex flex-col max-w-screen-xl px-2 mx-auto lg:items-center lg:justify-between lg:flex-row py-1 lg:py-2">
        <!-- Conteneur principal avec logo et bouton hamburger -->
        <div class="flex flex-row items-center justify-between w-full py-2 lg:py-4">
          <!-- Logo -->
          <div class="logo flex items-center">
            <a href="/"><img :src="require('~/assets/img/logo/logo.png')" class="w-12 h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24 object-contain transition-transform duration-300 hover:scale-105" /></a>
          </div>
          
          <!-- Navigation desktop (cachée sur mobile) -->
          <div class="hidden lg:flex flex-row items-center justify-center flex-1">
            <div class="flex flex-row items-center space-x-3">
              <a v-if="!true" :href="destinationLink">
                <span class="px-2 xl:px-4 py-2 bg-inherit text-gradient border border-[#0c66ee] rounded-lg transition-all duration-300 hover:bg-[#0c66ee] hover:text-white hover:shadow-md">
                {{ destination }}
              </span></a><!-- disabled temporary-->
              <a href="/apropos">
                <base-button class="px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md">
                A propos de Beat
                </base-button>
              </a> 
              <a href="/#domaines">
                <base-button class="px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md">
                Domaines
                </base-button>
              </a>
              <a href="/blogs">
                <base-button class="px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md">
                Actualités
                </base-button>
              </a>
              <a href="/#contact">
                <base-button class="px-2 xl:px-4 py-2 bg-inherit text-gradient smallbtn transition-all duration-300 hover:bg-gradient-to-r hover:from-[#468ef9] hover:to-[#030a3c] hover:text-white hover:shadow-md">
                Contact
                </base-button>
              </a>
            </div>
          </div>
          
          <!-- Conteneur des boutons à droite -->
          <div class="flex items-center space-x-3">
            <div class="gtranslate_wrapper z-10000 hidden lg:block"></div>
            <base-button v-if="!isMobile && userLogged == true" class="w-8 h-8 rounded-full flex items-center justify-center relative smallbtn hidden lg:flex transition-transform duration-300 hover:scale-110" @click="openModal" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <PlusIcon :size="16" />
            </base-button>
            <a href="/u"> <base-button  v-if="!isMobile" class="w-8 h-8 rounded-full flex items-center justify-center relative smallbtn hidden lg:flex transition-transform duration-300 hover:scale-110" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <AccountIcon :size="16" />
                <span v-if="userLogged == true" class="absolute top-0 right-0 w-3 h-3 bg-green-500 border border-white smallbtn rounded-full"></span> <!-- Add a small dot to indicate connection -->
              </base-button>
            </a>
            
            <!-- Hamburger button for mobile -->
            <button @click="toggleMobileMenu" class="lg:hidden focus:outline-none p-1 rounded-md transition-colors duration-300 hover:bg-gray-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu modal - Version améliorée -->
        <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50 transition-opacity duration-500" @click="closeMobileMenu">
          <div class="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-blue-50 to-white shadow-xl transform transition-transform duration-500 ease-out" 
               :class="{'translate-x-0': mobileMenuOpen, 'translate-x-full': !mobileMenuOpen}" 
               @click.stop>
            <div class="p-5 h-full flex flex-col">
              <!-- En-tête simplifié du menu mobile -->
              <div class="flex justify-between items-center mb-6 border-b border-blue-100 pb-4">
                <div class="flex items-center">
                  <img :src="require('~/assets/img/logo/logo.png')" class="w-10 h-10 object-contain" />
                  <!-- Supprimé le texte "Menu BEAT" qui se répétait -->
                </div>
                <button @click="closeMobileMenu" class="p-2 rounded-full transition-colors duration-300 hover:bg-blue-100 focus:outline-none">
                  <svg class="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div class="flex-1 space-y-2 overflow-y-auto">
                <a href="/" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" @click="closeMobileMenu">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Accueil
                </a>
                <a href="/apropos" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" @click="closeMobileMenu">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  A propos de Beat
                </a>
                <a href="/#domaines" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" @click="closeMobileMenu">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  Domaines
                </a>
                <a href="/blogs" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" @click="closeMobileMenu">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                  Actualités
                </a>
                <a href="/#contact" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg" @click="closeMobileMenu">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact
                </a>
                
                <div class="py-3 px-5 mt-4">
                  <div class="gtranslate_wrapper"></div>
                </div>
              </div>
              
              <div class="pt-4 border-t border-blue-100 mt-4">
                <base-button v-if="userLogged == true" class="w-full py-4 px-5 mb-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg flex items-center justify-center" @click="openModal">
                  <PlusIcon :size="16" class="mr-2" />
                  Créer du contenu
                </base-button>
                
                <a href="/u" class="flex items-center py-4 px-5 text-blue-900 rounded-xl transition-all duration-300 hover:bg-blue-100 mb-3" @click="closeMobileMenu">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Mon compte
                  <span v-if="userLogged == true" class="ml-auto w-3 h-3 bg-green-500 border border-white rounded-full"></span>
                </a>
                
                <button v-if="userLogged" @click="logOut" class="w-full py-3 px-5 text-red-600 border border-red-200 rounded-xl text-center transition-all duration-300 hover:bg-red-50 hover:border-red-300 flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modal dialog -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div v-if="userLogged">
            <span class="close transition-colors duration-300 hover:text-red-500" @click="closeModal">&times;</span>
            <h4 class="text-2xl sm:text-xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10 ml-2 mr-2" style="color:#030a3c;">
                Bonjour, <span class="text-header-gradient"> Commençons!</span>
            </h4>
            <hr>
            <a href="/create?v=blog">
              <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee] rounded-lg transition-all duration-300 hover:bg-[#0c66ee] hover:text-white hover:shadow-md">
                Créer et publier un article ou une opportunité
              </base-button>
              </a>
            <br><hr> 
              <small>En cliquant ici, vous serez redirigé vers la page de création d'un article ou d'une opportunité. Vous pouvez également éditer ou supprimer des articles ou opportunités déjà publiés.</small> 
          </div>
          <!-- The user is not logged in, show modal-->
          <div v-else>
            <span class="close transition-colors duration-300 hover:text-red-500" @click="closeModal">&times;</span>
            <h4
                data-aos-once="true"
                class="text-[2.5rem] sm:text-2xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10"
                style="color:#030a3c;"
              >
                Voici les recentes publications sur BEAT 
            </h4>
            <hr>
            <LandingTradingToolImage class="hidden sm:block" :showHeader="false"/>
            <hr>
            <h4
                data-aos-once="true"
                class="text-[2.5rem] sm:text-2xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10"
                style="color:#030a3c;"
              >
              </h4>  
          </div>
        </div>
      </div>
    </nav>
  </client-only>
</template>

<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      destinationLink: "/blogs",
      destination: "Discover new AI tools",
      user: null,
      validSource: false,
      userLogged: false,
      showModal: false,
      mobileMenuOpen: false,
      accesshash: "",
      isMobile: window.innerWidth < 1024 
    }
  },
  props: {
    from: {
      type: String,
      default: null
    }
  },
  methods: {
    logOut() {
       sessionStorage.removeItem('token');
       sessionStorage.removeItem('username');
       this.$router.push({ path: `/` });
       this.closeMobileMenu();
    },
    openModal() {
      this.showModal = true;
      this.closeMobileMenu();
    },
    
    closeModal() {
      this.showModal = false;
    },
    
    // Méthodes pour gérer le menu mobile
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    
    defineDestination () {
      if (this.from) {
        if (this.from == "blog") {
          this.destination = "Explore useful tips";
          this.destinationLink = "/tips"
          this.validSource = true
        }
    
        else {
          this.destination = "Discover new AI tools";
          this.destinationLink = "/blogs"
        }
      }
    }
  },
  async fetch() {
    this.defineDestination();
  },
  mounted() {
    window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth < 1024;
    });
    
    // Initialize GTranslate
    window.gtranslateSettings = {
      default_language: 'fr',
      detect_browser_language: false,
      languages: ["fr","en","es","sw"],
      wrapper_selector: '.gtranslate_wrapper',
      switcher_horizontal_position: 'right',
      switcher_vertical_position: 'top',
      flag_style: '3d',
      alt_flags: { en: 'usa' },
      flag_size: 24,
    }
    
    const gtranslateWrapper = document.querySelector('.gtranslate_wrapper');
    if (gtranslateWrapper) { 
      gtranslateWrapper.style.fontSize = '10px';
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.gtranslate.net/widgets/latest/popup.js'
    script.defer = true
    document.body.appendChild(script)
 
    if (typeof sessionStorage !== 'undefined' && typeof localStorage !== 'undefined') { 
      const token = sessionStorage.getItem('token');
      this.user = sessionStorage.getItem('username');
      this.accesshash = sessionStorage.getItem('accesshash') || localStorage.getItem('accesshash');
      if (token) {
        this.userLogged = true;
      } 
    }
  }
}
</script>

<style scoped>
.gtranslate_wrapper {
  font-family: inherit;
  font-size: 12px !important;
}

/* Style for navbar buttons container */
.space-x-3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.base-button {
  padding-left: 5px;
  padding-right: 5px;
}

.modal {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 12px;
  transform: scale(0.9);
  animation: scaleIn 0.3s ease-in-out forwards;
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.close {
  color: #030a3c;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-top: -10px;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

.navbar {
  margin-top: 0;
}

/* Ajustements pour l'alignement vertical */
.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

/* Ajuster la hauteur des boutons pour qu'ils s'alignent verticalement */
.smallbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 8px;
}

/* Styles pour réduire la hauteur sur mobile */
@media screen and (max-width: 1023px) {
  .navbar {
    min-height: 60px;
  }
  
  .navbar > div {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  
  .logo img {
    width: 40px !important;
    height: 40px !important;
  }
  
  .flex-row.items-center.justify-between.w-full {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  
  .space-x-3 {
    gap: 4px;
  }
  
  .smallbtn {
    height: 32px;
    font-size: 12px;
    padding: 0 8px;
  }
}

@media screen and (max-width: 640px) {
  /* Reduce button size */
  .space-x-3 a base-button {
    padding: 2px 3px;
    font-size: 8px;
    text-align:center;
  }

  .smallbtn {
    font-size: 12px;
    padding: 2px 4px;
  }
  
  /* Reduce modal content padding */
  .modal-content {
    padding: 10px;
  }
  
  .base-button {
    font-size: 6px !important;
    padding: 2px 4px;
  }
}

/* Pour les très petits écrans */
@media screen and (max-width: 340px) {
  .logo img {
    width: 35px !important;
    height: 35px !important;
  }
  
  .smallbtn {
    font-size: 10px;
    padding: 0 6px;
  }
}

@media screen and (min-width: 640px) {
  .logo {
    margin-top: 0;
  }
  
  /* Ajustements pour desktop */
  .navbar > div {
    height: 85px; /* Hauteur fixe pour la navbar sur desktop */
  }
}

/* Animation pour le menu mobile */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.mobile-menu-enter, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>