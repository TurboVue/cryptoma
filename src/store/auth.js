import auth from "@/services/auth";
import assets from "@/services/userAssets";
// import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        validation: {
            fullname: [""],
            email: [""],
            phone: [""],
            password: [""],
        },
        paymentDetail: null,
        isFormShow: false,
        message: null,
        role: null
    },
    mutations: {
        SET_USER(state, data) {
            if (data) {
                state.user = data.bio;
                state.paymentDetail = data.bank_account;
                state.cardlets = data.cardlets
                state.role = data.user_role[0]
            } else state.user = data;
        },
        SET_TOKEN(state, data) {
            state.token = data;
        },
        SET_DETAILS(state, data) {
            state.paymentDetail = data;
        },
        SET_ISFORM(state) {
            state.isFormShow = !state.isFormShow;
        },
        SET_ERROR(state, data) {
            (state.validation.fullname = data.fullname),
            (state.validation.email = data.email),
            (state.validation.phone = data.phone || [""]),
            (state.validation.password = data.password || [""]);
        },
        SET_MESSAGE(state, data) {
            state.message = data;
        },
    },
    getters: {
        authenticated(state) {
            return state.token;
        },
        user_role(state) {
            return state.role
        },
        errors(state) {
            return state.validation;
        },
        user(state) {
            return state.user;
        },
        message(state) {
            return state.message;
        },
        payment_details(state) {
            return state.paymentDetail;
        },
        cardForm(state) {
            return state.isFormShow;
        },
    },
    actions: {
        async USER_LOGIN({ dispatch }, credentials) {
            return auth.login(credentials).then(
                (res) => {
                    return dispatch("attempt", res.data.token);
                },
                (error) => {

                    return Promise.reject(error);
                }
            );
        },
        async getBanks() {
            return assets.getBanks().then(
                (res) => {
                    return Promise.resolve(res);
                },
                (error) => {

                    return Promise.reject(error);
                }
            );
        },
        async verifyBankDetails(_, data) {
            return assets.verifyBankDetails(data).then(
                (res) => {
                    return Promise.resolve(res);
                },
                (error) => {

                    return Promise.reject(error);
                }
            );
        },
        async uploadPaymentDetails(_, data) {
            return assets.uploadPaymentDetails(data).then(
                (res) => {
                    return Promise.resolve(res);
                },
                (error) => {

                    return Promise.reject(error);
                }
            );
        },
        toggleForm({ commit }) {
            commit("SET_ISFORM");
        },
        async attempt({ commit }, credentials) {
            commit("SET_TOKEN", credentials);
            return auth.attempt().then(
                (res) => {
                    console.log(res.data.data);
                    commit("SET_USER", res.data.data);
                    return Promise.resolve(res);
                },
                (error) => {
                    commit("SET_TOKEN", null);
                    // sessionStorage.removeItem('token')
                    return Promise.reject(error);
                }
            );

            // commit('SET_TOKEN', any)
            // commit('SET_TOKEN', any)
            // try {
            //     let response = await axios.post('users/user', {
            //         headers: {
            //             'Authorization': 'Bearer ' + any
            //         }
            //     })
            //     console.log(response.data)
            //     commit('SET_USER', response.data)
            // } catch (e) {
            //     commit('SET_TOKEN', null)
            //     commit('SET_USER', {
            //         fullname: 'user'
            //     })
            //     commit('SET_MESSAGE', null)
            //         //dispatch('attempt', state.token)
            // }
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            console.log("logout");
            commit("SET_TOKEN", null);
            commit("SET_USER", null);
            commit("SET_MESSAGE", null);
        },
        signUp({ dispatch, commit }, credentials) {
            return auth.register(credentials).then(
                (res) => {
                    return dispatch("attempt", res.data.token);
                },
                (error) => {
                    console.log(error.response);
                    commit("SET_ERROR", error.response.data.errors);
                    // console.log(JSON.parse(JSON.stringify(error)))
                    return Promise.reject(error);
                }
            );

            // await axios.post('register', data)
            //     .then((response) => {
            //         console.log(response.data);
            //         return dispatch('attempt', response.data.token)
            //             //      console.log(response.status);
            //             //      console.log(response.statusText);
            //             //      console.log(response.headers);
            //             //      console.log(response.config);
            //     }).catch(err => {
            //         console.log('failed')
            //         commit('SET_ERROR', err.response.data.errors)

            //     });
        },
    },
}; //     });