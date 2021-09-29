export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'short-term-form',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-datetime/dist/vue-datetime.css'
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
    '@nuxtjs/recaptcha',
    'bootstrap-vue/nuxt',
  ],

  recaptcha: {
    "siteKey": process.env.RECAPTCHA_SITE_KEY || "6Lfr5scaAAAAAP8OsZO_ONmhNB3pCHphJNl0iWok",
    "version": 3
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    oro_protocol: process.env.oro_protocol || 'http',
    oro_host: process.env.oro_host || 'oro.local:1080',
    oro_account_email: process.env.oro_account_email || 'Coursemanagertest1@gmail.com',
    oro_account_api_key: process.env.oro_account_api_key || '75087c84b28cac2165b98a87ef97bcaf9fcbe4fa'
  }
}
