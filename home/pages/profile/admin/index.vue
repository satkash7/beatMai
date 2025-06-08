<template>
  <client-only>
    <div class="w-full container mx-auto px-6">
      <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden p-6">
        <div v-if="isLoading" class="w-full flex flex-col items-center justify-center text-center">
          <p>Loading...</p>
        </div>
          <div v-if="successMessage  && !loading" class="bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center">
            <p v-html="successMessage"></p>  
          </div>
            <div v-if="errorMessage  && !loading" class="bg-red-200 text-green-800 py-4 px-8 rounded my-6 text-center">
              <p v-html="errorMessage"></p>
          </div>
        <div v-else class="w-full flex flex-col items-center justify-center space-y-6">
          <div class="flex space-x-2">
            <button v-if="isOwner"  @click="toggleEdit" class="px-4 py-2 bg-blue-500 text-white rounded">
              {{ isEditing ? 'Mettre à jour' : 'Modifier le profile ' }}
            </button>
          </div>

          <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 flex">
            <div class="w-1/3 flex flex-col items-center">
              <label for="photoUpload" class="cursor-pointer">
                <div class="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img v-if="photoUrl" :src="photoUrl" alt="Profile Picture" class="w-full h-full object-cover" />
                  <span v-else class="text-gray-500">Photo</span>
                </div>
              </label>
              <input id="photoUpload" type="file" @change="uploadPhoto" class="hidden" :disabled="!isEditing" accept="image/*" />   
            </div>
            <div class="w-2/3 space-y-3">
              <div class="relative">
                <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Noms</label>
                <input v-model="name" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
              </div>
              <div class="relative">
                <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Email</label>
                <input v-model="email" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
              </div>
              <div class="relative">
                <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Titre</label>
                <input v-model="title" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
              </div>
              <!-- Password field with show/hide toggle -->
              <div class="relative" v-if="isOwner">
                <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">
                  Votre mot de passe <small>(Only visible to you)</small>
                </label>
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  :disabled="!isEditing"
                  class="border rounded-lg p-3 w-full bg-gray-100"
                />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3C4.477 3 0 10 0 10s4.477 7 10 7 10-7 10-7-4.477-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zM10 7a3 3 0 100 6 3 3 0 000-6z"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 5a5 5 0 00-4.546 2.915A8.004 8.004 0 002 10c1.73 2.91 5.028 5 8 5s6.27-2.09 8-5a8.004 8.004 0 00-3.454-2.085A5 5 0 0010 5zM10 3a7 7 0 017 7c0 1.13-.35 2.52-1.182 3.78-.776 1.182-2.01 2.22-3.818 2.22s-3.042-1.038-3.818-2.22C3.35 12.52 3 11.13 3 10a7 7 0 017-7z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {{name }} - Actif depuis : {{ createdAt }}
          <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div class="relative">
              <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Siteweb</label>
              <input v-model="website" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
            </div>
            <div class="relative">
              <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">LinkedIn</label>
              <input v-model="linkedin" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
            </div>
            <div class="relative">
              <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">GitHub</label>
              <input v-model="github" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
            </div>
            <div class="relative">
              <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Twitter</label>
              <input v-model="twitter" :disabled="!isEditing" class="border rounded-lg p-3 w-full" />
            </div>
            <div class="relative">
            <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Bio</label>
            <textarea 
              v-model="bio" 
              :disabled="!isEditing" 
              ref="bioTextarea"
              class="border rounded-lg p-3 w-full resize-none overflow-hidden min-h-[200px]"
              @input="adjustHeight('bioTextarea')"
            ></textarea>
          </div>
          
          <div class="relative mt-4">
            <label class="absolute text-gray-500 text-sm px-2 bg-white -top-2 left-3">Activité</label>
            <textarea 
              v-model="interest" 
              :disabled="!isEditing" 
              ref="interestTextarea"
              class="border rounded-lg p-3 w-full resize-none overflow-hidden min-h-[200px]"
              @input="adjustHeight('interestTextarea')"
            ></textarea>
          </div>
          </div>
        </div>
      </section>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'ProfilePage',
  layout: 'user',
  data() {
    return {
      isLoading: true,
      isEditing: false,
      user: {},
      loading: false,
      name : "",
      createdAt: "",
      password: "",
      email: "",
      title: "",
      website: "",
      linkedin: "",
      twitter: "",
      github: "",
      
      // store the uploaded profile photo 
      photo: null,
      photoUrl: "",
      successMessage: "",
      errorMessage: "",
      showPassword: false,

      bio: "",
      interest: "",

    };
  },
  computed: {
    isOwner() {
      let loggedInUser = sessionStorage.getItem('username' );
      if ( typeof loggedInUser === 'string') {
        loggedInUser = loggedInUser.trim();  
        if (loggedInUser === this.user.username ) {
           return true
        } else  { return false }
      } else { return false }
    }
  },

  async asyncData({ params, app }) {
    try {
      console.log("Fetching user details for username:", params.username);
      let token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;
      let username = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('username') : null;
      const response = await app.$axios.get(`/user/${username}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.status_code == 200) {
        const user = response.data.user || {}; // Ensure user is always an object
        console.log("Profile pic : ", user.photoUrl);
        return {
          user,
          name: user.name || "",
          password: user.password || "",
          email: user.email || "",
          title: user.title || "",
          website: user.website || "",
          linkedin: user.linkedin || "",
          twitter: user.twitter || "",
          github: user.github || "",
          bio: user.bio + "\n" || "",
          interest: user.interest + "\n" || "",
          photoUrl: user.photoUrl || "",
          createdAt: user.created_at 
            ? new Date(user.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }) 
            : "",
          isLoading: false,
          metaTags: {
            title: "Beat Expertise",
            keywords: + 'Beat Expertise',
            image: "https://storage.everlytools.com/beatexpertise.jpg",
            url: "https://beatexpertise.com"
          }
        };
      } else {
        return { user: {}, isLoading: false }; // Ensure user is an object
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      return { user: {}, isLoading: false }; // Return an empty object instead of null
    }
  },

  methods: {
    toggleEdit() {
      if (this.isEditing) {
        this.updateProfile(); // Call the API only when clicking "Save"
      } else {
        this.isEditing = true; // Switch to edit mode
      }
    },

    async updateProfile() {
      try {
        console.log("Updating profile...");
        this.isLoading = false;
        let token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;

        // Create FormData
        let formData = new FormData();
        formData.append("name", this.name);
        formData.append("password", this.password);
        formData.append("email", this.email);
        formData.append("title", this.title);
        formData.append("website", this.website);
        formData.append("linkedin", this.linkedin);
        formData.append("twitter", this.twitter);
        formData.append("github", this.github);
        formData.append("bio", this.bio);
        formData.append("interest", this.interest);
        // Append photo only if a new one is selected
        if (this.photo) {
          formData.append("photo", this.photo);
        }

        const response = await this.$axios.post(`user/${this.$route.params.username}/profile/update`, formData, {
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" // Required for file upload
          },
        });

        if (response.data.status_code === 200) {
          this.successMessage = "Profile actualisé avec succès !";
          setTimeout(() => location.reload(), 2000);
        } else {
          this.errorMessage = "Erreur lors de l'actualisation du compte.";
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        this.errorMessage = "Erreur lors de l'actualisation du compte.";
      }
    },


    uploadPhoto(event) {
      if (!this.isEditing) return;
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          this.photoUrl = reader.result; // Set Base64 image preview
          this.photo = file; // Store the file
        };
        reader.readAsDataURL(file);
      } else {
        alert("Veuillez selectionner l'image valide.");
      }
    },

    adjustHeight(refName) {
      this.$nextTick(() => {
        const textarea = this.$refs[refName];
        if (textarea) {
          textarea.style.height = "auto"; // Reset height to auto
          textarea.style.height = textarea.scrollHeight + "px"; // Set new height
        }
      });
    },
  },
  mounted() {
    this.adjustHeight("bioTextarea");
    this.adjustHeight("interestTextarea");
  },
  watch: {
    bio() {
      this.adjustHeight("bioTextarea");
    },
    interest() {
      this.adjustHeight("interestTextarea");
    }
  },

  head() {
      return {
          title: "Beat Expertise",
          meta: [
              { hid: 'description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'keywords', name: 'Beat Expertise' },
              { hid: 'robots', content: 'index, follow' },
              { hid: 'googlebot', content: 'index, follow' },
              { hid: 'bingbot', content: 'index, follow' },
              { hid: 'yandex', content: 'index, follow' },
              
              // Open Graph (Facebook, LinkedIn, etc.)
              { hid: 'og:title', property: 'og:title', content: "Beat Expertise"},
              { hid: 'og:description', property: 'og:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'og:image', property: 'og:image', content: this.metaTags.image },
              { hid: 'og:url', property: 'og:url', content: this.metaTags.url },
              { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' }, // Primary language
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_GB' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'zh_CN' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'hi_IN' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_ES' },
              { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_US' },
              { hid: 'og:type', property: 'og:type', content: 'website' },
              // Twitter Meta Tags
              { hid: 'twitter:title', content: "Beat Expertise" },
              { hid: 'twitter:description', content: 'BEAT est un bureau d\'expertise et d\'accompagnement technique basé à Goma, en République Démocratique du Congo, dédié à offrir des solutions innovantes et un soutien spécialisé.' },
              { hid: 'twitter:image', content: this.metaTags.image },
              { hid: 'twitter:card', content: 'summary_large_image' },
              { hid: 'twitter:url', content: this.metaTags.url }
            ]
        };
      }
    };
</script>