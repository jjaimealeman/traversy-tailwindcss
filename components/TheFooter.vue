<template>

<DarkMode />

  <footer class="w-full mt-8 p-4 bg-gray-100/[0.97] dark:bg-zinc-900/[0.95] text-zinc-400 border-t-2 border-t-blue-400 text-center">
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
          <Icon class="hover:scale-110" name="logos:nuxt-icon" size="28" title="Nuxt3" />
          <Icon class="hover:scale-110" name="simple-icons:directus" size="28" alt="Directus" />
          <Icon class="hover:scale-110" name="simple-icons:astro" size="28" />
          <Icon class="hover:scale-110" name="logos:tailwindcss-icon" size="28" />
          <Icon class="hover:scale-110" name="logos:netlify" size="28" />
          <Icon class="hover:scale-110" name="radix-icons:vercel-logo" size="28" />
        </p>
      </div>
      <div class="z-[60] fixed px-2 bottom-0 right-0 bg-black text-white border-[1px] border-white p-1 text-xs">
        {{ width }} x {{ height }}
      </div>
    </div>
  </footer>
</template>


<script setup>
// import { useDateFormat, useNow, useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const getDate = useDateFormat(useNow(), 'YYYY')
</script>


<style scoped>
.tech svg {
  @apply mx-2 mt-2
}
</style>
<!-- <p>Copyright &copy; {{ getDate }} | jjaimealeman </p> -->

