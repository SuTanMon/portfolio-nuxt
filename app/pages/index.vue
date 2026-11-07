<script setup lang="ts">
useHead({ title: 'Home' })

useSeoMeta({
  description: 'Portfolio of John Kirby Soliven, a BSIT student from the Philippines at St. Dominic College of Asia.',
  ogTitle: 'John Kirby Soliven | Portfolio',
  ogDescription: 'BSIT student and web developer portfolio.',
  ogType: 'website',
  twitterCard: 'summary',
})
</script>
<template>
  <div>
    <ProfileHeader />
    <AboutSection />
    <SkillsList />
    <ContactSection />
  </div>
</template>