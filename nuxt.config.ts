// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//
// })

export default {
  ssr: true,
  css: ["@/assets/css/main.scss"],
  image: {
    presets: {
      contain: {
        modifiers: {
          fit: "contain",
          format: ['png'],
          width: 400,
          height: 300,
        },
      },
    },
  },
  VITE_APP_SERVICE_ID: "service_c0zud8b",
  publicRuntimeConfig: {

    VITE_APP_TEMPLATE_ONLY_PHONE: process.env.TEMPLATE_ONLY_PHONE,
    VITE_APP_TEMPLATE_PHONE_NAME: process.env.TEMPLATE_PHONE_NAME,
    VITE_APP_PUBLIC_KEY_MAIL: process.env.PUBLIC_KEY_MAIL
  },
  build: {

    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
    buildModules: ["@nuxtjs/style-resources"],
    styleResources: {
      scss: ["@/assets/css/main.scss"],
    },
  },
  modules: ["@nuxt/image-edge", "nuxt-swiper"],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
};
