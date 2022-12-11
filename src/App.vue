<template>
	<main>
		<Navigation />
		<router-view />
		<Footer />
	</main>
</template>

<script setup>
    import Navigation from './components/Navigation.vue';
    import Footer from './components/Footer.vue';
</script>
