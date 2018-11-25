import Axios from 'axios';

const axios = new Axios.create({
    baseURL: 'http://localhost:3000/api/v1/auth'
});

export const login = (loginData) => axios.post('/login', loginData);
export const signup = (signupData) => axios.post('/signup', signupData);