import axios from "axios";
import { API_URL } from '../constant';

export default axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  }
});

// export const axios = a.create({ baseURL: API_URL });

// export const axios_json = a.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// export const axios_auth = a.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })

// axios_auth.interceptors.request.use((config) => {
//   const token = localStorage.getItem('jwt');
//   config.headers['token'] = token;
//   return config;
// }, (error) => {
//   Promise.reject(error)
// })