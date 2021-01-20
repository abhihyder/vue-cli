import Vue from 'vue'
import VueApp from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(VueApp),
}).$mount('#app')
