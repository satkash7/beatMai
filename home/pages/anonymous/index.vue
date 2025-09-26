<template>
  <client-only>
  
    <div class="bg-green-200 text-green-800 py-4 px-8 rounded my-6 text-center">
      Create your account for free, and start publishing blogs, tips, and documentations for your AI tools...
    </div>
      
     
  </client-only>
</template>

<script>
export default {
  name: "LandingAnonymous",
  layout: "anonymous",
  mounted() {
    setTimeout(() => {
      this.$router.push('/u');
    }, 4000);
  },
};
</script>


<style scoped>
p {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
