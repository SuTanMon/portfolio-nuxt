<script setup lang="ts">
useHead({ title: 'Projects' })
useSeoMeta({
  description: 'Projects built by John Kirby Soliven, a BSIT student and aspiring web developer.',
  ogTitle: 'Projects | John Kirby Soliven',
  ogDescription: 'Things I have built while learning web development.',
})

// projects here later, one object per project
const projects: { title: string; text: string; tag?: string; icon?: string }[] = []
</script>

<template>
  <div>
    <PageHeading eyebrow="What I've Built" title="Projects" />
    <div v-if="projects.length" class="mt-6 grid grid-cols-1 gap-4">
      <ContentCard v-for="p in projects" :key="p.title" v-bind="p" />
    </div>
    <div v-else class="alert alert-outline mt-6">
      <Icon name="lucide:hammer" class="text-xl text-primary" />
      <span>Projects are on the way. Check back soon.</span>
    </div>
  </div>
</template>