import { createStore } from 'vuex'

// Vue.use(Vuex)

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
})

export default store
