<template>
  <client-only>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div
        class="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
      ></div>
      <BaseNavbar from="tip"/>
      <LoadingIndicator />

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
  name: 'TipsLayout',
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