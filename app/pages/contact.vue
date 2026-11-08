<script setup lang="ts">
useHead({ title: 'Contact' })
useSeoMeta({
  description: 'Get in touch with John Kirby Soliven for internships, projects, and collaborations.',
  ogTitle: 'Contact | John Kirby Soliven',
  ogDescription: 'Open to internships and collabs.',
})

const form = reactive({ name: '', email: '', subject: '', message: '' })
const onSubmit = () => {
  // sending (EmailJS) comes later as an integration step
}
</script>

<template>
  <div>
    <PageHeading eyebrow="Hit Me Up" title="Get In Touch" />
    <h2 class="mt-6 text-2xl font-bold text-primary">Let's build something together.</h2>
    <p class="mt-2">
      Whether it's an internship, a project, a collab, or you just want to connect, feel free to reach out.
    </p>
    <div class="mt-4 flex flex-wrap gap-3">
        <a href="https://github.com/SuTanMon" class="btn btn-secondary">
      <Icon name="lucide:code" /> GitHub </a>
        <a href="https://www.credly.com/users/john-kirby-soliven/badges" class="btn btn-outline btn-secondary">
      <Icon name="lucide:badge-check" /> Credly
</a>
    </div>
    <p class="mt-3 text-sm">📬 Usually replies within 24–48 hours.</p>

    <form class="mt-8 space-y-4" @submit.prevent="onSubmit">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Name</legend>
        <input v-model="form.name" type="text" class="input w-full" required />
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Email</legend>
        <input v-model="form.email" type="email" class="input w-full" required />
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Subject</legend>
        <input v-model="form.subject" type="text" class="input w-full" />
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Message</legend>
        <textarea v-model="form.message" class="textarea h-32 w-full" required />
      </fieldset>
      <button type="submit" class="btn btn-primary">
    <Icon name="lucide:send" /> Send Message </button>
    </form>
  </div>
</template>