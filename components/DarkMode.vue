<template>
  <div
    class="fixed bottom-16 right-0">
    <button role="button" aria-label="toggle dark mode" class="m-4 p-4 rounded-full bg-gray-200 ring-2 ring-blue-400 dark:bg-gray-800 text-gray-800 dark:text-gray-200" @click="toggleDark()">
      <!--span> {{ isDark? 'Dark': 'Light' }} </span-->
      <!-- LIGHT -->
      <div class="inline dark:hidden">
        <Icon class="w-8" name="akar-icons:sun" />
      </div>
      <!-- DARK -->
      <div class="hidden dark:inline">
        <Icon class="w-8" name="bi:moon-stars" />
      </div>
    </button>
  </div>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
