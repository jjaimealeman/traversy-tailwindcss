<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseAuthClient()
const router = useRouter()

// Login method using providers
const login = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
  const { error } = await client.auth.signInWithOAuth({ provider })

  if (error) {
    return alert('Something went wrong !')
  }

  router.push('/dashboard')
}
useHead({
  title: 'Login',
  meta: [{ name: 'description', content: 'My simple Supabase test.' }],
});
definePageMeta({
  layout: 'none',
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <button class="border-2 border-zinc-500 bg-zinc-200 text-zinc-500 rounded-md p-2" @click="login('github')">
      <Icon name="mdi:github" />
      Login with GitHub
    </button>
  </div>
</template>

