// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/mdc',
    'nuxt-studio',
    '@nuxt/eslint',
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

  hooks: {
    'components:extend': (components) => {
      components.filter(c => c.global = true)
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
