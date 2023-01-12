<template>
  <section class="flex items-center justify-center py-4 my-8 rounded-2xl shadow-lg mx-4">
    <div class="p-2 mx-6 rounded-2xl">
      <div class="flex flex-col md:flex-row rounded-xl overflow-hidden">
        <img
          class="object-cover rounded-xl h-80 transform duration-200 md:h-64 md:rounded-l-xl md:rounded-r-none hover:scale-105 "
          src="~/assets/image.jpg" alt="">
        <div class="p-6 md:p-12">
          <h2 class="text-xl font-medium text-center text-white md:text-left">
            {{ header }}
          </h2>
          <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
            {{ subheader }}
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


<script setup>
const header = ref('Subscribe to our Newsletter')
const subheader = ref('Join today and start saving with our progam!')
</script>


<style lang="postcss" scoped>
.zinc {
  @apply bg-zinc-700 shadow-zinc-500;

  ::selection {
    @apply bg-zinc-300 text-zinc-800;
  }

  div {
    @apply bg-zinc-800;
  }

  button {
    @apply text-zinc-900 bg-emerald-500/75 hover:bg-emerald-500;
  }

  input {
    @apply bg-zinc-800 border-zinc-600 placeholder:text-zinc-600;
  }
}

.sky {
  @apply bg-sky-700 shadow-sky-500;

  ::selection {
    @apply bg-sky-300 text-sky-800;
  }

  div {
    @apply bg-sky-800;
  }

  button {
    @apply text-sky-900 bg-emerald-500/75 hover:bg-emerald-500;
  }

  input {
    @apply bg-sky-800 border-sky-600 placeholder:text-sky-600;
  }
}
</style>

