<script setup lang="ts">
import { shallowRef, reactive, onMounted, onUnmounted } from 'vue'
import { MathUtils } from 'three'
import { useLoop } from '@tresjs/core'

const cam = shallowRef()
const mouse = reactive({ x: 0, y: 0 })
const base = { x: 5.5, y: 3.6, z: 9 }

const onMove = (e: PointerEvent) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1
}
onMounted(() => window.addEventListener('pointermove', onMove))
onUnmounted(() => window.removeEventListener('pointermove', onMove))

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta }) => {
  const c = cam.value
  if (!c) return
  const t = Math.min(delta * 3, 1)
  c.position.x = MathUtils.lerp(c.position.x, base.x + mouse.x * 1.5, t)
  c.position.y = MathUtils.lerp(c.position.y, base.y - mouse.y * 0.6, t)
  c.position.z = base.z
  c.lookAt(0, 2, -2.5)
})
</script>

<template>
  <TresPerspectiveCamera ref="cam" :position="[5.5, 3.6, 9]" :fov="45" make-default />
</template>