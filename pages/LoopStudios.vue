<template>
  <section id="hero">
    <div class="container max-w-6xl mx-auto px-6 py-12">
      <!-- Menu/Logo Container -->
      <nav class="flex items-center justify-between font-bold text-white">
        <!-- Logo -->
        <img src="~/assets/loopstudios/logo.svg" alt="">
        <!-- Menu -->
        <div class="hidden h-10 md:flex md:space-x-8">
          <div class="group">
            <a href="#">About</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div class="group">
            <a href="#">Careers</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div class="group">
            <a href="#">Events</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div class="group">
            <a href="#">Products</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div class="group">
            <a href="#">Support</a>
            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>
        <!-- hamburger button -->
        <div class="md:hidden">
          <!--
          <button id="menu-btn" type="button" class="open z-40 block hamburger md:hidden focus:outline-none">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
          -->
          <!-- https://tailwindcomponents.com/component/simple-hamburger-menu-animation -->
          <div @click="toggleMenu" class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2
            hover:bg-slate-200">
            <div class="space-y-2">
              <span
                class="block h-1 w-10 origin-center rounded-full bg-indigo-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span
                class="block h-1 w-8 origin-center rounded-full bg-pink-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
            </div>
          </div>
        </div>
      </nav>
      <!-- mobile menu -->
      <!-- to show menu, use 'flex', and 'hidden' to hide -->
      <div ref="flex" id="menu"
        class="hidden absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-10 pt-40 pl-12 pr-32 space-y-3 text-lg text-white uppercase bg-black">

        <a href="#" class="hover:text-pink-500">About</a>
        <a href="#" class="hover:text-pink-500">Careers</a>
        <a href="#" class="hover:text-pink-500">Events</a>
        <a href="#" class="hover:text-pink-500">Products</a>
        <a href="#" class="hover:text-pink-500">Support</a>
        <div class="absolute right-6 top-24">
          <div @click="toggleMenu" class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2
        hover:bg-slate-200">
            <div class="space-y-2">
              <span
                class="block h-1 w-10 origin-center rounded-full bg-indigo-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span
                class="block h-1 w-8 origin-center rounded-full bg-pink-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-lg mt-32 mb-32 p-4 text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        Impressive Experiences That Deliver
      </div>
    </div>
  </section>

  <!-- Feature section -->
  <section id="feature">
    <div class="relative container flex flex-col max-w-6xl mx-auto my-32 text-gray-900 md:flex-row md:px-0">
      <img src="~/assets/loopstudios/desktop/image-interactive.jpg" alt=" ">
      <!-- text container -->
      <div class="top-48 mx-auto pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
        <h2 class="max-w-md pt-10 mb-6 text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
          The leader in interactive VR
        </h2>
        <p class="max-w-md text-center md:text-left">
          Founded in 2011, LoopStudios has been producing world-class virtual reality projects for some of the best
          companies around the globe. Our award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  </section>

  <!-- Creations Section -->
  <section id="creations">
    <!-- creations content -->
    <!-- div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:mx-0" -->
    <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900">
      <!--Creations header -->
      <div class="flex justify-center mb-20 pt-2 md:justify-between">
        <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Creations
        </h2>
        <button
          class="hidden px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white md:block">
          See All
        </button>
      </div>
      <!-- Items container 1 -->
      <div
        class="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        <!-- Item 1 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-deep-earth.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-deep-earth.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Deep Earth</h5>
        </div>
        <!-- Item 2 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-night-arcade.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-night-arcade.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Night Arcade</h5>
        </div>
        <!-- Item 3 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-soccer-team.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-soccer-team.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Soccer Team</h5>
        </div>
        <!-- Item 4 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-grid.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-grid.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            The Grid</h5>
        </div>
      </div>
      <!-- Items container 2 -->
      <div
        class="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mt-10">
        <!-- Item 1 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-from-above.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-from-above.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            From Above</h5>
        </div>
        <!-- Item 2 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-pocket-borealis.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-pocket-borealis.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Pocket Borealis</h5>
        </div>
        <!-- Item 3 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-curiosity.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-curiosity.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            The Curiosity</h5>
        </div>
        <!-- Item 4 -->
        <div class="group relative overflow-hidden md:w-1/4">
          <!-- desktop image -->
          <img class="hidden w-full duration-200 md:block group-hover:scale-110"
            src="~/assets/loopstudios/desktop/image-fisheye.jpg" alt="">
          <!-- mobile image -->
          <img class="w-full md:hidden" src="~/assets/loopstudios/mobile/image-fisheye.jpg" alt="">
          <!-- Item gradient -->
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">
          </div>
          <!-- Item text -->
          <h5
            class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Fish Eye</h5>
        </div>
      </div>
      <!-- Bottom button container -->
      <div class="flex justify-center mt-10 md:hidden">
        <button
          class="px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white w-full md:hidden">
          See All
        </button>
      </div>
    </div>
  </section>

  <footer class="bg-black">
    <!-- container -->
    <div class="container max-w-6xl py-10 mx-auto">
      <!-- footer container -->
      <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
        <!-- menu and logo container -->
        <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
          <div class="h-8">
            <img class="w-44 md:ml-3" src="~/assets/loopstudios/logo.svg" alt="">
          </div>
          <!-- menu container -->
          <div
            class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
            <!-- item 1 -->
            <div class="h-10 group">
              <a href="#">About</a>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <!-- item 2 -->
            <div class="h-10 group">
              <a href="#">Careers</a>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <!-- item 3 -->
            <div class="h-10 group">
              <a href="#">Events</a>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <!-- item 4 -->
            <div class="h-10 group">
              <a href="#">Products</a>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <!-- item 5 -->
            <div class="h-10 group">
              <a href="#">Support</a>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>
        <!-- social and copy container -->
        <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
          <!-- icons container -->
          <div class="flex items-center justify-center space-x-4 mx-auto md:mx-0 md:justify-end">
            <!-- Icon 1 -->
            <div class="h-08 group"><a href="#"><img class="h-6" src="~/assets/loopstudios/icon-instagram.svg"
                  alt=""></a></div>
            <div class="h-08 group"><a href="#"><img class="h-6" src="~/assets/loopstudios/icon-facebook.svg"
                  alt=""></a></div>
            <div class="h-08 group"><a href="#"><img class="h-6" src="~/assets/loopstudios/icon-twitter.svg" alt=""></a>
            </div>
            <div class="h-08 group"><a href="#"><img class="h-6" src="~/assets/loopstudios/icon-pinterest.svg"
                  alt=""></a>
            </div>
          </div>
          <!-- copyright -->
          <div class="font-bold">
            &copy; 2023 LoopStudios. All Rights Reserved
          </div>

        </div>

      </div>
    </div>
  </footer>

</template>


<style scoped>
#hero {
  background-image: url('~/assets/loopstudios/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 576px) {
  #hero {
    background-image: url('~/assets/loopstudios/mobile/image-hero.jpg');
    background-position: center;
  }
}

/* Hamburger Menu */
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: #fff;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}
</style>


<script setup>
import { ref } from 'vue'
const flex = ref(false)
const hidden = ref(true)

function toggleMenu() {
  hidden.value = !hidden.value
  if (flex.value) {
    flex.value.classList.toggle("flex", hidden.value)
    flex.value.classList.toggle("hidden", !hidden.value)
  }
}

definePageMeta({
  layout: 'default',
});
useHead({
  title: 'LoopStudios',
  meta: [{ name: 'description', content: 'My simple Directus Blog.' }],
});
</script>

