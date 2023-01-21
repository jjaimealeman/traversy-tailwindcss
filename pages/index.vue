<template>

  <div>
    <section id="header"
      class="flex flex-col md:flex-row items-center justify-center mx-auto my-4 md:my-8 lg:my-16 md:space-x-6 lg:space-x-12">

      <div class="relative md:w-1/2 lg:w-3/4 text-center md:text-left">
        <h1 class="block font-beba uppercase mb-4">
          <span class="text-5xl md:text-7xl lg:text-9xl text-sky-600">915</span>
          <span class="text-4xl md:text-6xl lg:text-8xl">website</span>
          <span class="text-3xl md:text-5xl lg:text-7xl">.com</span>
        </h1>
        <span
          class="absolute left-1/4 md:left-0 px-2 py-1 font-arch text-rose-700 text-lg md:text-2xl lg:text-3xl -rotate-12 z-10 bg-gradient-to-r from-amber-100 to-amber-400">AFFORDABLE</span>
        <h2 class="text-3xl font-beba md:text-4xl lg:text-5xl pb-4 pt-12 z-20">Web Development and Design services for
          local
          business owners in El Paso
          Texas.
        </h2>
      </div>
    </section>

    <section id="presence"
      class="w-fit mx-auto border-4 border-sky-500 my-4 md:my-8 lg:my-16 p-4 md:p-8 rounded-3xl shadow-zinc-500 shadow-2xl">
      <h3 class=" text-3xl md:text-4xl lg:text-5xl pb-4">
        Do you have an online presence?
      </h3>
      <p class="text-xl md:text-2xl lg:text-3xl ">
        Having a strong web presence is more important now than ever!
      </p>
      <p class="text-xl md:text-2xl lg:text-3xl pb-4">
        I help El Paso business owners by building a website that will attract more customers.
      </p>
      <p class="text-xl md:text-2xl lg:text-3xl ">
        The power of Google Maps &amp; Searching is in everyones pockets, purses, and cars!!
      </p>
      <p class="text-xl md:text-2xl lg:text-3xl italic">
        How do you stack up against your competition?! 
      </p>
    </section>


    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 py-12">
      <div class="text-center p-4 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
        <h3 class="text-3xl">Domain Name</h3>
        <Icon class="text-sky-500 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h20" name="gg:rename" />
        <p>Free registration and management of your website.</p>
        <p>Privacy Protection is enabled by default to deter spam from ever getting to your inbox!</p>
      </div>
      <div class="text-center p-4 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
        <h3 class="text-3xl">Web Hosting</h3>
        <Icon class="text-sky-500 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h20" name="ph:computer-tower" />
        <p>A fast and reliable host means your visitors don't have to wait long for your website to connect.</p>
        <p>If for any reason your Host is not responding, another instantly connects to share the load.</p>
      </div>
      <div class="text-center p-4 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
        <h3 class="text-3xl">Basic SEO</h3>
        <Icon class="text-sky-500 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h20" name="ph:google-logo-bold" />
        <p class="italic">"Content is King!"</p>
        <p>Proper organization of the page elements, strong keyword focused titles and descriptions are vital.</p>
        <p>Get recognized by Google with well-structured content.</p>
        <p></p>
      </div>
      <div class="text-center p-4 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
        <h3 class="text-3xl">Fully Custom</h3>
        <Icon class="text-sky-500 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h20" name="carbon:tools-alt" />
        <p>Carefully chosen icons, images, colors, and fonts.</p>
        <p>Hand-coding is a tedious process, but it guarantees your website to be unique &amp; fast!</p>
        <p>
          <NuxtLink class="alink" to="/About#details">Why do I code by hand?
          </NuxtLink>
        </p>
      </div>
      <div class="text-center p-4 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
        <h3 class="text-3xl">Mobile First Design</h3>
        <Icon class="text-sky-500 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h20" name="ion:iphone" />
        <p>A responsive design is expected by your visitors.</p>
        <p>Your website will look great on all mobile devices. From small screens, to tablets, all the way to larger
          screens.</p>
      </div>
      <div class="text-center p-4 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
        <h3 class="text-3xl">Optimized Images</h3>
        <Icon class="text-sky-500 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h20" name="clarity:picture-line" />
        <p>Large photos are carefully resized and duplicated to serve on smaller screens.</p>
        <p>Smaller screens download smaller photos, and larger screens get the full size photo.</p>
      </div>
    </section>

  </div>

</template>


<style scoped>
.ass {
  @apply bg-sky-300/50 border-2 border-dotted border-zinc-800 m-2;
}
</style>


<script setup lang="ts">
definePageMeta({
  layout: 'website915',
});
useHead({
  title: '915website | El Paso Web Development and Design Services',
  meta: [
    { name: 'description', content: 'Web Development and Design services for local business owners in El Paso Texas.' }
  ],
});
</script>
