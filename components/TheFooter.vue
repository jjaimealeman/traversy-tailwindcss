<template>

<DarkMode />

  <footer class="w-full mt-8 p-4 bg-gray-100/[0.97] dark:bg-zinc-900/[0.95] text-zinc-600 border-t-2 border-t-blue-400 text-center">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between italic">
        <p class="text-xs">
          by
          <JA class="inline w-8 h-8" />
          with
          <Icon name="lucide:coffee" size="16" />
          &amp;
          <Icon name="lucide:heart" size="16" />
          <!-- {{ new Date().getFullYear() }} -->
        </p>
        <p class="tech">
          <Icon class="hover:scale-110" name="logos:nuxt-icon" size="28" alt="Nuxt3" />
          <Icon class="hover:scale-110" name="simple-icons:directus" size="28" alt="Directus" />
          <Icon class="hover:scale-110" name="simple-icons:astro" size="28" alt="Astro" />
          <Icon class="hover:scale-110" name="logos:tailwindcss-icon" size="28" alt="TailwindCSS" />
          <Icon class="hover:scale-110" name="logos:netlify" size="28" alt="Netlify" />
          <Icon class="hover:scale-110" name="radix-icons:vercel-logo" size="28" alt="Vercel" />
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.tech svg {
  @apply mx-2 mt-2
}
</style>
<!-- <p>Copyright &copy; {{ getDate }} | jjaimealeman </p> -->
<!-- const getDate = useDateFormat(useNow(), 'YYYY') -->

