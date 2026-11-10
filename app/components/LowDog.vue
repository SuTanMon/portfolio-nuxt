<script setup>
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const reduceMotion = useState('reduceMotion', () => false)
const tail = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (!tail.value || reduceMotion.value) return
  tail.value.rotation.y = Math.sin(elapsed * 9) * 0.5
})
</script>

<template>
  <TresGroup>
    <LowBox :p="[0, 0.215, 0]" :s="[0.42, 0.35, 0.9]" />
    <LowBox :p="[0, 0.3, 0.55]" :s="[0.3, 0.28, 0.32]" />
    <LowBox :p="[0, 0.25, 0.76]" :s="[0.16, 0.14, 0.18]" c="#f4d9d9" />
    <LowBox :p="[0, 0.29, 0.86]" :s="[0.07, 0.06, 0.04]" c="#1f1a1b" />
    <LowBox :p="[-0.17, 0.38, 0.5]" :s="[0.06, 0.2, 0.12]" c="#e11d2e" />
    <LowBox :p="[0.17, 0.38, 0.5]" :s="[0.06, 0.2, 0.12]" c="#e11d2e" />
    <LowBox :p="[-0.07, 0.35, 0.715]" :s="[0.04, 0.04, 0.01]" c="#1f1a1b" />
    <LowBox :p="[0.07, 0.35, 0.715]" :s="[0.04, 0.04, 0.01]" c="#1f1a1b" />
    <LowBox :p="[0, 0.37, 0.4]" :s="[0.32, 0.05, 0.2]" c="#e11d2e" />
    <LowBox :p="[-0.11, 0.07, 0.62]" :s="[0.1, 0.09, 0.2]" c="#f4d9d9" />
    <LowBox :p="[0.11, 0.07, 0.62]" :s="[0.1, 0.09, 0.2]" c="#f4d9d9" />
    <!-- tail wags side to side around its base -->
    <TresGroup ref="tail" :position="[0, 0.32, -0.45]">
      <LowBox :p="[0, 0.05, -0.15]" :s="[0.07, 0.07, 0.3]" />
    </TresGroup>
  </TresGroup>
</template>