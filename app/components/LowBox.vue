<script setup>
// p = position [x, y, z], s = size [width, height, depth], c = color
defineProps({
  p: { type: Array, default: () => [0, 0, 0] },
  s: { type: Array, default: () => [1, 1, 1] },
  c: { type: String, default: '#ffffff' },
})
</script>

<template>
    <TresMesh :position="p" :cast-shadow="true" :receive-shadow="true">
    <TresBoxGeometry :args="s" />
    <TresMeshStandardMaterial :color="c" flat-shading />
  </TresMesh>
</template>