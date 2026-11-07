<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const mesh = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
  if (!mesh.value) return
  mesh.value.rotation.y += delta
  mesh.value.rotation.x += delta * 0.4
})
</script>

<template>
  <TresMesh ref="mesh" :position="[0, 1, 0]">
    <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
    <TresMeshBasicMaterial color="#ff2a3d" wireframe />
  </TresMesh>
</template>