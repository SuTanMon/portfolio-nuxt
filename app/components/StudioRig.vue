<script setup>
import { shallowRef, reactive, onMounted, onUnmounted } from 'vue'
import { MathUtils, Vector3 } from 'three'
import { useLoop } from '@tresjs/core'

const props = defineProps({ path: { type: String, default: '/' } })

// each view is shifted sideways so the object appears on the LEFT of the screen
// (the content card on the right)
const views = {
  '/': { pos: [5.5, 3.6, 9], look: [0, 2, -2.5] },
  '/tech-stack': { pos: [0.9, 2.6, -0.5], look: [0.9, 2.55, -3.9] },
  '/certifications': { pos: [-3.5, 3, -0.5], look: [-3.5, 3.1, -4.8] },
  '/about': { pos: [-3, 3.2, -2.3], look: [-6.8, 2.9, -2.3] },
  '/projects': { pos: [0.9, 2.4, -0.6], look: [-1.2, 1.55, -2.85] },
  '/contact': { pos: [3.6, 2.2, -0.2], look: [2.6, 1.3, -2.2] },
}

const cam = shallowRef()
const look = new Vector3(0, 2, -2.5) // the point the camera is looking at right now
const mouse = reactive({ x: 0, y: 0 })
const reduceMotion = useState('reduceMotion', () => false)

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

  // wider lens on tall/narrow screens so the room still fits
  const fov = c.aspect < 1 ? 75 : 45
  if (c.fov !== fov) {
    c.fov = fov
    c.updateProjectionMatrix()
  }
  const view = views[props.path] || views['/']
  const t = Math.min(delta * 2.5, 1) // how fast the camera catches up

const drift = reduceMotion.value ? 0 : 1
c.position.x = MathUtils.lerp(c.position.x, view.pos[0] + mouse.x * 0.5 * drift, t)
c.position.y = MathUtils.lerp(c.position.y, view.pos[1] - mouse.y * 0.3 * drift, t)
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