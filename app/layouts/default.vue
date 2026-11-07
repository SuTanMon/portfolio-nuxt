<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div>
    <BackgroundScene />
    <HoverLabel />
    <div
      class="ui-layer relative z-10 mx-auto max-w-4xl px-5 text-lg leading-relaxed"
      :class="isHome ? '' : 'bg-base-100/75'"
    >
      <AppNavbar class="bg-base-100/60" />
      <main class="pb-16"><slot /></main>
      <AppFooter class="bg-base-100/60" />
    </div>
  </div>
</template>