// src/services/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/',  // Set your API base URL here
  withCredentials: true,  // Include credentials in requests (e.g., cookies)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request interceptors for things like token injection
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify headers here or add authorization tokens, for example:
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add response interceptors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors globally
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
