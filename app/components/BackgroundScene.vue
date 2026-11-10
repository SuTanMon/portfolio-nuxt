<script setup>
const SHADOWS = true // set to false if a weak phone lags
const route = useRoute()

// shared with the navbar button
const isNight = useState('isNight', () => false)

// follow the clock once the page is in the browser
onMounted(() => {
  const hour = new Date().getHours()
  isNight.value = hour >= 18 || hour < 6
})

const sky = computed(() => (isNight.value ? '#12060a' : '#f6eeeb'))
</script>

<template>
  <div class="fixed inset-0 z-0">
    <TresCanvas :clear-color="sky" :shadows="SHADOWS">
      <TresFog :key="sky" :args="[sky, 14, 55]" />
      <TresAmbientLight :color="isNight ? '#ff9aa5' : '#ffffff'" :intensity="isNight ? 0.35 : 0.8" />
      <TresDirectionalLight
        :color="isNight ? '#ffc4cc' : '#fff1e6'"
        :position="isNight ? [-5, 9, 4] : [5, 9, 4]"
        :intensity="isNight ? 0.7 : 2.4"
        :cast-shadow="SHADOWS"
        :shadow-camera-near="0.5"
        :shadow-camera-far="40"
        :shadow-camera-left="-10"
        :shadow-camera-right="10"
        :shadow-camera-top="10"
        :shadow-camera-bottom="-10"
      />
      <!-- red glow from the monitor, night only -->
      <TresPointLight v-if="isNight" :position="[0, 2.6, -2.2]" color="#ff2a3d" :intensity="10" :distance="8" />

      <StudioRig :path="route.path" />
      <StudioRoom />
      <Hotspots />

      <!-- ground outside + city -->
      <TresMesh :key="sky" :position="[0, -0.2, -40]" :rotation="[-Math.PI / 2, 0, 0]">
        <TresPlaneGeometry :args="[200, 200]" />
        <TresMeshStandardMaterial :color="isNight ? '#0d0407' : '#ece4e1'" />
      </TresMesh>
      <Skyline :night="isNight" />
    </TresCanvas>
  </div>
</template>