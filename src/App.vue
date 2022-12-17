<template>
	<main>
		<div class="z-[60] fixed bottom-0 right-0 bg-black text-white border-[1px] border-white p-1 text-xs">
			{{ windowWidth }}x{{ windowHeight }}
		</div>
		<Navigation />
		<router-view />
		<Footer />
	</main>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

export default {
	data() {
		return {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		}
	},
	mounted() {
		window.onresize = () => {
			this.windowWidth = window.innerWidth,
				this.windowHeight = window.innerHeight
			// console.log(this.windowWidth)
		}
	}
}

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
