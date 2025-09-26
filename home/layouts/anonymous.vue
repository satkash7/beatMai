<template>
  <client-only>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <LoadingIndicator />
      <BaseNavbar from="anonymous"/>
        <main class="text-neutral-800">
          <Nuxt />
        </main>
      <BaseFooter />
    </div>
  </div>
</client-only>
</template>


<script>
import LoadingIndicator from "@/components/LoadingIndicator.vue";
export default {
  name: 'BlogLayout',
  components: {
    LoadingIndicator,
  },
  $route(to, from) {
    if (to.path !== from.path) {
      this.$nuxt.$emit('routeChange');
    }
  }
}
</script>