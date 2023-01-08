<template>
    <div class="container mx-auto">

        <div class="border-2 text-center p-4">
            <button class="bg-gray-200 rounded-lg p-2 " @click="awesome = !awesome">Toggle <Icon class="inline" name="ic:outline-email" /></button>
            <h2 class="text-xl font-medium text-white" v-if="awesome">Subscribe to our newsletter.</h2>
            <h2 class="text-white" v-else><EmailSubscribe /></h2>
        </div>

        <TheCard />
    </div>
</template>


<script setup lang="ts">
import { ref} from 'vue'
const awesome = ref(true)

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
});



</script>

