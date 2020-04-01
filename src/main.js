import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'


import './assets/normalize.scss'
import vuetify from './plugins/vuetify';

import './assets/font-awesome/scss/_variables.scss'
Vue.config.productionTip = false

import http from './api/http'
Vue.prototype.$http = http;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
