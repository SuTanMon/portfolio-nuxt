<script setup>
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

// p = starting position [x, y, z]
const props = defineProps({
  p: { type: Array, required: true },
})

const mesh = shallowRef()
const seed = props.p[0] * 3 + props.p[2] * 5 // different phase for each speck
const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  const m = mesh.value
  if (!m) return
  m.position.y = props.p[1] + Math.sin(elapsed * 0.5 + seed) * 0.25
  m.position.x = props.p[0] + Math.sin(elapsed * 0.3 + seed * 2) * 0.15
})
</script>

<template>
  <TresMesh ref="mesh" :position="p">
    <TresBoxGeometry :args="[0.04, 0.04, 0.04]" />
    <TresMeshBasicMaterial color="#fff4e0" />
  </TresMesh>
</template>