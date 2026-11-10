<template>
  <TresGroup :position="[2, 1.275, -2.2]" :rotation="[0, -0.6, 0]">
    <LowBox :p="[0, 0.015, 0]" :s="[0.24, 0.03, 0.5]" c="#1f1a1b" />
    <!-- screen -->
    <TresMesh :position="[0, 0.031, 0]" :rotation="[-1.5708, 0, 0]">
      <TresPlaneGeometry :args="[0.2, 0.44]" />
      <TresMeshBasicMaterial color="#fbeaea" />
    </TresMesh>
    <!-- red app icon -->
    <LowBox :p="[0, 0.033, -0.12]" :s="[0.1, 0.004, 0.1]" c="#e11d2e" />
  </TresGroup>
</template>