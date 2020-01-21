import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fahrenheit: '',
    celsius: ''
  },
  mutations: {
    updateFahrenheit: (state, data) => {
      if(data.match(/^[\d]*[.]?[\d]*$/) && data !== '') {
        state.fahrenheit = (data.trim() * (9 / 5) + 32);
      }
    },
    updateCelsius:  (state, data) => {
      if(data.match(/^[\d]*[.]?[\d]*$/)){
        state.celsius = (data.trim() - 32) * (5/9);
      }
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
