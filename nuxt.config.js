const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: "stylesheet", type:"text/css", href: 'https://at.alicdn.com/t/font_1057973_s5vn2c5ls8s.css'}
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'rgb(24, 144, 255)', height: '2px' },

  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css', 'assets/main.css', 'assets/media.less'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    prefix: '/api',
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:3000', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
