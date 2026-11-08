<script setup lang="ts">
useHead({ title: 'Certifications' })
useSeoMeta({
  description: 'Verified certifications of John Kirby Soliven: Microsoft Office Specialist and Cisco Python Essentials 1.',
  ogTitle: 'Certifications | John Kirby Soliven',
  ogDescription: 'Publicly verifiable badges on Credly.',
})

const credly = 'https://www.credly.com/users/john-kirby-soliven.5e1c79d2/badges/credly'
const certs = [
  {
    name: 'MOS: Word Associate', issuer: 'Microsoft', year: 2025,
    img: '/images/Microsoft-Office-Specialist-Word-Associate-Certification.png',
    url: 'https://www.credly.com/badges/fdc7893d-fdf5-4b1a-961b-8b2ff538903a/public_url',
  },
  {
    name: 'MOS: PowerPoint Associate', issuer: 'Microsoft', year: 2025,
    img: '/images/Microsoft-Office-Specialist-PowerPoint-Associate-Certification.png',
    url: 'https://www.credly.com/badges/5cd5620a-f1d0-42e4-a2d4-37a89bffc725/public_url',
  },
  {
    name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', year: 2026,
    img: '/images/Python-Essentials-1-Certification.png',
    url: 'https://www.credly.com/badges/29204c65-11a8-4c21-bd2f-b9f3e26c5270/public_url',
  },
  {
    name: 'IT Specialist: Databases', issuer: 'Certiport, a Pearson VUE business', year: 2026,
    img: '/images/IT-Specialist-Databases-Certification.png',
    url: 'https://www.credly.com/badges/4c506d5b-8d4c-444b-be7b-d191e14d9467/public_url',
  },
  {
    name: 'CRUD Operations in MongoDB', issuer: 'MongoDB', year: 2026,
    img: '/images/CRUD-Operations-in-MongoDB-Certification.png',
    url: 'https://www.credly.com/badges/045e860b-dcb6-4a28-bc80-391e65ecbd3d/public_url',
  },
  {
    name: 'MongoDB Overview: Core Concepts and Architecture', issuer: 'MongoDB', year: 2026,
    img: '/images/MongoDB-Overview-Core-Concepts-and-Architecture-Certification.png',
    url: 'https://www.credly.com/badges/08793ecd-8b22-43df-b673-9a8fd8320531/public_url',
  },
]
// count certifications per year from the list above
const byYear = computed(() => {
  const counts: Record<number, number> = {}
  certs.forEach((c) => {
    counts[c.year] = (counts[c.year] || 0) + 1
  })
  return Object.entries(counts).map(([year, count]) => ({ label: year, value: count }))
})
</script>

<template>
  <div>
    <PageHeading eyebrow="Verified Achievements" title="My Certifications" />
    <div class="alert alert-outline mt-6">
      <Icon name="lucide:badge-check" class="text-xl text-primary" />
      <span>All my certifications are publicly verifiable on Credly.</span>
      <a :href="credly" class="btn btn-sm btn-primary">View All on Credly</a>
    </div>
    <div class="mt-6 grid gap-4 sm:grid-cols-3">
      <div v-for="c in certs" :key="c.name" class="card card-border bg-base-200 transition hover:-translate-y-1 hover:border-primary">
        <figure class="p-4"><img :src="c.img" :alt="c.name" class="h-40 object-contain" /></figure>
        <div class="card-body pt-0">
          <h3 class="card-title">{{ c.name }}</h3>
          <p>{{ c.issuer }} · Issued {{ c.year }}</p>
          <a :href="c.url" class="btn btn-sm btn-outline btn-primary">Verify Badge</a>
        </div>
      </div>
    </div>
    <h2 class="mb-2 mt-8 text-2xl font-bold text-primary">Certifications per Year</h2>
    <ClientOnly>
      <CertChart :data="byYear" />
    </ClientOnly>
  </div>
</template>