import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login';
import Signup from './components/Signup';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    }
];

export default new VueRouter({
    mode: 'history', routes
});