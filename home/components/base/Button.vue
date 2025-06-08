<template>
  <client-only>
  <button
    class="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"    
    v-bind="$attrs"	
    v-on="$listeners"
    >
    <slot></slot>
  </button>
</client-only>
</template>
<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
}
</script>
