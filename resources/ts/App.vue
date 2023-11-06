<template>
  <RouterView />
</template>
<script setup lang="ts">
import { watch } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeChanged = (to) => {
  document.title = to.meta.title ? to.meta.title : 'スマホ_lineアプリ_クーポン'
}
watch(
  () => route.name,
  async () => {
    await routeChanged(route)
  }
)
</script>
<style scoped></style>
