<template>
	<!-- global container -->
	<div class="flex items-center justify-center min-h-screen py-16">
		<!-- inner container -->
		<div class="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">

			<!-- column 01 -->
			<div class="bg-slate-700 rounded-xl text-white">
				<!-- upper container -->
				<div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
					<div class="text-center uppercase"> Basic </div>
					<h2 class="mt-10 font-serif text-5xl text-center"> 100 GB </h2>
					<h3 class="mt-2 text-center"> $1.99/Month </h3>
					<div class="flex justify-center">
						<a href="#" class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200">Purchase</a>
					</div>
				</div>
				<!-- border -->
				<div class="border-t border-slate-700"></div>
				<!-- lower container -->
				<div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
					<!-- list container -->
					<div class="flex flex-col space-y-2">
						<!-- list item 01 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> 100 GB of storage </span>
						</div>
						<!-- list item 02 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> Option to add members </span>
						</div>
						<!-- list item 03 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> Extra member benefits </span>
						</div>
					</div>
				</div>
			</div>

			<!-- column 02 -->
			<div class="bg-violet-700 rounded-xl text-white">
				<!-- upper container -->
				<div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
					<div class="text-center uppercase"> Standard </div>
					<h2 class="mt-10 font-serif text-5xl text-center"> 200 GB </h2>
					<h3 class="mt-2 text-center"> $3.99/Month </h3>
					<div class="flex justify-center">
						<a href="#" class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200 bg-violet-600">Purchase</a>
					</div>
				</div>
				<!-- border -->
				<div class="border-t border-slate-700"></div>
				<!-- lower container -->
				<div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
					<!-- list container -->
					<div class="flex flex-col space-y-2">
						<!-- list item 01 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> 200 GB of storage </span>
						</div>
						<!-- list item 02 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> Option to add members </span>
						</div>
						<!-- list item 03 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> Extra member benefits </span>
						</div>
					</div>
				</div>
			</div>

			<!-- column 03 -->
			<div class="bg-slate-700 rounded-xl text-white">
				<!-- upper container -->
				<div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
					<div class="text-center uppercase"> Premium </div>
					<h2 class="mt-10 font-serif text-5xl text-center"> 2 TB </h2>
					<h3 class="mt-2 text-center"> $8.99/Month </h3>
					<div class="flex justify-center">
						<a href="#" class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200">Purchase</a>
					</div>
				</div>
				<!-- border -->
				<div class="border-t border-slate-700"></div>
				<!-- lower container -->
				<div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
					<!-- list container -->
					<div class="flex flex-col space-y-2">
						<!-- list item 01 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> 2 TB of storage </span>
						</div>
						<!-- list item 02 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> Option to add members </span>
						</div>
						<!-- list item 03 -->
						<div class="flex justify-center">
							<Icon class="inline" icon="material-symbols:check-small-rounded" />
							<span class="text-sm ml-1 "> Extra member benefits </span>
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
			title: `My Simple About Page`,
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
