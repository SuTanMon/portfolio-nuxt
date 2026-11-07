<script setup lang="ts">
useHead({ title: 'Home' })
useSeoMeta({
  description: 'Portfolio of John Kirby Soliven, a BSIT student from the Philippines learning web development.',
  ogTitle: 'John Kirby Soliven | Portfolio',
  ogDescription: 'BSIT student and aspiring web developer.',
  ogType: 'website',
  twitterCard: 'summary',
})

const learning = [
  { icon: '⚡', title: 'VS Code', text: 'Developer environment, extensions, and productivity workflows.', tag: 'Tools' },
  { icon: '🌿', title: 'Git & GitHub', text: 'Version control, branching, collaboration, and deployment.', tag: 'DevOps' },
  { icon: '🏗️', title: 'HTML', text: 'Semantic structure, accessibility, and modern markup patterns.', tag: 'Foundation' },
  { icon: '🎨', title: 'CSS', text: 'Styling, animations, custom properties, and design systems.', tag: 'Styling' },
  { icon: '📐', title: 'Layouts', text: 'Flexbox and Grid for powerful, responsive page structures.', tag: 'Layout' },
  { icon: '📱', title: 'Responsive Design', text: 'Mobile-first approach and media queries for all screen sizes.', tag: 'Design' },
  { icon: '🌬️', title: 'Tailwind & DaisyUI', text: 'Utility-first CSS frameworks for rapid UI development.', tag: 'Framework' },
  { icon: '📝', title: 'Forms', text: 'Interactive, validated, and accessible web form experiences.', tag: 'Interaction' },
]
</script>

<template>
  <div>
    <ProfileHeader />
    <section class="mt-12">
      <h2 class="mb-1 text-2xl font-bold text-primary">What I've Been Learning</h2>
      <p class="mb-4">Started from scratch, still going.</p>
      <div class="grid gap-4 sm:grid-cols-2">
        <ContentCard v-for="item in learning" :key="item.title" v-bind="item" />
      </div>
    </section>
    <section class="mt-12 text-center">
      <h2 class="mb-2 text-2xl font-bold text-primary">Open to Collabs & Opportunities</h2>
      <NuxtLink to="/contact" class="btn btn-primary">Contact Me</NuxtLink>
    </section>
  </div>
</template>