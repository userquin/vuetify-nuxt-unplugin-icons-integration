import { aliases, unpluginIcons } from '~/unplugin-icons'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
    vuetifyOptions.icons = {
      defaultSet: 'unpluginIcons',
      aliases,
      sets: { unpluginIcons },
    }
  })
})
