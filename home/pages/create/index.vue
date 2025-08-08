<template>
  <client-only>
  <div class="w-full container mx-auto px-6">
    <!-- AI Top trend section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
      <!-- Display all blogs -->
      <div class="w-full px-8 sm:px-0 py-0 flex flex-col justify-end space-y-4">
        <br></br><br></br><br></br>
        <h2 class="text-2xl text-neutral-800 font-semibold text-center">
          <span class="text-header-gradient-big">{{ title }}</span>
        </h2>
         
            <!-- Image Upload Modal -->
            <div v-if="isModalOpen" class="modal-overlay">
              <div class="modal-content">
                <h3>Inserer une image au milieu du contenu</h3>
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
                <button @click="submitImage" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Charger l'image</button>
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
              placeholder="Enter le titre..."
            />
          </div>


          <!-- Inside your template -->
          <div class="mb-8">
            <label for="imageInput" class="block text-md font-medium text-blue-700">
              Photo de couverture de votre publication
            </label>
            <input
              id="imageInput"
              type="file"
              @change="handleFileChange"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter the title here..."
            />
          </div>

            <!-- Textarea Field with Label -->
            <div class="mb-8">
              <label for="descriptionTextarea" class="block text-md font-medium text-blue-700">
                Ajoutez un petit texte d'accroche (caption)... <small>[<span class="text-sm text-gray-600 mt-2">{{ captionColumn.length }} / 200 </span>]</small>
              </label>

              <textarea
                id="descriptionTextarea"
                rows="3"
                v-model="captionColumn"
                @input="limitCaptionLength"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="caption..."
              ></textarea>

              <p >
               
              </p>
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
                    v-model="dataColumn"
                    :other_options="options"
                  ></tinymce>
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
              Something unexpected happened, Please check your embedded media or file type and size and try again later. Avoid videos/large images inside the text
            </div>
             
            <div v-if="titleAction == 'blog'" class="mb-8">
              <label class="flex items-center space-x-2">
              <input type="checkbox" v-model="publicPost" class="w-4 h-4">
              <h3>Cochez s'il s'agit d'une opportunité</h3>
            </label>
          </div>


            <!-- Submit Button -->
            <div class="flex justify-center">
              <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base" type="submit">
                <b>Enregistrer et publier </b>
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
      tinymce: () => { if (typeof window !== "undefined") { return import("vue-tinymce-editor" ) } },
    }, 
    data() {
      return {
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
        creatorColumn: "",
        creator : sessionStorage.getItem('username'),

        titleColumn_: "",
        captionColumn_: "",
        routeColumn_: "",
        categoryColumn_: "",
        dataColumn_: "",
        imageColumn_: "",
        creatorColumn_: "",

        toolName: "",
        toolDescriptions: "",
        toolLink: "",
        toolImage: null,
        toolCategory: "",
        toolValidation: "0",
        toolEmail: "",

        docTechnology: "",
        docTechVersion: "",

        options: {
              plugins: [
                  'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                  'searchreplace wordcount visualblocks visualchars code fullscreen',
                  'insertdatetime media nonbreaking save table contextmenu directionality',
                  'template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample'
              ],
              toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | media | help',
              
              // Ensure media plugin is configured properly
              media_live_embeds: true, // Allows embedded videos to play live
              media_filter_html: false, // Disables XSS sanitization for video embeds
              
              // Optional: Language file URL
              // language_url: '/path-to-your-language-file.js',

              // Add valid elements to allow iframe and video tags
              valid_elements: '*[*]', // Allows all elements and attributes
              extended_valid_elements: 'iframe[src|width|height|frameborder|allow|allowfullscreen],video[src|controls],source[src|type]'
          }

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
        updateDataColumn(content) {
          this.dataColumn = content;
        },
        handleFileChange(event) {
          const file = event.target.files[0];
          this.imageColumn = file;
        },
        handleLogoFileChange(event) {
          const file = event.target.files[0];
          this.toolImage = file;
        },
        getSourceAction () {
            const action = this.$route.query.v;
            this.titleAction = action;
            console.log("titleaction :", this.titleAction); 

            console.log(action);
            if (action == "blog") {
                this.title = "Créer et publier une publication / opportunité";
                this.request = "/blog/store"
            }
        },
        async submitAndPublish() {
            try {
                this.loading = true;
                const storedBarrierDetails = sessionStorage.getItem('token');

                //remove symbols like , . ~!@#$%^&*()_+}|}{}|:"?><"
                this.routeColumn = this.titleColumn
                    .normalize("NFD") // Normalize Unicode characters
                    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
                    .trim() // Remove leading and trailing whitespace
                    .toLowerCase() // Convert to lowercase
                    .replace(/[^\w\s-]/g, "") // Remove symbols except word characters, spaces, and hyphens
                    .replace(/^-+|-+$/g, "") // Remove leading or trailing hyphens
                    .replace(/\s+/g, "-") // Replace spaces with a single hyphen
                    .replace(/-+/g, "-"); // Collapse multiple hyphens into one

                const formData = new FormData(); 
                  formData.append('blogTitle', this.titleColumn);
                  formData.append('blogCaption', this.captionColumn);
                  formData.append('blogRoute', this.routeColumn);
                  formData.append('blogCategory', this.categoryColumn);
                  formData.append('blogData', this.dataColumn);
                  formData.append('publicPost', this.publicPost == true ? 1 : 0);
                  console.log("blogData is :  ", this.dataColumn);
                 
                  formData.append('imageUrl', this.imageColumn);

                // Send the POST request with the FormData object
                console.log("formdata:", JSON.stringify(formData));
                const response = await this.$axios.post(this.request, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${storedBarrierDetails}`,  
                    },
                });

                console.log(" title ==> data : ", this.titleColumn );
                console.log(" caption  ==> data : ", this.captionColumn );
                console.log(" route  ==> data : ", this.routeColumn );
                console.log(" category  ==> data : ", this.categoryColumn );
                console.log(" data  ==> data : ", this.dataColumn );
                console.log(" image  ==> data : ", this.imageColumn );
                console.log("Response:", JSON.stringify(response.data));

                if (response.data.status_code === 200) {
                    this.success = true;
                }
                else {
                    this.failure = true;
                }

            } catch (error) {
                console.error(error);
            }
            finally {
              this.loading = false;  
            }

        },
        async saveNewTool() {
            try {
                this.loading = true;
                console.log('we tryna submit something');
                const storedBarrierDetails = sessionStorage.getItem('token');
                console.log("token : ", storedBarrierDetails);

                const formData = new FormData();
                formData.append('name', this.toolName);
                formData.append('descriptions', this.toolDescriptions);
                formData.append('link', this.toolLink);
                formData.append('ownerEmail', this.toolEmail);
                formData.append('imageUrl', this.toolImage);
                formData.append('category', this.toolCategory);
                formData.append('validated', this.toolValidation);
 
                
                const response = await this.$axios.post(this.request, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${storedBarrierDetails}`,  
                    },
                }); 

                console.log("Response:", JSON.stringify(response.data));
                if (response.data.status_code === 200) {
                    this.success = true;
                }
                else {
                    this.failure = true;
                }
            } catch (error) {
                console.error(error);
            }
            finally {
              this.loading = false;  
            }

        },
    },
    async fetch() {
        // Call the definetitle method when the component is loaded
        this.getSourceAction();

    },
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
 
  