import Vue from 'vue'
import Router from 'vue-router'
import pagemain from '@/view/pagemain'
import homeview from '@/view/homeview'
import bookview from '@/view/bookview'
import statioview from '@/view/statioview'
import groupview from '@/view/groupview'
import movieview from '@/view/movieview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/pages/'
    },
    {
      path:'/pages',
      component:pagemain,
      children:[
        {
          path:'',
          redirect:'/pages/homeview'
        },
        {
          path:'homeview',
          name:'homeview',
          component:homeview
        },
        {
          path:'bookview',
          name:'bookview',
          component:bookview
        },
        {
          path:'statioview',
          name:'statioview',
          component:statioview
        },
        {
          path:'groupview',
          name:'groupview',
          component:groupview
        },
        {
          path:'movieview',
          name:'movieview',
          component:movieview
        }
      ]
    }
  ]
})
