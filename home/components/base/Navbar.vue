<template>
  <client-only>
  <nav id="navbar" :key="userLogged" class="navbar relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-6">
          <div class="logo">
            <a href="/"><img :src="require('~/assets/img/logo/logo.png')" class="w-24 xl:w-38 object-contain h-24" alt="Beat Logo"/></a>
          </div>
        </div>
      </div>
      <div :class="{'block': open, 'hidden': !open, 'lg:flex': true}" class="lg:flex-row lg:items-center lg:space-x-3 last-buttons last-buttons">
        <a v-if="!true" :href="destinationLink">
          <span class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
          {{ destination }}
        </span></a><!-- disabled temporary-->
        <a href="/apropos">
          <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn">
          A propos de Beat
          </base-button>
        </a> 
        <a href="/#domaines">
          <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn">
          Domaines
          </base-button>
        </a>
        <a href="/blogs">
          <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn">
          Actualités
          </base-button>
        </a>
        <a href="/#contact">
          <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient smallbtn">
          Contact
          </base-button>
        </a>
        <div class="gtranslate_wrapper z-10000"></div>
        <base-button v-if="!isMobile && userLogged == true" class="w-6 h-6 mt-2  rounded-full flex items-center justify-center relative smallbtn" @click="openModal" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <PlusIcon :size="12" />
        </base-button>
        <a href="/u"> <base-button  v-if="!isMobile" class="w-6 h-6 mt-2  rounded-full flex items-center justify-center relative smallbtn" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
            <AccountIcon :size="12" />
            <span v-if="userLogged == true" class="absolute top-0 right-0 w-3 h-3 bg-green-500 border border-white smallbtn rounded-full"></span> <!-- Add a small dot to indicate connection -->
          </base-button>
        </a> 
      </div>
    </div>
     <!-- Modal dialog -->
     <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div v-if="userLogged">
          <span class="close" @click="closeModal">&times;</span>
          <h4 class="text-2xl sm:text-xl xl:text-2xl font-bold leading-tight sm:pr-8 xl:pr-10 ml-2 mr-2" style="color:#030a3c;">
     
              Bonjour, <span class="text-header-gradient"> Commençons!</span>
          </h4>
          <hr>
          <a href="/create?v=blog">
            <base-button class="px-2 xl:px-4 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
              Créer et publier un article ou une opportunité
            </base-button>
            </a>
          <br><hr> 
            <small>En cliquant ici, vous serez redirigé vers la page de création d'un article ou d'une opportunité. Vous pouvez également éditer ou supprimer des articles ou opportunités déjà publiés.</small> 
        </div>
        <!-- The user is not logged in, show modal-->
        <div v-else>
          <span class="close" @click="closeModal">&times;</span>
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
        <!-- ✅ REQUIRED for GTranslate to render -->
        
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
       // console.log('Session removed, User logged out');
       this.$router.push({ path: `/` });
    },
    openModal() {
      this.showModal = true;
    },
    
    closeModal() {
      this.showModal = false;
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
    // Call the defineDestination method when the component is loaded
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
    // reduce the font size of the div to 10px
    const gtranslateWrapper = document.querySelector('.gtranslate_wrapper');
    if (gtranslateWrapper) { 
      // important

      gtranslateWrapper.style.fontSize = '10px'; // Adjust the font size as needed
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
        // console.log('user is logged in, show the login icon');
      } 
    }
  }
}
  

</script>
<style scoped>
.gtranslate_wrapper {
        font-family: inherit; /* Uses your default font */ 
        font-size: 12px !important; /* Reduces font size */
    }
/* Style for navbar buttons container */
.space-x-3 {
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap to the next line */
  justify-content: flex-start; 
  margin-top: 10px; /* Add some space between rows of buttons */
  padding-left: 2px; /* Adjust padding to reduce spacing on the left */
  padding-right: 2px; 
  
}
.base-button {
  padding-left: 5px; /* Adjust padding to reduce space before text */
  padding-right: 5px; /* Adjust padding to reduce space after text */
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
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 12px;
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
  margin-top: -25px;
}


@media screen and (max-width: 640px) {
  /* Reduce button size */
  .space-x-3 a base-button {
    padding: 4px 6px; /* Adjust padding for smaller buttons */
    font-size: 8px; /* Reduce font size for smaller buttons */
    text-align:center;

  }

  .smallbtn {
    font-size: 12px;
    padding: 2px 4px;

  }
  /* Reduce modal content padding */
  .modal-content {
    padding: 10px; /* Adjust padding for smaller modal content */
  }
  .base-button {
    font-size: 6px !important; /* Adjust size as needed */
    padding: 2px 4px;
  }

   /* create class for desktop view only*/

   
   @media screen and (min-width: 640px) {
    .logo {
      margin-top: -40px;
    }
  }

  /* Arrange last 3-4 buttons in a single row only on mobile */
  .last-buttons {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping */
    justify-content: left; 
    gap: 4px; /* Add some space between buttons */
    font-size: 8px;
  }
}

</style>
