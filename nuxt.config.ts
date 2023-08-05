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
      cover: {
        modifiers: {
          fit: "cover",
          format: "jpg",
          width: 300,
          height: 300,
        },
      },
    },
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
    head: {
      script: [
        {
          src: "@/assets/js/app.js",
        },
        {
          src: "@/assets/globalFunc.js",
        },
      ],
    },
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
