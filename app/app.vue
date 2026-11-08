<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} | John Kirby Soliven` : 'John Kirby Soliven',
})
useSeoMeta({
  ogSiteName: 'John Kirby Soliven',
  ogImage: 'https://johnkirby-soliven-portfolio.onrender.com/images/og-image.png',
  twitterImage: 'https://johnkirby-soliven-portfolio.onrender.com/images/og-image.png',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>