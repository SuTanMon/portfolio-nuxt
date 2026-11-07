<script setup>
import { ref, onUnmounted } from 'vue'

// p = position, s = size, to = page to open
const props = defineProps({
  p: { type: Array, required: true },
  s: { type: Array, required: true },
  to: { type: String, required: true },
})

const hovered = ref(false)

const onEnter = () => {
  hovered.value = true
  document.body.style.cursor = 'pointer'
}
const onLeave = () => {
  hovered.value = false
  document.body.style.cursor = ''
}
const onClick = () => navigateTo(props.to)

onUnmounted(() => {
  document.body.style.cursor = ''
})
</script>

<template>
  <TresMesh :position="p" @pointer-enter="onEnter" @pointer-leave="onLeave" @click="onClick">
    <TresBoxGeometry :args="s" />
    <TresMeshBasicMaterial color="#e11d2e" transparent :opacity="hovered ? 0.3 : 0" :depth-write="false" />
  </TresMesh>
</template>