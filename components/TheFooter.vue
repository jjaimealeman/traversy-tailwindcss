<template>
	<footer class="bottom-0 w-full mt-8">
		<!-- <p>Copyright &copy; {{ getDate }} | jjaimealeman </p> -->
		<p>
            Copyright &copy; {{ new Date().getFullYear() }} | jjaimealeman 
            <Icon name="logos:nuxt-icon" size="28" />
            <Icon name="simple-icons:directus" size="28" />
            <Icon name="logos:tailwindcss-icon" size="28" />
            <Icon name="logos:netlify" size="28" />

        </p>
		<div class="z-[60] fixed px-2 bottom-0 right-0 bg-black text-white border-[1px] border-white p-1 text-xs">
			{{ width }} x {{ height }}
		</div>
	</footer>
</template>


<script setup>
// import { useDateFormat, useNow, useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const getDate = useDateFormat(useNow(), 'YYYY')
</script>


<style scoped>
footer {
	@apply bg-zinc-900/[0.95] text-zinc-400 w-full border-t-2 border-t-blue-400 p-2 text-center;
}
svg {
    margin: 0 0.25rem;
    }
</style>

