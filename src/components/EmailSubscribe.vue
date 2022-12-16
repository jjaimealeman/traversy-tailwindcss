<template>
    <section class="myzinc flex items-center justify-center py-4 my-4 rounded-2xl shadow-lg mx-4">
        <div class="p-2 mx-6 rounded-2xl">
            <div class="flex flex-col md:flex-row rounded-xl overflow-hidden">
                <img class="
                    object-cover rounded-xl h-80 transform duration-200
                    md:h-64 md:rounded-l-xl md:rounded-r-none
                    hover:scale-105
                    " src="/images/email-subscribe/images/linkedin-sales-solutions-0QvTyp0gH3A-unsplash.jpg" alt="">
                <div class="p-6 md:p-12">
                    <h2 class="font-sans text-xl font-medium text-center text-white md:text-left">
                        {{ title }}
                    </h2>
                    <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                        {{ tagline }}
                    </p>
                    <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                        <input class="p-2 px-4 text-center md:text-left border text-white placeholder:text-xs placeholder:text-center placeholder:md:text-left focus:outline-none" type="text" placeholder="Enter your email address.">
                        <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-emerald-500/75 hover:bg-emerald-500 hover:text-white duration-500">
                            <Icon class="inline" icon="ic:outline-email"></Icon>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.myzinc {
    @apply bg-zinc-700 shadow-zinc-500;
}
.myzinc > div {
    @apply bg-zinc-800;
}
.myzinc input {
    @apply bg-zinc-800 border-zinc-600;
}
.myslate {
    @apply bg-slate-700 shadow-slate-500;
}
.myslate > div {
    @apply bg-slate-800;
}
.myslate input {
    @apply bg-slate-800 border-slate-600;
}
.mystone {
    @apply bg-stone-700 shadow-stone-500;
}
.mystone > div {
    @apply bg-stone-800;
}
.mystone input {
    @apply bg-stone-800 border-stone-600;
}
</style>


<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },
    props: {
      title: {
        type: String,
        required: true,
        default: 'Lorem, ipsum dolor.'
      },
      tagline: {
        type: String,
        required: true,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
      }
    }
}
</script>
