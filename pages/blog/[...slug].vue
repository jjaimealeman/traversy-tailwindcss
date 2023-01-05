<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" >
        <div class="max-w-screen-sm sm:text-center sm:mx-auto">
            <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none" > {{ post.title }} </h2>
            <img :src="img(imageFile, { width: 500, format: 'webp' })" :alt="post.image_alt" />
            <p class="text-base text-gray-700 md:text-lg sm:px-4"> {{ post.content }} </p>
            <!-- {{ post.image }} -->
            <!-- <img :src="img(imageFile)" alt=""> -->
            <!-- <img :src="img(imageFile)" alt="original" /> -->
            <!-- <img :src="img(imageFile, { width: 300, height: 300, fit: 'cover' })" :alt="post.image_alt" /> -->
        </div>
    </div>
</template>


<script setup>
    const { getItems } = useDirectusItems()
    const route = useRoute()
    const posts = await getItems({ 
        collection: 'pages', 
        params: {
            filter: { slug: route.params.slug[0] },
        },
    });
    const post = posts[0];
    if (!post) throwError('No article found, 404')

    const imageFile = post.image;
    const { getThumbnail: img } = useDirectusFiles();
</script>
