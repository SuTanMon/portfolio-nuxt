<script setup lang="ts">
const skills = ['HTML', 'CSS', 'JavaScript', 'Git and GitHub']
</script>

<template>
  <section>
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>