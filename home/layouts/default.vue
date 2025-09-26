<template>
  <client-only>
    <div class="min-h-screen font-sans antialiased relative bg-white">
      <div class="relative">
        <!-- Loader global pour toutes les pages -->
        <div v-if="isLoading" class="fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50 transition-opacity duration-300">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p class="text-gray-600">Chargement en cours...</p>
        </div>
        
        <BaseNavbar />
        <BaseHeader />

        <main class="text-neutral-800">
          <Nuxt />
        </main>

        <BaseFooter :is-homepage="true"/>
      </div>
    </div>
  </client-only>
</template>

<script>
import LoadingIndicator from "@/components/LoadingIndicator.vue";
export default {
  name: 'DefaultLayout',
  components: {
    LoadingIndicator,
  },
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    // Écouter les événements de changement de route
    this.$nuxt.$on('routeChangeStart', this.startLoading);
    this.$nuxt.$on('routeChangeComplete', this.finishLoading);
    this.$nuxt.$on('routeChangeError', this.finishLoading);
  },
  beforeDestroy() {
    // Nettoyer les écouteurs d'événements
    this.$nuxt.$off('routeChangeStart', this.startLoading);
    this.$nuxt.$off('routeChangeComplete', this.finishLoading);
    this.$nuxt.$off('routeChangeError', this.finishLoading);
  },
  methods: {
    startLoading() {
      this.isLoading = true;
    },
    finishLoading() {
      this.isLoading = false;
    }
  }
}
// watch routes update
export const watch = {
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
}
</script>

<style>
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

/* Animation du loader */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>