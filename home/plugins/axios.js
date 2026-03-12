// plugins/axios.js — provides $axios with .get/.post/.delete that wrap $fetch
// This mimics the Nuxt 2 @nuxtjs/axios API so existing pages work unchanged
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL

  function getAuthHeaders() {
    const headers = {}
    if (process.client) {
      const token = sessionStorage.getItem('token') || localStorage.getItem('token')
      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      }
    }
    return headers
  }

  const axios = {
    async get(url, options = {}) {
      const headers = { ...getAuthHeaders(), ...(options.headers || {}) }
      const data = await $fetch(url, {
        baseURL,
        method: 'GET',
        headers,
        params: options.params
      })
      return { data }
    },
    async post(url, body = {}, options = {}) {
      const headers = { ...getAuthHeaders(), ...(options.headers || {}) }
      const fetchOptions = { baseURL, method: 'POST', headers }
      // Support FormData (file uploads) — don't set content-type, let browser handle it
      if (body instanceof FormData) {
        fetchOptions.body = body
      } else {
        fetchOptions.body = body
      }
      const data = await $fetch(url, fetchOptions)
      return { data }
    },
    async delete(url, options = {}) {
      const headers = { ...getAuthHeaders(), ...(options.headers || {}) }
      const data = await $fetch(url, {
        baseURL,
        method: 'DELETE',
        headers,
        params: options.params
      })
      return { data }
    }
  }

  return {
    provide: {
      axios,
      api: axios
    }
  }
})
  