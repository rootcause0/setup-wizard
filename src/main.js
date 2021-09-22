import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './Router'
import App from './App.vue'

// Module Router,Must inject via Vue.use to the our Vue.App
Vue.use(VueRouter)
var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})