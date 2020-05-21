import { axios_auth } from '../helpers/axios';

export const getLot = (id) => {
  return axios_auth.post(`/lot/${id}`)
}

export const getLots = () => {
  return axios_auth.get(`/lots`)
}