<template>
  <client-only>
  <div class="w-full container mx-auto px-6">
    <!-- AI Top trend section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
      <!-- Display all blogs -->
      <div class="w-full px-8 sm:px-0 py-0 flex flex-col justify-end space-y-4">
        <h2 class="text-2xl text-neutral-800 font-semibold text-center">
          Editer: <span class="text-header-gradient-big">{{ titleColumn }}</span>
        </h2>
         
            <!-- Image Upload Modal -->
            <div v-if="isModalOpen" class="modal-overlay">
              <div class="modal-content">
                <h3>Charger la photo</h3>
                <input
                  type="file"
                  @change="handleImageUpload"
                  class="border p-2 rounded-md"
                />
                <div v-if="successMessage" class="bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center">
                    <p v-html="successMessage"></p>  
                </div>
                  <div v-if="errorMessage" class="bg-red-200 text-green-800 py-4 px-8 rounded my-6 text-center">
                    <p v-html="errorMessage"></p>
                </div>
                <div v-if="imagePreview" class="mt-4">
                  <img :src="imagePreview" alt="Preview" class="w-32 h-32 object-cover rounded-md" />
                </div>
                <button @click="submitImage" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Charger la photo</button>
                <button @click="closeImageUploadModal" class="bg-red-500 text-white px-4 py-2 rounded-md mt-2">Annuler</button>
              </div>
            </div>
  
        <form @submit.prevent="submitAndPublish" class="w-full max-w-6xl ml-6">
            <!-- Input Field with Label -->
          <div class="mb-8">
            <label for="titleInput" class="block text-md font-medium text-blue-700">
            Titre de votre publication</label>
            <input
              id="titleInput"
              type="text"
              v-model="titleColumn"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Entrer le titre ici..."
            />
          </div>
          <!-- Inside your template -->
          <div v-if="imageColumn" class="mb-8">
            <img :src="imageColumn" class="h-52 object-cover rounded-md" />
          </div>
          <!-- File Input Field with Label -->
          <div class="mb-8">
            <label for="imageInput" class="block text-md font-medium text-blue-700">
              Cliquer ici pour changer la  photo de votre publication
            </label>
            <input
              id="imageInput"
              type="file"
              @change="handleFileChange"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Picture..."
            />
          </div>

            <!-- Textarea Field with Label -->
            <div class="mb-8">
              <label for="descriptionTextarea" class="block text-md font-medium text-blue-700">
                Ajoutez un petit texte d'accroche (caption)...  <small>[<span class="text-sm text-gray-600 mt-2">{{ captionColumn.length }} / 200 </span>]</small>
            </label>
              <textarea
                id="descriptionTextarea"
                rows="3"
                v-model="captionColumn"
                @input="limitCaptionLength"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your caption here..."
              ></textarea>
            </div>
            <!-- Inside your form -->
            <div class="mb-8">
              <label for="categorySelect" class="block text-md font-medium text-blue-700">Catégorie</label>
              <select
                id="categorySelect"
                v-model="categoryColumn"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="" disabled selected>Selectionner une catégorie...</option>
                <!-- Add your category options here -->
                <option value="Actualité">Actualité</option>
                <option value="Projet">Projet</option>
                <option value="Evenement">Evenement</option>
                <option value="Opportunité ou Offre d'emploi">Opportunité ou Offre d'emploi</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <!-- Editor Field with Label -->
            <div class="mb-8">
              <label for="editor" class="block text-md font-medium text-blue-700">Contenu de la publication</label>
                <div class="mb-8">
              <small>
                Si vous voulez uploader des images,
                <a href="#" @click="openImageUploadModal" class="text-blue-900">Cliquez ici</a>
              </small> 
              <client-only placeholder="loading...">
                <main id="sample">
                  <tinymce
                    id="editor"
                    v-model="editorData"
                    :other_options="options"
                  ></tinymce><br>
                  <small class="text-red">Si vous voulez modifier le contenu de votre publication, cliquez sur le bouton ci-dessous</small>
                  <br>
                  <button
                    :disabled="alreadyLoaded"
                    type="button"
                    class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
                    :class="alreadyLoaded ? 'cursor-not-allowed text-red-500' : ''"
                    @click="updateEditorContent">Traiter le contenu de ce post
                </button>
                </main>
              </client-only>
              </div>
          </div>
            <div v-if="loading" class="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 flex justify-center items-center">
              <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.291 0-4.417-.784-6.087-2.209l2.122-2.122zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-6.209 2.791A7.963 7.963 0 0116 12h4c0 4.418-3.582 8-8 8v-4c2.209 0 4.417-.784 6.087-2.209l-2.122-2.122z"></path>
              </svg>
              Loading...
            </div>
            <div v-if="success" class="bg-green-400 text-white px-4 py-2 rounded-md mb-4">
              Votre publication a été actualisé avec succès. 
              Vous pouvez le <a :href="publicPost == false ? '/blogs/' + routeColumn : '/opportunities/' + routeColumn" class="text-blue"><b>voir ici </b></a> 
            </div>
            <div v-if="failure" class="bg-red-400 text-white px-4 py-2 rounded-md mb-4">
              Something unexpected happened, Please check your embedded media or file type and size and try again later.
            </div>
             
            <div v-if="titleAction == 'blog'" class="mb-8">
              <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="publicPost" class="w-4 h-4">
              <h2>Ceci est une opportunité</h2>
            </label>
          </div>
            <!-- Submit Button -->
            <div class="flex justify-center">
              <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base" type="submit">
                <b>Enregistrer & Publier </b>
              </BaseButton>
            </div>
          </form>
        </div> 
    </section>
  </div>
</client-only>
</template>

  <script>
  import aosMixin from '@/mixins/aos'; 

  export default {
    name: 'create-component',
    layout: 'create',
    mixins: [aosMixin],
    components: {
      tinymce: () => { if (typeof window !== "undefined") { return import("vue-tinymce-editor") } },
      
    },
    data() {
      return {
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
        dataColumn: "default initial content!",
        imageColumn: null,
        creatorColumn: "",
        alreadyLoaded: false,
        creator : sessionStorage.getItem('username'),

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

        docTechnology: "",
        docTechVersion: "",

        options: {
          plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample'
          ],
          toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
         // language_url: '/path-to-your-language-file.js', // Optional: Set the language file URL
        } 
      }
    },
    mounted() {
      this.editorLoaded = true;
    },
  
    async fetch() {
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
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // watch what the user is typing and always update to this.editordata column
    watch: {
      editorData: function (val) {
        this.editorData = val;
      }
    },
    methods: { 
      limitCaptionLength() {
        if (this.captionColumn.length > 200) {
          this.captionColumn = this.captionColumn.substring(0, 200);
        }
      },
      updateEditorContent() { 
        this.editorData = this.editorData === "" 
          ? this.dataColumn 
          : this.editorData + "<br>" + this.dataColumn; 
          this.alreadyLoaded = true;
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
                formData.append('imageUrl', this.newCover == null ? "skip" : this.newCover);

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

  <style scoped>
  @media (min-width: 1024px) {
  #sample {
    width: 100%;
  }
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
}
  </style>
 
  