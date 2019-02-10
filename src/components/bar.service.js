export const store = {
    namespaced: true,
    state() {
      return  {
        count: 0
      }
    },
    mutations: {
      INCREMENT_COUNT(state, payload = 0) {
        state.count += payload;
      },
      RESET_COUNT(state) {
        state.count = 0;
      }
    },
    getters: {
      count(state) { return state.count },
      countReadable(state, getters) { return `State count: ${getters.count}` }
    }
  }
