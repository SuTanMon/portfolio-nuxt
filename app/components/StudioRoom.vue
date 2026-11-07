<template>
    <!-- desk: top + 4 legs -->
  <LowBox :p="[0, 1.2, -3.6]" :s="[4.4, 0.15, 1.8]" />
  <LowBox :p="[-2, 0.6, -4.3]" :s="[0.15, 1.2, 0.15]" c="#e11d2e" />
  <LowBox :p="[2, 0.6, -4.3]" :s="[0.15, 1.2, 0.15]" c="#e11d2e" />
  <LowBox :p="[-2, 0.6, -2.9]" :s="[0.15, 1.2, 0.15]" c="#e11d2e" />
  <LowBox :p="[2, 0.6, -2.9]" :s="[0.15, 1.2, 0.15]" c="#e11d2e" />

  <!-- monitor: stand, neck, body, red screen -->
  <LowBox :p="[0, 1.3, -3.8]" :s="[0.8, 0.06, 0.5]" c="#1f1a1b" />
  <LowBox :p="[0, 1.65, -3.9]" :s="[0.12, 0.7, 0.12]" c="#1f1a1b" />
  <LowBox :p="[0, 2.55, -3.95]" :s="[2.4, 1.4, 0.1]" c="#1f1a1b" />
  <TresMesh :position="[0, 2.55, -3.89]">
    <TresPlaneGeometry :args="[2.2, 1.2]" />
    <TresMeshBasicMaterial color="#e11d2e" />
  </TresMesh>
  <!-- floor: 14 wide, 0.2 thick, 10 deep -->
  <LowBox :p="[0, -0.1, 0]" :s="[14, 0.2, 10]" c="#efe7e4" />

  <!-- back wall, built from 4 boxes around a window hole -->
  <LowBox :p="[-4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />  <!-- left of window -->
  <LowBox :p="[4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />   <!-- right of window -->
  <LowBox :p="[0, 0.6, -5]" :s="[5, 1.2, 0.3]" />      <!-- under window -->
  <LowBox :p="[0, 4.5, -5]" :s="[5, 1, 0.3]" />        <!-- above window -->
</template>