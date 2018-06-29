// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './routers'
import store from '@/store'

// bootstrap-vue
// Bootstrap components and directives
Vue.use(BootstrapVue)

// vue-meta
// supports `meta` object returned with `module.defaults`
Vue.use(Meta)

// QUESTION - ??
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: { App }
})
