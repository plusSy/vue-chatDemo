// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUi from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import Components from './components/index'

import mixin from '@/mixin/index'

import * as filters from './filter/index.js'

console.log(filters)

Vue.config.productionTip = false

Vue.use(ElementUi)

Vue.mixin(mixin)

Components.map(component => {
  Vue.component(component.name, component)
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
