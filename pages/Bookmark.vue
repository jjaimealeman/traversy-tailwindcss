<template>
  <nav class="container relative mx-auto p-6">
    <!-- flex container for nav items -->
    <div class="flex items-center justify-between space-x-20 my-6">
      <!-- logo -->
      <div class="z-30">
        <img src="~/assets/bookmark/logo-bookmark.svg" alt="" id="logo">
      </div>
      <!-- menu items -->
      <div class="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
        <a href="#features" class="tracking-widest hover:text-softRed"> Features </a>
        <a href="#download" class="tracking-widest hover:text-softRed"> Download </a>
        <a href="#faq" class="tracking-widest hover:text-softRed"> faq </a>
        <a href="#"
          class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">
          Login </a>
      </div>
      <!-- hamburger button -->
      <!-- add/remove class 'open' -->
      <button id="menu-btn" class="z-30 block md:hidden focus:outline-none hamburger">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
    <!-- mobile menu -->
    <!-- toggle class 'hidden/flex' -->
    <div id="menu"
      class="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue">
      <div class="w-full py-3 text-center">
        <a href="#features" class="block hover:text-softRed">features</a>
      </div>
      <div class="w-full py-3 text-center">
        <a href="#download" class="block hover:text-softRed">download</a>
      </div>
      <div class="w-full py-3 text-center">
        <a href="#faq" class="block hover:text-softRed">faq</a>
      </div>
      <div class="w-full py-3 text-center">
        <a href="#" class="block hover:text-softRed">Login</a>
      </div>

    </div>
  </nav>

  <!-- hero section -->
  <section id="hero">
    <!-- container for image and content -->
    <div class="container flex flex-col-reverse mx-auto m-6 lg:flex-row lg:mb-0">
      <!-- content -->
      <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
        <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">A Simple Bookmark Manager</h1>
        <p class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
          A clean and simple interface to organize your favorite websites. Open a new brower tab and see your sites load
          instantly. Try it for free.
        </p>
        <div class="flex items-center justify-center w-full space-x-4 lg:justify-start">
          <a href="#"
            class="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
            Get it on Chrome </a>
          <a href="#"
            class="p-4 text-sm font-semibold text-white bg-amber-400 rounded shadow-md border-2 border-amber-400 md:text-base hover:bg-white hover:text-amber-400">
            Get it on Firefox </a>
        </div>
      </div>
      <!-- image -->
      <div class="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
        <img src="" alt="" class="bg-hero">
        <img src="~/assets/bookmark/illustration-hero.svg" alt=""
          class="relative z-10 lg:top-24 xl:top-0 overflow-x-visible">
      </div>
    </div>
  </section>

  <!-- features heading -->
  <section id="features">
    <div class="container mx-auto mt-16 px-6 md:mx-0">
      <h2 class="mb-6 text-4xl font-semibold text-center">Features</h2>
      <p class="max-w-md mx-auto text-center text-grayishBlue">
        Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your
        devices so you can access them on the go.
      </p>
    </div>
  </section>
  <!-- features tabs -->
  <section id="tabs">
    <!-- tabs/panel container -->
    <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
      <div class="bg-tabs"></div>
      <!-- tabs flex container -->
      <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
        <!-- tab 1 -->
        <div
          class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-1">
          <div class="py-5 border-b-4 border-softRed cursor-pointer" data-target="panel-1">
            Simple Bookmarking
          </div>
        </div>
        <!-- tab 2 -->
        <div
          class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-2">
          <div class="py-5 cursor-pointer" data-target="panel-2">
            Speedy Searching
          </div>
        </div>
        <!-- tab 3 -->
        <div
          class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
          data-target="panel-3">
          <div class="py-5 cursor-pointer" data-target="panel-3">
            Easy Sharing
          </div>
        </div>
      </div>
      <!-- tab panels -->
      <div id="panels" class="container mx-auto">
        <!-- panel 1 -->
        <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
          <div class="flex justify-center md:w-1/2">
            <img src="~/assets/bookmark/illustration-features-tab-1.svg" alt="" class="relative z-10">
          </div>
          <!-- panel content -->
          <div class="flex flex-col space-y-8 md:w-1/2">
            <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"> Bookmark in one click </h3>
            <p class="max-w-md text-center text-grayishBlue md:text-left">
              Organize your bookmarks however you like. Our simple drag-n-drop interface gives you complete control over
              how you manage your favorite sites.
            </p>
            <div class="mx-auto md:mx-0">
              <a href="#"
                class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                More on Bookmarks </a>
            </div>
          </div>
        </div>
        <!-- panel 2 -->
        <div class="hidden flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2">
          <div class="flex justify-center md:w-1/2">
            <img src="~/assets/bookmark/illustration-features-tab-2.svg" alt="" class="relative z-10">
          </div>
          <!-- panel content -->
          <div class="flex flex-col space-y-8 md:w-1/2">
            <h3 class="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left"> Intelligent Search </h3>
            <p class="max-w-md text-center text-grayishBlue md:text-left">
              Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all
              of your bookmarks.
            </p>
            <div class="mx-auto md:mx-0">
              <a href="#"
                class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                More on Search </a>
            </div>
          </div>
        </div>
        <!-- panel 3 -->
        <div class="hidden flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3">
          <div class="flex justify-center md:w-1/2">
            <img src="~/assets/bookmark/illustration-features-tab-3.svg" alt="" class="relative z-10">
          </div>
          <!-- panel content -->
          <div class="flex flex-col space-y-8 md:w-1/2">
            <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"> Share your bookmarks </h3>
            <p class="max-w-md text-center text-grayishBlue md:text-left">
              Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.
            </p>
            <div class="mx-auto md:mx-0">
              <a href="#"
                class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                More on Sharing </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- download heading -->
  <section id="download">
    <div class="container mx-auto px-6">
      <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl">Download the extension </h2>
      <p class="max-w-lg mx-auto text-center text-grayishBlue">
        We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to
        prioritize.
      </p>
    </div>
  </section>


  <!-- download boxes -->
  <section id="download" class="py-32">
    <!-- boxes container -->
    <div
      class="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
      <!-- box 1 -->
      <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <!-- image -->
        <div class="flex justify-center">
          <img src="~/assets/bookmark/logo-chrome.svg" alt="" />
        </div>
        <!-- text -->
        <h5 class="pt-6 text-xl font-bold"> Add to Chrome </h5>
        <p class="text-gray-400"> Minimum Version 62 </p>
        <!-- dots -->
        <div class="bg-dots">
          <a href="#"
            class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
            Add &amp; Install Extension </a>
        </div>
      </div>
      <!-- box 2 -->
      <div class="w-full md:w-1/3">
        <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
          <!-- image -->
          <div class="flex justify-center">
            <img src="~/assets/bookmark/logo-firefox.svg" alt="" />
          </div>
          <!-- text -->
          <h5 class="pt-6 text-xl font-bold"> Add to Firefox </h5>
          <p class="text-gray-400"> Minimum Version 55 </p>
          <!-- dots -->
          <div class="bg-dots">
            <a href="#"
              class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
              Add &amp; Install Extension </a>
          </div>
        </div>
      </div>
      <!-- box 3 -->
      <div class="w-full md:w-1/3">
        <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
          <!-- image -->
          <div class="flex justify-center">
            <img src="~/assets/bookmark/logo-opera.svg" alt="" />
          </div>
          <!-- text -->
          <h5 class="pt-6 text-xl font-bold"> Add to Opera </h5>
          <p class="text-gray-400"> Minimum Version 46 </p>
          <!-- dots -->
          <div class="bg-dots">
            <a href="#"
              class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
              Add &amp; Install Extension </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- frequently asked questions faq -->
  <section id="faq">
    <div class="container mx-auto">
      <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl"> Frequently Asked Questions </h2>
      <p class="max-w-lg px-6 mx-auto text-center text-grayishBlue">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>
    </div>
  </section>

  <!-- faq accordian -->
  <section id="faq-accordian">
    <!-- main container -->
    <div class="container mx-auto px-6 mb-32">
      <!-- accordian container -->
      <div class="max-w-2xl m-8 mx-auto overflow-hidden">
        <!-- tab 1 -->
        <div class="py-1 border-b outline-none group" tabindex="1">
          <!-- tab flex container -->
          <div
            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
            <!-- tab title -->
            <div class="transition duration-500 ease-in-out group-hover:text-softRed"> What is Bookmark </div>
            <!-- arrow -->
            <div class="transition duration-500 ease-in-out group-focus:-rotate-180 group-focus:text-softRed">
              <Icon name="material-symbols:keyboard-arrow-up-rounded" />
            </div>
          </div>
          <!-- tab inner content -->
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in-out">
            <p class="py-2 text-justify text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium voluptatum. Architecto qui
              tempore nulla error quos quasi hic nesciunt, doloribus officiis voluptate culpa esse eligendi alias quas
              iure, vel dolores? Reprehenderit at eveniet, accusantium, beatae dicta officia a culpa tempora impedit
              odio fugit quisquam modi quae quas repudiandae assumenda.
            </p>
          </div>
        </div>
        <!-- tab 2 -->
        <div class="py-1 border-b outline-none group" tabindex="2">
          <!-- tab flex container -->
          <div
            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
            <!-- tab title -->
            <div class="transition duration-500 ease-in-out group-hover:text-softRed"> How can I request a new browser?
            </div>
            <!-- arrow -->
            <div class="transition duration-500 ease-in-out group-focus:-rotate-180 group-focus:text-softRed">
              <Icon name="material-symbols:keyboard-arrow-up-rounded" />
            </div>
          </div>
          <!-- tab inner content -->
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in-out">
            <p class="py-2 text-justify text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium voluptatum. Architecto qui
              tempore nulla error quos quasi hic nesciunt, doloribus officiis voluptate culpa esse eligendi alias quas
              iure, vel dolores? Reprehenderit at eveniet, accusantium, beatae dicta officia a culpa tempora impedit
              odio fugit quisquam modi quae quas repudiandae assumenda.
            </p>
          </div>
        </div>
        <!-- tab 3 -->
        <div class="py-1 border-b outline-none group" tabindex="3">
          <!-- tab flex container -->
          <div
            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
            <!-- tab title -->
            <div class="transition duration-500 ease-in-out group-hover:text-softRed"> Is there a mobile app?
            </div>
            <!-- arrow -->
            <div class="transition duration-500 ease-in-out group-focus:-rotate-180 group-focus:text-softRed">
              <Icon name="material-symbols:keyboard-arrow-up-rounded" />
            </div>
          </div>
          <!-- tab inner content -->
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in-out">
            <p class="py-2 text-justify text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium voluptatum. Architecto qui
              tempore nulla error quos quasi hic nesciunt, doloribus officiis voluptate culpa esse eligendi alias quas
              iure, vel dolores? Reprehenderit at eveniet, accusantium, beatae dicta officia a culpa tempora impedit
              odio fugit quisquam modi quae quas repudiandae assumenda.
            </p>
          </div>
        </div>
        <!-- tab 4 -->
        <div class="py-1 border-b outline-none group" tabindex="4">
          <!-- tab flex container -->
          <div
            class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
            <!-- tab title -->
            <div class="transition duration-500 ease-in-out group-hover:text-softRed"> What about other Chromium
              Browser?
            </div>
            <!-- arrow -->
            <div class="transition duration-500 ease-in-out group-focus:-rotate-180 group-focus:text-softRed">
              <Icon name="material-symbols:keyboard-arrow-up-rounded" />
            </div>
          </div>
          <!-- tab inner content -->
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-in-out">
            <p class="py-2 text-justify text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium voluptatum. Architecto qui
              tempore nulla error quos quasi hic nesciunt, doloribus officiis voluptate culpa esse eligendi alias quas
              iure, vel dolores? Reprehenderit at eveniet, accusantium, beatae dicta officia a culpa tempora impedit
              odio fugit quisquam modi quae quas repudiandae assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- newsletter -->
  <section id="newsletter" class="bg-softBlue">
    <!-- main container -->
    <div class="max-w-lg mx-auto py-24">
      <p class="mb-6 text-lg tracking-widest text-center text-white uppercase"> 35,000+ already joined </p>
      <h2 class="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl"> Stay up-to-date with what we're
        doing. </h2>

      <!-- form -->
      <form
        class="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
        <!-- input and button container -->
        <div class="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
          <input type="text"
            class="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
            placholder="Enter your email address">
          <input type="submit"
            class="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
            value="Contact Us">
        </div>
      </form>
    </div>
  </section>

  <!-- footer -->
  <footer class="py-16 bg-veryDarkBlue">
    <!-- footer flex container -->
    <div class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
      <!-- logo / menu-->
      <div
        class="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
        <img src="~/assets/bookmark/logo-bookmark-footer.svg" alt="" class="mb-1">
        <a href="#features" class="uppercase hover:text-softRed"> Features </a>
        <a href="#download" class="uppercase hover:text-softRed"> Download </a>
        <a href="#faq" class="uppercase hover:text-softRed"> FAQ </a>
      </div>
      <!-- social container -->
      <div class="flex space-x-10">
        <a href="#">
          <Icon name="teenyicons:facebook-solid" />
        </a>
        <a href="#">
          <Icon name="teenyicons:twitter-solid" />
        </a>
        <a href="#">
          <Icon name="teenyicons:instagram-solid" />
        </a>
      </div>

    </div>
  </footer>

</template>


<style>
@media screen(lg) {
  .bg-hero {
    width: 2000px;
    height: 300px;
    left: 30%;
    @apply absolute rounded-l-full top-52 bg-softBlue;
  }

  .bg-tabs {
    width: 2000px;
    height: 300px;
    right: 60%;
    @apply absolute rounded-r-full top-60 bg-softBlue;
  }
}

.bg-dots {
  @apply bg-[url('~/assets/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize;
}

/* HAMBURGER MENU */

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
  content: '';
  position: absolute;
  width: 24px;
  height: 3px;
  top: 0;
  left: 0;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
  background: #000;
}

.open {
  transform: rotate(90deg);
  transform: translateY(0px);
  /*
  position: fixed;
  top: 110px;
  right: 155px;
  */
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
  background-color: #fff;
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
  background-color: #fff;
}
</style>


<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const tabs = document.querySelectorAll('.tab')
  const panels = document.querySelectorAll('.panel')
  const btn = document.getElementById('menu-btn')
  const menu = document.getElementById('menu')
  const logo = document.getElementById('logo')
  // Tabs menu even listener
  tabs.forEach((tab) => tab.addEventListener('click', onTabClick))
  // Hamburger button event listener
  btn.addEventListener('click', navToggle)

  function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach((tab) => {
      tab.children[0].classList.remove(
        'border-softRed',
        'border-b-4',
        'md:border-b-0'
      )
    })
    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))
    // Activate a new tab and panel based on the target
    e.target.classList.add('border-softRed', 'border-b-4')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
      .getElementsByClassName(classString)[0]
      .classList.remove('hidden')
  }

  function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')


    if (menu.classList.contains('flex')) {
      logo.setAttribute('src', '~/assets/bookmark/logo-bookmark-footer.svg')
    } else {
      logo.setAttribute('src', '~/assets/bookmark/logo-bookmark.svg')
    }
  }
})


definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Bookmark',
  meta: [{ name: 'description', content: 'My simple Directus Blog.' }],
});
</script>
