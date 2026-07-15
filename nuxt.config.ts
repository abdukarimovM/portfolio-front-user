// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      api: process.env.NUXT_PUBLIC_API
    }
  },

  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper"
  ],

  app: {
    head: {
      title: "Muslimbek Abdukarimov | Software Engineer",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.png",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",
        },
      ],
    },
  },
})