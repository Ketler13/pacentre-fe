import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      /* eslint-disable-next-line no-param-reassign */
      state.user = user;
    },
  },
});
