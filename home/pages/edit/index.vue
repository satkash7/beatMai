<template>
  <client-only>
    <div class="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <!-- Top Bar -->
      <div class="bg-white dark:bg-dark-card shadow-sm border-b border-gray-200 dark:border-dark-border px-6 py-4">
        <div class="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Modifier la publication</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ titleColumn || 'Chargement...' }}</p>
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
          <span>Publication mise à jour avec succès ! <a :href="publicPost == false ? '/blogs/' + routeColumn : '/opportunities/' + routeColumn" class="font-semibold underline">Voir ici</a></span>
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

            <!-- Current Cover Image -->
            <div v-if="imageColumn">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Photo actuelle</label>
              <img :src="imageColumn" class="h-40 object-cover rounded-lg border border-gray-200 dark:border-gray-600" />
            </div>

            <!-- Cover Image Upload -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Changer la photo de couverture</label>
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
                <BaseRichTextEditor ref="richEditor" v-model="editorData" />
              </client-only>
            </div>

            <!-- Opportunity checkbox -->
            <div v-if="titleAction == 'blog'">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" v-model="publicPost" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                <span class="text-sm text-gray-700 dark:text-gray-300">Ceci est une opportunité</span>
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
              {{ loading ? 'Enregistrement...' : 'Enregistrer & Publier' }}
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
    name: 'edit-component',
    mixins: [aosMixin],
    data() {
      return {
        loading: false,
        editorLoaded: false,
        request: "",
        accesshash: "",
        success: false,
        failure: false,
        title: "Editing",
        titleAction: "",
        userLogged: true,
        publicPost: true,
        coverUrl: null,
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
        creatorColumn: "",
        creator: "",

        oldTitle: "",
        oldCaption: "",
        oldRoute: "",
        oldCategory: "",
        oldData: "",
        oldCover: null,
        oldDocTechnology: "",
        oldDocTechVersion: "",


        id: 0,
        editorData : "",
        newCover : null,
        imageUrlText: "",
        coverMode: "file",

        docTechnology: "",
        docTechVersion: "",
      }
    },
    mounted() {
      this.editorLoaded = true;
      this.creator = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('username') : '';
      this.loadEditData();
    },
    methods: {
      async loadEditData() {
        try {
          console.log('Loading article to edit');
          const category = this.$route.query.category;
          const postRoute = this.$route.query.route;
          const response = await this.$axios.get(`/${category}/getall?route=${postRoute}`);

          if (response.data.status_code === 200) {
            const post = response.data[category][0];
            this.id = post.id || 0;
            this.titleColumn = post.blogTitle || post.tipTitle || post.docTitle || post.trendTitle || "";
            this.captionColumn = post.blogCaption || post.tipCaption || post.docCaption || post.trendCaption || "";
            this.routeColumn = post.blogRoute || post.tipRoute || post.docRoute || post.trendRoute || "";
            this.categoryColumn = post.blogCategory || post.tipCategory || post.docCategory || post.trendCategory || "";
            this.dataColumn = post.blogData || post.tipData || post.docData || post.trendData || "";
            this.imageColumn = post.imageUrl || null;
            if (category == 'blog') { this.publicPost = post.publicPost == '1' ? true : false; console.log('public or not : ', post.publicPost);}
            this.titleAction = category;
            this.docTechnology = post.docTechnology || "";
            this.docTechVersion = post.docTechVersion || "";

            this.oldRoute = this.routeColumn;
            this.oldTitle = this.titleColumn;
            this.oldCaption = this.captionColumn;
            this.oldCategory = this.categoryColumn;
            this.oldData = this.dataColumn;
            this.oldCover = this.imageColumn;
            this.oldDocTechnology = this.docTechnology;
            this.oldDocTechVersion = this.docTechVersion;

            // Directly load into editor
            this.editorData = this.dataColumn;
            this.$nextTick(() => {
              if (this.$refs.richEditor) {
                this.$refs.richEditor.setContent(this.dataColumn);
              }
            });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
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
        // this is for the image upload inside the editor
        const file = event.target.files[0];
        if (file) {
          this.imagePreview = URL.createObjectURL(file);
          this.uploadImage = file;
        }
      },

      handleFileChange(event) {
        // this is fot the update
          const file = event.target.files[0];
          this.newCover = file;

          // update displayed image
          this.imageColumn = URL.createObjectURL(file);
      },
      async submitImage() {
          try { 
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
                this.successMessage = "Image uploaded successfully! Use the below url to insert the image : " + response.data.url;
              } else {
                this.errorMessage = "Image/file uploaded! Please try again.";
              }
            }
          } catch (error) {
            console.error("Error uploading image :", error);
            this.errorMessage = "Image/file upload failed! Please try again.";
          }
      },

        async submitAndPublish() {
            try {
                this.loading = true;
                
                const storedBarrierDetails = sessionStorage.getItem('token');

                //perform sanitization on the route only if it has changed
                this.routeColumn = this.oldTitle == this.titleColumn ? this.oldRoute : this.titleColumn
                    .normalize("NFD") // Normalize Unicode characters
                    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
                    .trim() // Remove leading and trailing whitespace
                    .toLowerCase() // Convert to lowercase
                    .replace(/[^\w\s-]/g, "") // Remove symbols except word characters, spaces, and hyphens
                    .replace(/^-+|-+$/g, "") // Remove leading or trailing hyphens
                    .replace(/\s+/g, "-") // Replace spaces with a single hyphen
                    .replace(/-+/g, "-"); // Collapse multiple hyphens into one

                const formData = new FormData();
                if (this.titleAction == "blog") {
                  formData.append('blogTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
                  formData.append('blogCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
                  formData.append('blogRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
                  formData.append('blogCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
                  formData.append('blogData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 
                  formData.append('publicPost', this.publicPost == true ? 1 : 0);
                }
                else if (this.titleAction == "tip"){
                  formData.append('tipTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
                  formData.append('tipCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
                  formData.append('tipRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
                  formData.append('tipCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
                  formData.append('tipData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 
                }
                else if (this.titleAction == "doc"){
                  formData.append('docTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
                  formData.append('docCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
                  formData.append('docRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
                  formData.append('docCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
                  formData.append('docData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 

                  formData.append('docTechnology', this.docTechnology == this.oldDocTechnology ? "skip" : this.docTechnology);
                  formData.append('docTechVersion', this.docTechVersion == this.oldDocTechVersion ? "skip" : this.docTechVersion);
                }
                else if (this.titleAction == "trend"){
                  formData.append('trendTitle', this.titleColumn == this.oldTitle ? "skip" : this.titleColumn);
                  formData.append('trendCaption', this.captionColumn == this.oldCaption ? "skip" : this.captionColumn);
                  formData.append('trendRoute', this.routeColumn == this.oldRoute ? "skip" : this.routeColumn);
                  formData.append('trendCategory', this.categoryColumn == this.oldCategory ? "skip" : this.categoryColumn);
                  formData.append('trendData', this.editorData == this.oldData || this.editorData == "" ? "skip" : this.editorData); // because this.editorData is the loaded data and updated 
                }
                if (this.coverMode === 'url' && this.imageUrlText && this.imageUrlText !== this.oldCover) {
                  formData.append('imageUrl', this.imageUrlText);
                  formData.append('imageIsUrl', '1');
                } else {
                  formData.append('imageUrl', this.newCover == null ? "skip" : this.newCover);
                }

                const response = await this.$axios.post(`/${this.titleAction}/edit/${this.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${storedBarrierDetails}`,  
                    },
                });
                 
                console.log("response :", JSON.stringify(response));
                if (response.data.status_code === 200) {
                    this.success = true;
                }
                else {
                    this.failure = true;
                }

            } catch (error) {
                this.loading = false;
                console.error(error);
            }
            finally {
              this.loading = false;  
            }
        },
        
    
    }
  };

  </script>