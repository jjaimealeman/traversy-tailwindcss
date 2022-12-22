<template>
	<footer class="fixed bottom-0">
		<!-- <p>Copyright &copy; {{ getDate }} | jjaimealeman </p> -->
		<p>Copyright &copy; {{ new Date().getFullYear() }} | jjaimealeman </p>

		<div class="z-[60] fixed px-2 bottom-0 right-0 bg-black text-white border-[1px] border-white p-1 text-xs">
			{{ width }} x {{ height }}
		</div>

	</footer>
</template>


<script setup>
import { useDateFormat, useNow, useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const getDate = useDateFormat(useNow(), 'YYYY')
</script>


<style>
footer {
	@apply bg-gray-800/[0.95] text-white w-full border-t-2 border-t-blue-400 p-2 text-center;
}
</style>
