<template>
	<section class="flex items-center h-screen sm:p-16 bg-red-400 shadow bg-[url('/src/views/NotFound-1280.jpg')] bg-cover">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
			<router-link to="/" title="Back to the Homepage.">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-40 h-40 text-red-900 hover:text-red-400"><path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" /> <rect width="176" height="32" x="168" y="320" fill="currentColor" /> <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042" /> <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63" /></svg>
			</router-link>

			<div>
				<div class="group">
					<p>Hovering over this div will show the tooltip.</p>
					<span class="absolute z-50 hidden py-2 px-4 -mt-16 text-center bg-yellow-400 text-orange-700 border border-yellow-600 rounded tooltip-text group-hover:block">Hey There!</span>
				</div>

				<div class="group">
					<p class="mt-4">Hover me
						<!-- <span class="absolute z-50 hidden py-2 px-4 -mt-16 -ml-6 text-center bg-blue-200 rounded tooltip-text group-hover:block">Look at this!</span> -->
						<span class="absolute z-50 hidden py-2 px-4 ml-20 text-center bg-blue-400 text-indigo-700 border border-blue-600  rounded tooltip-text group-hover:block">Look at this!</span>
					</p>
				</div>
			</div>

			<section class="text-3xl text-center font-bold my-auto py-8 px-16 leading-tight text-red-900 bg-white mx-4 p-4 opacity-50 rounded-md">
				<p>Page Not Found</p>
				<p class="text-red-600">(uh-oh)</p>
			</section>
		</div>
	</section>
</template>


<script>
	import { defineComponent, computed, reactive } from 'vue'
	import { useHead } from '@vueuse/head'
	export default defineComponent({
		setup() {
			const siteData = reactive({
				title: `Page Not Found`,
				description: `uh-oh ... I goofed!`,
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


<style>
	.tooltip .tooltip-text {
		visibility: hidden;
		text-align: center;
		padding: 2px 6px;
		position: absolute;
		z-index: 100;
	}
	.tooltip:hover .tooltip-text {
		visibility: visible;
	}
</style>]
