import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Main from './components/Main';
import CatchAll from './components/CatchAll';
import EditCoin from './components/Card/EditCoin';

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
    },
    {
        path: '/',
        component: Main
    },
    {
        path: '/coin/:id',
        component: EditCoin
    },
    {
        path: '*',
        component: CatchAll
    }
];

export default new VueRouter({
    mode: 'history', routes
});