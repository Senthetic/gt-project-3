import axios from 'axios';

const Api = axios.create({
    baseURL:'/api'
});

Api.interceptors.request.use(config =>{
    if(localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    return config;
})

export default Api;