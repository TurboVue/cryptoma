import axios from 'axios';
export default {
    namespaced: true,
    state: {
        token: null,
        user: {
            fullname: 'user'
        },
        validation: {
            fullname: [''],
            email: [''],
            phone: [''],
            password: ['']
        },
        paymentDetail: ['{}'],
        isFormShow: false,
        message: null
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data.user || data.user_attributes

            state.message = data.message
        },
        SET_TOKEN(state, data) {

            state.token = data

        },
        SET_DETAILS(state, data) {
            state.paymentDetail = data
        },
        SET_ISFORM(state) {
            state.isFormShow = !state.isFormShow
        },
        SET_ERROR(state, data) {
            state.validation.fullname = data.fullname,
                state.validation.email = data.email,
                state.validation.phone = data.phone || [''],
                state.validation.password = data.password || ['']
        },
        SET_MESSAGE(state, data) {

            state.message = data
        }
    },
    getters: {
        authenticated(state) {
            return state.token
        },
        errors(state) {
            return state.validation
        },
        user(state) {
            return state.user
        },
        message(state) {
            return state.message
        },
        details(state) {
            return state.paymentDetail
        },
        cardForm(state) {
            return state.isFormShow
        }
    },
    actions: {
        async USER_LOGIN({ dispatch, commit }, credentials) {
            console.log(credentials)
            await axios.post('login', credentials)
                .then((response) => {
                    console.log(response.data);
                    return dispatch('attempt', response.data.token)
                        //      console.log(response.status);
                        //      console.log(response.statusText);
                        //      console.log(response.headers);
                        //      console.log(response.config);
                }).catch(err => commit('SET_MESSAGE', err.response.data.message));
            //     var formdata = new FormData();
            //     formdata.append("email", credentials.email);
            //     formdata.append("password", credentials.password);

            //     var requestOptions = {
            //         method: 'POST',
            //         body: formdata,
            //         redirect: 'follow'
            //     };
            //     let obj = [];
            //     await fetch("https://bloodhq-be.herokuapp.com/api/v1/login", requestOptions)
            //         .then(response => response.json())

            //         .then(result => obj.push(result))
            //         .catch(error => this.error = error);





        },
        toggleForm({ commit }) {
            commit('SET_ISFORM')
        },
        async attempt({ commit }, any) {
            commit('SET_TOKEN', any)
            try {
                let response = await axios.post('users/user', {
                    headers: {
                        'Authorization': 'Bearer ' + any
                    }
                })
                console.log(response.data)
                commit('SET_USER', response.data)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', {
                    fullname: 'user'
                })
                commit('SET_MESSAGE', null)
                    //dispatch('attempt', state.token)
            }

        },
        async logout({ commit }) {
            // let data = {
            //     "token": null,
            //     "user": null,
            // }
            localStorage.removeItem('token')
            console.log('logout')
            commit('SET_TOKEN', null)
            commit('SET_MESSAGE', null)
        },
        async signUp({ dispatch, commit }, data) {


            await axios.post('register', data)
                .then((response) => {
                    console.log(response.data);
                    return dispatch('attempt', response.data.token)
                        //      console.log(response.status);
                        //      console.log(response.statusText);
                        //      console.log(response.headers);
                        //      console.log(response.config);
                }).catch(err => {
                    console.log('failed')
                    commit('SET_ERROR', err.response.data.errors)


                });

        },


    }
}