<template>

    <div class="flex flex-col">
      <div class="max-w-sm rounded-md overflow-hidden shadow-lg m-3 bg-white text-gray-800 ring-2 ring-gray-200 dark:ring-0">
      <!--div class="flex flex-col w-auto rounded-md overflow-hidden shadow-lg m-3"-->
        <img class="w-full" src="https://picsum.photos/400/250" alt="Random picsum image" />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">Lorem ipsum dolor sit</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis eius reprehenderit aliquid esse et repellendus
            exercitationem nostrum deserunt, harum dignissimos.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2 mb-2">#Alpha</span>
          <span class="badge mr-2 mb-2">#Bravo</span>
          <span class="badge">#Charlie</span>
        </div>
      </div>
    </div>

</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer;

  &:hover {
    @apply bg-gray-400;
  }
}
</style>
