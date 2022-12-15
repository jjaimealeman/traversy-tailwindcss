<template>
    <div class="container mx-auto pt-20">
        <div class="flex items-center justify-center h-screen bg-zinc-700">
            <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
                <div class="flex flex-col md:flex-row rounded-l-xl">
                    <img class="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" src="/images/email-subscribe/images/image.jpg" alt="">
                    <div class="p-6 md:p-12">
                        <h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
                            Get diet and fitness tips in your inbox.
                        </h2>
                        <p class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                            Eat better and exercise better. SIgn up for Diet &amp; Fiteness.
                        </p>
                        <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                            <input class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none" type="text" placeholder="Enter your email address.">
                            <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"><Icon class="inline" icon="ic:outline-email"></Icon> Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },
}
</script>

<style scoped>
button {
    @apply shadow-none transition-all duration-300 p-2 m-2 rounded-md border-2 border-slate-700 text-slate-900 hover:-translate-y-[0.1em];
}

button.subscribe {
    @apply bg-emerald-500;
    @apply active:bg-emerald-300 active:text-emerald-700 active:border-emerald-700 hover:shadow-emerald-500 hover:shadow-md;
}

button.cancel {
    @apply bg-red-500;
    @apply active:bg-red-300 active:text-red-700 active:border-red-700 hover:shadow-red-500 hover:shadow-md;
}
</style>
