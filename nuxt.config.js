export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'short-term-form',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    oro_protocol: 'http',
    oro_host: 'oro.local:1080',
    oro_account_email: 'Testcoursemanager1@gmail.com',
    oro_account_api_key: '29e9b0576c75e12f5056a1aa5daaa62907deaadd'
  }
}
