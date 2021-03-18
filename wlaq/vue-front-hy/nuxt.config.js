module.exports = {
  plugins: [
        { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
      ],
      css: [
        'swiper/dist/css/swiper.css'
      ],
  /*
  ** Headers of the page
  */
  head: {
    title: '鸿鹄在线教育',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '鸿鹄在线教育' },
      { hid: 'description', name: 'description', content: '鸿鹄在线教育' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

