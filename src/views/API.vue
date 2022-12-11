<template>
	<div class="bg-gray-50 pt-12">
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
				Learning some API <em class="text-gray-600">stuffs</em>.
				<br />
				<div class="text-purple-600">Vite + Vue 3 + Tailwind CSS</div>
			</h2>
		</div>
		<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:items-center lg:justify-between lg:py-16 lg:px-8">
			<h2 class="text-3xl font-bold leading-8 tracking-normal mb-8">My First BLOG.</h2>
			<p class="p-2 mb-4 bg-sky-200 border-l-4 border-l-sky-400">Pulling data from my back-end server at <a class="text-blue-700 underline" href="https://915websites.com" target="_blank" title="Affordable, fast websites for the local El Paso TX Business Owner.">915websites.com</a></p>
			<section id="blog">
				<div v-if="error">
					{{ error }}
				</div>
				<div v-else>
					<div class="mb-8" v-for="blog in blogs" :key="blog.id">
						<h2 class="p-2 border-l-4 border-l-slate-400 border-t-2 border-t-slate-400">{{ blog.title }}</h2>

						<p class="italic pl-2">{{ blog.description }}</p>

						<p class="pl-2">{{ blog.content }}</p>
					</div>
				</div>
			</section>

		</div>
	</div>
</template>


<script>
import { useHead } from '@vueuse/head';
import axios from 'axios';
import { computed, defineComponent, reactive } from 'vue';
export default defineComponent({
	setup() {
		const siteData = reactive({
			title: `My API stuffs`,
			description: `Learning to play with APIs.`,
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

	name: 'App',
		data () {
			return {
				blogs: [],
				error: null
			}
		},
		async mounted () {
			try {
				const response = await axios.get('https://915websites.com/items/blog')
				this.blogs = response.data.data
			} catch (error) {
				this.error = error;
			}
		}
	})
</script>


<style scoped>
	#blog p {
		@apply py-4
	}
	#blog h2 {
		@apply text-2xl font-bold leading-8 tracking-normal mb-2
	}
	#blog a {
		@apply block underline p-0 mb-2 hover:bg-purple-200 hover:text-purple-600 hover:pl-1 transition-all
	}
	#blog span {
		@apply prose;
	}
</style>
