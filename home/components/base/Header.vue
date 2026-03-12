<template>
  <section id="hero" class="hero-carousel desktop w-full pb-24 relative overflow-hidden">
    <!-- Background images container -->
    <div class="hero-backgrounds">
      <div 
        v-for="(image, index) in heroImages" 
        :key="index"
        class="hero-bg-image"
        :class="{ 'active': currentSlide === index }"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
    
    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 z-10"></div>
    
    <BaseSection class="nospace relative z-20">
      <div class="col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left nospace">
        <h1
          class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10 mobile"
          style="color:white;"
        > 
        <br /><br />
        Bienvenu au "Bureau d'Expertise et Accompagnement Technique" BEAT
        </h1>
        <p class="text-white extramobile">
          BEAT est un bureau d'expertise et accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"> 
          <a href="#contact">
            <base-button class="px-2 xl:px-4 py-3 mt-0 bg-inherit text-white border border-[#0c66ee] smallbtn hover:bg-blue-600 transition-all duration-300">
            Entrez en contact avec nous pour savoir plus
            </base-button>
          </a>
        </div>
      </div>
    </BaseSection>
    
    <!-- Navigation arrows -->
    <div class="hero-navigation z-30">
      <button @click="prevSlide" class="nav-arrow nav-arrow-left" aria-label="Image précédente">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextSlide" class="nav-arrow nav-arrow-right" aria-label="Image suivante">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <!-- Slide indicators -->
    <div class="hero-indicators z-30">
      <button
        v-for="(image, index) in heroImages"
        :key="'ind-'+index"
        @click="goToSlide(index)"
        class="indicator"
        :class="{ 'active': currentSlide === index }"
        :aria-label="`Aller à l'image ${index + 1}`"
      ></button>
    </div>
  </section>
</template>

<script>
import heroPic1 from '~/assets/img/pic1.jpg'
import heroPic2 from '~/assets/img/pic2.jpg'
import heroAa from '~/assets/img/aa.jpeg'
import heroCc from '~/assets/img/cc.jpeg'

export default {
  name: 'BaseHeader',
  data() {
    return {
      currentSlide: 0,
      autoplayInterval: null,
      heroImages: [heroPic1, heroPic2, heroAa, heroCc]
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeUnmount() {
    this.stopAutoplay()
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.heroImages.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 
        ? this.heroImages.length - 1 
        : this.currentSlide - 1
    },
    goToSlide(index) {
      this.currentSlide = index
      this.stopAutoplay()
      this.startAutoplay()
    }
  }
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(34, 107, 215);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-carousel {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;
}

.hero-backgrounds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.hero-bg-image.active {
  opacity: 1;
}

.hero-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
}

.nav-arrow {
  pointer-events: all;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
  transform: scale(1.1);
}

.hero-indicators {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  width: 30px;
  border-radius: 6px;
}

@media screen and (min-width: 640px) {
  .desktop { margin-top: -50px; }
}

@media screen and (max-width: 640px) {
  .nospace { margin-top: 0; margin-bottom: 0; }
  .mobile { font-size: 26px; padding: 2px 4px; margin-top: 0; margin-bottom: 0; }
  .extramobile { font-size: 12px; padding: 2px 4px; margin-top: 0; margin-bottom: 0; }
  .nav-arrow { width: 40px; height: 40px; }
  .hero-navigation { padding: 0 10px; }
  .hero-indicators { bottom: 20px; }
}

@media screen and (max-width: 480px) {
  .nav-arrow { width: 35px; height: 35px; }
  .nav-arrow svg { width: 20px; height: 20px; }
}
</style>
