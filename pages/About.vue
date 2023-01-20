<template>

  <main class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-x-14 xl:gap-x-20 my-4 md:my-8 lg:my-16">
    <section id="hello"
      class="col-span-3 xl:col-span-2 text-lg md:text-xl border-t-4 border-t-yellow-400 border-b-4 border-b-red-600 p-4 md:p-8 bg-gradient-to-b from-sky-200 to-sky-100">
      <h1 class="text-3xl md:text-4xl lg:text-5xl pb-4 ">Hello, Hey, Hola, Howdy - I'm Jaime</h1>
      <p class="pt-4 md:pt-8">
        As a child I was a creative artistic kid. I always carried around my beloved sketchbook and some pencils 💙 I
        loved to draw/sketch in graphite, charcoal, and also pen & ink. I drew hundreds of portraits of family &
        friends. Also, many sports figures and celebrities.
      </p>
      <p class="pt-4 md:pt-8">
        I graduated from Montwood H.S. in ‘95 where I took a class in Desktop Publishing. There I immediately fell in
        love with graphic design - I learned about typography, composition & layout, color theory and general design
        principles.
      </p>
      <p class="pt-4 md:pt-8">
        In early 2000’s I discovered I could ‘Right Click & View Source’ on any website (pretty cool!). It wasn’t long
        before I was teaching myself HTML and learning how the web worked. Everything from network protocols, hardware
        configurations, DNS and web servers.
      </p>
      <p class="pt-4 md:pt-8">
        In later years I fell in love with Linux and have been hand-coding my websites ever since! I learned how to
        configure counltess Apache Web Servers, as well as NGINX. Along the way I learned PHP/MySQL. Lately I have
        been really invested in learning Vite + VueJS + NuxtJS.
      </p>
      <p class="pt-4 md:pt-8">
        Nearly twenty years later, I finally found the
        courage to start my own little business as a Web Developer.
      </p>
    </section>
    <div class="col-span-3 xl:col-span-1 ">
      <div id="me" class="flex flex-col md:flex-row xl:flex-col justify-between">
        <section class="flex flex-col mx-auto mb-12 xl:my-24 items-center justify-between">
          <p class="arch font-bold mb-2 text-xl -rotate-[10deg]">
            <span class="text-sky-500">
              I made this
            </span>
            <Icon class="bg-white w-8 h-8" flip="vertical" name="akar-icons:pointer-hand" />
          </p>
          <img src="~/assets/vectorme.png" alt="A vectorized self-portrait"
            class="rounded-2xl w-auto -rotate-[10deg] shadow-gray-800">
        </section>
        <section id="only"
          class="flex flex-col items-end justify-center p-4 md:p-8 text-right text-sm bg-sky-100 border-t-4 border-t-yellow-400 border-b-4 border-b-sky-500 w-full md:w-1/2 xl:w-full">
          <p class="pb-4">
            Jaime J. Aleman
          </p>
          <p class="pb-4">
            Father to two brilliant beautiful teen daughters.
          </p>
          <p class="pb-4">
            My dog 🐶 Midas, is my most trusted coding companion.
          </p>
          <p class="pb-4">
            I've lived in El Paso for over 30 years and about 5 years in Fort Worth TX.
          </p>
        </section>
      </div>
    </div>
  </main>

  <section id="details" class="flex flex-col items-center justify-center border-t-4 border-sky-500">
    <div class="max-w-3xl text-center text-lg md:text-xl">
      <div class="mx-4">
        <h3 class="text-3xl mt-8">Why do I hand code?</h3>
        <p class="mx-auto text-left my-4">
          I love hand-coding static websites and it's a craft I have been perfecting for a few years.
        </p>
        <p class="mx-auto text-left mb-4">
          You may know someone who loves to carve wood and makes the most beautiful figurines. Or you may know an old
          school mechanic who doesn't use power tools - his hands are his greatest tools. Or an artistic stone mason who
          hammers and chisels his stone to create works of art.
        </p>
        <p class="mx-auto text-left mb-4">
          That's me ... the perfectionist! <br>
          The wood worker. The mechanic. The mason. <br>
          The artist!
          <icon name="emojione-v1:artist-palette" />
        </p>
        <p class="mx-auto text-left mb-4">
          A well coded static website can load many times faster than any WordPress, Wix, or SquareSpace website.
          Those services are fine to use, but they generate some horribly bloated unnecessary code. That "code bloat"
          will
          slow down your website.
        </p>
        <p class="mx-auto text-left mb-4">
          High speed Internet is available almost everywhere and most smartphones are capable of 4G/5G speeds.
          The average web site visitor will abandon a slow loading website within 3-5 seconds.
          If they abandon your slow loading website never to return again, where will they go? Probably to Google and
          search for your
          competitor.
        </p>
        <p class="mx-auto text-left">
          Google will index, crawl, and measure the performance of your mobile website. This is <strong>mobile-first
            indexing</strong>. There are many metrics that Google uses to determine if your website performs well or
          not.
        </p>
        <p class="mx-auto text-left">
          I work very very hard to make sure to meet those numbers.
        </p>
        <p class="mx-auto text-left">
          Many Developers use <a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank">Google
            lighthouse</a> to
          measure the performance of their websites.
        </p>
        <div class="max-w-3xl mx-auto mt-8 border-4 border-sky-300 rounded-xl shadow-zinc-500 shadow-xl">
          <img src="https://i.imgur.com/cEUo3ax.png" width="672" height="175" alt="">
        </div>
        <p class="mx-auto text-left mt-8">
          This screenshot is the result of running a Lighthouse test on my own personal website. 👍
        </p>
      </div>
    </div>
  </section>

</template>


<style scoped>
h1,
h2,
p {
  @apply font-viet text-zinc-700;
}

h1 {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.arch {
  @apply font-arch;
}
</style>


<script setup lang="ts">
definePageMeta({
  layout: 'website915',
});
useHead({
  title: 'About 915website | Web Development and Design Services',
  meta: [
    { name: 'description', content: 'Web Development and Design services for local business owners in El Paso Texas.' }
  ],
});
</script>
