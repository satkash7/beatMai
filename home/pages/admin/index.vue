<template>
  <client-only>
     <!-- AI Top trend section -->
      <div class="w-full container mx-auto px-6">
    <section class="bg-partner relative max-w-full sm:mx-6 my-0 shadow sm:rounded-2xl overflow-hidden">

      <!-- Display single blog post -->
      <div v-if="isLoading" class="w-full px-6 sm:px-0 py-4 flex flex-col items-center justify-center space-y-4 text-center">
        <!-- Loading animation or text -->
        <p>Loading...</p>
      </div>
      
      <div v-else class="w-full px-6 mr-0 ml-0 sm:px-0 py-0 flex flex-col items-center justify-center space-y-4">
        <!-- Display all blogs -->
        <div class="w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-x-3">
          
          </div>
          <div class="absolute top-0 right-0 whitespace-nowrap"> 
              <a v-if="user.username == 'admin'" href="/profile/admin"  class="px-4 py-2 bg-blue-500 text-white rounded">Votre profile ( {{ user.username }})</a>  
              <a @click="logout"  class="px-4 py-2 bg-blue-500 text-red rounded cursor-pointer">Deconnexion</a>
          </div>
          <br><br>

          <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
            <span class="text-header-gradient-big">Vos blogs / articles publiés</span>
          </h2>

          <div v-if="blogs && blogs.length > 0" class="flex flex-wrap items-center justify-center">
            <div v-for="blogItem in blogs" :key="blogItem.id" class="relative group">
              <LandingBlog :blog="blogItem" @open-blog="showSingleBlog(blogItem)" />

              <!-- Action Buttons (Visible on Hover) -->
              <div class="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <!-- Edit Button -->
                <button
                  @click="editItem('blog', blogItem.blogRoute)"
                  class="bg-blue-500 text-white p-1 rounded-full"
                >
                  <PencilIcon :size="20" />
                </button>

                <!-- Delete Button -->
                <button
                  @click="deleteItem('blog', blogItem.id)"
                  class="bg-red-500 text-white p-1 rounded-full"
                >
                  <TrashCanIcon :size="20" />
                </button>
              </div>
            </div>
          </div>
          <div v-else class="flex flex-wrap items-center justify-center">
            <div class="px-6 py-4 bg-gray-100 flex items-center"> <!-- Added 'flex items-center' -->
              Pas de post?. Cliquez sur le bouton
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative">
                  <PlusIcon :size="14" />
              </base-button>
              au dessus.
            </div>
          </div>
        </div>

        <!-- Display all blogs -->
        <div class="w-full px-8 sm:px-0 my-0 py-0 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 class="text-lg sm:text-xl md:text-2xl text-neutral-800 font-semibold">
            <span class="text-header-gradient-big">Vos opportunités publiées</span>
          </h2>
          <div v-if="opportunities && opportunities.length > 0" class="flex flex-wrap items-center justify-center">
            <div v-for="opportunityItem in opportunities" :key="opportunityItem.id" class="relative group">
              <LandingBlog :blog="opportunityItem" @open-blog="showSingleOpportunity(opportunityItem)" />

              <!-- Action Buttons (Visible on Hover) -->
              <div class="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <!-- Edit Button -->
                <button
                  @click="editItem('blog', opportunityItem.blogRoute)"
                  class="bg-blue-500 text-white p-1 rounded-full"
                >
                  <PencilIcon :size="20" />
                </button>

                <!-- Delete Button -->
                <button
                  @click="deleteItem('blog', opportunityItem.id)"
                  class="bg-red-500 text-white p-1 rounded-full"
                >
                  <TrashCanIcon :size="20" />
                </button>
              </div>
            </div>
          </div>
          <div v-else class="flex flex-wrap items-center justify-center">
            <div class="px-6 py-4 bg-gray-100 flex items-center"> <!-- Added 'flex items-center' -->
              Pas de post?. Cliquez sur le bouton
              <base-button class="w-6 h-6 mt-0 mr-1 ml-1 bg-gradient-to-r from-[#468ef9] to-[#030a3c] text-white rounded-full flex items-center justify-center relative">
                  <PlusIcon :size="14" />
              </base-button>
              au dessus.
            </div>
          </div>
        </div>

       
         

      </div>
    </section> 
      </div>
  </client-only>
</template>

<script>
import aosMixin from '@/mixins/aos';
export default {
  name: 'user-component',
  layout: 'user',
  mixins: [aosMixin],
  data() {
    return {
      year: `${new Date().toLocaleString('en-us', { year: 'numeric' })}`,
      isLoading: true,
      opportunities: [], 
      blogs: [], 
      user: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    // Check if the page is being reloaded
    const isReload = from.name === null;

    if (isReload) {
      // Redirect to /u if the page is being reloaded
      next('/u');
    } else {
      next();
    }
  },
  async asyncData({ app }) {
    try {
      let storedBarrierDetails = null;
      if (typeof sessionStorage !== 'undefined') {
        storedBarrierDetails = sessionStorage.getItem('token');
        console.log("token ===========> : ", storedBarrierDetails);
      }
      const response = await app.$axios.get(`/user/mydetails`, {
        headers: {
          Authorization: `Bearer ${storedBarrierDetails}`,  
        },
      });

      const userdetails = response.data.user;
      const userblogs = response.data.blogs;
      const useropportunities = response.data.opportunities;

      // Update loading state to false
      console.log('response data:', response.data);
      return { user: userdetails, opportunities: useropportunities, blogs: userblogs, isLoading: false };
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors if needed
      return { details: null, isLoading: false };
    }
  },
  methods: {
    // logout 
    logout() {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('name');
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          localStorage.removeItem('email');
          localStorage.removeItem('name');
        }
        this.$router.push('/u');
      }
    },
    showSingleBlog(blog) {
      this.$router.push({ path: `blogs/${blog.blogRoute}` });
    },
    showSingleOpportunity(opportunity) {
      this.$router.push({ path: `opportunities/${opportunity.blogRoute}` });
    }, 
    editItem(category, route) {
      this.$router.push({ path: `/edit?category=${category}&route=${route}` });
    },

    async deleteItem(category, blogId) {
      if (confirm("Voulez vous vraiment supprimer cette publication ?")) {
        try {
          let storedBarrierDetails = null;
          if (typeof sessionStorage !== 'undefined') {
            storedBarrierDetails = sessionStorage.getItem('token');
          }
          const response = await this.$axios.delete(`/${category}/delete/${blogId}`, {
            headers: {
              Authorization: `Bearer ${storedBarrierDetails}`,  
            },
          });
          if (response.data.status_code == 200) {
            this.blogs = this.blogs.filter(blog => blog.id !== blogId);
            // display alert for success
            alert("Votre publication a été supprimée avec succès.");
            // refresh the page
            this.$router.go();
          } else {
            // display alert for failure
            alert("Echec lors de la supression de la publication.");
          }
        } catch (error) {
          console.error("Failed to delete the post :", error);
        }
      }
    },
  },
};
</script>
