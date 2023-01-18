<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 m-4 md:m-10 gap-4 md:gap-10">
      <div class="
          flex flex-col w-auto bg-white rounded-md overflow:hidden 
          shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-200"
        v-for="post in posts">
        <NuxtLink :to="`/blog/${post.slug}`">
          <img class="w-full rounded-t-md" :src="image + post.image + imagekey" width="400" :alt="post.image_alt" />
          <p class="block md:hidden px-4 py-2 bg-zinc-200 text-zinc-600 text-xs"> {{
            new Date(post.date_created).toLocaleDateString('en-US',
              dateOptionShort)
          }} </p>
          <p class="hidden md:block px-4 py-2 bg-zinc-200 text-zinc-600 text-xs bg-gradient-to-r from-white to-sky-200">
            {{
              new Date(post.date_created).toLocaleDateString('en-US',
                dateOptionLong)
            }} </p>
        </NuxtLink>
        <p class="text-xl md:text-2xl text-zinc-700 px-4 py-2 font-bold">{{ post.title }}</p>
        <!--p class="px-4 pb-6" v-html="post.content2.slice(0, 200)"></p-->
        <p class="text-lg md:text-xl text-zinc-700 mx-4 mb-4 line-clamp-4 md:line-clamp-6" v-html="post.content2"></p>
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
const imagekey = '?fit=cover&width=400&quality=80'
const dateOptionShort = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
const dateOptionLong = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Directus',
  meta: [{ name: 'description', content: 'My simple Directus Blog.' }],
});
</script>
