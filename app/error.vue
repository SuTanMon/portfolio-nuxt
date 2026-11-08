<script setup>
const props = defineProps({ error: Object })

const is404 = computed(() => props.error?.statusCode === 404)

useHead({ title: is404.value ? '404 | Page not found' : 'Error | John Kirby Soliven' })
useSeoMeta({
  description: 'The page you are looking for does not exist.',
  robots: 'noindex',
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section>
      <p class="text-sm uppercase tracking-widest text-secondary">— Error</p>
      <h1 class="text-8xl font-black text-primary">{{ error.statusCode }}</h1>
      <p class="mt-2 text-2xl font-bold">
        {{ is404 ? "This room doesn't exist." : 'Something went wrong.' }}
      </p>
      <p class="mt-2">
        {{ is404 ? 'The page you are looking for was moved or never existed.' : 'Please try again.' }}
      </p>
      <button class="btn btn-primary mt-6" @click="goHome">Back to the studio</button>
    </section>
  </NuxtLayout>
</template>