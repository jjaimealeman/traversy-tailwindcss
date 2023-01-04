<template>
    <div class="flex items-center justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full"
          src="https://i.imgur.com/rNspDMw.png"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">A Cool Autumn Day</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius
            reprehenderit aliquid esse et repellendus exercitationem nostrum
            deserunt, harum dignissimos.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#Trees</span>
          <span class="badge mr-2">#Leaves</span>
          <span class="badge">#Fall</span>
        </div>
      </div>
    </div>
</template>
 
<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>

