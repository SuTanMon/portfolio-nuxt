<script setup lang="ts">
defineProps<{ eyebrow: string; title: string }>()
</script>

<template>
  <div class="pt-6">
    <p class="text-sm uppercase tracking-widest text-secondary">— {{ eyebrow }}</p>
    <h1 class="border-b-[6px] border-base-content pb-3 text-3xl font-black sm:text-4xl">{{ title }}</h1>
  </div>
</template>