import admin from "@/services/admin";

export default {
    namespaced: true,
    state: {
        cards: [],
        btc_trades: [],
        cardlets: [],
        users: [],
        names: []
    },
    getters: {
        cards(state) {
            return state.cards
        },
        cardlets(state) {
            return state.cardlets
        },
        btc_trades(state) {
            return state.btc_trades
        },
        users(state) {
            return state.users
        },
        names(state) {
            return state.names
        }
    },
    mutations: {
        ADD_CARD(state, data) {
            if (Array.isArray(data) === true) state.cards = data;
            else state.cards.unshift(data);
        },
        ADD_NAMES(state, data) {
            if (Array.isArray(data) === true) state.names = data;
            else state.names.unshift(data);
        },
        ADD_ALL_USERS(state, data) {
            state.users = data
        },
        ADD_TRADES(state, data) {
            state.btc_trades = data
        }
    },
    actions: {
        ADD_CARD({ commit }, data) {
            commit('ADD_CARD', data)
        },
        ADD_NAMES({ commit }, data) {
            commit('ADD_NAMES', data)
        },
        getAllUsers({ commit }) {
            // await axios.get('/admin/all-users').then(res => )
            return admin.getAllUsers().then(
                (res) => {
                    commit('ADD_ALL_USERS', res.data.data)
                    return Promise.resolve(res);
                },
                (error) => Promise.reject(error)

            );
        },
        getAllBtcTrades({ commit }) {
            // await axios.get('/users/proofs-all').then(res => commit('ADD_TRADES', res.data.data))
            return admin.getAllBtcTrades().then(
                (res) => {
                    commit('ADD_TRADES', res.data.data)
                    return Promise.resolve(res);
                },
                (error) => Promise.reject(error)
            );
        },
        getAllNames({ commit }) {
            // await axios.get('/users/proofs-all').then(res => commit('ADD_TRADES', res.data.data))
            return admin.getAllNames().then(
                (res) => {
                    commit('ADD_NAMES', res.data.data)
                    return Promise.resolve(res);
                },
                (error) => Promise.reject(error)
            );
        },
        getAllCards({ commit }) {
            // await axios.get('/users/proofs-all').then(res => commit('ADD_TRADES', res.data.data))
            return admin.getAllCards().then(
                (res) => {
                    commit('ADD_CARD', res.data.data)
                    return Promise.resolve(res);
                },
                (error) => Promise.reject(error)
            );
        },
        addCard(_, data) {
            // await axios.get('/users/proofs-all').then(res => commit('ADD_TRADES', res.data.data))
            return admin.addCard(data).then(
                (res) => Promise.resolve(res),
                (error) => Promise.reject(error)
            );
        },
    }
}