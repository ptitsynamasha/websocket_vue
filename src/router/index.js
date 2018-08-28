import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewObject from '@/components/Object/NewObject'
import Object from '@/components/Object/Object'
import ObjectList from '@/components/Object/ObjectList'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/object/:id',
      name: 'object',
      component: Object
    },
    {
      path: '/list',
      name: 'list',
      component: ObjectList
    },
    {
      path: '/new',
      name: 'newObject',
      component: NewObject
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
  ],
  mode: 'history'
})
