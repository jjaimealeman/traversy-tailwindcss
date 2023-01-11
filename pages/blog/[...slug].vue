<template>
    <!-- <div class="min-h-screen py-8 flex flex-col justify-center relative overflow-hidden lg:py-12"> -->
    <div class="container mx-auto">
        <!-- <div class="absolute inset-0 bg-[url(~/assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> -->
        <img class="opacity-50 absolute inset-0 invisible md:visible [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" :src="img(imageFile, { width: 1920, fit: 'cover' })" :alt="post.image_alt" />
        <!-- <img :src="img(imageFile)" alt=""> -->
        <!-- <img :src="img(imageFile)" alt="original" /> -->
        <!-- <img :src="img(imageFile, { width: 300, height: 300, fit: 'cover' })" :alt="post.image_alt" /> -->

        <!-- <div class="mt-12 prose prose-slate mx-auto lg:prose-lg"> -->
        <div class="mt-12 mx-auto prose-lg">
            <!-- <div class=" relative bg-white/90 px-4 lg:px-6 py-0 md:py-6 lg:py-12 md:mx-auto w-full md:max-w-3xl lg:max-w-4xl "> -->
            <div class="
                relative bg-white/90 
                drop-shadow-lg 
                mx-auto 
                pt-0 md:pt-6 pb-16 px-8
                w-full md:max-w-3xl lg:max-w-4xl 
                ">
                <div class="max-w-prose mx-auto lg:text-lg">
                    <h2 class="prose text-zinc-800 pt-[400px] md:pt-0 font-bold"> {{ post.title }} </h2>
                    <img class="opacity-90 absolute inset-0 visible md:hidden" :src="img(imageFile, { height: 400, fit: 'cover' })" :alt="post.image_alt" />
                    <div class="prose prose-zinc max-w-none" v-html="post.content2"></div>
                </div>
            </div>
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

    useHead({
        title: 'Blog',
            meta: [
                { name: 'description', content: 'My amazing site.' }
        ],
    });
</script>
