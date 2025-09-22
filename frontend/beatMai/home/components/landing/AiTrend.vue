<template>
  <client-only>
    <div 
  class="relative bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
  >

      <a :href="link" target="_blank">  
        <div class="relative">
          <img
            v-if="img != null && !small" 
            :src="img" 
            :class="small ? 'h-40 w-full':'h-72 w-full'" 
            class="rounded-t-lg object-cover transition-opacity duration-500 ease-in-out"
            alt="Trends"
          />
          <div class="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 hover:opacity-10"></div>
        </div>
        <div class="p-4 text-center">
          <h3 class="text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-300">{{ title }}</h3>
          <p class="text-gray-600 text-sm">{{ description }}</p>
        </div>
      </a>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      url: ""
    }
  },
  async mounted() {
   this.url = this.$config.storageUrl;
   console.log("image => ", this.url);
  },
}
</script>
