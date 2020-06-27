import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'phone',
    component: ()=>import('../view/phone.vue')
  },
  {
    path: '/admindb',
    name: 'admindb',
    component: ()=>import('../view/admindb.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
