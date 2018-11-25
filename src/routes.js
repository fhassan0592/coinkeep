import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

import { store } from './store';


Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/profile',
        component: Profile
    }
];

export default new VueRouter({
    mode: 'history', routes
});