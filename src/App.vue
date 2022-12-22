<template>
	<main>
		<Navigation />
		<router-view />
		<Footer />
	</main>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
</script>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
