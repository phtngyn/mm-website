// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-studio',
    '@nuxt/content',
  ],

  devtools: {
    enabled: false,
  },

  css: ['~/assets/css/main.css'],

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    watch: {
      enabled: true,
    },
  },

  future: {
    compatibilityVersion: 5,
  },

  experimental: {
    viteEnvironmentApi: true,
    typescriptPlugin: true,
  },

  compatibilityDate: '2025-05-01',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        noUncheckedIndexedAccess: true,
        exactOptionalPropertyTypes: true,
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  studio: {
    dev: false,
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'phtngyn',
      repo: 'mm-website',
      branch: 'main',
      rootDir: '',
      private: false,
    },
  },
})
