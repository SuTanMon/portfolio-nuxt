<template>
  <!-- floor: 14 wide, 0.2 thick, 10 deep -->
  <LowBox :p="[0, -0.1, 0]" :s="[14, 0.2, 10]" c="#efe7e4" />

  <!-- back wall, built from 4 boxes around a window hole -->
  <LowBox :p="[-4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />  <!-- left of window -->
  <LowBox :p="[4.75, 2.5, -5]" :s="[4.5, 5, 0.3]" />   <!-- right of window -->
  <LowBox :p="[0, 0.6, -5]" :s="[5, 1.2, 0.3]" />      <!-- under window -->
  <LowBox :p="[0, 4.5, -5]" :s="[5, 1, 0.3]" />        <!-- above window -->
</template>