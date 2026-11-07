<script setup>
import { shallowRef, reactive, onMounted, onUnmounted } from 'vue'
import { MathUtils, Vector3 } from 'three'
import { useLoop } from '@tresjs/core'

const props = defineProps({ path: { type: String, default: '/' } })

// where the camera sits (pos) and what it looks at (look) for each page
const views = {
  '/': { pos: [5.5, 3.6, 9], look: [0, 2, -2.5] },
  '/tech-stack': { pos: [0, 2.6, -0.5], look: [0, 2.55, -3.9] },
  '/certifications': { pos: [-4.6, 3, -0.5], look: [-4.6, 3.1, -4.8] },
  '/about': { pos: [-3, 3.2, -1.3], look: [-6.8, 2.9, -1.3] },
  '/contact': { pos: [1.4, 2.6, -0.8], look: [1.4, 1.3, -3.2] },
}

const cam = shallowRef()
const look = new Vector3(0, 2, -2.5) // the point the camera is looking at right now
const mouse = reactive({ x: 0, y: 0 })

const onMove = (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1
}
onMounted(() => window.addEventListener('pointermove', onMove))
onUnmounted(() => window.removeEventListener('pointermove', onMove))

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta }) => {
  const c = cam.value
  if (!c) return

  const view = views[props.path] || views['/']
  const t = Math.min(delta * 2.5, 1) // how fast the camera catches up

  // move toward the target position, plus a small drift from the mouse
  c.position.x = MathUtils.lerp(c.position.x, view.pos[0] + mouse.x * 0.5, t)
  c.position.y = MathUtils.lerp(c.position.y, view.pos[1] - mouse.y * 0.3, t)
  c.position.z = MathUtils.lerp(c.position.z, view.pos[2], t)

  // turn toward the target point
  look.x = MathUtils.lerp(look.x, view.look[0], t)
  look.y = MathUtils.lerp(look.y, view.look[1], t)
  look.z = MathUtils.lerp(look.z, view.look[2], t)
  c.lookAt(look)
})
</script>

<template>
  <TresPerspectiveCamera ref="cam" :position="[5.5, 3.6, 9]" :fov="45" make-default />
</template>