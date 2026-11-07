
<script setup lang="ts">
import { ref, shallowRef, onUnmounted } from 'vue'
import { MathUtils } from 'three'
import { useLoop } from '@tresjs/core'

const mesh = shallowRef()
const hovered = ref(false)
const fast = ref(false)

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
  const m = mesh.value
  if (!m) return

  const speed = fast.value ? 4 : 1

  m.rotation.y += delta * speed
  m.rotation.x += delta * 0.4 * speed

  const s = MathUtils.lerp(
    m.scale.x,
    hovered.value ? 1.3 : 1,
    Math.min(delta * 8, 1)
  )

  m.scale.setScalar(s)
})

const onEnter = () => {
  hovered.value = true
  document.body.style.cursor = 'pointer'
}

const onLeave = () => {
  hovered.value = false
  document.body.style.cursor = ''
}

const onClick = () => {
  fast.value = !fast.value
}

onUnmounted(() => {
  document.body.style.cursor = ''
})
</script>

<template>
  <TresMesh
    ref="mesh"
    :position="[0, 1, 0]"
    @pointer-enter="onEnter"
    @pointer-leave="onLeave"
    @click="onClick"
  >
    <TresBoxGeometry :args="[1.5, 1.5, 1.5]" />
    <TresMeshBasicMaterial
      :color="hovered ? '#ff4d9d' : '#ff2a3d'"
      wireframe
    />
  </TresMesh>
</template>
