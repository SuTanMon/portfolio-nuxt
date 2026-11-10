<script setup>
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const reduceMotion = useState('reduceMotion', () => false)
const tail = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (!tail.value || reduceMotion.value) return
  tail.value.rotation.z = Math.sin(elapsed * 1.5) * 0.4
})
</script>

<template>
  <TresGroup>
    <LowBox :p="[0, 0.2, 0]" :s="[0.3, 0.4, 0.34]" c="#1f1a1b" />
    <LowBox :p="[0, 0.52, 0.08]" :s="[0.28, 0.24, 0.24]" c="#1f1a1b" />
    <LowBox :p="[-0.09, 0.7, 0.08]" :s="[0.07, 0.1, 0.06]" c="#1f1a1b" />
    <LowBox :p="[0.09, 0.7, 0.08]" :s="[0.07, 0.1, 0.06]" c="#1f1a1b" />
    <LowBox :p="[-0.06, 0.54, 0.205]" :s="[0.05, 0.05, 0.01]" />
    <LowBox :p="[0.06, 0.54, 0.205]" :s="[0.05, 0.05, 0.01]" />
    <LowBox :p="[0, 0.39, 0.08]" :s="[0.3, 0.05, 0.26]" c="#e11d2e" />
    <!-- tail: the group is the pivot, the box hangs off it -->
    <TresGroup ref="tail" :position="[0, 0.08, -0.17]">
      <LowBox :p="[0, 0.15, -0.03]" :s="[0.06, 0.34, 0.06]" c="#1f1a1b" />
    </TresGroup>
  </TresGroup>
</template>