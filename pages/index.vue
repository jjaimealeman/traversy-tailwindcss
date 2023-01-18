<template>
  <div class="container mx-auto py-8 lg:py-16 xl:py-20">

    <main class="text-zinc-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-x-14 xl:gap-x-20">
      <section id="online-presence" class="order-first col-span-2 bg-gray-200/90 border-t-4 border-t-yellow-500 border-b-4 border-b-red-600
        p-4 md:p-8
        ">
        <h1 class="
        text-3xl md:text-4xl lg:text-5xl 
        pb-4
        ">Do you have an online presence?</h1>
        <p class="text-xl md:text-2xl lg:text-3xl py-4 md:py-6 lg:py-8">
          I help El Paso business owners by building a website that will attract more customers.
        </p>
        <p class="text-xl md:text-2xl lg:text-3xl py-4 md:py-6 lg:py-8">
          Having a strong web presence is more important now than ever!
        </p>
        <p class="text-xl md:text-2xl lg:text-3xl py-4 md:py-6 lg:py-8">
          The power of the shopping and searching is in everyones pockets, purses, and cars!!
        </p>
        <p class="text-xl md:text-2xl lg:text-3xl py-4 md:py-6 lg:py-8 italic">
          How do you stack up against your competition?! 
        </p>
      </section>
      <section id="dealio"
        class="col-span-2 lg:col-span-1 bg-gray-200/90 p-4 md:p-8 border-t-4 border-t-sky-500 border-b-4 border-b-black">
        <h2 class="text-lg md:text-xl lg:text-2xl"> Here’s the dealio! </h2>
        <ul class="list-disc list-outside pl-4">
          <li class="pt-4 md:pt-8 text-lg md:text-xl">
            Fully 100% custom coded. <br />
            Your website is <span class="underline">GUARANTEED</span> unique!
          </li>
          <li class="pt-4 md:pt-8 text-lg md:text-xl">
            Fast & Reliable Web Hosting.
          </li>
          <li class="pt-4 md:pt-8 text-lg md:text-xl">
            Contact Form.
          </li>
          <li class="pt-4 md:pt-8 text-lg md:text-xl">
            Domain name.
          </li>
          <li class="pt-4 md:pt-8 text-lg md:text-xl">
            Regular Backups.
          </li>
        </ul>
        <h2 class="text-lg md:text-xl lg:text-2xl pt-4 md:pt-8"> Additional Options </h2>
        <p class="pt-4 md:pt-8 text-lg md:text-xl">
          Custom logo, English & Spanish translation, multiple themes, e-commerce capability, personalized Control
          Panel are additional options!
        </p>
        <p class="text-xs md:text-sm pt-4 text-right">
          Complete details on the Services Page.
        </p>
      </section>
      <section id="description"
        class="col-span-2 -order-2 lg:order-none p-4 md:p-8 bg-gray-200/90 border-t-4 border-t-gray-400 border-b-4 border-b-gray-400">
        <p class="text-lg md:text-xl lg:text-2xl">
          I offer affordable Web Development &amp; Design Services  for the savvy El Paso TX<span
            class="text-red-600">*</span> Business Owner.
        </p>
      </section>
      <section id="only"
        class="col-span-2 lg:col-span-1 p-4 md:p-8 text-right text-sm bg-gray-200/90 border-t-4 border-t-red-600 border-b-4 border-b-yellow-500">
        <p class="font-bold pb-4">
          <span class="text-red-600">*</span> El Paso TX Business Owners ONLY!
        </p>
        <p class="pb-4">
          WHY only local?
        </p>
        <p>
          I pride myself on delivering a great product and service with real face-to-face Customer Interaction. 
        </p>
      </section>
    </main>

    <div class="container mx-auto mb-8 flex justify-center md:justify-end">
      <button class="rounded-lg bg-sky-500 text-white mr-6 md:mr-0 mt-6 p-2 px-4 ring-2 ring-sky-700"
        aria-label="Read More">
        <Icon class="animate-ping" name="ic:round-keyboard-double-arrow-right" />
        Read more about my Services
      </button>
    </div>

  </div>
</template>


<script setup lang="ts">
definePageMeta({
  layout: 'none',
});
useHead({
  title: '915website | Web Development and Design Services',
  meta: [
    { name: 'description', content: 'Web Development and Design services for local business owners in El Paso Texas.' }
  ],
});
</script>
