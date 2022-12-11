<template>
	<nav>
		<div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
			<router-link active-class="active" to="/">Home</router-link>
			<router-link active-class="active" to="/about">About</router-link>
			<router-link active-class="active" to="/colors">Colors</router-link>
			<router-link active-class="active" to="/api">API</router-link>
			<router-link active-class="active" to="/NotFound">404</router-link>
		</div>
	</nav>
</template>


<style scoped>
	nav {
		@apply bg-gray-800 fixed w-full border-b-2 border-b-blue-400;
	}
	a {
		@apply text-gray-300 border-b-2 border-transparent hover:text-blue-400 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6;
	}
	.active {
		@apply text-white font-bold transition-colors duration-200 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6;
	}
</style>
