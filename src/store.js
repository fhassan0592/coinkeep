import Vue from 'vue';
import Vuex from 'vuex';

import { login, signup, getCoins } from './axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: '',
        coins: []
    },
    getters: {
        tokenGetter(state) {
            return state.token;
        },
        coinsGetter(state) {
            return state.coins;
        }
    },
    mutations: {
        tokenSetter(state, token) {
            state.token = token;
        },
        coinsSetter(state, coins) {
            state.coins = coins;
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
        },
        persistAuthData({ commit }, token) {
            localStorage.setItem('token', token);
            commit('tokenSetter', token);
        },
        retrieveAuthData({ commit }) {
            commit('tokenSetter', localStorage.getItem('token'));
            return localStorage.getItem('token');
        },
        destroyAuthData({ commit }) {
            return new Promise((resolve, reject) => {
                commit('tokenSetter', '');
                localStorage.clear();
                resolve();
            });
        },
        getCoinsAction({ commit }) {
            return new Promise((resolve, reject) => {
                getCoins()
                .then(res => {
                    commit('coinsSetter', res.data.payload.coins);
                    resolve();
                })
                .catch(err => reject(err));
            });
        }
    }
});