<script setup lang="ts">
const sky = '#f6eeeb'

let seed = 7
const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const palette = ['#ffffff', '#f4d9d9', '#e11d2e', '#b3121f', '#ffffff', '#fbeaea']

const towers = Array.from({ length: 44 }, () => {
  const w = 1.5 + rand() * 2
  const h = 2 + rand() * 11
  return {
    p: [-28 + rand() * 56, h / 2 - 0.2, -10 - rand() * 20] as [number, number, number],
    s: [w, h, w] as [number, number, number],
    c: palette[Math.floor(rand() * palette.length)]!,
  }
})
</script>

<template>
  <div class="fixed inset-0 z-0">
    <TresCanvas :clear-color="sky">
      <TresFog :args="[sky, 14, 55]" />
      <TresAmbientLight :intensity="1.1" />
      <TresDirectionalLight :position="[6, 10, 6]" :intensity="2.2" />
      <TresPointLight :position="[0, 2.2, -1.6]" color="#ff2a3d" :intensity="12" :distance="7" />

      <StudioRig />
      <StudioRoom />

      <!-- ground + city outside the window -->
      <TresMesh :position="[0, -0.2, -40]" :rotation="[-Math.PI / 2, 0, 0]">
        <TresPlaneGeometry :args="[200, 200]" />
        <TresMeshStandardMaterial color="#ece4e1" />
      </TresMesh>
      <LowBox v-for="(t, i) in towers" :key="i" :p="t.p" :s="t.s" :c="t.c" />
    </TresCanvas>
  </div>
</template>