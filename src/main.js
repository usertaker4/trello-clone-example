import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

import DefaultLayout from './layouts/DefaultLayout.vue'

Vue.component('default-layout', DefaultLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
