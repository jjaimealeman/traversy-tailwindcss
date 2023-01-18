<template>
  <!-- Nav Container -->
  <nav class="relative container mx-auto p-6">
    <!-- Flex container for all items -->
    <div class="flex items-center justify-between">
      <!-- Flex container for logo/menu -->
      <div class="flex items-center space-x-20">
        <img src="~/assets/shortly/logo.svg">
        <!-- left menu -->
        <div class="hidden lg:flex space-x-8 font-bold">
          <a href="#" class="text-grayishViolet hover:text-veryDarkViolet">Features</a>
          <a href="#" class="text-grayishViolet hover:text-veryDarkViolet">Pricing</a>
          <a href="#" class="text-grayishViolet hover:text-veryDarkViolet">Resources</a>
        </div>
      </div>
      <!-- right buttons menu -->
      <div class="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
        <div class="hover:text-veryDarkViolet">Login</div>
        <a href="#" class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Sign Up</a>
      </div>
      <!-- hamburger button -->
      <button @click="toggleMenu"
        class="flex lg:hidden focus:outline-none group h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white border-2 border-gray-400 py-2"
        type="button">
        <!-- https://tailwindcomponents.com/component/simple-hamburger-menu-animation -->
        <div class="space-y-2">
          <span
            class="block h-1 w-10 origin-center rounded-full bg-darkViolet transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
          <span
            class="block h-1 w-8 origin-center rounded-full bg-cyan transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
        </div>
      </button>
    </div>

    <!-- mobile menu -->
    <div ref="flex" id="menu" class="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-28 z-50">
      <div class="flex flex-col items-center justify-center w-full font-bold text-white rounded-sm">
        <a href="#" class="w-full py-2 text-center hover:bg-veryDarkViolet duration-200 transition-all">Features</a>
        <a href="#" class="w-full py-2 text-center hover:bg-veryDarkViolet duration-200 transition-all">Pricing</a>
        <a href="#" class="w-full py-2 text-center hover:bg-veryDarkViolet duration-200 transition-all">Resources</a>
        <a href="#" class="w-full my-4 py-3 text-center rounded-full bg-cyanLight hover:bg-cyan duration-200 transition-colors">Login</a>
        <a href="#" class="w-full py-3 text-center rounded-full bg-cyanLight hover:bg-cyan duration-200 transition-colors">Sign Up</a>
      </div>
    </div>
  </nav>

  <!-- Hero section -->
  <section id="hero">
    <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
      <!-- Conent container -->
      <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
        <h1 class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">More than just shorter links.
        </h1>
        <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">Build your brand's recognition and get
          details insights on how your links are performing.</p>
        <div class="mx-auto lg:mx-0"><a href="#"
            class="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">Get
            Started</a></div>
      </div>
      <!-- Image -->
      <div class="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0"><img src="~/assets/shortly/illustration-working.svg" alt="">
      </div>
    </div>
  </section>

  <!-- Shorten section -->
  <section id="shorten" class="relative bg-gray-100">
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <!-- Form -->
      <form id="link-form"
        class="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
        <input type="text" class="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
          placeholder="Shorten a link here">
        <button class="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">Shorten
          It!</button>
        <!-- Error message -->
        <div class="absolute left-7 bottom-3 text-red text-sm italic"></div>
      </form>
      <!-- Link 1 -->
      <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          https://frontendmentor.io
        </p>
        <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
          <div class="font-bold text-cyan">https://shl.ink/d73jf7</div>
          <button class="p-2 px-8 text-white bg-cyan rounded-lg lg:hover:opacity-70 focus:outline-none">Copy</button>
        </div>
      </div>

      <!-- Link 2 -->
      <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          https://twitter.com/frontendmentor.io
        </p>
        <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
          <div class="font-bold text-cyan">https://shl.ink/s83jfge</div>
          <button
            class="p-2 px-8 text-white bg-darkViolet rounded-lg lg:hover:opacity-70 focus:outline-none">Copy</button>
        </div>
      </div>

      <!-- Link 3 -->
      <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
        <p class="font-bold text-center text-veryDarkViolet md:text-left">
          https://linkedin.com/frontendmentor
        </p>
        <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
          <div class="font-bold text-cyan">https://shl.ink/rk4hq7</div>
          <button class="p-2 px-8 text-white bg-cyan rounded-lg lg:hover:opacity-70 focus:outline-none">Copy</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats section -->
  <section id="stats" class="py-24 bg-gray-100">
    <div class="container mx-auto px-3">
      <h2 class="text-4xl mb-6 font-bold text-center">Advanced Statistics</h2>
      <p class="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </div>
  </section>

  <!-- Feature box section -->
  <section id="features" class="pb-32 bg-gray-100">
    <div class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
      <!-- Horizontal line -->
      <div class="hidden absolute rounded-md top-24 left-16 h-3 bg-cyan md:block w-10/12"></div>
      <!-- Vertical line -->
      <div class="absolute rounded-md w-3 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
      <!-- Box 1 -->
      <div class="relative flex flex-col px-6 pb-6 space-y-6 bg-white rounded-lg md:w-1/3">
        <!-- Image positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image container for background and center -->
          <div class="flex items-center justify-center w-20 h-20 py-4 rounded-full bg-veryDarkViolet">
            <img src="~/assets/shortly/icon-brand-recognition.svg" alt="">
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">Brand recognition</h5>
        <div class="text-center text-gray-400 md:text-left">Boost your brand recognition with each click. Generic links
          don't mean a thing. Branded links help instill confidence in your content.</div>
      </div>
      <!-- Box 2 -->
      <div class="relative flex flex-col mt-24 px-6 pb-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
        <!-- Image positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image container for background and center -->
          <div class="flex items-center justify-center w-20 h-20 py-4 rounded-full bg-veryDarkViolet">
            <img src="~/assets/shortly/icon-detailed-records.svg" alt="">
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">Detailed Records</h5>
        <div class="text-center text-gray-400 md:text-left">Gain insights into who is clicking your links. Knowing when
          and where people engage with your content helps inform better decisions.</div>
      </div>
      <!-- Box 3 -->
      <div class="relative flex flex-col mt-24 px-6 pb-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16">
        <!-- Image positioning -->
        <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
          <!-- Image container for background and center -->
          <div class="flex items-center justify-center w-20 h-20 py-4 rounded-full bg-veryDarkViolet">
            <img src="~/assets/shortly/icon-fully-customizable.svg" alt="">
          </div>
        </div>
        <h5 class="pt-6 text-xl font-bold text-center capitalize md:text-left">Fully Customizable</h5>
        <div class="text-center text-gray-400 md:text-left">Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.</div>
      </div>
    </div>
  </section>


  <!-- CTA section -->
  <section id="cta" class="py-24 bg-darkViolet">
    <div class="flex flex-col py-2 space-y-6">
      <h5 class="mx-auto space-y-10 text-4xl font-bold text-center text-white">Boost your links today</h5>
      <button
        class="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">Get
        Started</button>
    </div>
  </section>

  <!-- footer -->
  <footer class="py-16 bg-veryDarkViolet">
    <div
      class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
      <!-- logo -->
      <img src="~/assets/shortly/logo.svg" alt="">
      <!-- Menus container -->
      <div class="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
        <!-- menu 1 -->
        <div class="flex flex-col items-center w-full md:items-start">
          <div class="mb-5 font-bold text-white capitalize">Features</div>
          <div class="flex flex-col items-center space-y-3 md:items-start">
            <a href="#" class="capitalize text-grayishViolet">Link shortening</a>
            <a href="#" class="capitalize text-grayishViolet">Branded Links</a>
            <a href="#" class="capitalize text-grayishViolet">Analytics</a>
          </div>
        </div>
        <!-- menu 2 -->
        <div class="flex flex-col items-center w-full md:items-start">
          <div class="mb-5 font-bold text-white capitalize">Resources</div>
          <div class="flex flex-col items-center space-y-3 md:items-start">
            <a href="#" class="capitalize text-grayishViolet">Blog</a>
            <a href="#" class="capitalize text-grayishViolet">Developers</a>
            <a href="#" class="capitalize text-grayishViolet">Support</a>
          </div>
        </div>
        <!-- menu 3 -->
        <div class="flex flex-col items-center w-full md:items-start">
          <div class="mb-5 font-bold text-white capitalize">Company</div>
          <div class="flex flex-col items-center space-y-3 md:items-start">
            <a href="#" class="capitalize text-grayishViolet">About</a>
            <a href="#" class="capitalize text-grayishViolet">Our team</a>
            <a href="#" class="capitalize text-grayishViolet">Careers</a>
            <a href="#" class="capitalize text-grayishViolet">Contact</a>
          </div>
        </div>
      </div>
      <!-- social container -->
      <div class="flex space-x-6">
        <a href="#">
          <Icon class="text-white w-10 h-10 hover:-rotate-12 hover:-translate-y-1 hover:text-cyan hover:duration-500"
            name="mdi:facebook" />
        </a>
        <a href="#">
          <Icon class="text-white w-10 h-10 hover:-rotate-12 hover:-translate-y-1 hover:text-cyan hover:duration-500"
            name="mdi:instagram" />
        </a>
        <a href="#">
          <Icon class="text-white w-10 h-10 hover:-rotate-12 hover:-translate-y-1 hover:text-cyan hover:duration-500"
            name="mdi:pinterest" />
        </a>
        <a href="#">
          <Icon class="text-white w-10 h-10 hover:-rotate-12 hover:-translate-y-1 hover:text-cyan hover:duration-500"
            name="mdi:instagram" />
        </a>
      </div>
    </div>
  </footer>
</template>


<style scoped>
#cta {
  background-image: url('~/assets/shortly/bg-boost-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>


<script setup>
import { ref } from 'vue'
const flex = ref(false)
const hidden = ref(true)

function toggleMenu() {
  hidden.value = !hidden.value
  if (flex.value) {
    flex.value.classList.toggle("hidden", hidden.value)
    flex.value.classList.toggle("flex", !hidden.value)
  }
}
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Shortly',
  meta: [{ name: 'description', content: 'My simple Directus Blog.' }],
});
</script>
