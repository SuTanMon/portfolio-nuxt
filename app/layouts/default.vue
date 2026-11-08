<script setup>
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div>
    <BackgroundScene />
    <div class="ui-layer relative z-10 mx-auto max-w-6xl px-5 text-lg leading-relaxed">
      <AppNavbar class="bg-base-100/60" />
      <main :class="isHome ? 'mx-auto max-w-4xl pb-16' : 'pointer-events-auto ml-auto max-w-md bg-base-100/90 p-5 pb-8'">
        <slot />
      </main>
      <AppFooter class="bg-base-100/60" />
    </div>
  </div>
</template>