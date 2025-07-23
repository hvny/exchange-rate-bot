import '../lib/env/env';
import axios from 'axios';

const baseURL = process.env.EXCHANGE_API_URL;
const apiKey = process.env.EXCHANGE_API_KEY;

const api = axios.create({
  baseURL: `${baseURL}${apiKey}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
