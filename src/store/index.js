import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import cards from "./cards";
import auth from "./auth";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cards,
    auth,
  },
  plugins: [createPersistedState()],
});
