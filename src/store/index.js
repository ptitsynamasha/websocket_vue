import Vue from "vue"
import Vuex from 'vuex'
import object from './object'
import user from './user'
import shared from './shared'
import orders from './orders'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    object,
    user,
    shared,
    orders
  }
})
