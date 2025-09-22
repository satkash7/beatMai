<template>
  <client-only>
    <div 
      class="max-w-[320px] xl:max-w-[380px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-5 mr-5"
    >
      <div class="relative">
        <a :href="'/blogs/' + blog.blogRoute" class="block">
          <img :src="blog.imageUrl" 
               class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80" 
               :alt="blog.blogTitle" />
        </a>
      </div>
      <div class="p-4">
        <a :href="'/blogs/' + blog.blogRoute" class="block">
          <h3 class="text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-300 mb-3">
            {{ blog.blogTitle }}
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {{ blog.blogCaption }}
          </p>
        </a>
        
        <!-- Lien "Lire la suite" -->
        <div class="mt-4 pt-3 border-t border-gray-100">
          <a 
            :href="'/blogs/' + blog.blogRoute" 
            class="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center transition-colors duration-300 group"
          >
            Lire la suite
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'LandingStep',
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>