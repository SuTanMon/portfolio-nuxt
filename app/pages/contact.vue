<script setup lang="ts">
import emailjs from '@emailjs/browser'

useHead({ title: 'Contact' })
useSeoMeta({
  description: 'Get in touch with Me for internships, projects, and collaborations.',
  ogTitle: 'Contact | John Kirby Soliven',
  ogDescription: 'Open to internships and collabs.',
})  

const SERVICE_ID = 'service_slc7tl8'
const TEMPLATE_ID = 'John Kirby'
const PUBLIC_KEY = 'dm6kkHaZX8jp6t8gy'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

const onSubmit = async () => {
  status.value = 'sending'
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      { publicKey: PUBLIC_KEY },
    )
    status.value = 'sent'
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch {
    status.value = 'error'
  }
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
        <a href="https://www.credly.com/users/john-kirby-soliven.5e1c79d2/badges/credly" class="btn btn-outline btn-secondary">
      <Icon name="lucide:badge-check" /> Credly
</a>
    </div>
    <p class="mt-3 flex items-center gap-2 text-sm">
      <Icon name="lucide:mail" /> Usually replies within 24–48 hours.
    </p>

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
      <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
  <Icon name="lucide:send" /> {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
</button>
<div v-if="status === 'sent'" class="alert alert-success">
  <span>Message sent. Thanks!</span>
</div>
<div v-if="status === 'error'" class="alert alert-error">
  <span>Something went wrong. Please try again.</span>
</div>
    </form>
  </div>
</template>