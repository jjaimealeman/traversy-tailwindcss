<template>
  <header class="top-0 sticky z-50 bg-zinc-900/[0.95] text-white w-full border-b-2 border-b-blue-400 p-4 text-center">
    <nav>
      <ul>
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
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
a.router-link-active {
  @apply text-blue-400;
}

/* exact link will show the primary color for only the exact matching link */
a {
  @apply text-zinc-400;
}

li {
  @apply inline-block
}

li:not(:first-child) {
  @apply ml-8
}
</style>
