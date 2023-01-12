<template>
  <div class="grid grid-cols-2 bg-zinc-100 text-gray-700 place-items-center py-8">

    <div class="flex w-[400px]">
      <!-- <div class="max-w-sm rounded-md overflow-hidden shadow-lg m-3"> -->
      <div class="flex flex-col w-auto rounded-md overflow-hidden shadow-lg m-3">
        <img class="w-full" src="https://i.imgur.com/rNspDMw.png" alt="Sunset in the mountains" />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">A Cool Autumn Day</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis eius reprehenderit aliquid esse et repellendus
            exercitationem nostrum deserunt, harum dignissimos.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2 mb-2">#Trees</span>
          <span class="badge mr-2 mb-2">#Leaves</span>
          <span class="badge">#Fall</span>
        </div>
      </div>
    </div>

    <div class="flex w-[400px]">
      <!-- <div class="max-w-sm rounded-md overflow-hidden shadow-lg m-3"> -->
      <div
        class="flex flex-col w-auto rounded-md overflow-hidden shadow-lg hover:shadow-2xl m-3 transition-shadow duration-200">
        <img class="w-full" src="https://i.imgur.com/rNspDMw.png" alt="Sunset in the mountains" />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">A Cool Autumn Day</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis eius reprehenderit aliquid esse et repellendus
            exercitationem nostrum deserunt, harum dignissimos.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2 mb-2">#Trees</span>
          <span class="badge mr-2 mb-2">#Leaves</span>
          <span class="badge">#Fall</span>
        </div>
      </div>
    </div>


  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer;

  &:hover {
    @apply bg-orange-400;
  }
}
</style>
