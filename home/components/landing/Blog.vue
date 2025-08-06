<template>
  <client-only> 
    <div @click="handleClick" class="inline-block cursor-pointer hover:shadow-md transition duration-300">
      <img v-if="blog.imageUrl != null && blog.imageUrl != ''" :src="blog.imageUrl" class="max-w-[245px] mx-auto sm:rounded-2xl transition duration-300 transform hover:scale-105"/>
      <img v-else :src="require('~/assets/img/ai.jpg')" class="max-w-[245px] mx-auto sm:rounded-2xl transition duration-300 transform hover:scale-105"/>
      <div class="text-container max-w-[245px] mx-auto">
        <h3 class="text-xl text-neutral-800 font-semibold hover:text-blue-500 transition duration-300">{{ blog.blogTitle }}</h3>
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
    }
  },
  methods: {
    handleClick() {
      this.$emit('open-blog', this.blog);
    },
  },
}
</script>
