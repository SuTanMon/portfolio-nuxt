<script setup lang="ts">
import { ref, shallowRef, onUnmounted } from 'vue'
import { MathUtils } from 'three'
import { useLoop } from '@tresjs/core'

const props = defineProps<{
  to: string
  label: string
  shape: 'ico' | 'octa' | 'torus' | 'dodeca'
  position: [number, number, number]
}>()

const mesh = shallowRef()
const hovered = ref(false)
const hoverLabel = useState('hoverLabel', () => '')
const seed = Math.random() * 10

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta, elapsed }) => {
  const m = mesh.value
  if (!m) return
  m.rotation.y += delta * (hovered.value ? 2.5 : 0.6)
  m.rotation.x += delta * 0.3
  m.position.y = props.position[1] + Math.sin(elapsed * 1.2 + seed) * 0.25
  const s = MathUtils.lerp(m.scale.x, hovered.value ? 1.4 : 1, Math.min(delta * 8, 1))
  m.scale.setScalar(s)
})

const onEnter = () => {
  hovered.value = true
  hoverLabel.value = props.label
  document.body.style.cursor = 'pointer'
}
const onLeave = () => {
  hovered.value = false
  if (hoverLabel.value === props.label) hoverLabel.value = ''
  document.body.style.cursor = ''
}
const onClick = () => navigateTo(props.to)

onUnmounted(() => {
  document.body.style.cursor = ''
  if (hoverLabel.value === props.label) hoverLabel.value = ''
})
</script>

<template>
  <TresMesh
    ref="mesh"
    :position="position"
    @pointer-enter="onEnter"
    @pointer-leave="onLeave"
    @click="onClick"
  >
    <TresIcosahedronGeometry v-if="shape === 'ico'" :args="[1, 0]" />
    <TresOctahedronGeometry v-else-if="shape === 'octa'" :args="[1.2, 0]" />
    <TresTorusGeometry v-else-if="shape === 'torus'" :args="[0.9, 0.35, 12, 32]" />
    <TresDodecahedronGeometry v-else :args="[1, 0]" />
    <TresMeshBasicMaterial :color="hovered ? '#ff4d9d' : '#ff2a3d'" wireframe />
  </TresMesh>
</template>