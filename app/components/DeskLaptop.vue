<template>
      <TresGroup :position="[-2.3, 1.325, -2.9]" :rotation="[0, 1.2, 0]">
    <!-- base extends toward the camera from the hinge -->
    <LowBox :p="[0, -0.025, 0.375]" :s="[1.1, 0.05, 0.75]" c="#1f1a1b" />
    <!-- screen: its own group, tilted back about 15 degrees around the hinge -->
    <TresGroup :rotation="[-0.26, 0, 0]">
      <LowBox :p="[0, 0.35, 0]" :s="[1.1, 0.7, 0.05]" c="#1f1a1b" />
      <TresMesh :position="[0, 0.35, 0.028]">
        <TresPlaneGeometry :args="[1, 0.6]" />
        <TresMeshBasicMaterial color="#e11d2e" />
      </TresMesh>
    </TresGroup>
  </TresGroup>
</template>