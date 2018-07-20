import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/view/pagehome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pagehome',
      component: PageHome
    }
  ]
})
