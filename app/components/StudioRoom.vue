<template>
  <SwivelChair />

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

    <!-- code typing on the monitor -->
  <CodeLine :x0="-0.95" :y="2.95" :z="-3.88" :w="1.0" :speed="1.2" />
  <CodeLine :x0="-0.95" :y="2.75" :z="-3.88" :w="1.4" :speed="0.9" />
  <CodeLine :x0="-0.95" :y="2.55" :z="-3.88" :w="0.8" :speed="1.5" />
  <CodeLine :x0="-0.95" :y="2.35" :z="-3.88" :w="1.6" :speed="1.0" />
  <CodeLine :x0="-0.95" :y="2.15" :z="-3.88" :w="1.1" :speed="1.3" />

   <DustSpeck :p="[-1.5, 2.2, -1.0]" />
  <DustSpeck :p="[-0.5, 3.0, -0.5]" />
  <DustSpeck :p="[0.8, 2.6, -1.5]" />
  <DustSpeck :p="[1.6, 3.2, -0.8]" />
  <DustSpeck :p="[-2.4, 3.4, -2.0]" />
  <DustSpeck :p="[0.2, 1.9, -0.3]" />
  <DustSpeck :p="[2.4, 2.4, -1.2]" />
  <DustSpeck :p="[-1.0, 3.6, -2.8]" />
  <DustSpeck :p="[1.0, 1.7, -2.6]" />
  <DustSpeck :p="[-3.0, 2.0, -0.6]" />

    <!-- rug under the desk -->
  <LowCylinder :p="[0, 0.02, -1.8]" :r="2.6" :h="0.04" :seg="10" c="#f4d9d9" />

  <!-- plant on the floor, right side -->
  <LowCylinder :p="[4.2, 0.3, -3.8]" :r="0.35" :h="0.6" :seg="6" />
  <TresMesh :position="[4.2, 1.2, -3.8]" :cast-shadow="true">
    <TresConeGeometry :args="[0.3, 1.2, 5]" />
    <TresMeshStandardMaterial color="#e11d2e" flat-shading />
  </TresMesh>
  <TresMesh :position="[3.95, 1, -3.7]" :rotation="[0, 0, 0.35]" :cast-shadow="true">
    <TresConeGeometry :args="[0.25, 1, 5]" />
    <TresMeshStandardMaterial color="#b3121f" flat-shading />
  </TresMesh>
  <TresMesh :position="[4.45, 1, -3.9]" :rotation="[0, 0, -0.35]" :cast-shadow="true">
    <TresConeGeometry :args="[0.25, 1, 5]" />
    <TresMeshStandardMaterial color="#b3121f" flat-shading />
  </TresMesh>

    <!-- cat on the left shelf, facing the room -->
  <TresGroup :position="[-6.8, 2.65, -0.7]" :rotation="[0, 1.5708, 0]">
    <LowCat />
  </TresGroup>

  <!-- dog lying on the rug, turned slightly toward the camera -->
  <TresGroup :position="[2.1, 0, -0.5]" :rotation="[0, 0.5, 0]">
    <LowDog />
  </TresGroup>

  <!-- two shelves on the back wall under the clock -->
  <LowBox :p="[5.2, 2.4, -4.6]" :s="[2, 0.1, 0.5]" />
  <LowBox :p="[4.5, 2.72, -4.6]" :s="[0.18, 0.55, 0.35]" c="#e11d2e" />
  <LowBox :p="[4.72, 2.8, -4.6]" :s="[0.18, 0.7, 0.35]" c="#1f1a1b" />
  <LowBox :p="[4.94, 2.72, -4.6]" :s="[0.18, 0.55, 0.35]" c="#f4b6b6" />

  <LowBox :p="[5.2, 1.5, -4.6]" :s="[2, 0.1, 0.5]" />
  <LowBox :p="[5.8, 1.85, -4.7]" :s="[0.5, 0.6, 0.06]" c="#e11d2e" />
  <LowBox :p="[5.8, 1.85, -4.67]" :s="[0.38, 0.48, 0.08]" />
  <LowCylinder :p="[4.6, 1.7, -4.6]" :r="0.15" :h="0.3" :seg="6" />
  <TresMesh :position="[4.6, 2.05, -4.6]" :cast-shadow="true">
    <TresConeGeometry :args="[0.2, 0.5, 5]" />
    <TresMeshStandardMaterial color="#b3121f" flat-shading />
  </TresMesh>
  
  <CDesk />
  <DeskLaptop />
  <DeskPhone />
  <WallClock />
</template>