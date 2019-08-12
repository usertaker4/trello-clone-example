import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

import GeneralLayout from './layouts/GeneralLayout.vue'
import DefaultlLayout from './layouts/DefaultLayout.vue'

Vue.component('default-layout', DefaultlLayout)
Vue.component('general-layout', GeneralLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
