import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from '../mock-data.js'


let data = {
  creatures: mock,
  army: [],
  coins: 2000,
  totalPower: 0
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')