import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Signup  from  '@/views/Signup.vue'
import  Login  from  '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:  '/signup',
      name:  'signup',
      component:  Signup
    },
    {
      path:  '/login',
      name:  'login',
      component:  Login
    }
  ]
})
