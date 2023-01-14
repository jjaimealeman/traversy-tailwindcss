<script setup lang="ts">
const client = useSupabaseClient()

const { data: restaurant } = await useAsyncData('restaurant', async () => {
  const { data } = await client.from('restaurants').select('name, location').eq('name', 'My Restaurant Name').single()

  return data
})
</script>

