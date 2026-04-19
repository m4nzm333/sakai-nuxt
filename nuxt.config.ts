import Aura from '@primeuix/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  future: {
    compatibilityVersion: 4
  },

  modules: ['@primevue/nuxt-module'],

  nitro: {
    externals: {
      traceInclude: ['vue/index.mjs', 'vue/index.js']
    }
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    },
    autoImport: true
  },

  css: [
    'primeicons/primeicons.css',
    '~/assets/tailwind.css',
    '~/assets/layout/layout.scss',
    '~/assets/demo/demo.scss'
  ],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  app: {
    head: {
      title: 'Sakai Vue',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/lato' }
      ]
    }
  },

  devtools: { enabled: true }
})
