<script setup lang="ts">
withDefaults(
  defineProps<{
    p?: [number, number, number]
    s?: [number, number, number]
    r?: [number, number, number]
    c?: string
  }>(),
  { p: () => [0, 0, 0], s: () => [1, 1, 1], r: () => [0, 0, 0], c: '#ffffff' },
)
</script>

<template>
  <TresMesh :position="p" :rotation="r">
    <TresBoxGeometry :args="s" />
    <TresMeshStandardMaterial :color="c" flat-shading />
  </TresMesh>
</template>