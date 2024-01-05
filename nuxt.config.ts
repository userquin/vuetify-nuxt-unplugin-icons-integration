// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'unplugin-icons/nuxt',
    'vuetify-nuxt-module',
  ],
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'custom',
      },
    },
  },
})
