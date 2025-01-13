// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'root-redirect',
        path: '/',
        file: '~/pages/storage.vue', // Указывает Nuxt на файл storage.vue
      });
    },
  },
})
