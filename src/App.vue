<template>
	<main>
		<Navigation />
		<Transition>
			<router-view />
		</Transition>
		<Footer />
	</main>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
</script>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
