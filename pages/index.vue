<template>
  <div class="container mx-auto">
    <!-- alert message -->
    <div
      class="flex flex-col items-center justify-center text-center 
      py-4 md:py-12 px-2 md:px-8 
      my-10 mx-auto 
      bg-amber-300 text-zinc-700 ring-amber-700 ring-4 rounded-md w-2/3 shadow-xl shadow-sky-300 dark:shadow-gray-900">
      <h3 class="text-xl lg:text-2xl">
        These are my experiments with TailwindCSS, Directus, &amp; Nuxt.
      </h3>
      <p class="text-base lg:text-xl italic p-2 border-b-2 border-amber-500">They may be terrible but it's a wonderful learning experience.
      </p>
      <p>
        I'm following this 
        <Icon name="logos:udemy" size="75" /> course by the amazing <a
          class="underline underline-offset-2 text-amber-700"
          href="https://www.udemy.com/course/tailwind-from-scratch/">Brad Traversy</a>
      </p>
      <small>As a sidenote: I
        <Icon class="mx-1 text-rose-600" name="ph:heart-duotone" size="16" />
        <Icon name="logos:neovim" size="75" />
      </small>
    </div>

    <EmailSubscribe class="zinc" />
    
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <TheCard />
    <TheCard />
    <TheCard />
</div>

  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
});
</script>
