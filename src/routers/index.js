import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import { MainHomeRoute, MainDashboardRoute } from './main'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    MainHomeRoute,
    MainDashboardRoute
  ]
})
