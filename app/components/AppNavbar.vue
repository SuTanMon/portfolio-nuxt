<script setup>
const links = [
  { to: '/', label: 'Home', icon: 'lucide:house' },
  { to: '/about', label: 'About', icon: 'lucide:user' },
  { to: '/tech-stack', label: 'Tech Stack', icon: 'lucide:layers' },
  { to: '/certifications', label: 'Certifications', icon: 'lucide:award' },
  { to: '/contact', label: 'Contact', icon: 'lucide:mail' },
]
</script>

<template>
  <nav class="bg-base-100/80 backdrop-blur">
    <div class="navbar mx-auto max-w-6xl flex-wrap px-5">
      <div class="flex-1">
        <NuxtLink to="/" class="text-xl font-black text-primary">JK.</NuxtLink>
      </div>
      <ul class="menu menu-horizontal font-bold">
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to" :aria-label="l.label" active-class="text-primary">
            <Icon :name="l.icon" />
            <span class="hidden sm:inline">{{ l.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>