<template>
  <client-only>
    <div class="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <!-- Top Bar -->
      <div class="bg-white dark:bg-dark-card shadow-sm border-b border-gray-200 dark:border-dark-border px-6 py-4">
        <div class="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Nouvelle publication</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ title }}</p>
          </div>
          <button @click="$router.push('/admin')" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Retour au tableau de bord
          </button>
        </div>
      </div>

      <div class="max-w-5xl mx-auto px-6 py-8">
        <!-- Alerts -->
        <div v-if="success" class="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>Publication créée avec succès ! <a :href="publicPost == false ? '/blogs/' + routeColumn : '/opportunities/' + routeColumn" class="font-semibold underline">Voir ici</a></span>
          <button @click="success = false" class="text-green-600 hover:text-green-800">&times;</button>
        </div>
        <div v-if="failure" class="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>Une erreur est survenue. Vérifiez vos médias et réessayez.</span>
          <button @click="failure = false" class="text-red-600 hover:text-red-800">&times;</button>
        </div>

        <!-- Image Upload Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Insérer une image dans le contenu</h3>
            <input type="file" @change="handleImageUpload" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <div v-if="successMessage" class="mt-3 bg-green-50 text-green-700 p-3 rounded-lg text-sm"><p v-html="successMessage"></p></div>
            <div v-if="errorMessage" class="mt-3 bg-red-50 text-red-700 p-3 rounded-lg text-sm"><p v-html="errorMessage"></p></div>
            <div v-if="imagePreview" class="mt-3">
              <img :src="imagePreview" alt="Preview" class="w-28 h-28 object-cover rounded-lg" />
            </div>
            <div class="flex gap-3 mt-4">
              <button @click="submitImage" class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Charger</button>
              <button @click="closeImageUploadModal" class="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Annuler</button>
            </div>
          </div>
        </div>

        <!-- Form Card -->
        <form @submit.prevent="submitAndPublish" class="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border">
          <div class="p-6 space-y-6">
            <!-- Title -->
            <div>
              <label for="titleInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Titre de votre publication</label>
              <input id="titleInput" type="text" v-model="titleColumn" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Entrez le titre..." />
            </div>

            <!-- Cover Image -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Photo de couverture</label>
              <div class="flex items-center gap-3 mb-2">
                <button type="button" @click="coverMode = 'file'" :class="coverMode === 'file' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'" class="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors">Charger un fichier</button>
                <button type="button" @click="coverMode = 'url'" :class="coverMode === 'url' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'" class="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors">Coller une URL</button>
              </div>
              <input v-if="coverMode === 'file'" id="imageInput" type="file" @change="handleFileChange" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/30 dark:file:text-blue-400" />
              <input v-else type="url" v-model="imageUrlText" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="https://exemple.com/image.jpg" />
              <div v-if="coverMode === 'url' && imageUrlText" class="mt-2">
                <img :src="imageUrlText" class="h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-600" @error="$event.target.style.display='none'" />
              </div>
            </div>

            <!-- Caption -->
            <div>
              <label for="descriptionTextarea" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Texte d'accroche (caption) <span class="text-xs text-gray-400 ml-1">{{ captionColumn.length }} / 200</span>
              </label>
              <textarea id="descriptionTextarea" rows="3" v-model="captionColumn" @input="limitCaptionLength" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Votre caption ici..."></textarea>
            </div>

            <!-- Category -->
            <div>
              <label for="categorySelect" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Catégorie</label>
              <select id="categorySelect" v-model="categoryColumn" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="" disabled selected>Sélectionner une catégorie...</option>
                <option value="Actualité">Actualité</option>
                <option value="Projet">Projet</option>
                <option value="Evenement">Evenement</option>
                <option value="Opportunité ou Offre d'emploi">Opportunité ou Offre d'emploi</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <!-- Editor -->
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Contenu de la publication</label>
                <button type="button" @click="openImageUploadModal" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">+ Insérer une image</button>
              </div>
              <client-only placeholder="Chargement de l'éditeur...">
                <BaseRichTextEditor v-model="dataColumn" />
              </client-only>
            </div>

            <!-- Opportunity checkbox -->
            <div v-if="titleAction == 'blog'">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" v-model="publicPost" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                <span class="text-sm text-gray-700 dark:text-gray-300">Cochez s'il s'agit d'une opportunité ou offre d'emploi</span>
              </label>
            </div>
          </div>

          <!-- Form Footer -->
          <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-dark-border rounded-b-xl flex items-center justify-between">
            <button type="button" @click="$router.push('/admin')" class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              Annuler
            </button>
            <button type="submit" :disabled="loading" class="inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
              <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              {{ loading ? 'Publication...' : 'Enregistrer et publier' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </client-only>
</template>

  
  <script setup>
  definePageMeta({ layout: 'user' })
  </script>

  <script>
  import aosMixin from '@/mixins/aos'; 

  export default {
    name: 'create-component',
    mixins: [aosMixin],
    data() {
      return {
        loading: false,
        request: "",
        accesshash: "",
        success: false,
        failure: false,
        title: "Editing",
        titleAction: "",
        userLogged: true,
        publicPost: false,

        isModalOpen: false,
        imagePreview: null, 
        uploadImage: null,
        successMessage: "",
        errorMessage: "",

        titleColumn: "",
        captionColumn: "",
        routeColumn: "",
        categoryColumn: "",
        dataColumn: "",
        imageColumn: null,
        imageUrlText: "",
        coverMode: "file",
        creatorColumn: "",
        creator: "",
        }
    },
    
    methods: {
      limitCaptionLength() {
        if (this.captionColumn.length > 200) {
          this.captionColumn = this.captionColumn.substring(0, 200);
        }
      },
      openImageUploadModal() {
        this.isModalOpen = true;
      },
      closeImageUploadModal() {
        this.isModalOpen = false;
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.imagePreview = URL.createObjectURL(file);
          this.uploadImage = file;
        }
      },
      async submitImage() {
          try {
            console.log("Uploading image...");
            this.isLoading = false;
            let token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;
            let username = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('username') : null;
            // Create FormData
            let formData = new FormData();
            
            if (this.uploadImage) {
              formData.append("photo", this.uploadImage);
              const response = await this.$axios.post(`user/${username}/uploads`, formData, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data" 
                }, 
              });
              if (response.data.status_code == 200) {
                this.successMessage = "L'image a été chargée avec succès, utilisez ce lien pour insérer l'Image : " + response.data.url;
              } else {
                this.errorMessage = "Impossible de charger l'image! vérifiez la taille et le format du fichier.";
              }
            }
          } catch (error) {
            console.error("Error uploading image :", error);
            this.errorMessage = "Image/file upload failed! Please try again.";
          }
      },
        handleFileChange(event) {
          const file = event.target.files[0];
          this.imageColumn = file;
        },
        getSourceAction () {
            const action = this.$route.query.v;
            this.titleAction = action;
            if (action == "blog") {
                this.title = "Créer et publier une publication / opportunité";
                this.request = "/blog/store"
            }
        },
        async submitAndPublish() {
            this.loading = true;
            const storedBarrierDetails = sessionStorage.getItem('token');

            this.routeColumn = this.titleColumn
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .trim()
              .toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/^-+|-+$/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-");

            const formData = new FormData();
            formData.append('blogTitle', this.titleColumn || '');
            formData.append('blogCaption', this.captionColumn || '');
            formData.append('blogRoute', this.routeColumn || '');
            formData.append('blogCategory', this.categoryColumn || '');
            formData.append('blogData', this.dataColumn || '');
            formData.append('publicPost', this.publicPost === true ? 1 : 0);
            if (this.coverMode === 'url' && this.imageUrlText) {
              formData.append('imageUrl', this.imageUrlText);
              formData.append('imageIsUrl', '1');
            } else {
              formData.append('imageUrl', this.imageColumn || '');
            }
            formData.append('creator', this.creator || '');

            const response = await this.$axios.post('/blog/store', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${storedBarrierDetails}`,
              },
            });

            if (response.data.status_code === 200) {
              this.success = true;
            } else {
              this.failure = true;
            }
            this.loading = false;
        },
    },
    mounted() {
        this.creator = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('username') : '';
        this.getSourceAction();
    },
  };
  </script>
 
  