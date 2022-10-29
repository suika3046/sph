import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home/index.js'
import search from './search/index.js'

export default new Vuex.Store({
  modules: {
    home,
    search,
  },
})
