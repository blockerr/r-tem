import axios from "axios";
import { API_URL } from '../constant';

export const axios_noAuth = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  }
});

export const axiosFormData = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    'Content-Type':  'multipart/form-data',
    'Authorization': localStorage.getItem('token')
  }
});

export const axios_auth = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    'Content-Type': 'application/json'
  }
});


axios_auth.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers['Authorization'] = token;
  return config;
}, (error) => {
  Promise.reject(error)
})