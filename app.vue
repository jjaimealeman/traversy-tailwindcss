<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/*
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap');
*/
</style>

<script setup>
useHead({
  //  link: [
  //    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  //    {
  //      rel: 'stylesheet',
  //      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap',
  //    },
  //  ],
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-smooth'
  },
  link: [
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      href: '/fonts/noto-sans-v27-latin-regular.woff2'
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      href: '/fonts/plus-jakarta-sans-v3-latin-700.woff2'
    }
  ],
  bodyAttrs: {
    //        class: 'debug-screens bg-zinc-901/[0.98]',
    class: 'debug-screens bg-white-900/[0.98]',
    // script: [ { children: 'console.log(\'Hello world\')' } ]
  },
});
</script>

