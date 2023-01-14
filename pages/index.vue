<template>
  <div class="container mx-auto">

    <div
      class="flex flex-col items-center justify-center pt-12 pb-6 m-10 bg-amber-300 text-zinc-700 ring-amber-700 ring-4 rounded-md w-2/3 mx-auto shadow-xl shadow-sky-300">
      <h3 class="text-2xl">
        These are my experiments with TailwindCSS, Directus, &amp; Nuxt.
      </h3>
      <p class="text-xl italic">They may be terrible but it's a wonderful learning experience.
      </p>
      <p>
        I'm following the
        <Icon name="logos:udemy" size="75" /> course by the amazing <a
          class="underline underline-offset-2 text-amber-700"
          href="https://www.udemy.com/course/tailwind-from-scratch/">Brad Traversy</a>
      </p>
      <small>As a sidenote: I
        <Icon class="mx-1" name="ph:heart-duotone" size="16" />
        <Icon name="logos:neovim" size="75" />
      </small>
    </div>

    <EmailSubscribe class="zinc" />
    <TheCard />
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
