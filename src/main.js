import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

Vue.config.productionTip = false

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
