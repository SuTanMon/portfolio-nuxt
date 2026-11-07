<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

useHead({ title: is404.value ? '404 | Page not found' : 'Error | John Kirby Soliven' })
useSeoMeta({
  description: 'The page you are looking for does not exist.',
  robots: 'noindex',
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="mt-16 text-center">
      <h1 class="text-7xl font-black text-primary">
        {{ error.statusCode }}
      </h1>
      <p class="mt-4">
        {{ is404 ? 'Signal lost. This page does not exist.' : 'Something went wrong.' }}
      </p>
      <button class="btn btn-primary mt-8" @click="goHome">Back to home</button>
    </section>
  </NuxtLayout>
</template>