<script setup lang="ts">
const label = useState('hoverLabel', () => '')
</script>

<template>
  <div
    v-if="label"
    class="pointer-events-none fixed inset-x-0 bottom-[30vh] z-40 text-center font-display text-2xl font-black uppercase tracking-widest text-primary [text-shadow:0_0_14px_var(--color-primary)]"
  >
    {{ label }}
  </div>
</template>