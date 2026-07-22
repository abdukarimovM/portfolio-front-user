// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      api: process.env.NUXT_PUBLIC_API
    }
  },

  devtools: {
    enabled: true
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxtjs/sitemap",
  ],

  site: {
    url: "https://abdukarimovm.uz",
    name: "Muslimbek Abdukarimov Portfolio",
  },

  sitemap: {
    autoLastmod: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },

      title: "Muslimbek Abdukarimov | Software Engineer",

      meta: [
        {
          name: "description",
          content:
            "Official portfolio of Muslimbek Abdukarimov. Full Stack Software Engineer specializing in Vue.js, Nuxt.js, Node.js and modern web technologies.",
        },
        {
          name: "keywords",
          content:
            "Muslimbek Abdukarimov, Abdukarimov, Software Engineer, Full Stack Developer, Vue.js, Nuxt.js, Node.js, JavaScript, TypeScript, Portfolio, Uzbekistan",
        },
        {
          name: "author",
          content: "Muslimbek Abdukarimov",
        },

        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Muslimbek Abdukarimov | Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Official portfolio of Muslimbek Abdukarimov.",
        },
        {
          property: "og:url",
          content: "https://abdukarimovm.uz",
        },
        {
          property: "og:image",
          content: "https://abdukarimovm.uz/images/logo.png",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Muslimbek Abdukarimov | Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Official portfolio of Muslimbek Abdukarimov.",
        },
        {
          name: "twitter:image",
          content: "https://abdukarimovm.uz/images/logo.png",
        },
      ],

      link: [
        {
          rel: "canonical",
          href: "https://abdukarimovm.uz",
        },
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
});