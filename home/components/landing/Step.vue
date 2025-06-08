<template>
  <client-only>
    <div 
      class="max-w-[320px] xl:max-w-[380px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-5 mr-5"
    >
      <a :href="'/blogs/' + blog.blogRoute" class="block">
        <div class="relative">
          <img :src="blog.imageUrl" 
               class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80" 
               :alt="blog.blogTitle" />
        </div>
        <div class="p-4 text-center">
          <h3 class="text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-300">
            {{ blog.blogTitle }}
          </h3>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed">
            {{ blog.blogCaption }}
          </p>
        </div>
      </a>
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
