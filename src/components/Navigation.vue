<template>
	<nav class="z-50">
		<div class="container flex items-center justify-center py-4 mx-auto text-xl text-gray-600 capitalize md:py-6 sm:text-base">
			<router-link class="px-4 sm:px-0" active-class="active" to="/">home</router-link>
			<router-link class="px-4 sm:px-0" active-class="active" to="/images">images</router-link>
			<router-link class="px-4 sm:px-0" active-class="active" to="/product">product</router-link>
			<router-link class="px-4 sm:px-0" active-class="active" to="/pricing">pricing</router-link>
			<router-link class="px-4 sm:px-0" active-class="active" to="/email">email</router-link>
			<router-link class="px-4 sm:px-0" active-class="active" to="/colors">colors</router-link>
			<!-- <router-link class="px-4 sm:px-0" active-class="active" to="/api">API</router-link> -->
			<!-- <router-link class="px-4 sm:px-0" active-class="active" to="/NotFound">404</router-link> -->
		</div>
	</nav>
</template>


<style scoped>
	nav {
		@apply bg-gray-800/[0.95] fixed w-full border-b-2 border-b-blue-400;
	}
	a {
		@apply text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6;
	}
	.active {
		@apply text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6;
	}
</style>
