<template>
    <TheHeader />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <TheFooter />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap');
</style>

<script setup>
    useHead({
      link: [
            { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap'}
      ]
    })
</script>

