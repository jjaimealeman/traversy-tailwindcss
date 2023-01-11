<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 p-8 gap-10">
      <div class="
          flex flex-col w-auto m-4 bg-white rounded-md overflow:hidden 
          shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-200"
        v-for="post in posts">
        <NuxtLink :to="`/blog/${post.slug}`">
          <img class="w-full rounded-t-md" :src="image + post.image" :alt="post.image_alt" />
          <p class="px-4 py-2 text-green-700 text-base"> {{
            new Date(post.date_created).toLocaleDateString('en-US', dateOptions)
          }}
          </p>
          <p class="px-4 pb-2 font-bold text-base">{{ post.title }}</p>
          <p class="px-4 pb-6" v-html="post.content2.slice(0, 200)"></p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getItems } = useDirectusItems()
const posts = await getItems({
  collection: 'pages',
  params: {
    filter: { status: 'published' },
    sort: '-date_created',
  },
});
const image = 'https://y4aazew4.directus.app/assets/'
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
definePageMeta({
  layout: 'custom',
});
useHead({
  title: 'Directus Blog',
  meta: [{ name: 'description', content: 'My simple Directus Blog.' }],
});
</script>
