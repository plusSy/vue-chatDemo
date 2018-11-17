import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/Hello'
import Dialogs from '@/views/dialogs/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dialogs',
      name: 'Dialogs',
      component: Dialogs
    }
  ]
})
