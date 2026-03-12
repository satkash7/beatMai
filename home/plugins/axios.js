// plugins/axios.js
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // Create custom $fetch instance with API configuration
  const api = $fetch.create({
    baseURL: config.public.baseURL,
    
    async onRequest({ request, options }) {
      // Add authorization token if available
      const token = useCookie('authToken')
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`
        }
      }
    },
    
    async onResponse({ response }) {
      // Handle successful responses
      return response._data
    },
    
    async onResponseError({ response }) {
      // Handle errors globally
      console.error('API Error:', response.status, response._data)
      
      // Handle 401 unauthorized
      if (response.status === 401) {
        // Clear auth and redirect to login
        const authToken = useCookie('authToken')
        authToken.value = null
        
        if (process.client) {
          navigateTo('/anonymous')
        }
      }
    }
  })

  return {
    provide: {
      api
    }
  }
})
  