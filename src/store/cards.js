import axios from 'axios'
export default {
    namespaced: true,
    state: {
        cards: [],
        names: [],
        isLoad: false
    },
    mutations: {
        ALL_CARDS(state, data) {
            state.cards = data
        },
        ALL_NAMES(state, data) {
            state.names = data
        },
        TOGGLE_LOADER(state) {
            state.isLoad = !state.isLoad
        }
    },
    getters: {
        allCards(state) {
            return state.cards
        },
        allNames(state) {
            return state.names
        },
        isSpin(state) { return state.isLoad }
    },
    actions: {
        async getAllCards({ commit }) {
            await axios.get('/cards')
                .then(response => (commit('ALL_CARDS', response.data.data)))
                .catch(error => console.log(error))
        },
        async getNames({ commit }) {
            await axios.get('/cardnames')
                .then((response) => { return commit('ALL_NAMES', response.data.data) })
                .catch((error) => { return (error) })
        },
        ToggleLoader({ commit }) {
            commit('TOGGLE_LOADER')
        }
    }
}