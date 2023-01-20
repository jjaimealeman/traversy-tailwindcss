<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/*
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap');
*/
/* .page-enter-active, */
/* .page-leave-active { */
/*   transition: all 0.4s; */
/* } */
/**/
/* .page-enter-from, */
/* .page-leave-to { */
/*   opacity: 0; */
/*   filter: blur(1rem); */
/* } */
/**/
/* .layout-enter-active, */
/* .layout-leave-active { */
/*   transition: all 0.4s; */
/* } */
/**/
/* .layout-enter-from, */
/* .layout-leave-to { */
/*   filter: grayscale(1); */
/* } */
/**/
/* .rotate-enter-active, */
/* .rotate-leave-active { */
/*   transition: all 0.4s; */
/* } */
/**/
/* .rotate-enter-from, */
/* .rotate-leave-to { */
/*   opacity: 0; */
/*   transform: rotate3d(1, 1, 1, 15deg); */
/* } */
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
    //  {
    //    rel: 'dns-prefetch',
    //    rel: 'preload',
    //    as: 'font',
    //    type: 'font/woff2',
    //    crossorigin: 'anonymous',
    //    href: '/fonts/noto-sans-v27-latin-regular.woff2'
    //  },
    //  {
    //    rel: 'dns-prefetch',
    //    rel: 'preload',
    //    as: 'font',
    //    type: 'font/woff2',
    //    crossorigin: 'anonymous',
    //    href: '/fonts/plus-jakarta-sans-v3-latin-700.woff2'
    //  },
    //  {
    //    rel: 'dns-prefetch',
    //    rel: 'preload',
    //    as: 'font',
    //    type: 'font/woff2',
    //    crossorigin: 'anonymous',
    //    href: '/fonts/architects-daughter-v18-latin-regular.woff2'
    //  },
    {
      //    rel: 'dns-prefetch',
      rel: 'preload',
      rel: 'prefetch',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      href: '/fonts/be-vietnam-pro-v10-latin-regular.woff2'
    },
    {
      //    rel: 'dns-prefetch',
      rel: 'preload',
      rel: 'prefetch',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      href: '/fonts/bebas-neue-v9-latin-regular.woff2'
    }
  ],
  bodyAttrs: {
    //        class: 'debug-screens bg-zinc-901/[0.98]',
    //        'overflow-x-hidden' // prevents the body from adding a side scrollbar
    class: 'debug-screens subpixel-antialiased overflow-x-hidden',
    // script: [ { children: 'console.log(\'Hello world\')' } ]
  },
});
</script>

