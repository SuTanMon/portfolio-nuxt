<script setup lang="ts">
const red = '#e11d2e'
const dark = '#1f1a1b'
const books = [
  { z: -2.2, h: 0.7, c: red },
  { z: -1.95, h: 0.9, c: dark },
  { z: -1.7, h: 0.6, c: '#f4b6b6' },
  { z: -1.45, h: 0.8, c: red },
  { z: -0.6, h: 0.65, c: dark },
  { z: -0.35, h: 0.85, c: '#f4b6b6' },
]
const codeBars = [
  { p: [-0.5, 2.95, -3.88], w: 0.9 },
  { p: [-0.35, 2.75, -3.88], w: 1.2 },
  { p: [-0.6, 2.55, -3.88], w: 0.7 },
  { p: [-0.2, 2.35, -3.88], w: 1.4 },
  { p: [-0.5, 2.15, -3.88], w: 0.9 },
] as { p: [number, number, number]; w: number }[]
</script>

<template>
  <!-- floor + rug -->
  <LowBox :p="[0, -0.1, 0]" :s="[14, 0.2, 10]" c="#efe7e4" />
  <TresMesh :position="[0, 0.02, 1.6]">
    <TresCylinderGeometry :args="[2.2, 2.2, 0.04, 8]" />
    <TresMeshStandardMaterial :color="red" flat-shading />
  </TresMesh>

  <!-- walls (back wall has a window opening) -->
  <LowBox :p="[-4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />
  <LowBox :p="[4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />
  <LowBox :p="[0, 0.6, -5]" :s="[5, 1.2, 0.3]" />
  <LowBox :p="[0, 4.5, -5]" :s="[5, 1, 0.3]" />
  <LowBox :p="[-7, 2.5, 0]" :s="[0.3, 5, 10]" />
  <LowBox :p="[-4.75, 1.2, -4.83]" :s="[4.5, 0.15, 0.05]" :c="red" />
  <LowBox :p="[4.75, 1.2, -4.83]" :s="[4.5, 0.15, 0.05]" :c="red" />

  <!-- desk -->
  <LowBox :p="[0, 1.2, -3.6]" :s="[4.4, 0.15, 1.8]" />
  <LowBox :p="[-2, 0.6, -4.3]" :s="[0.15, 1.2, 0.15]" :c="red" />
  <LowBox :p="[2, 0.6, -4.3]" :s="[0.15, 1.2, 0.15]" :c="red" />
  <LowBox :p="[-2, 0.6, -2.9]" :s="[0.15, 1.2, 0.15]" :c="red" />
  <LowBox :p="[2, 0.6, -2.9]" :s="[0.15, 1.2, 0.15]" :c="red" />

  <!-- monitor -->
  <LowBox :p="[0, 1.3, -3.8]" :s="[0.8, 0.06, 0.5]" :c="dark" />
  <LowBox :p="[0, 1.65, -3.9]" :s="[0.12, 0.7, 0.12]" :c="dark" />
  <LowBox :p="[0, 2.55, -3.95]" :s="[2.4, 1.4, 0.1]" :c="dark" />
  <TresMesh :position="[0, 2.55, -3.89]">
    <TresPlaneGeometry :args="[2.2, 1.2]" />
    <TresMeshBasicMaterial :color="red" />
  </TresMesh>
  <LowBox v-for="(b, i) in codeBars" :key="i" :p="b.p" :s="[b.w, 0.08, 0.01]" c="#ffffff" />

  <!-- keyboard, mouse, mug -->
  <LowBox :p="[0, 1.3, -3]" :s="[1.5, 0.05, 0.5]" />
  <LowBox :p="[1.1, 1.3, -3]" :s="[0.25, 0.05, 0.4]" :c="red" />
  <TresMesh :position="[-1.7, 1.43, -3.3]">
    <TresCylinderGeometry :args="[0.15, 0.15, 0.3, 8]" />
    <TresMeshStandardMaterial :color="red" flat-shading />
  </TresMesh>

  <!-- chair -->
  <LowBox :p="[0, 0.95, -2.2]" :s="[1.1, 0.12, 1.1]" :c="red" />
  <LowBox :p="[0, 1.55, -1.7]" :s="[1.1, 1.1, 0.12]" :c="red" />
  <LowBox :p="[0, 0.5, -2.2]" :s="[0.12, 0.9, 0.12]" :c="dark" />
  <LowBox :p="[0, 0.05, -2.2]" :s="[0.9, 0.06, 0.15]" :c="dark" />
  <LowBox :p="[0, 0.05, -2.2]" :s="[0.15, 0.06, 0.9]" :c="dark" />

  <!-- shelf + books on the left wall -->
  <LowBox :p="[-6.8, 2.6, -1.3]" :s="[0.4, 0.1, 2.4]" />
  <LowBox v-for="(b, i) in books" :key="i" :p="[-6.8, 2.65 + b.h / 2, b.z - 0.1]" :s="[0.3, b.h, 0.2]" :c="b.c" />

  <!-- frames on the back wall -->
  <template v-for="x in [-5.8, -4.6, -3.4]" :key="x">
    <LowBox :p="[x, 3.1, -4.81]" :s="[1.1, 1.4, 0.08]" :c="red" />
    <LowBox :p="[x, 3.1, -4.78]" :s="[0.9, 1.2, 0.1]" c="#ffffff" />
  </template>

  <!-- plant -->
  <TresMesh :position="[3.6, 0.4, -3.6]">
    <TresCylinderGeometry :args="[0.4, 0.3, 0.8, 6]" />
    <TresMeshStandardMaterial color="#ffffff" flat-shading />
  </TresMesh>
  <TresMesh :position="[3.6, 1.4, -3.6]">
    <TresConeGeometry :args="[0.3, 1.2, 5]" />
    <TresMeshStandardMaterial :color="red" flat-shading />
  </TresMesh>
  <TresMesh :position="[3.35, 1.2, -3.5]" :rotation="[0, 0, 0.35]">
    <TresConeGeometry :args="[0.25, 1, 5]" />
    <TresMeshStandardMaterial :color="red" flat-shading />
  </TresMesh>
  <TresMesh :position="[3.85, 1.2, -3.7]" :rotation="[0, 0, -0.35]">
    <TresConeGeometry :args="[0.25, 1, 5]" />
    <TresMeshStandardMaterial :color="red" flat-shading />
  </TresMesh>
</template>