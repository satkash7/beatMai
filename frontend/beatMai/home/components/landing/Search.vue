<template>
  <client-only>
  <div class="full ml-6 mr-6 mx-auto justify-left">
    <form @submit.prevent="runSearch">  
      <hr><br>
      <div class="flex items-center justify-between">
  <input
    class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888] mr-2 ml-2 border border-gradient-to-r from-[#468ef9] to-[#030a3c]"
    :placeholder="placeholderTitle"
    v-model="query"
  />
  <base-button class="h-12 mt-0 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative">
  &nbsp;&nbsp;<SearchIcon :size="34" /> Rechercher&nbsp;&nbsp;&nbsp;

  </base-button>
</div>

    <div v-if="validsearch == true" class="flex justify-center items-center text-[#4A8FF6]">
      <!-- Loading wheel -->
      <svg class="animate-spin h-5 w-5 text-gray-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.01 4.01L2.585 5.436A9.956 9.956 0 002 12c0 5.523 4.477 10 10 10v-4c-3.58 0-6.763-1.926-8.493-5.045z"></path>
      </svg>
      <span><b>Recherche en cours : {{ this.type == 'doc' ? 'documentation' : this.type }}s ...</b></span>
    </div>
  </form>

   <!-- Display all trends -->
   <div class="w-full px-6 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
      <h3 v-if="showSearchResultTitle == true" class="text-1xl text-neutral-800 font-semibold">
        Recherche pour : <span class="text-header-gradient-big text-1xl"> {{ this.query }}</span>
      </h3>
      <div class="flex flex-wrap items-center justify-center">
        <LandingBlog v-for="blogItem in searchResult" :opportunity="blogItem.type == 'blog' ? false : true" :key="blogItem.id" :blog="blogItem" @open-blog="showSingleBlog(blogItem)" />
      </div> 

      <div v-if="invalidsearch" class="bg-red-400 text-white px-4 py-2 rounded-md mb-4">
        Aucun résultat trouvé pour votre recherche.
      </div>
    </div>
    <hr>
    <br><br> <br><br>

  </div>
</client-only>
</template>

<script>
export default {
  name: 'LandingSearch',
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      query: "",
      invalidsearch: false,
      validsearch: false,
      showSearchResultTitle: false,
      searchResult: [],
      placeholderTitle: this.type == 'doc' ? 'Search by documentations category, title, tool name, technology, etc...' : 'Rechercher une publication ici...'
    }
  },
 
  methods: {
    async runSearch() {
      this.validsearch = true;
      try {
        const response = await this.$axios.get('/blog/getall?search=' + this.query);

        if (response.data.status_code === 200) {
          this.showSearchResultTitle = true;
          if (this.type == 'blog') {
            // exclude blogs with publicPost == '0'
            this.searchResult = response.data.blogs;
            // this.searchResult = response.data.blogs;

          } else if (this.type == "opportunitie") {
            this.searchResult = response.data.opportunities;
          }
          
          // console.log("We got something from search result :", JSON.stringify(this.searchResult));
       
          setTimeout(() => {
              this.validsearch = false;
          }, 100);

          //animate failure in case we didn't find the result or result is invalid or empty
          if (this.searchResult.length === 0) {
            this.invalidsearch = true;
            setTimeout(() => {
              this.invalidsearch = false;
              this.validsearch = false;
            }, 3000);
          }
        }
        else {
          this.invalidsearch = true;
          setTimeout(() => {
            this.invalidsearch = false;
            this.validsearch = false;
        }, 3000);
        }
      } catch (error) {
        console.error(error);
        this.invalidsearch = true;
          setTimeout(() => {
            this.invalidsearch = false;
            this.validsearch = false;
        }, 3000);
      }
    },
    showSingleBlog(blog) {
      this.$router.push({ path: `/blogs/${blog.blogRoute}` });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({ path: `/opportunities/${opportunity.opportunityRoute}` });
    },
  },
}
</script>