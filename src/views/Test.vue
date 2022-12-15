<template>
    <div class="pt-20 px-4 mb-20">

<div class="grid grid-cols-3">
    <div class="p-10 border border-blue-500 bg-blue-100 col-span-2 row-span-2">Item 1</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 2</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 3</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 4</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 5</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 6</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 7</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 8</div>
    <div class="p-10 border border-blue-500 bg-blue-100">Item 9</div>
</div>

        <div class="flex items-center justify-center h-72 w-full bg-gray-100">
            <div class="p-10 border border-blue-300 bg-blue-100">01</div>
            <div class="p-10 border border-blue-300 bg-blue-100">02</div>
            <div class="p-10 border border-blue-300 bg-blue-100">03</div>
            <div class="p-10 border border-blue-300 bg-blue-100">04</div>
        </div>

        <div class="flex flex-col md:flex-row px-4">
            <div
                class="group block max-w-xs mx-auto rounded-lg p-6 my-4 bg-slate-100 hover:shadow-lg hover:shadow-sky-500 space-y-3 hover:bg-sky-100 hover:border-sky-700 transition-colors duration-500 border-2 border-slate-200 text-slate-700">
                <span class="group-hover:text-sky-700">
                    <h3 class="font-bold">Card Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam repudiandae facilis
                        quis corporis exercitationem?</p>
                </span>
                <div class="block my-4">
                    <button class="subscribe">
                        <Icon class="inline" icon="ic:sharp-mark-email-read" /> Subscribe
                    </button>
                    <button class="cancel">
                        <Icon class="inline" icon="mdi:cancel-octagon" />Cancel
                    </button>
                </div>
            </div>

            <div class="block my-4">
                <button class="subscribe">
                    <Icon class="inline" icon="ic:sharp-mark-email-read" /> Subscribe
                </button>
                <button class="cancel">
                    <Icon class="inline" icon="mdi:cancel-octagon" />Cancel
                </button>
            </div>

        </div>

        <a class="border-y-2 my-4 block" href="#positioning">Go to Positioning</a>

        <!-- il{Item $}*6 -->
        <ul>
            <li class="first:bg-red-200 even:bg-green-500 odd:bg-orange-500">Item 1</li>
            <li class="even:bg-green-500 odd:bg-orange-500">Item 2</li>
            <li class="even:bg-green-500 odd:bg-orange-500">Item 3</li>
            <li class="even:bg-green-500 odd:bg-orange-500">Item 4</li>
            <li class="even:bg-green-500 odd:bg-orange-500">Item 5</li>
            <li class="even:bg-green-500 odd:bg-orange-500">Item 6</li>
        </ul>


        <img class="w-80 inline-block m-2" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 hue-rotate-15" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 hue-rotate-30" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 hue-rotate-60" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 hue-rotate-90" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 hue-rotate-180" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 -hue-rotate-90" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 -hue-rotate-60" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 -hue-rotate-30" src="https://i.imgur.com/cLmTFlN.png" alt="">
        <img class="w-80 inline-block m-2 -hue-rotate-15" src="https://i.imgur.com/cLmTFlN.png" alt="">


        <h2 id="positioning">Positioning</h2>
        <div class="relative w-1/2 h-12 my-4 p-2 bg-red-500">
            <p>Parent Element</p>
            <div class="absolute w-1/2 text-center bottom-0 right-0 bg-orange-500">
                <p>Child</p>
            </div>
        </div>

        <div class="inline-block m-0.5 relative h-32 w-32 bg-sky-100">
            <div class="absolute w-16 h-16 bg-sky-400"></div>
            <div class="absolute w-16 h-16 bg-sky-400 bottom-0 right-0"></div>
        </div>
        <div class="inline-block m-0.5 relative h-32 w-32 bg-sky-100">
            <div class="absolute w-16 h-16 bg-sky-400 right-0"></div>
            <div class="absolute w-16 h-16 bg-sky-400 left-0 bottom-0"></div>
        </div>

        <div class="inline-block m-0.5 relative h-32 w-32 bg-sky-100">
            <div class="absolute inset-x-0 top-0 h-16 bg-sky-400"></div>
        </div>
        <div class="inline-block m-0.5 relative h-32 w-32 bg-sky-100">
            <div class="absolute inset-x-0 bottom-0 h-16 bg-sky-400"></div>
        </div>
        <div class="inline-block m-0.5 relative h-32 w-32 bg-sky-100">
            <div class="absolute inset-y-0 left-0 w-16 bg-sky-400"></div>
        </div>
        <div class="inline-block m-0.5 relative h-32 w-32 bg-sky-100">
            <div class="absolute inset-y-0 right-0 w-16 bg-sky-400"></div>
        </div>

        <div class="flex justify-center">
            <div class="bg-pink-500 mix-blend-multiply p-2">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, suscipit eveniet. Enim rem illo
                    quos earum aliquam quam, ea veritatis sapiente in labore id voluptatem quibusdam, atque voluptas
                    perspiciatis, quia minima at debitis vel reiciendis ipsa veniam eaque nobis magnam!</p>
            </div>
            <div class="bg-emerald-500 mix-blend-multiply p-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ullam a quidem similique
                    reiciendis cumque, necessitatibus iure deserunt et quam architecto incidunt sit eaque nobis rerum
                    dolorum, repellendus omnis aliquid velit ab dicta accusamus? Quo illo nemo explicabo repellat
                    distinctio.</p>
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
