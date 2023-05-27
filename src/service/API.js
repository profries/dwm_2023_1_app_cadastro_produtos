import axios from 'axios';

const API = axios.create ({
    baseURL:"http://localhost:4200"
});

export default API;