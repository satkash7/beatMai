<template>
  <div class="min-h-screen font-sans antialiased relative bg-white dark:bg-dark-bg transition-colors duration-300">
    <div class="relative">
      <!-- Loader global pour toutes les pages -->
      <div v-if="isLoading" class="fixed inset-0 bg-white dark:bg-dark-bg bg-opacity-90 dark:bg-opacity-90 flex flex-col justify-center items-center z-50 transition-opacity duration-300">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p class="text-gray-600 dark:text-gray-300">Chargement en cours...</p>
      </div>
      
      <BaseNavbar />
      <BaseHeader />

      <main class="text-neutral-800 dark:text-dark-text transition-colors duration-300">
        <slot />
      </main>

      <BaseFooter :is-homepage="true"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const router = useRouter()
const isLoading = ref(false)

router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    isLoading.value = true
  }
})

router.afterEach(() => {
  isLoading.value = false
})
</script>

<style>
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
}
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.3s;
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

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
