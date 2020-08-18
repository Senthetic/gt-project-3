import axios from 'axios';
console.log(process.env.BASE_URL);
const Api = axios.create({
    baseURL: 'https://afternoon-retreat-07071.herokuapp.com/api'
});

Api.interceptors.request.use(config =>{
    if(localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    return config;
})

export default Api;