<script setup>
import { Shape, ExtrudeGeometry } from 'three'


// A C-shaped desk top, seen from above: part of a ring that is open toward the chair.
const OUTER = 2.8 // outer radius of the ring
const INNER = 1.1 // inner radius (the desk is now 1.7 wide)
const START = -0.7 // radians: one end of the C (about -40 degrees)
const END = 3.84 // radians: the other end (about 220 degrees)
// the ring covers from START around the back to END; the gap faces the chair

// 1) draw the flat outline: outer arc, then the inner arc back
const shape = new Shape()
shape.absarc(0, 0, OUTER, START, END, false)
shape.absarc(0, 0, INNER, END, START, true)
shape.closePath()

// 2) give it thickness (0.15, same as the old desk)
const top = new ExtrudeGeometry(shape, { depth: 0.15, bevelEnabled: false, curveSegments: 10 })
</script>

<template>
  <!-- lying flat: rotated -90 degrees around x. The ring's centre is at x 0, z -2.1 -->
  <TresMesh
    :geometry="top"
    :position="[0, 1.125, -2.1]"
    :rotation="[-Math.PI / 2, 0, 0]"
    :cast-shadow="true"
    :receive-shadow="true"
  >
    <TresMeshStandardMaterial color="#ffffff" flat-shading />
  </TresMesh>

  <!-- 4 legs, under the curve -->
  <LowBox :p="[-1.9, 0.56, -3.2]" :s="[0.15, 1.12, 0.15]" c="#e11d2e" />
  <LowBox :p="[1.9, 0.56, -3.2]" :s="[0.15, 1.12, 0.15]" c="#e11d2e" />
  <LowBox :p="[-1.75, 0.56, -0.9]" :s="[0.15, 1.12, 0.15]" c="#e11d2e" />
  <LowBox :p="[1.75, 0.56, -0.9]" :s="[0.15, 1.12, 0.15]" c="#e11d2e" />
</template>