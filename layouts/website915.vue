<template>
  <div id="default_template"
    class="container mx-auto pb-12 max-w-7xl bg-white text-zinc-800 dark:bg-zinc-800 dark:text-white">
    <div class="flex flex-row items-start justify-between">

      <img class="-rotate-12 w-24 md:w-28 lg:w-32 ml-4 mt-4" src="~/assets/915website-logo.svg" width="135" height="140"
        alt="">

      <nav class="bg-white w-full pr-4 pt-4 text-lg md:text-xl lg:text-2xl text-right">
        <NuxtLink class="p-4" to="/"> Home </NuxtLink>
        <NuxtLink class="p-4" to="/About"> About </NuxtLink>
        <NuxtLink class="p-4" to="/Services"> Services </NuxtLink>
        <NuxtLink class="p-4" to="/Contact"> Contact </NuxtLink>
      </nav>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.router-link-active, 
.router-link-exact-active
{
  @apply border-b-4 border-sky-400 text-sky-500
}
a
{
  @apply border-b-2 border-sky-200 
}



/* .router-link-exact-active */
/* { */
/*   @apply text-sky-400  */
/* } */
</style>
