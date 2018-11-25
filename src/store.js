import Vue from 'vue';
import Vuex from 'vuex';

import { login, signup } from './axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: ''
    },
    getters: {
        tokenGetter(state) {
            return state.token;
        }
    },
    mutations: {
        tokenSetter(state, token) {
            state.token = token;
        }
    },
    actions: {
        loginAction({ commit }, loginData) {
            return new Promise((resolve, reject) => {
                login(loginData)
                .then(response => resolve(response.data))
                .catch(err => reject(err.response.data.err));
            });
        },
        signupAction({ commit }, signupData) {
            return new Promise((resolve, reject) => {
                signup(signupData)
                .then(response => resolve(response.data))
                .catch(err => reject(err.response.data.err));
            });
        }
    }
});