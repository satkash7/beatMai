<template>
  <ClientOnly>
    <div class="fixed bottom-6 right-6 z-50">
      <!-- Chat Panel -->
      <Transition name="chat-panel">
        <div v-if="isOpen" class="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-dark-card rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-border overflow-hidden">
          <!-- Header -->
          <div class="bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-4 flex items-center justify-between">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <div>
                <h3 class="text-white font-semibold text-sm">BEAT Expertise</h3>
                <p class="text-blue-200 text-xs">Nous sommes en ligne</p>
              </div>
            </div>
            <button @click="isOpen = false" class="text-white/80 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Step 1: Choose Channel -->
          <div v-if="step === 'choose'" class="p-5">
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-4">Comment souhaitez-vous nous contacter ?</p>
            <div class="space-y-3">
              <button @click="selectChannel('whatsapp')" class="w-full flex items-center p-3 rounded-xl border-2 border-gray-100 dark:border-dark-border hover:border-green-400 dark:hover:border-green-500 transition-all group">
                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div class="text-left">
                  <p class="text-sm font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Réponse rapide</p>
                </div>
              </button>
              <button @click="selectChannel('email')" class="w-full flex items-center p-3 rounded-xl border-2 border-gray-100 dark:border-dark-border hover:border-blue-400 dark:hover:border-blue-500 transition-all group">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div class="text-left">
                  <p class="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Message détaillé</p>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 2: Write Message -->
          <div v-if="step === 'message'" class="p-5">
            <button @click="step = 'choose'" class="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 mb-3">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Retour
            </button>
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-2" :class="selectedChannel === 'whatsapp' ? 'bg-green-500' : 'bg-blue-500'">
                <svg v-if="selectedChannel === 'whatsapp'" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <svg v-else class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                Via {{ selectedChannel === 'whatsapp' ? 'WhatsApp' : 'Email' }}
              </p>
            </div>

            <div v-if="selectedChannel === 'email'" class="mb-3">
              <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Objet</label>
              <input v-model="subject" type="text" placeholder="Sujet de votre message..." class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-dark-border rounded-lg bg-gray-50 dark:bg-dark-surface dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div class="mb-3">
              <label class="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Votre message</label>
              <textarea v-model="message" rows="4" placeholder="Écrivez votre message ici..." class="w-full px-3 py-2 text-sm border border-gray-200 dark:border-dark-border rounded-lg bg-gray-50 dark:bg-dark-surface dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
            </div>

            <button @click="sendMessage" :disabled="!message.trim()" class="w-full py-2.5 rounded-lg text-white text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed" :class="selectedChannel === 'whatsapp' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'">
              <span class="flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                Envoyer
              </span>
            </button>
          </div>
        </div>
      </Transition>

      <!-- Floating Button -->
      <button @click="isOpen = !isOpen" class="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center relative">
        <Transition name="icon-swap" mode="out-in">
          <svg v-if="!isOpen" key="chat" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          <svg v-else key="close" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </Transition>
        <!-- Pulse animation when closed -->
        <span v-if="!isOpen" class="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></span>
      </button>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'LiveChat',
  data() {
    return {
      isOpen: false,
      step: 'choose',
      selectedChannel: null,
      message: '',
      subject: '',
      whatsappNumber: '243995277023',
      emailAddress: 'direction@beatexpertise.com'
    }
  },
  methods: {
    selectChannel(channel) {
      this.selectedChannel = channel
      this.step = 'message'
      this.message = ''
      this.subject = ''
    },
    sendMessage() {
      if (!this.message.trim()) return

      if (this.selectedChannel === 'whatsapp') {
        const encodedMessage = encodeURIComponent(this.message)
        window.open(`https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer')
      } else {
        const encodedSubject = encodeURIComponent(this.subject || 'Contact depuis le site BEAT Expertise')
        const encodedBody = encodeURIComponent(this.message)
        window.location.href = `mailto:${this.emailAddress}?subject=${encodedSubject}&body=${encodedBody}`
      }

      // Reset after sending
      this.message = ''
      this.subject = ''
      this.step = 'choose'
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
.chat-panel-enter-active {
  animation: chatSlideUp 0.3s ease-out;
}
.chat-panel-leave-active {
  animation: chatSlideDown 0.2s ease-in;
}
@keyframes chatSlideUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes chatSlideDown {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(20px) scale(0.95); }
}
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: all 0.2s ease;
}
.icon-swap-enter-from { opacity: 0; transform: rotate(-90deg) scale(0.5); }
.icon-swap-leave-to { opacity: 0; transform: rotate(90deg) scale(0.5); }
</style>
