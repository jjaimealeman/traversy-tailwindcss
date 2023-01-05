<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" >
        <div class="max-w-screen-sm sm:text-center sm:mx-auto">
            <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none" > {{ post.title }} </h2>
            <img :src="img(fileId2, { width: 500, format: 'webp' })" :alt="post.image_alt" />
            <p class="text-base text-gray-700 md:text-lg sm:px-4"> {{ post.content }} </p>
            <!-- {{ post.image }} -->
            <!-- <img :src="img(fileId2)" alt=""> -->
            <!-- <img :src="img(fileId2)" alt="original" /> -->
            <!-- <img :src="img(fileId2, { width: 300, height: 300, fit: 'cover' })" :alt="post.image_alt" /> -->
        </div>
    </div>
</template>
<script setup>
const { getItemById } = useDirectusItems()
const route = useRoute()
const post = await getItemById({ collection: 'pages', id: route.params.id })
if (!post) throwError('No article found, 404')

const fileId2 = post.image;
const fileId = '7da93be6-8591-4f14-9acf-86b5b8844171';
const { getThumbnail: img } = useDirectusFiles();

</script>
