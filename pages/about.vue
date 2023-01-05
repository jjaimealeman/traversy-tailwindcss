<template>
    <div class="container mx-auto">
        <TheHeader />
        <!-- <div class="flex flex-row gap-12 py-12 items-center justify-center"> -->
        <div class="grid grid-cols-3 gap-12 py-12 items-start">
            <div class="max-w-xl text-left rounded-xl" @click="navigateTo(`/blog/${post.id}`)" v-for="post in posts" :key="post.id" :post="post" >
                <div>
<!-- POST.IMAGE --> 
                    <img :src="post.image" class="rounded-t-lg object-fill" alt="post image" />
<!-- POST.AUTHOR & POST.DATE --> 
                    <div class="flex flex-row justify-between bg-neutral-200 text-neutral-600 py-2 px-8">
                        <span class=""><Icon name="material-symbols:person-pin" /> {{ post.author }}</span> 
                        <span class=""><Icon name="system-uicons:calendar-date" /> {{ post.date }}</span>
                    </div>
                </div>
                <div class="px-8 py-4 bg-neutral-100 rounded-b-lg">
                    <!-- POST.TITLE --> 
                    <h3 class="text-2xl text-neutral-700"> {{ post.title }} </h3>
<!-- POST.BODY --> 
                    <p class="mb-2">{{ post.body.slice(0, 230) }}</p>
                    <div class="flex flex-row gap-2 mt-2">
<!-- POST.TAG --> 
                        <span v-for="tag in post.tags" :key="tag" class="bg-neutral-200 text-neutral-600 rounded-full p-2" > <Icon name="ri:price-tag-3-line" /> {{ tag }} </span>

                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'debug-screens'
  },
  // script: [ { children: 'console.log(\'Hello world\')' } ]
})
const { data: posts } = await useFetch(
    'http://my-json-server.typicode.com/jjaimealeman/dummy-data/posts'
    // 'https://mockend.com/jjaimealeman/dummy-data/posts'
)
</script>

