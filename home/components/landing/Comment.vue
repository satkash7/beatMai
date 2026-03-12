<template>
  <ClientOnly>
  <div class="full mx-auto justify-left mt-6">
    <hr class="border-gray-200 dark:border-dark-border">
    <!-- COMMENTS CARDS -->
    <div v-for="comment in comments" :key="comment.id" class="mx-auto justify-left bg-white dark:bg-dark-card shadow-lg rounded-lg overflow-hidden mt-4">
      <div class="px-6 py-4 bg-gray-100 dark:bg-dark-surface flex items-center">
        <div class="w-8 h-8 mr-2 flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white text-sm font-bold">
          {{ (comment.commentOwner || 'A').charAt(0).toUpperCase() }}
        </div>
        <b class="mr-1 text-gray-800 dark:text-dark-text">
          {{ comment.commentOwner }}
        </b>
        <span class="text-gray-500 dark:text-gray-400 text-sm ml-1">| {{ comment.creation_date }}</span>
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 dark:text-gray-300">{{ comment.commentData }}</p>
      </div>
    </div>

    <!-- Comment Form -->
    <div class="mt-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-dark-text mb-3">Laisser un commentaire</h3>
      <div v-if="addedRequest" class="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
        Votre commentaire a été enregistré avec succès.
      </div>
      <div v-if="failedRequest" class="bg-red-500 text-white px-4 py-2 rounded-md mb-4">
        Une erreur est survenue. Veuillez réessayer plus tard.
      </div>
      <form @submit.prevent="postComment" id="comments">
        <textarea
          rows="3"
          class="w-full px-3 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Votre commentaire ici..."
          v-model="vData"
          required
        ></textarea>
        <div class="flex mt-3">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-2 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm disabled:opacity-50"
          >
            {{ isSubmitting ? 'Envoi...' : 'Poster un commentaire' }}
          </button>
        </div>
      </form>
    </div>
  </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'LandingComment',
  props: {
    type: { type: String, default: null },
    id: { type: Number, required: true, default: null },
    route: { type: String, required: true, default: null },
    creator: { type: String, required: true, default: null }
  },
  data() {
    return {
      addedRequest: false,
      failedRequest: false,
      vData: "",
      isSubmitting: false,
      comments: []
    }
  },
  async mounted() {
    const config = useRuntimeConfig()
    try {
      const response = await $fetch(config.public.baseURL + '/comment/getall', {
        params: { type: this.type, id: this.id }
      })
      this.comments = response.comments || []
    } catch (error) {
      console.error('Could not fetch comments:', error)
    }
  },
  methods: {
    async postComment() {
      if (!this.vData.trim()) return
      this.isSubmitting = true
      this.failedRequest = false
      const config = useRuntimeConfig()
      const commentOwner = (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('username')) || 'anonymous'
      try {
        const response = await $fetch(config.public.baseURL + '/comment/add', {
          method: 'POST',
          body: {
            commentOwner: commentOwner,
            commentType: this.type,
            commentTypeId: this.id,
            commentData: this.vData,
            commentHidden: '0'
          }
        })
        if (response.status_code === 200) {
          this.addedRequest = true
          this.comments.push({
            id: Date.now(),
            commentOwner: commentOwner,
            commentData: this.vData,
            creation_date: new Date().toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })
          })
          this.vData = ''
          setTimeout(() => { this.addedRequest = false }, 4000)
        } else {
          this.failedRequest = true
          setTimeout(() => { this.failedRequest = false }, 4000)
        }
      } catch (error) {
        console.error('Error posting comment:', error)
        this.failedRequest = true
        setTimeout(() => { this.failedRequest = false }, 4000)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
</style>

