<script setup>
const sky = '#f6eeeb'
const route = useRoute()
</script>

<template>
  <div class="fixed inset-0 z-0">
    <TresCanvas :clear-color="sky">
      <TresFog :args="[sky, 14, 55]" />
      <TresAmbientLight :intensity="1.1" />
      <TresDirectionalLight :position="[6, 10, 6]" :intensity="2.2" />

      <StudioRig :path="route.path" />
      <StudioRoom />
      <Hotspots />

      <LowBox :p="[-4, 3, -14]" :s="[2, 6, 2]" c="#e11d2e" />
      <LowBox :p="[-1, 4.5, -18]" :s="[2.5, 9, 2.5]" c="#ffffff" />
      <LowBox :p="[2, 2.5, -13]" :s="[2, 5, 2]" c="#b3121f" />
      <LowBox :p="[5, 5, -20]" :s="[3, 10, 3]" c="#f4d9d9" />
      <LowBox :p="[-8, 4, -22]" :s="[3, 8, 3]" c="#ffffff" />
    </TresCanvas>
  </div>
</template>