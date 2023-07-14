import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PREFIX,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default instance;
