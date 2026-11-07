<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/tech-stack', label: 'Tech Stack' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <nav class="navbar flex-wrap px-0">
    <div class="flex-1">
      <NuxtLink to="/" class="font-display text-xl font-black text-primary">JK.</NuxtLink>
    </div>
    <ul class="menu menu-horizontal font-bold">
      <li v-for="l in links" :key="l.to">
        <NuxtLink :to="l.to" active-class="text-primary">{{ l.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>