<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* .slide-left-enter-active, */
/* .slide-left-leave-active, */
/* .slide-right-enter-active, */
/* .slide-right-leave-active { */
/*   transition: all 0.2s; */
/* } */
/**/
/* .slide-left-enter-from { */
/*   opacity: 0; */
/*   transform: translate(50px, 0); */
/* } */
/**/
/* .slide-left-leave-to { */
/*   opacity: 0; */
/*   transform: translate(-50px, 0); */
/* } */
/**/
/* .slide-right-enter-from { */
/*   opacity: 0; */
/*   transform: translate(-50px, 0); */
/* } */
/**/
/* .slide-right-leave-to { */
/*   opacity: 0; */
/*   transform: translate(50px, 0); */
/* } */
</style>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-smooth'
  },
  link: [
    //    href: '/fonts/noto-sans-v27-latin-regular.woff2'
    //    href: '/fonts/plus-jakarta-sans-v3-latin-700.woff2'
    //    href: '/fonts/architects-daughter-v18-latin-regular.woff2'
    {
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
    class: 'debug-screens subpixel-antialiased overflow-x-hidden',
  },
});
</script>

