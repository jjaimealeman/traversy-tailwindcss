<template>
  <div class="bg-[url('~/assets/elpaso.jpg')] bg-no-repeat bg-cover bg-fixed">
    <div class="flex flex-row items-center justify-center">
      <div class="w-1/2 flex justify-end">
        <img src="~/assets/915website-logo.svg" width="150" alt="">
      </div>
      <nav class="bg-zinc-800 text-white w-1/2 p-4 text-2xl">
        <NuxtLink class="px-4" to="/"> Home </NuxtLink>
        <NuxtLink class="px-4" to="/About"> About </NuxtLink>
        <NuxtLink class="px-4" to="/Services"> Services </NuxtLink>
      </nav>
    </div>

    <slot />
  </div>
</template>

