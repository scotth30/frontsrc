// axiosInstance.ts

import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Add this line to enable sending cookies with the request
});

export default instance;
