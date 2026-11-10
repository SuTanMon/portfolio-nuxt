<script setup>
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const chair = shallowRef()
const { onBeforeRender } = useLoop()
const reduceMotion = useState('reduceMotion', () => false)

// slow side-to-side swivel around a base angle of 0.3 radians
onBeforeRender(({ elapsed }) => {
  if (reduceMotion.value) return
  if (chair.value) chair.value.rotation.y = 0.3 + Math.sin(elapsed * 0.6) * 0.2
})
</script>

<template>
  <TresGroup ref="chair" :rotation="[0, 0.3, 0]">
    <LowBox :p="[0, 0.95, 0]" :s="[1.1, 0.12, 1.1]" c="#e11d2e" />
    <LowBox :p="[0, 1.55, 0.5]" :s="[1.1, 1.1, 0.12]" c="#e11d2e" />
    <LowBox :p="[0, 0.5, 0]" :s="[0.12, 0.9, 0.12]" c="#1f1a1b" />
  </TresGroup>
</template>