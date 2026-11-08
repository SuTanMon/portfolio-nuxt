<script setup lang="ts">
useHead({ title: 'About' })
useSeoMeta({
  description: 'About John Kirby Soliven, a BSIT student at St. Dominic College of Asia looking for an internship.',
  ogTitle: 'About | John Kirby Soliven',
  ogDescription: 'BSIT student, aspiring web developer, open to internships.',
})

const facts = ['📍 Philippines', '🎓 BSIT', '🏫 St. Dominic College of Asia', '💼 Open to Internships', '🌐 Aspiring Web Developer']
const drives = [
  { icon: 'lucide:flame', title: 'Passionate', text: 'Genuinely into web dev, not just for school, but because I enjoy it.' },
  { icon: 'lucide:book-open', title: 'Always Learning', text: 'Still a student in every sense, and that\'s fine with me.' },
  { icon: 'lucide:users', title: 'Collaborative', text: 'I work well with others and I\'m not afraid to ask for help.' },
]
</script>

<template>
  <div>
    <PageHeading eyebrow="A Little About Me" title="About Me" />
    <div class="mt-6 flex flex-wrap gap-2">
      <span v-for="f in facts" :key="f" class="badge badge-outline badge-lg">{{ f }}</span>
    </div>
    <h2 class="mt-8 text-2xl font-bold text-primary">John Kirby Soliven</h2>
    <p class="mt-2">
      I'm a BSIT student at St. Dominic College of Asia. I got into web development out of curiosity and ended up
      genuinely loving it. Outside of school, I work part-time, which has taught me a lot about discipline,
      teamwork, and pushing through when things get tough.
    </p>
    <p class="mt-4">
      Right now I'm building a solid foundation in front-end development and picking up the tools developers
      actually use day to day. I learn best by doing, so most of what I know comes from building real projects
      and figuring things out through trial and error. My goal is to become a web developer after graduation,
      and I'm currently looking for an internship to get real-world experience while I'm still in school.
    </p>
    <h2 class="mb-3 mt-10 text-2xl font-bold text-primary">What Drives Me</h2>
    <div class="grid gap-4 grid-cols-1">
      <ContentCard v-for="d in drives" :key="d.title" v-bind="d" />
    </div>
    <NuxtLink to="/contact" class="btn btn-primary mt-8">Get In Touch</NuxtLink>
  </div>
</template>