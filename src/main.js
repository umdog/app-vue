import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://39.108.216.184/'
}))

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
