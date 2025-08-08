<template>
  <client-only>
     <!-- AI Top trend section --> 
    <section v-if="isLoading">Loading...</section>
    <section v-else class="bg-partner desktopview relative max-w-full sm:mx-2 my-0 shadow sm:rounded-2xl overflow-hidden">
      <!-- Display single blog post -->
     
      <div v-if="isLoading" class="w-full px-6 sm:px-0 py-4 flex flex-col space-y-4 text-center">
        <!-- Loading animation or text -->
        <p>Loading...</p>
      </div>
      <div v-else class="px-2 sm:px-0 py-0 flex flex-col space-y-2 ml-3 mr-3">
        <br>
         
        <br></br><br></br><br></br>
        
        <h6 class="text-xs sm:text-sm text-neutral-500 font-semibold">
          <span class="text-header-gradient-big">{{ titleMessage }}</span>
        </h6>
        <hr>
        <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
          <span class="text-header-gradient-big">{{ details.blogTitle }}</span>
        </h2>
        <!-- POST HEADLINES SECTION -->
        <div class="flex flex-col items-center sm:flex-row sm:items-center"> <!-- Wrap elements in a flex container -->
          <div class="text-center sm:text-left mb-4 sm:mb-0 mr-10"> <!-- Adjust alignment for text on mobile -->
            <!-- Displaying post details -->
            <p class="text-neutral-700">
              Publié par 
              <b>
                <a v-if="details.creator" :href="'/profile/' + details.creator">
                  {{ details.realnames }}
                </a>
                <a v-else href="#">
                  {{ details.realnames }}
                </a>
              </b> | {{ details.creation_date }} | Catégorie: <b>{{ details.blogCategory }}</b>
            </p>
          </div>
          <!-- Share buttons section -->
          <div class="flex flex-wrap justify-center sm:justify-start"> <!-- Wrap share buttons and adjust alignment -->
            <!-- WhatsApp share button -->
            &nbsp;Partager sur : 
            <a :href="whatsappShareUrl" target="_blank" rel="noopener noreferrer" class="share-button">
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <Whatsapp :size="14" />
              </base-button>
            </a>
            <!-- Facebook share button -->
            <a :href="facebookShareUrl" target="_blank" rel="noopener noreferrer" class="share-button">
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <Facebook :size="14" />
              </base-button>
            </a>
            <!-- Twitter share button -->
            <a :href="twitterShareUrl" target="_blank" rel="noopener noreferrer" class="share-button">
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <Twitter :size="14" />
              </base-button>
            </a>
            <!-- Instagram share button -->
            <a :href="instagramShareUrl" target="_blank" rel="noopener noreferrer" class="share-button">
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <Instagram :size="14" />
              </base-button>
            </a>
            <!-- Linkedin share button -->
            <a :href="linkedinShareUrl" target="_blank" rel="noopener noreferrer" class="share-button">
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1  rounded-full flex items-center justify-center relative" style="background-image: linear-gradient(to right, #468ef9, #030a3c); color: white;">
                <Linkedin :size="14" />
              </base-button>
            </a>
          </div>
          </div>
          <img v-if="isYoutubeLink==false" :src="details.imageUrl" 
            alt="Post Image" 
            class="block max-w-[900px] max-h-[600px] w-auto h-auto object-contain float-left" />
          <!-- if isYoutubeLink is true then display details.blogData as url in a youtube video reader-->
          <div v-if="isYoutubeLink == true" class="w-full">
            <iframe 
              width="100%" 
              height="600"
              :src="getYoutubeEmbedUrl(details.blogData)" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>


          </div>
            <div v-if="isYoutubeLink==false" class="justify-left" v-html="details.blogData"></div>
        </div>
        <br>
          <LandingComment class="m-8" type="blog" :id="details.id" :route="details.blogRoute" :creator="details.creator"/>
    </section> 
  </client-only>
</template>
<script>
export default {
  layout: 'blog',
  watchQuery: ['_blogRoute'],
  data() {
    return {
      year: `${new Date().toLocaleString('fr-FR', { year: 'numeric' })}`,
      details: null,
      isLoading: true,
      shareRoute: null,
      shareTitle: null,
      sanitizedContent: '',
      isYoutubeLink: false,
      blogRoute: null // Start as null, update in mounted()
    };
  },
  computed: {
    whatsappShareUrl() {
      if ( this.isOpportunity ) {
        return `https://api.whatsapp.com/send?text=Check out this opportunity: ${this.blogTitle} https://beatexpertise.com/opportunities/${this.blogRoute}`;
      } else { 
        return `https://api.whatsapp.com/send?text=Check out this blog post: ${this.blogTitle} https://beatexpertise.com/blogs/${this.blogRoute}`;
      }
    },
    facebookShareUrl() {
      if (this.isOpportunity) {
        return `https://www.facebook.com/sharer/sharer.php?u=https://beatexpertise.com/opportunities/${this.blogRoute}`;
      } else {
        return `https://www.facebook.com/sharer/sharer.php?u=https://beatexpertise.com/blogs/${this.blogRoute}`;
      } 
    },
    twitterShareUrl() {
      if (this.isOpportunity) {
        return `https://twitter.com/intent/tweet?text=${this.blogTitle}&url=https://beatexpertise.com/opportunities/${this.blogRoute}`;
      } else {
        return `https://twitter.com/intent/tweet?text=${this.blogTitle}&url=https://beatexpertise.com/blogs/${this.blogRoute}`;
      }
    },
    instagramShareUrl() {
      if( this.isOpportunity) {
        return `instagram://story-camera?background_image=${encodeURIComponent("https://beatexpertise.com/opportunities/" + this.blogRoute)}`;
      } else {
        return `instagram://story-camera?background_image=${encodeURIComponent("https://beatexpertise.com/blogs/" + this.blogRoute)}`;
      } 
    },
     linkedinShareUrl() { 
      if (this.isOpportunity) {
        const url = "https://everlytools.com/" + this.username + "/opportunities/" + this.blogRoute;
        return 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      } else { 
        // blogs
        const url = "https://everlytools.com/" + this.username + "/blogs/" + this.blogRoute;
        return 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      } 
    }
  },
  mounted() {
    // Try retrieving blogRoute from multiple sources
    this.blogRoute =
      this.$route.params.blogRoute ||
      this.$route.query.blogRoute ||
      window.location.pathname.split('/').pop() ||
      new URL(window.location.href).pathname.split('/').pop(); // Extra fallback

    // Ensure blogRoute is valid before making the request
    if (this.blogRoute && this.blogRoute !== 'blogs') {
      this.loadBlogData();
    } else {
      console.error(" Error: blogRoute not detected!");
    }
},

watch: {
  "$route": {
    immediate: true,
    handler(to) {
      this.blogRoute =
        to.params.blogRoute ||
        to.query.blogRoute ||
        window.location.pathname.split('/').pop() ||
        new URL(window.location.href).pathname.split('/').pop();
      if (this.blogRoute && this.blogRoute !== 'blogs') {
        this.loadBlogData();
      }
    }
  }
},
  methods: {
    getYoutubeEmbedUrl(input) {
      if (!input) return '';
      let url = '';

      // Case 1: Extract from iframe src
      const iframeMatch = input.match(/<iframe[^>]+src="([^"]+)"/);
      if (iframeMatch) {
        url = iframeMatch[1];
      } else {
        // Case 2: Extract from anchor href
        const anchorMatch = input.match(/href="([^"]+)"/);
        url = anchorMatch ? anchorMatch[1] : input.trim();
      }

      // Case 3: Extract video ID from YouTube URL
      const idMatch = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/);
      const videoId = idMatch?.[1];

      return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    },

    
    async loadBlogData() {
    if (!this.blogRoute || this.blogRoute.length < 3) { // Prevents invalid routes
      console.error(" Error: Invalid blogRoute detected!");
      return;
    }
    try {
      const response = await this.$axios.get(`/blog/getall?route=${this.blogRoute}`);
      this.details = response?.data?.blog?.[0] || {};
      console.log('blog file ==========>', this.details.imageUrl);
     
      if (this.details.blogData && (this.details.blogData.includes('youtube') || this.details.blogData.includes('youtu.be')) && this.details.blogData.length < 999) {
        this.isYoutubeLink = true;
      } else {
        this.isYoutubeLink = false;
      }

      this.isLoading = false;
    } catch (error) {
      console.error(" API Error loading blog:", error);
      this.isLoading = false;
    }
  }
  }, 
};
</script>

<style scoped>
/* if it's desktop view, add some margins */

.desktopview {
  margin: 0 auto;
  max-width: 1200px; /* Adjust as needed */
}

</style>

 