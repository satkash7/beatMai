<template>
  <client-only>
  <div class="full ml-6 mr-6 mx-auto justify-left">
    <hr>
    <!-- COMMENTS CARDS -->
    <div v-for="comment in comments" :key="comment.id" class="mx-auto justify-left bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-6 py-4 bg-gray-100 flex items-center">
  <!-- Clickable Profile Picture or Icon -->
  <router-link :to="'#'" class="w-6 h-6 mr-2 flex items-center justify-center overflow-hidden rounded-full bg-gray-200">
    <img v-if="comment.ownerUrl" :src="comment.ownerUrl" alt="Profile Picture" class="w-full h-full object-cover" />
    <base-button v-else class="w-6 h-6 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center">
      <AccountIcon :size="14" />
    </base-button>
  </router-link>

  <!-- Comment Details -->
  <b class="mr-1">
    <router-link :to="'#'" class="text-blue-600 hover:underline">
      {{ comment.commentOwner }}
    </router-link>
  </b> 
  | {{ comment.creation_date }}
</div>

      <div class="px-6 py-4">
        <p class="text-gray-700">
          {{  comment.commentData }}
        </p>
      </div>
      <br> 
    </div> 
    <br>
    <hr>
    <form @submit.prevent="prePostComment">  
      <hr><br> 
      <textarea
        rows="3"
        class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
        placeholder="Votre commentaire ici!"
        v-model="vData"
      /><br> 
    <div class="flex flex-col sm:flex-row"> 
      <BaseButton 
        class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
        type="submit"
      >
        <b>Poster un commentaire</b>
      </BaseButton>
    </div>
  </form>

     <!-- Modal dialog -->
     <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
         <div v-if="userLoggedIn == false && selected==false">
            <base-button class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]" @click="postAnonymously">
              Poster mon commentaire
          </base-button>
          <br>
           
          <div v-if="textCopiedToClipBoard == true || readytoRedirect == true" 
            class="flex bg-green-400 text-white mt-2 mb-2 px-4 py-2 rounded-md mb-4">  
            <base-button class="w-6 h-6 mt-0 mr-1 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative">
                <AccountIcon :size="14" />
            </base-button>
            <span>
              We saved your comment, We'll post it when you log in. redirecting...
            </span> 
          </div>
          
        </div>
          
        <form v-if="selected || userLoggedIn == true" @submit.prevent="postComment" id="comments">
          <h2 class="text-2xl font-semibold">Publier un Commentaire <span class="text-header-gradient"> </span></h2>
          <div v-if="addedRequest" class="bg-green-400 text-white px-4 py-2 rounded-md mb-4">
            Votre commentaire a été enregistré avec succès.
          </div>
          <div v-if="failedRequest" class="bg-red-400 text-white px-4 py-2 rounded-md mb-4">
            Something unexpected happened, Please try again later.
          </div>  
          <textarea
              rows="3"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Votre commentaire ici!"
              v-model="vData"
            /><br> 
            
          <div class="flex flex-col sm:flex-row"> 
            <BaseButton 
              class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
              type="submit"
            >
              Publier ce commentaire
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</client-only>
</template>

<script>
export default {
  name: 'LandingBlog',
  props: {
    type: {
      type: String,
      default: null,
    },
    id: {
      required: true,
      type: Number,
      default: null
    },
    route: {
      required: true,
      type: String,
      default: null
    },
    creator: {
      required: true,
      type: String,
      default: null
    }

  },
  data() {
    return {
      textCopiedToClipBoard: false,
      readytoRedirect: false,
      userLoggedIn: null,
      addedRequest: false,
      failedRequest: false,
      commentOwner: "",
      commentType: "",
      commentTypeId: "",
      commentData: "",
      commentHidden: "0",
      showModal: false,
      selected: false,
      vData: "",
      fallbackLink: "",
      commentSaved: false,
      comments: []
    }
  },
  async mounted() {
    // Fetch data from the API endpoint
    this.userLoggedIn = sessionStorage.getItem('username') ? true : false;
    await this.$axios.get('/comment/getall?type=' + this.type + '&id=' + this.id)
      .then(response => {
        this.comments = response.data.comments;
        console.log("comments =================> ");
        console.log("Response:", JSON.stringify(response));
      })
      .catch(error => {
        console.error('Could not fetch the comments ==============>:', error);
      });
  },
  updated() {
    this.$nextTick(() => { 
      if (window.location.hash === '#comments') { 
        window.scrollTo(0, document.body.scrollHeight);
        // check if we have saved in the  local storage a value for comment
        this.vData = localStorage.getItem('commentdata');
        if (this.vData && this.vData != "" && this.vData != undefined && this.vData != 'undefined' && this.vData != null && this.commentSaved == false) {
          this.prePostComment();
          this.postComment(true);
        }
      }
    });
  },
  methods: {
    postAnonymously() {
      this.selected = true;
    },
    loginthenPost() {
      this.copyToClipboard(this.vData);
      this.readytoRedirect = false;
      setTimeout(() => {
        this.textCopiedToClipBoard = false;
      }, 100);
      this.readytoRedirect = true;
      setTimeout(() => {
        this.readytoRedirect = false;
        localStorage.setItem('commentdata', this.vData); // Save user comment in browser before continuing.
        // localStorage.setItem('type', this.type);
        // localStorage.setItem('id', this.id);
        
        if (this.type == "doc"){
          this.fallbackLink = "documentations&route=" + this.route + '&creator=' + this.creator;
        }
        else {
          this.fallbackLink = this.type + "s&route=" + this.route + '&creator=' + this.creator;
        }
        this.$router.push("/u?next=" + this.fallbackLink);
      }, 4000);
    },
    copyToClipboard(text) {
      // Use the Clipboard API to copy text to the clipboard
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard:', text);
          this.textCopiedToClipBoard = true;
        })
        .catch(error => {
          console.error('Error copying to clipboard:', error);
        });
    },
    prePostComment() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async postComment(fromredirect = false) {
      try {
        this.commentOwner = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : "anonymous";
        const response = await this.$axios.post('/comment/add', {
          commentOwner: this.commentOwner, // to be checked in backend
          commentType: this.type,
          commentTypeId: this.id,
          commentData: this.vData,
          commentHidden: this.commentHidden
        });

        console.log("Response:", JSON.stringify(response));
        if (response.data.status_code === 200) { 
            this.addedRequest = true;
            this.commentSaved = true;
            localStorage.removeItem('commentdata');
            // Hide success message after 3 seconds
            setTimeout(() => {
              this.addedRequest = false;
              this.commentData = "";
              this.vData = "";
              this.showModal = false;

              if (fromredirect != true) {
                if (this.type == "doc") {
                  this.$router.push('/' + this.creator + "/documentations/" + this.route + "#comments");
                } else {
                  this.$router.push('/' + this.creator + "/" + this.type + "s/" + this.route + "#comments");
                }
                location.reload();
              } else {
                // do not send user again to #comments to avoid issues.
                if (this.type == "doc") {
                  this.$router.push('/' + this.creator + "/documentations/" + this.route);
                } else {
                  this.$router.push('/' + this.creator + "/" + this.type + "s/" + this.route);
                }
                location.reload();
              }
            }, 4000);
            }
        else {
            this.failedRequest = true;
            setTimeout(() => {
              this.addedRequest = false;
          }, 3000);
        }
      } catch (error) {
        console.error(error);
        this.failedRequest = true;
            setTimeout(() => {
              this.addedRequest = false;
          }, 3000);
      }
    },
  },
}
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  border-radius: 12px;
}

.close {
  color: #030a3c;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-top: -10px;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

</style>

