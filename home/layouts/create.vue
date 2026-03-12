<template>
  <div class="min-h-screen font-sans antialiased relative bg-white dark:bg-dark-bg transition-colors duration-300">
    <div class="relative">
      <BaseNavbar from="blog"/>

      <main class="text-neutral-800 dark:text-dark-text transition-colors duration-300 pt-20">
        <slot />
      </main>

      <BaseFooter :is-homepage="false"/>
    </div>
  </div>
</template>
