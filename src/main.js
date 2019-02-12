import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'
import store from './store'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  routes: [
  { path: '/', component: HelloWorld, navPath: '/' },
  { path: '/foo', component: Foo},
  { path: '/bar', component: Bar}]
})


sync(store, router);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
