<script setup lang="ts">
import { shallowRef, reactive, onMounted, onUnmounted } from 'vue'
import { MathUtils } from 'three'
import { useLoop } from '@tresjs/core'

const cam = shallowRef()
const grid = shallowRef()
const mouse = reactive({ x: 0, y: 0 })

const onMove = (e: PointerEvent) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1
}
onMounted(() => window.addEventListener('pointermove', onMove))
onUnmounted(() => window.removeEventListener('pointermove', onMove))

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta }) => {
  // grid scrolls toward the camera, wraps every 1 cell so it looks endless
  if (grid.value) {
    grid.value.position.z += delta * 4
    if (grid.value.position.z >= 1) grid.value.position.z -= 1
  }
  // camera drifts with the mouse
  const c = cam.value
  if (c) {
    const t = Math.min(delta * 3, 1)
    c.position.x = MathUtils.lerp(c.position.x, mouse.x * 2, t)
    c.position.y = MathUtils.lerp(c.position.y, 1.8 - mouse.y * 0.6, t)
    c.lookAt(0, 3, -40)
  }
})
</script>

<template>
  <TresPerspectiveCamera ref="cam" :position="[0, 1.8, 6]" :fov="60" make-default />
  <TresGridHelper ref="grid" :args="[80, 80, '#ff4d9d', '#ff2a3d']" />
</template>