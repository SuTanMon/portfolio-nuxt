
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
  { icon: 'lucide:terminal', title: 'VS Code', text: 'Developer environment, extensions, and productivity workflows.', tag: 'Tools' },
  { icon: 'lucide:git-branch', title: 'Git & GitHub', text: 'Version control, branching, collaboration, and deployment.', tag: 'DevOps' },
  { icon: 'lucide:file-code', title: 'HTML', text: 'Semantic structure, accessibility, and modern markup patterns.', tag: 'Foundation' },
  { icon: 'lucide:palette', title: 'CSS', text: 'Styling, animations, custom properties, and design systems.', tag: 'Styling' },
  { icon: 'lucide:layout-grid', title: 'Layouts', text: 'Flexbox and Grid for powerful, responsive page structures.', tag: 'Layout' },
  { icon: 'lucide:smartphone', title: 'Responsive Design', text: 'Mobile-first approach and media queries for all screen sizes.', tag: 'Design' },
  { icon: 'lucide:wind', title: 'Tailwind & DaisyUI', text: 'Utility-first CSS frameworks for rapid UI development.', tag: 'Framework' },
  { icon: 'lucide:clipboard-list', title: 'Forms', text: 'Interactive, validated, and accessible web form experiences.', tag: 'Interaction' },
]
</script>

<template>
  <div>
    <section class="flex h-[65vh] items-end justify-center pb-4">
    </section>

    <div class="bg-base-100/75 px-5 pb-12">
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
  </div>
</template>
