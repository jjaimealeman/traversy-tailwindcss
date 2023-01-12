PRODUCT.VUE 
<template>
    <div class="flex items-center justify-center min-h-screen bg-slate-100">
        <div class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">

        <!-- image div -->
            <div>
                <img class="mx-auto duration-200 w-60 hover:scale-105" src="/images/product-modal/images/headphone.png" alt="">
            </div>

            <!-- content div -->
            <div class="flex flex-col space-y-6">
                <!-- label & description container -->
                <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
                    <div>

                        <div class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                            Free Shipping
                        </div>
                    </div>

                    <!-- description -->
                    <div class="max-w-sm text-2xl font-medium">
                        Razor Kraken Kitty Edition Gaming Headset Quartz
                    </div>

                    <!-- price container -->
                    <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <p class="line-through">$799</p>
                        <p class="text-5xl font-bold">$599</p>
                        <p class="text-small font-light text-gray-400">
                        This offer is valid until April 3rd or as long as stock lasts!
                        </p>
                    </div>

                    <!-- button group -->
                    <div class="group">
                        <button class="w-full duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                            <div class="duration-150 px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700">Add to Cart</div>
                        </button>
                    </div>

                    <!-- stock -->
                    <div class="flex items-center space-x-3 group">
                        <div class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                        <div class="text-sm">50+ pcs. in stock</div>
                    </div>

                    <!-- bottom buttons container -->
                    <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                        <button class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                            <img class="w-8" src="/images/product-modal/images/weight.png" alt="">
                            <span>Add to Cart</span>
                        </button>

                        <button class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                            <img class="w-8" src="/images/product-modal/images/heart.png" alt="">
                            <span>Add to Wishlist</span>
                        </button>
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
			title: `My Product Page`,
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

