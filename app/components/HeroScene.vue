<template>
  <div class="mt-8 h-80 border-2 border-primary">
    <TresCanvas clear-color="#0b0408">
      <TresPerspectiveCamera :position="[3, 3, 5]" :look-at="[0, 0.5, 0]" />
      <TresGridHelper :args="[12, 12, '#ff2a3d', '#5a0f18']" />
      <SpinningCube />
    </TresCanvas>
  </div>
</template>