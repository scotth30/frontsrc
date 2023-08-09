// axiosInstance.ts

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
  withCredentials: true, // Add this line to enable sending cookies with the request
});

export default instance;
