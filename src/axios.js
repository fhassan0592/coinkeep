import Axios from 'axios';

const axios = new Axios.create({
    baseURL: 'http://localhost:3000/api/v1/'
});

export const login = (loginData) => axios.post('/auth/login', loginData);
export const signup = (signupData) => axios.post('/auth/signup', signupData);

export const getCoins = () => axios.get('/coins');