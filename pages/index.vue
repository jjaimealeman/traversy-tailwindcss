<template>
    <div class="container mx-auto">
        <TheHeader />
        <EmailSubscribe />
        <TheCard />
        <TheFooter />
    </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'debug-screens'
  },
  // script: [ { children: 'console.log(\'Hello world\')' } ]
})
</script>

