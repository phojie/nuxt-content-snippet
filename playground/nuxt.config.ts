import nuxtContentSnippet from '../src/module'

export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxt/content',
    nuxtContentSnippet,
  ],

  content: {
    documentDriven: true,
  },
})
