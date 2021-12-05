import axios from "axios";
import assets from '@/services/assets'
export default {
    namespaced: true,
    state: {
        cards: [],
        names: [],
        proofs: [],
        isLoad: false,
    },
    mutations: {
        ALL_CARDS(state, data) {
            state.cards = data;
        },
        ALL_NAMES(state, data) {
            state.names = data;
        },
        SET_PROOFS(state, data){
          state.proofs = data
        },
        TOGGLE_LOADER(state) {
            state.isLoad = !state.isLoad;
        },
    },
    getters: {
        allCards(state) {
            return state.cards;
        },
        allProofs(state){
          return state.proofs
        },
        allNames(state) {
            return state.names;
        },
        isSpin(state) {
            return state.isLoad;
        },
    },
    actions: {
        async getAllCards({ commit }) {
            await axios
                .get("/cards")
                .then((response) => commit("ALL_CARDS", response.data.data))
                .catch((error) => console.log(error));
        },
        async getNames({ commit }) {
            await axios
                .get("/cardnames")
                .then((response) => {
                    return commit("ALL_NAMES", response.data.data);
                })
                .catch((error) => {
                    return error;
                });
        },
        async getMyProofs({commit}) {
          return assets.getMyProofs().then(
                (res) => {
                    // console.log(res.data);
                    commit("SET_PROOFS", res.data.data);
                    return Promise.resolve(res);
                },
                (error) => {
                    // commit("SET_TOKEN", null);
                    // sessionStorage.removeItem('token')
                    return Promise.reject(error);
                }
            );
        },
        ToggleLoader({ commit }) {
            commit("TOGGLE_LOADER");
        },
    },
};