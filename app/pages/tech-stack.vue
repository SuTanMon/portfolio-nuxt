<script setup lang="ts">
useHead({ title: 'Tech Stack' })
useSeoMeta({
  description: 'The tools and technologies John Kirby Soliven uses and is learning.',
  ogTitle: 'Tech Stack | John Kirby Soliven',
  ogDescription: 'Core skills, tools, and what I am exploring next.',
})

const groups = [
  { name: 'Core Skills', items: [
    { icon: 'lucide:file-code', title: 'HTML5', text: 'Structure and markup basics' },
    { icon: 'lucide:palette', title: 'CSS3', text: 'Styling, layouts, animations' },
    { icon: 'lucide:braces', title: 'JavaScript', text: 'Making pages actually do things' },
  ] },
  { name: 'Tools', items: [
    { icon: 'lucide:git-branch', title: 'Git', text: 'Local version control, tracking changes' },
    { icon: 'lucide:git-pull-request', title: 'GitHub', text: 'Remote hosting, pushing and sharing code' },
    { icon: 'lucide:terminal', title: 'VS Code', text: 'Where I write most of my code' },
  ] },
  { name: 'Exploring', items: [
    { icon: 'lucide:wind', title: 'Tailwind CSS', text: 'Utility-first CSS, still learning' },
    { icon: 'lucide:mountain', title: 'Nuxt', text: 'Vue framework used to build this portfolio' },
    { icon: 'lucide:atom', title: 'React', text: 'Next on the list to learn', tag: 'Soon' },
  ] },
]
</script>

<template>
  <div>
    <PageHeading eyebrow="What I Use" title="My Tech Stack" />
    <section v-for="g in groups" :key="g.name" class="mt-8">
      <h2 class="mb-3 text-2xl font-bold text-primary">{{ g.name }}</h2>
      <div class="grid gap-4 sm:grid-cols-3">
        <ContentCard v-for="i in g.items" :key="i.title" v-bind="i" />
      </div>
    </section>
  </div>
</template>