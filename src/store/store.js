import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flavor: "",
  },

  mutations: {
    changeFlavor(state, flavor) {
      state.flavor = flavor
    }
  },

  getters: {
    flavor: state => state.flavor
  }
});
