IMAGES.VUE 
<template>
    <!-- <div class="flex justify-center items-center min-h-screen bg-cyan-50"> -->
    <div class="container mx-auto pt-16">
        <div class=" flex justify-center items-center min-h-screen bg-cyan-50">
        <!-- global container -->
            <div class="bg-white p-6 md:p-20 m-3 space-x-10 shadow-2xl rounded-3xl">
                <!-- menu container -->
                <div class="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                    <!-- menu item -->
                    <div class="group">
                        <a href="#">Vector</a>
                        <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div class="group">
                        <a href="#">Illustrations</a>
                        <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div class="group">
                        <a href="#">Images</a>
                        <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                    <div class="group">
                        <a href="#">Icons</a>
                        <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                    </div>
                </div>
                <!-- search container -->
                <div class="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                    <!-- input and svg container -->
                    <div class="flex justify-between border-b">
                        <input class="ml-6 border-none w-full md:w-80 placeholder:font-thin placeholder:italic placeholder:text-slate-400 " type="text" placeholder="Search">
                        <button>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 text-slate-400 duration-200 hover:scale-110"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </button>
                    </div>
                    <!-- upload button -->
                    <button class="py-3 px-14 md:ml-4 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">Upload</button>
                </div>
                <!-- gallery container -->
                <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                    <!-- image 1 -->
                    <div class="relative group">
                        <img class="w-fit" src="/images/image-gallery/images/image1.jpg" alt="">
                        <div class="absolute bottom-0 left-0 right-0 p-2 mx-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div class="flex justify-between w-full">
                                <div class="font-normal">
                                    <p class="text-sm">Abstract Painting</p>
                                    <p class="text-xs">245 likes - 35 shares</p>
                                </div>
                                <div class="flex items-center">
                                    <img src="/images/image-gallery/images/bookmark.svg" alt="bookmark">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- image 1 -->
                    <div class="relative group">
                        <img class="w-fit" src="/images/image-gallery/images/image2.jpg" alt="">
                        <div class="absolute bottom-0 left-0 right-0 p-2 mx-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div class="flex justify-between w-full">
                                <div class="font-normal">
                                    <p class="text-sm">Abstract Painting</p>
                                    <p class="text-xs">245 likes - 35 shares</p>
                                </div>
                                <div class="flex items-center">
                                    <img src="/images/image-gallery/images/bookmark.svg" alt="bookmark">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- image 1 -->
                    <div class="relative group">
                        <img class="w-fit" src="/images/image-gallery/images/image3.jpg" alt="">
                        <div class="absolute bottom-0 left-0 right-0 p-2 mx-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div class="flex justify-between w-full">
                                <div class="font-normal">
                                    <p class="text-sm">Abstract Painting</p>
                                    <p class="text-xs">245 likes - 35 shares</p>
                                </div>
                                <div class="flex items-center">
                                    <img src="/images/image-gallery/images/bookmark.svg" alt="bookmark">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- image 1 -->
                    <div class="relative group">
                        <img class="w-fit" src="/images/image-gallery/images/image4.jpg" alt="">
                        <div class="absolute bottom-0 left-0 right-0 p-2 mx-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div class="flex justify-between w-full">
                                <div class="font-normal">
                                    <p class="text-sm">Abstract Painting</p>
                                    <p class="text-xs">245 likes - 35 shares</p>
                                </div>
                                <div class="flex items-center">
                                    <img src="/images/image-gallery/images/bookmark.svg" alt="bookmark">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- image 1 -->
                    <div class="relative group">
                        <img class="w-fit" src="/images/image-gallery/images/image5.jpg" alt="">
                        <div class="absolute bottom-0 left-0 right-0 p-2 mx-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div class="flex justify-between w-full">
                                <div class="font-normal">
                                    <p class="text-sm">Abstract Painting</p>
                                    <p class="text-xs">245 likes - 35 shares</p>
                                </div>
                                <div class="flex items-center">
                                    <img src="/images/image-gallery/images/bookmark.svg" alt="bookmark">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- image 1 -->
                    <div class="relative group">
                        <img class="w-fit" src="/images/image-gallery/images/image6.jpg" alt="">
                        <div class="absolute bottom-0 left-0 right-0 p-2 mx-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                            <div class="flex justify-between w-full">
                                <div class="font-normal">
                                    <p class="text-sm">Abstract Painting</p>
                                    <p class="text-xs">245 likes - 35 shares</p>
                                </div>
                                <div class="flex items-center">
                                    <img src="/images/image-gallery/images/bookmark.svg" alt="bookmark">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue';
import { useHead } from '@vueuse/head';
import { computed, defineComponent, reactive } from 'vue';
export default defineComponent({
    components: {
        Icon,
    },
	setup() {
		const siteData = reactive({
			title: `My Images Page`,
			description: `There's lots to say about Me! but not enough time and space to display it - lol! 😆`,
		})
		useHead({
			title: computed(() => siteData.title),
			meta: [
				{
					name: `description`,
					content: computed(() => siteData.description),
				},
			],
		})
	},
})
</script>

