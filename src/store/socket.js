import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connected: false,
    error: '',
    message: '',
  },
  mutations: {
    SOCKET_CONNECT(state) {
      state.connected = true
    },
    SOCKET_LOGIN(state){

    },
    SOCKET_DISCONNECT(state) {
      state.connected = false
    },
    SOCKET_MESSAGE(state, message) {
      state.message = message
    },
    SOCKET_ALL_USERS(state, message) {
      console.log(message)
      state.allUsers = message
    },
    SOCKET_ERROR(state, message) {
      state.error = message.error
    },
  },
  actions: {

  },
  getters: {}
})
