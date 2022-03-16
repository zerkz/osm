export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'osm-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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

    // Simple usage
    '@nuxtjs/vuetify',

  ],

  vuetify: {
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      salesforce: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://login.salesforce.com/services/oauth2/authorize',
          token: 'https://login.salesforce.com/services/oauth2/token',
          revoke: 'https://login.salesforce.com/services/oauth2/revoke',
          userInfo: 'https://login.salesforce.com/services/oauth2/userinfo'
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: '',
        redirectUri: 'http://localhost:3000/login',
        logoutRedirectUri: undefined,
        clientId: process.env.OSM_CLIENT_ID,
        scope: ['api', 'web', 'custom_permissions'],
        state: process.env.OAUTH_UNIQUE_STATE,
        codeChallengeMethod: 'S256',
        responseMode: '',
        acrValues: '',
        localStorage: {
          prefix: 'osm.auth.'
        }
        // autoLogout: false
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
