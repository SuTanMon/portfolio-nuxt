<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} | John Kirby Soliven` : 'John Kirby Soliven',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>