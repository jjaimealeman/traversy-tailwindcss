<template>
  <section class="neutral flex items-center justify-center py-4 my-4 rounded-2xl shadow-lg mx-4">
    <div class="p-2 mx-6 rounded-2xl">
      <div class="flex flex-col md:flex-row rounded-xl overflow-hidden">
        <img
          class="object-cover rounded-xl h-80 transform duration-200 md:h-64 md:rounded-l-xl md:rounded-r-none hover:scale-105 "
          src="~/assets/image.jpg" alt="">
        <div class="p-6 md:p-12">
          <h2 class="text-xl font-medium text-center text-white md:text-left">
            Subscribe to our newsletter.
          </h2>
          <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
            Joing today and start saving with our progam!
          </p>
          <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
            <input
              class="p-2 px-4 text-center md:text-left border text-white placeholder:text-xs placeholder:text-center placeholder:md:text-left focus:outline-none"
              type="text" placeholder="Enter your email address.">
            <button class="px-5 py-3 text-xs rounded-md hover:text-white duration-500">
              <Icon class="inline" name="ic:outline-email" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="postcss" scoped>
.neutral {
  @apply bg-neutral-700 shadow-neutral-500;

  ::selection {
    @apply bg-neutral-300 text-neutral-800;
  }

  div {
    @apply bg-neutral-800;
  }

  button {
    @apply text-neutral-900 bg-emerald-500/75 hover:bg-emerald-500;
  }

  input {
    @apply bg-neutral-800 border-neutral-600 placeholder:text-neutral-600;
  }
}
</style>

