import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: [
  { path: '/', component: HelloWorld, navPath: '/' },
  { path: '/foo', component: Foo},
  { path: '/bar', component: Bar}]
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incrementCount(state, payload = 0) {
      state.count += payload;
    },
    resetCount(state) {
      state.count = 0;
    }
  },
  getters: {
    count(state) { return state.count },
    countReadable(state, getters) { return `State count: ${getters.count}` }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
