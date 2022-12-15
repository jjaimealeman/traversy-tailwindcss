<template>
	<main>
		<div class="z-[60] fixed bottom-4 left-0 bg-black text-white border-[1px] border-white p-1 text-xs">{{ windowWidth }}x{{ windowHeight }}</div>
		<Navigation />
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
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
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
