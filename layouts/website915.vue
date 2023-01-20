<template>
  <div id="default_template"
    class="container mx-auto pb-12 max-w-7xl bg-white text-zinc-800 dark:bg-zinc-800 dark:text-white">
    <div class="flex flex-row items-start justify-between">

      <img class="-rotate-12 w-24 md:w-28 lg:w-32 ml-4 mt-4" src="~/assets/915website-logo.svg" width="135" height="140"
        alt="">

      <nav class="bg-white w-full p-4 text-lg md:text-xl lg:text-2xl text-right">
        <NuxtLink class="pr-4" to="/"> Home </NuxtLink>
        <NuxtLink class="pr-4" to="/"> About </NuxtLink>
        <NuxtLink class="pr-4" to="/"> Services </NuxtLink>
        <NuxtLink class="pr-4" to="/"> Contact </NuxtLink>
      </nav>
    </div>

    <slot />
  </div>
</template>

