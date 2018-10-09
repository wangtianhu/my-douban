import Vuex from 'vuex'
import Vue from 'vue'

import activitys from './modules/activitys'
import movie from './modules/movie'


Vue.use(Vuex)
export default new Vuex.Store({
        modules:{
            activitys,
             movie
        }
})


  
