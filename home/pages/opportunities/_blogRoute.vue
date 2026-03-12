<template>
  <client-only> 
    <section class="desktopview relative max-w-full sm:mx-2 my-0 shadow sm:rounded-2xl overflow-hidden">

      <!-- Display single blog post -->
      <div v-if="isLoading" class="w-full px-6 sm:px-0 py-4 flex flex-col space-y-4 text-center">
        <!-- Loading animation or text -->
        <p>Loading...</p>
      </div>
      <div v-else class="px-2 sm:px-0 py-0 h-1000 flex flex-col space-y-2">
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
           <!-- Display either PDF or Image -->
          <div class="w-full h-1000 flex justify-center mt-6">
            <!-- ensure the iframe has big height-->
            <iframe
              v-if="isPdf(details.imageUrl)"
              :src="details.imageUrl"
              class="w-full h-[1000px] border rounded"
              frameborder="0"
            ></iframe> 

            <img
              v-else
              :src="details.imageUrl"
              alt="Post Image"
              class="block max-w-[900px] max-h-[600px] w-auto h-auto object-contain float-left"
            />
          </div>

          <div class="justify-left" v-html="details.blogData"></div>
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
    };
  },
  computed: {
    // Computed property to generate WhatsApp share URL
    whatsappShareUrl() {
      if ( this.isOpportunity ) {
        return `https://api.whatsapp.com/send?text=Check out this opportunity: ${this.blogTitle} https://beatexpertise.com/opportunities/${this.blogRoute}`;
      } else { 
        return `https://api.whatsapp.com/send?text=Check out this blog post: ${this.blogTitle} https://beatexpertise.com/blogs/${this.blogRoute}`;
      }
    },

    // Computed property to generate Facebook share URL
    facebookShareUrl() {
      if (this.isOpportunity) {
        return `https://www.facebook.com/sharer/sharer.php?u=https://beatexpertise.com/opportunities/${this.blogRoute}`;
      } else {
        return `https://www.facebook.com/sharer/sharer.php?u=https://beatexpertise.com/blogs/${this.blogRoute}`;
      } 
    },

    // Computed property to generate Twitter share URL
    twitterShareUrl() {
      if (this.isOpportunity) {
        return `https://twitter.com/intent/tweet?text=${this.blogTitle}&url=https://beatexpertise.com/opportunities/${this.blogRoute}`;
      } else {
        return `https://twitter.com/intent/tweet?text=${this.blogTitle}&url=https://beatexpertise.com/blogs/${this.blogRoute}`;
      }
    },

    // Computed property to generate Instagram share URL
    instagramShareUrl() {
      if( this.isOpportunity) {
        return `instagram://story-camera?background_image=${encodeURIComponent("https://beatexpertise.com/opportunities/" + this.blogRoute)}`;
      } else {
        return `instagram://story-camera?background_image=${encodeURIComponent("https://beatexpertise.com/blogs/" + this.blogRoute)}`;
      } 
    },

     // Computed property to generate Instagram share URL
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
  async asyncData({ params, app }) {
    // Access the route parameter
    const blogRoute = params.blogRoute; 
     
    // Log the route parameter to the console for verification
    console.log('Current Route:', blogRoute);

    try {
      const response = await app.$axios.get(`/blog/getall?route=${blogRoute}`);
      console.log("result from server : ", response);
      const blogData = response.data.blog[0];
      const blogTitle = blogData.blogTitle;
      console.log('file ==>', blogData.imageUrl);

      // Update loading state to false
      return { details: blogData, rawContent: blogData.blogData, isLoading: false, username:blogData.username, blogRoute: blogRoute, blogTitle: blogTitle, 
        isOpportunity:blogData.publicPost,
        titleMessage: blogData.publicPost == '1' ? 'Opportunités' : 'Publications',
        metaTags: {
          title: blogData.blogTitle,
          description: blogData.blogCaption,
          image: blogData.imageUrl,
          url: blogData.publicPost == '1' ? `https://beatexpertise.com/opportunities/${blogRoute}` : `https://beatexpertise.com/blogs/${blogRoute}`
        }
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors if needed
      return { details: null, isLoading: false };
    }
  },
  methods: {
    isPdf(url) {
      return url?.toLowerCase().endsWith(".pdf");
    }
  },
  head() {
    if (!this.metaTags) {
      return {};
    }
    return {
        title: this.metaTags.title,
        meta: [
            { hid: 'description', name: 'description', content: this.metaTags.description },
            { hid: 'keywords', name: 'keywords', content: this.metaTags.title + ', Beat Expertise' },
            { hid: 'robots', content: 'index, follow' },
            { hid: 'googlebot', content: 'index, follow' },
            { hid: 'bingbot', content: 'index, follow' },
            { hid: 'yandex', content: 'index, follow' },
              
            // Open Graph (Facebook, LinkedIn, etc.)
            { hid: 'og:title', property: 'og:title', content: this.metaTags.title },
            { hid: 'og:description', property: 'og:description', content: this.metaTags.description },
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
            { hid: 'twitter:title', content: this.metaTags.title },
            { hid: 'twitter:description', content: this.metaTags.description },
            { hid: 'twitter:image', content: this.metaTags.image },
            { hid: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:url', content: this.metaTags.url }
        ]
    };
}
};
</script>

<style scoped>
/* if it's desktop view, add some margins */

.desktopview {
  margin: 0 auto;
  max-width: 1200px; /* Adjust as needed */
}

</style>
