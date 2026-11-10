<script setup>
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'

const hourHand = shallowRef()
const minuteHand = shallowRef()
const { onBeforeRender } = useLoop()

onBeforeRender(() => {
  const now = new Date()
  const minutes = now.getMinutes() + now.getSeconds() / 60
  const hours = (now.getHours() % 12) + minutes / 60
  // a negative z rotation turns clockwise when seen from the front
  if (minuteHand.value) minuteHand.value.rotation.z = -(minutes / 60) * Math.PI * 2
  if (hourHand.value) hourHand.value.rotation.z = -(hours / 12) * Math.PI * 2
})
</script>

<template>
  <!-- hangs on the back wall, right of the window -->
  <TresGroup :position="[4.3, 3.3, -4.82]">
    <!-- red rim and white face (cylinders turned to face the room) -->
    <TresGroup :rotation="[Math.PI / 2, 0, 0]">
      <LowCylinder :p="[0, 0, 0]" :r="0.8" :h="0.06" :seg="16" c="#e11d2e" />
      <LowCylinder :p="[0, 0.03, 0]" :r="0.7" :h="0.06" :seg="16" />
    </TresGroup>

    <!-- tick marks at 12, 3, 6, 9 -->
    <LowBox :p="[0, 0.58, 0.07]" :s="[0.06, 0.12, 0.02]" c="#1f1a1b" />
    <LowBox :p="[0, -0.58, 0.07]" :s="[0.06, 0.12, 0.02]" c="#1f1a1b" />
    <LowBox :p="[0.58, 0, 0.07]" :s="[0.12, 0.06, 0.02]" c="#1f1a1b" />
    <LowBox :p="[-0.58, 0, 0.07]" :s="[0.12, 0.06, 0.02]" c="#1f1a1b" />

    <!-- hands: each group turns around the clock's centre -->
    <TresGroup ref="hourHand" :position="[0, 0, 0.1]">
      <LowBox :p="[0, 0.17, 0]" :s="[0.07, 0.35, 0.02]" c="#1f1a1b" />
    </TresGroup>
    <TresGroup ref="minuteHand" :position="[0, 0, 0.13]">
      <LowBox :p="[0, 0.27, 0]" :s="[0.05, 0.55, 0.02]" c="#e11d2e" />
    </TresGroup>
  </TresGroup>
</template>