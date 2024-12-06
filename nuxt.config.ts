import { presetIcons } from "unocss";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "vuetify-nuxt-module",
    "nuxt-security",
    "@unocss/nuxt",
  ],

  security: {
    strict: true,
  },

  unocss: {
    presets: [presetIcons({})],
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
      icons: {
        defaultSet: "unocss-mdi",
      },
    },
  },

  compatibilityDate: "2024-12-06",
});