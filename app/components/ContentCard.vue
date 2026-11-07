<script setup lang="ts">
defineProps<{ title: string; text: string; icon?: string; tag?: string }>()
</script>

<template>
  <div class="card card-border bg-base-200 transition hover:-translate-y-1 hover:border-primary">
    <div class="card-body">
      <div v-if="icon" class="text-3xl">{{ icon }}</div>
      <h3 class="card-title">{{ title }}</h3>
      <p>{{ text }}</p>
      <div v-if="tag" class="card-actions">
        <span class="badge badge-primary badge-outline">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>