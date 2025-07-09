<template>
  <client-only>
     <!-- AI Top trend section -->
    <div class="container mx-auto px-6">
    <section v-if="isLoading">Loading...</section>
    <section v-else class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">
      <!-- Display single blog post -->
      <div v-if="isLoading" class="w-full px-6 sm:px-0 py-4 flex flex-col space-y-4 text-center">
        <!-- Loading animation or text -->
        <p>Loading...</p>
      </div>
      <div v-else class="px-6 mr-6 ml-6 sm:px-0 py-0 flex flex-col space-y-4">
        <br>
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
          <img :src="details.imageUrl" 
            alt="Post Image" 
            class="block max-w-[900px] max-h-[600px] w-auto h-auto object-contain float-left" />
            <div class="justify-left" v-html="details.blogData"></div>
        </div>
        <br>
          <LandingComment class="m-8" type="blog" :id="details.id" :route="details.blogRoute" :creator="details.creator"/>
    </section>
     </div>
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
    async loadBlogData() {
    if (!this.blogRoute || this.blogRoute.length < 3) { // Prevents invalid routes
      console.error(" Error: Invalid blogRoute detected!");
      return;
    }
    try {
      const response = await this.$axios.get(`/blog/getall?route=${this.blogRoute}`);
      this.details = response?.data?.blog?.[0] || {};
      console.log('blog file ==========>', this.details.imageUrl);
      this.isLoading = false;
    } catch (error) {
      console.error(" API Error loading blog:", error);
      this.isLoading = false;
    }
  }
  }, 
};
</script>

 