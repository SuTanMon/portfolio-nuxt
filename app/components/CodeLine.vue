<script setup>
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

// x0 = left edge, y / z = height and depth, w = full width of the line
const props = defineProps({
  x0: { type: Number, required: true },
  y: { type: Number, required: true },
  z: { type: Number, required: true },
  w: { type: Number, required: true },
  speed: { type: Number, default: 1 },
})

const mesh = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  const m = mesh.value
  if (!m) return
  // grows and shrinks between 20% and 100% of its width, like typing
  const k = 0.6 + 0.4 * Math.sin(elapsed * props.speed + props.x0 * 7 + props.y * 13)
  m.scale.x = k
  m.position.x = props.x0 + (props.w * k) / 2 // keep the left edge fixed
})
</script>

<template>
  <TresMesh ref="mesh" :position="[x0 + w / 2, y, z]">
    <TresBoxGeometry :args="[w, 0.08, 0.01]" />
    <TresMeshBasicMaterial color="#ffffff" />
  </TresMesh>
</template>