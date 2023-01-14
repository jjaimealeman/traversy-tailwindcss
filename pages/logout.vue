<template>
  <button @click="client.auth.signOut()">Logout</button>
</template>

<script setup>
const client = useSupabaseAuthClient()
</script>

