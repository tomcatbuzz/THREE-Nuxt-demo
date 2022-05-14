export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'three-nuxt',
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
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '~/modules/material-design-icons',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: {
          wght: [300, 400, 600]
        },
        Montserrat: {
          wght: [0, 200, 0, 300, 0, 400, 1, 200, 1, 300, 800],
          ital: [100]
        },
        Kanit: {
          wght: [800]
        }
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBR523bFu4MiQICSydeFFcb-OSjvRXEbJs',
          authDomain: 'tomcatbuzzweb.firebaseapp.com',
          projectId: 'tomcatbuzzweb',
          storageBucket: 'tomcatbuzzweb.appspot.com',
          messagingSenderId: '1005362535240',
          appId: '1:1005362535240:web:bc50b914cd5106b008717d',
          measurementId: 'G-3RTWSNN90M'
        },
        services: {
          firestore: true,
          functions: true,
          storage: true,
          analytics: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'gsap',
      'three'
    ]
  }
}
