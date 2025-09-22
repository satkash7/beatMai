<template>
  <client-only>
  <div v-if="loading || loadingError" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 opacity-75 z-50">
    <div v-if="loading" class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    <div v-if="loadingError" class="text-white">Error loading data. Please try again later.</div>
  </div>
</client-only>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingError: false,
    };
  },
  created() {
    this.$nuxt.$on('routeChangeStart', () => {
      this.loading = true;
      this.loadingError = false; // Reset error state
    });

    this.$nuxt.$on('routeChangeComplete', () => {
      this.loading = false;
      this.loadingError = false;
    });

    this.$nuxt.$on('routeChangeError', () => {
      this.loading = false;
      this.loadingError = true;
    });
  },
};
</script>

<style scoped>
/* Customize the loading spinner styles as needed */
.loader {
  border-top-color: #4a90e2;
  border-left-color: #4a90e2;
}
</style>
