import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})
export default router
