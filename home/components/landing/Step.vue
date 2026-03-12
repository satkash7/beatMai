<template>
    <div 
      class="w-full max-w-[380px] mx-auto bg-white dark:bg-dark-card shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl border border-transparent dark:border-dark-border flex flex-col h-full"
    >
      <div class="relative flex-shrink-0">
        <a :href="'/blogs/' + blog.blogRoute" class="block">
          <img :src="blog.imageUrl" 
               class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80" 
               :alt="blog.blogTitle" />
        </a>
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <a :href="'/blogs/' + blog.blogRoute" class="block flex-grow">
          <h3 class="text-lg font-bold text-gray-800 dark:text-dark-text hover:text-blue-500 transition-all duration-300 mb-3">
            {{ blog.blogTitle }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
            {{ blog.blogCaption }}
          </p>
        </a>
        
        <!-- Lien "Lire la suite" -->
        <div class="mt-auto pt-3 border-t border-gray-100 dark:border-dark-border">
          <a 
            :href="'/blogs/' + blog.blogRoute" 
            class="text-blue-600 dark:text-sky-400 hover:text-blue-800 dark:hover:text-sky-300 font-medium flex items-center justify-center transition-colors duration-300 group"
          >
            Lire la suite
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
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