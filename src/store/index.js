import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemondata: "",
  },
  mutations: {
    setpokemondata(state, sData){
      state.pokemondata = sData
    }
  },
  actions: {
  },
  modules: {
  }
})
