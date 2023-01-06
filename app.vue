<template>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
