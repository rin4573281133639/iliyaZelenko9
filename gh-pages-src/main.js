import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import App from './App'
import router from './router'

import { getTheme } from './themeHelpers'

import { CoolSelectPlugin } from '~/main' // '../dist/bundle-umd' // '~/main'
export { CoolSelect, EventEmitter } from '~/main' // '../dist/bundle-umd'

const theme = getTheme()

// require(`../dist/themes/${theme}.css`)
import(`../dist/themes/${theme}.css`)
// import(`../dist/main.css`)

Vue.use(Vuetify)
Vue.use(CoolSelectPlugin)

Vue.use(VueAnalytics, {
  id: 'UA-127403551-2',
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
})
