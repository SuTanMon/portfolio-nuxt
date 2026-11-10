<script setup>
defineProps({ night: { type: Boolean, default: false } })

// building heights repeat in a pattern, in 3 rows at different distances
const heights = [6, 10, 4, 8, 12, 5, 9]
const dayColors = ['#ffffff', '#f4d9d9', '#e11d2e', '#b3121f', '#fbeaea']
const rows = [-14, -20, -28] // z of each row

const towers = []
rows.forEach((z, r) => {
  for (let i = 0; i < 13; i++) {
    const h = heights[(i + r * 3) % heights.length]
    towers.push({
      p: [-24 + i * 4 + r * 1.5, h / 2 - 0.2, z],
      s: [2.6, h, 2.6],
      day: dayColors[(i + r) % dayColors.length],
      lit: (i + r) % 3 === 0, // every third building has its lights on at night
    })
  }
})
</script>

<template>
  <TresMesh v-for="(t, i) in towers" :key="`${i}-${night}`" :position="t.p">
    <TresBoxGeometry :args="t.s" />
    <TresMeshBasicMaterial v-if="night && t.lit" color="#e11d2e" />
    <TresMeshStandardMaterial v-else :color="night ? '#220a10' : t.day" flat-shading />
  </TresMesh>
</template>