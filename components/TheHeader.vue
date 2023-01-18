<template>
  <header class="fixed top-0 w-full border-b-2 border-b-blue-400 bg-gray-100/[0.97] dark:bg-zinc-900/[0.95] z-50">
    <nav class="container mx-auto py-2 flex flex-col md:flex-row items-center justify-between z-50">
      <div>
        <NuxtLink to="/" title="Home">
          <JJA class="w-12 h-12" />
        </NuxtLink>
      </div>
      <ul class="text-center">
        <li>
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Directus"> Directus </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/LoopStudios"> LoopStudios </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Shortly"> Shortly </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Testimonial"> Testimonial </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Fylo"> Fylo </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Bookmark"> Bookmark </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class="py-16 md:py-12"></div>
</template>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
a.router-link-active {
  /* 
  @apply text-blue-400 dark:text-blue-400;
  */ 
  @apply border-b-2 border-blue-400;
}

/* exact link will show the primary color for only the exact matching link */
a {
  @apply text-zinc-900 dark:text-white font-bold;
}

a:hover {
  @apply text-blue-400 duration-200 border-0;
}

li {
  @apply inline-block mx-4 mt-2 md:mt-0;
}
/*
li:not(:first-child) {
  @apply ml-8
}

li:last-child {
  @apply mr-8;
}*/
</style>
