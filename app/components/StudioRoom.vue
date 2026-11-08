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

    <!-- left wall -->
  <LowBox :p="[-7, 2.5, 0]" :s="[0.3, 5, 10]" />

  <!-- chair: seat, back, post -->
  <LowBox :p="[0, 0.95, -2.2]" :s="[1.1, 0.12, 1.1]" c="#e11d2e" />
  <LowBox :p="[0, 1.55, -1.7]" :s="[1.1, 1.1, 0.12]" c="#e11d2e" />
  <LowBox :p="[0, 0.5, -2.2]" :s="[0.12, 0.9, 0.12]" c="#1f1a1b" />

  <!-- shelf on the left wall with 3 books -->
  <LowBox :p="[-6.8, 2.6, -1.3]" :s="[0.4, 0.1, 2.4]" />
  <LowBox :p="[-6.8, 3, -2]" :s="[0.3, 0.7, 0.2]" c="#e11d2e" />
  <LowBox :p="[-6.8, 3.1, -1.7]" :s="[0.3, 0.9, 0.2]" c="#1f1a1b" />
  <LowBox :p="[-6.8, 2.95, -1.4]" :s="[0.3, 0.6, 0.2]" c="#f4b6b6" />

  <!-- 3 picture frames on the back wall (red border, white picture) -->
  <LowBox :p="[-5.8, 3.1, -4.81]" :s="[1.1, 1.4, 0.08]" c="#e11d2e" />
  <LowBox :p="[-5.8, 3.1, -4.78]" :s="[0.9, 1.2, 0.1]" />
  <LowBox :p="[-4.6, 3.1, -4.81]" :s="[1.1, 1.4, 0.08]" c="#e11d2e" />
  <LowBox :p="[-4.6, 3.1, -4.78]" :s="[0.9, 1.2, 0.1]" />
  <LowBox :p="[-3.4, 3.1, -4.81]" :s="[1.1, 1.4, 0.08]" c="#e11d2e" />
  <LowBox :p="[-3.4, 3.1, -4.78]" :s="[0.9, 1.2, 0.1]" />

  <!-- floor: 14 wide, 0.2 thick, 10 deep -->
  <LowBox :p="[0, -0.1, 0]" :s="[14, 0.2, 10]" c="#efe7e4" />

  <!-- back wall, built from 4 boxes around a window hole -->
  <LowBox :p="[-4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />  <!-- left of window -->
  <LowBox :p="[4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />   <!-- right of window -->
  <LowBox :p="[0, 0.6, -5]" :s="[5, 1.2, 0.3]" />      <!-- under window -->
  <LowBox :p="[0, 4.5, -5]" :s="[5, 1, 0.3]" />        <!-- above window -->
   <!-- envelope on the desk (contact) -->
  <LowBox :p="[1.4, 1.3, -3.2]" :s="[0.7, 0.04, 0.5]" c="#e11d2e" />

    <!-- laptop on the desk (projects) -->
  <LowBox :p="[-1.4, 1.3, -3.1]" :s="[1.1, 0.05, 0.75]" c="#1f1a1b" />
  <LowBox :p="[-1.4, 1.65, -3.45]" :s="[1.1, 0.7, 0.05]" c="#1f1a1b" />
  <TresMesh :position="[-1.4, 1.65, -3.42]">
    <TresPlaneGeometry :args="[1, 0.6]" />
    <TresMeshBasicMaterial color="#e11d2e" />
  </TresMesh>
</template>