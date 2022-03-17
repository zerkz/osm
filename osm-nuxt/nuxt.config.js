import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - osm-nuxt',
    title: 'osm-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

   router: {
    //middleware: ['auth']
  },

  auth: {
    plugins: [ '~/plugins/debug.js' ],
    redirect: {
      login: '/',
      logout: '/logout',
      callback: '/',
      home: '/'
    },
    strategies: {
      salesforce: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://zdware-dev-ed.my.salesforce.com/services/oauth2/authorize',
          token: 'https://zdware-dev-ed.my.salesforce.com/services/oauth2/token',
          revoke: 'https://zdware-dev-ed.my.salesforce.com/services/oauth2/revoke',
          userInfo: 'https://zdware-dev-ed.my.salesforce.com/services/oauth2/userinfo'
        },
        responseType: 'code',
        grantType: 'authorization_code',
        redirectUri: 'http://localhost:3000/',
        clientId: process.env.OSM_CLIENT_ID,
        scope: ['api', 'web', 'custom_permissions'],
       // state: process.env.OAUTH_UNIQUE_STATE,
       // codeChallengeMethod: 'S256',
        responseMode: '',
        acrValues: '',
        localStorage: {
          prefix: 'osm.auth.'
        }
        // autoLogout: false
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
