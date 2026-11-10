<script setup>
// p = position, r = radius, h = height, c = color, seg = number of sides (fewer = more low-poly)
defineProps({
  p: { type: Array, default: () => [0, 0, 0] },
  r: { type: Number, default: 1 },
  h: { type: Number, default: 1 },
  c: { type: String, default: '#ffffff' },
  seg: { type: Number, default: 16 },
})
</script>

<template>
  <TresMesh :position="p" :cast-shadow="true" :receive-shadow="true">
    <TresCylinderGeometry :args="[r, r, h, seg]" />
    <TresMeshStandardMaterial :color="c" flat-shading />
  </TresMesh>
</template>