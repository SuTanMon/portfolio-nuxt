<script setup>
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div>
    <BackgroundScene />
    <div class="ui-layer relative z-10 flex min-h-screen flex-col text-lg leading-relaxed">
      <AppNavbar />
      <div class="mx-auto w-full max-w-6xl flex-1 px-5">
        <main :class="isHome ? 'mx-auto max-w-4xl pb-16' : 'pointer-events-auto ml-auto max-w-md bg-base-100/90 p-5 pb-8'">
          <slot />
        </main>
      </div>
      <AppFooter />
    </div>
  </div>
</template>