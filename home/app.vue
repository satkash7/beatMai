<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global app configuration
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  bodyAttrs: {
    class: ''
  }
})
</script>
