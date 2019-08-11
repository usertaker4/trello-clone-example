import Vue from 'vue'
import Vuex from 'vuex'
import boards from './modules/boards/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    boards
  },
  state: {
    layout: 'default-layout'
  },
  mutations: {
    setLayout (state, payload) {
      state.layout = payload
    }
  },
  getters: {
    layout (state) {
      return state.layout
    }
  }
})
