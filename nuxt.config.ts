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
  },

  future: {
    compatibilityVersion: 5,
  },

  experimental: {
    viteEnvironmentApi: true,
    typescriptPlugin: true,
  },

  compatibilityDate: '2025-05-01',

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
    repository: {
      owner: 'nuxt-content',
      repo: 'studio',
      branch: 'main',
      rootDir: 'playground/minimal',
      private: false,
    },

    development: {
      sync: true,
    },
  },
})
