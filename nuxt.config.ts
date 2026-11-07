import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
<<<<<<< HEAD
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
})
=======
  vite: { plugins: [tailwindcss()] },
})
>>>>>>> bba8aeae50bd87859588569d467166ede7eca425
