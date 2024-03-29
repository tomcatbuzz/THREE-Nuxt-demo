export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loading: '~/components/Preloader.vue',

  loadingIndicator: {
    name: 'three-bounce',
    color: '#00FFFF',
    background: '#7393B3'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tomcatbuzz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tomcatbuzz Portfolio' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: 'pages'
  },

  // THIS code is working middleware and privateconfig
  // serverMiddleware: [
  //   { path: '/api/check-token', handler: '~/middleware/recaptcha' }
  // ],

  // privateRuntimeConfig: {
  //   secretKey: process.env.RECAPTCH_SECRET_KEY
  // },

  // Proxy test for CORS errors
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/captcha-api/': {
  //     target: 'https://tomcatbuzzweb-backend.ue.r.appspot.com/test',
  //     pathRewrite: {
  //       '^/captcha-api': ''
  //     }
  //   }
  // },

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
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    hideBadge: false,
    // siteKey: process.env.RECAPTCHA_SITE_KEY,
    siteKey: '6Lcvy4oiAAAAAAKVGQvLQcxjKN-rw4gw094evDgW',
    version: 3
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'gsap',
      'three'
    ],
    extend (config) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader']
      })
    }
  }
}
