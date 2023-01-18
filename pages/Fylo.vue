<template>
  <!-- header -->
  <header class="container mx-auto mt-10 px-6 pt-10 text-center h-40 w-sc">
    <!-- dynamic logo -->
    <div
      class="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-24 left-10">
    </div>
    <!-- menu -->
    <div class="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-28 right-10">
      <a href="#features" class="hover:text-accentCyan">Features</a>
      <a href="#testimonials" class="hover:text-accentCyan">Testimonials</a>
    </div>
  </header>

  <!-- hero section -->
  <section id="hero" class="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
    <!-- hero container -->
    <div class="container mx-auto px-6 text-center md:pt-20 pb-52">
      <img src="~/assets/fylo/illustration-intro.png" alt="" class="mx-auto">
      <h1 class="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p class="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
        Fylo stores all your most important files in one secure location. Access them wherever you need, share and
        collaborate with friends, family, and co-workers.
      </p>
      <button class="p-3 rounded-full w-52 bg-accentCyan hover:scale-95">Get Started</button>
    </div>
  </section>

  <!-- features section -->
  <section id="features" class="pt-12 bg-gray-50 dark:bg-darkBlue1">
    <!-- features container -->
    <div class="container mx-auto px-6 pb-32">
      <!-- first row -->
      <div class="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
        <!-- item 1 -->
        <div class="flex flex-col items-center space-y-2 md:w-1/2">
          <div class="flex items-center justify-center h-24 mb-6">
            <img src="~/assets/fylo/icon-access-anywhere.svg" alt="">
          </div>
          <h3 class="text-xl font-bold">Access your files from anywhere.</h3>
          <p class="max-w-md">The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.</p>
        </div>
        <!-- item 2 -->
        <div class="flex flex-col items-center space-y-2 md:w-1/2">
          <div class="flex items-center justify-center h-24 mb-6">
            <img src="~/assets/fylo/icon-security.svg" alt="" />
          </div>
          <h3 class="text-xl font-bold">Security you can trust.</h3>
          <p class="max-w-md">2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.</p>
        </div>
      </div>
      <!-- second row -->
      <div class="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
        <!-- item 3 -->
        <div class="flex flex-col items-center space-y-2 md:w-1/2">
          <div class="flex items-center justify-center h-24 mb-6">
            <img src="~/assets/fylo/icon-collaboration.svg" alt="">
          </div>
          <h3 class="text-xl font-bold">Access your files from anywhere.</h3>
          <p class="max-w-md">The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.</p>
        </div>
        <!-- item 4 -->
        <div class="flex flex-col items-center space-y-2 md:w-1/2">
          <div class="flex items-center justify-center h-24 mb-6">
            <img src="~/assets/fylo/icon-any-file.svg" alt="" />
          </div>
          <h3 class="text-xl font-bold">Security you can trust.</h3>
          <p class="max-w-md">2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- productive section -->
  <section id="productive" class="bg-white dark:bg-darkBlue">
    <!-- productive container -->
    <div class="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
      <!-- image -->
      <div class="md:w-1/2">
        <img src="~/assets/fylo/illustration-stay-productive.png" alt="" class="mb-10">
      </div>
      <!-- content -->
      <div class="flex flex-col items-start md:w-1/2">
        <div class="flex flex-col space-y-5">
          <h4 class="max-w-md text-xl font-bold md:text-4xl">Stay productive, wherever you are.</h4>
          <p class="text-md md:text-lg"> Never let location be an issue when accessing your files. Fylo has you covered
            for all of your file storage needs. </p>
          <p class="text-md md:text-lg"> Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required. </p>
        </div>


        <!-- link -->
        <div class="block mt-4">
          <a href="#" class="border-b border-accentCyan text-accentCyan">See how Flyo works</a>
          <img src="~/assets/fylo/icon-arrow.svg" alt="" class="inline pb-2 animate-pulse">
        </div>
      </div>
    </div>
  </section>


  <!-- testimonials section -->
  <section id="testimonials" class="bg-gray-50 dark:bg-darkBlue">
    <!-- testimonials container -->
    <div class="container mx-auto px-6 pt-12 pb-80 md:pb-96">
      <!-- boxes container -->
      <div class="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
        <!-- quote image -->
        <img src="~/assets/fylo/bg-quotes.png" alt="" class="absolute left-1 -top-2 w-10 md:-top-16 md:w-20">
        <!-- box 1 -->
        <div class="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 dark:bg-darkBlue3">
          <p class="text-sm leading-5 md:text-lg">
            Fylo has improved our team and has become a well-oiled collaboration machine.
          </p>
          <!-- customer info -->
          <div class="flex space-x-4">
            <img src="~/assets/fylo/profile-1.jpg" alt="" class="w-10 h-10 rounded-full">
          </div>
          <h5 class="text-sm font-semibold">Satish Patel</h5>
          <p class="text-xs font-extralight">Founder &amp; CEO, Huddle</p>
        </div>
        <!-- box 2 -->
        <div class="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 dark:bg-darkBlue3">
          <p class="text-sm leading-5 md:text-lg">
            Fylo has improved our team and has become a well-oiled collaboration machine.
          </p>
          <!-- customer info -->
          <div class="flex space-x-4">
            <img src="~/assets/fylo/profile-2.jpg" alt="" class="w-10 h-10 rounded-full">
          </div>
          <h5 class="text-sm font-semibold">Michael Jordan</h5>
          <p class="text-xs font-extralight">The GOAT, NBA</p>
        </div>
        <!-- box 3 -->
        <div class="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 dark:bg-darkBlue3">
          <p class="text-sm leading-5 md:text-lg">
            Fylo has improved our team and has become a well-oiled collaboration machine.
          </p>
          <!-- customer info -->
          <div class="flex space-x-4">
            <img src="~/assets/fylo/profile-3.jpg" alt="" class="w-10 h-10 rounded-full">
          </div>
          <h5 class="text-sm font-semibold">Monica Gellar</h5>
          <p class="text-xs font-extralight">Sitcom Actor, ABC</p>
        </div>
      </div>
    </div>
  </section>

  <!-- early access section -->
  <section id="early-access" class="relative px-6 dark:bg-darkBlue2 md:px-0">
    <div
      class="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
      <h5 class="text-2xl font-bold">Get early access today</h5>
      <p class="text-sm">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you.
      </p>
      <!-- input and button container -->
      <div class="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div class="w-full flex-1">
          <input type="text" class="w-full px-10 py-3 rounded-full focus:outline-none" placeholder="email@example.com">
        </div>
        <button class="w-full p-3 px-6 rounded-full bg-accentCyan md:w-56 hover:scale-95">Get started for free</button>
      </div>
    </div>
  </section>


  <!-- footer -->
  <footer class="bg-darkBlue2 text-white">
    <div class="container mx-auto px-5 pb-10 pt-12">
      <!-- flex container for all items -->
      <div class="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
        <!-- email and phone -->
        <div class="mt-10 space-y-6">
          <div class="flex items-center space-x-3 md:-mt-10">
            <div class="w-6"><img src="~/assets/fylo/icon-phone.svg" alt="" class="scale-10"></div>
          <div>(915) 855-5555</div>
          </div>
          <div class="flex items-center space-x-3">
            <div class="w-6"><img src="~/assets/fylo/icon-email.svg" alt="" class="scale-10"></div>
            <div>example@example.com</div>
          </div>
        </div>
        <!-- menu -->
        <div class="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
          <div class="flex flex-col space-y-3">
            <a href="#">About</a><a href="#">Jobs</a><a href="#">Press</a><a href="#">Blog</a>
          </div>
          <div class="flex flex-col space-y-3">
            <a href="#">Contact Us</a><a href="#">Terms</a><a href="#">Privacy</a>
          </div>
        </div>

        <!-- social -->
        <div class="flex justify-center pb-10 space-x-3">
          <div><a href="#"><img class="p-2" src="~/assets/fylo/facebook.svg" alt=""></a></div>
          <div><a href="#"><img class="p-2" src="~/assets/fylo/twitter.svg" alt=""></a></div>
          <div><a href="#"><img class="p-2" src="~/assets/fylo/instagram.svg" alt=""></a></div>
        </div>

      </div>
    </div>
  </footer>

</template>


<style>
body {
  @apply dark:bg-darkBlue dark:text-white;
}

.bg-logo-dark-mode {
  @apply bg-[url('~/assets/fylo/logo-dark-mode.svg')];
}

.bg-logo-light-mode {
  @apply bg-[url('~/assets/fylo/logo-light-mode.svg')]
}

.curvy-dark-mode {
  @apply bg-[url('/assets/fylo/bg-curvy-dark-mode.svg')]
}

.curvy-light-mode {
  @apply bg-[url('/assets/fylo/bg-curvy-light-mode.svg')]
}
</style>


<script setup>
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Fylo',
  meta: [{ name: 'description', content: 'My simple Directus Blog.' }],
});
</script>
