<template>
	<div class="pt-12">
		<div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
				Ready to dive in today?
				<br />
				<div class="text-orange-600">Vite + Vue 3 + Tailwind CSS</div>
			</h2>
			<div class="flex mt-8 lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex">
					<router-link
						to="/colors"
						class="shadow-none transition-all duration-300 p-2 m-2 rounded-md border-2 border-slate-700 text-slate-900 hover:-translate-y-[0.1em] bg-orange-500 active:bg-orange-300 active:text-orange-700 active:border-orange-700 hover:shadow-orange-500 hover:shadow-md"
					>Colors Page</router-link>
				</div>
				<ButtonRepo />
			</div>
		</div>
		<div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-2xl font-bold leading-8 tracking-normal">
				Check out the
				<router-link to="/colors" class="text-orange-600">Colors Page</router-link>.
			</h2>
		</div>
	</div>
</template>


<script>
import { useHead } from '@vueuse/head'
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
	setup() {
		const siteData = reactive({
			title: `My Simple Vue Website`,
			description: `Learning Vue a little bit at a time. This is the result of learning Vite, Vue3, and TailwindCSS with a bunch of handy extensions and plugins.`,
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
