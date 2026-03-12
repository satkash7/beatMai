export default defineNuxtPlugin((nuxtApp) => {
  // Simple smooth scroll alternative for Nuxt 3
  const smoothScroll = {
    scrollTo(target, options = {}) {
      const element = typeof target === 'string' ? document.querySelector(target) : target
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          ...options
        })
      }
    }
  }

  return {
    provide: {
      smoothScroll
    }
  }
})
