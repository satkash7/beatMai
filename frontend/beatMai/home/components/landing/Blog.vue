<template>
  <client-only> 
     
    <div @click="handleClick" class="max-w-[520px] xl:max-w-[580px] bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ml-7 mr-7 mt-10 mb-10">
      <span v-if="opportunity==true">
        <img :src="require('~/assets/img/opp.jpg')" class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80"/>
      </span>
      <span v-else>
        <img v-if="blog.imageUrl != null && blog.imageUrl != ''" :src="blog.imageUrl" class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80"/>
        <img v-else :src="require('~/assets/img/default.jpg')" class="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 ease-in-out hover:opacity-80"/>
      </span>
      <div class="text-container max-w-[385px] mx-auto">
      <h4 class="text-xl text-neutral-800 font-semibold hover:text-blue-500 transition duration-300">{{ blog.blogTitle }}</h4>
      <p class="text-sm text-gray-700 leading-relaxed">
        {{ blog.blogCaption }}
      </p>
      </div> 
  </div>
</client-only>
</template>

<script>
export default {
  name: 'LandingBlog',
  props: {
    blog: {
      type: Object,
      required: true,
    },
    opportunity: {
      type: Object,
      required: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('open-blog', this.blog);
    },
  },
}
</script>
