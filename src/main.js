import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@babel/polyfill'
Vue.config.productionTip = false
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://chatjs.top'
}))

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
