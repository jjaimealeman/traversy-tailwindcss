<template>
	<div class="container mx-auto">
        <TheHeader />
		<div class="">
			<div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full" v-for="post in posts">
				<div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
					<div class="">
						<p class=""> {{ new Date(post.date_created).toLocaleDateString("en-US", dateOptions) }} </p>
						<NuxtLink class="" :to="`/blog/${post.slug}`">
                            <p class=""> {{ post.title }} </p>
                            <img class="" :src="image + post.image" :alt="post.image_alt" />
                        </NuxtLink>
						<p class=""> {{ post.content.slice(0, 300) }} </p>
					</div>
				</div>
			</div>
		</div>
        <TheFooter />
	</div>
</template>

<script setup>
    useHead({
      title: 'Directus Blog',
      meta: [
        { name: 'description', content: 'My simple Directus Blog.' }
      ],
      bodyAttrs: {
        class: 'debug-screens'
      },
      // script: [ { children: 'console.log(\'Hello world\')' } ]
    })
    const { getItems } = useDirectusItems();
    const posts = await getItems({ 
        collection: "pages",
        params: {
            filter: { status: "published" },
            // Sort data by date_created
            sort: "-date_created",
        },
    });

    const image = 'https://y4aazew4.directus.app/assets/';

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
</script>

