import { axios_auth, axiosFormData } from '../helpers/axios';

export const getInvestors = () => {
  return axios_auth.get(`/investors`)
}

export const getInvestor = (id) => {
  return axios_auth.get(`/investor/${id}`)
}

export const deleteInvestor = (id) => {
  return axios_auth.delete(`/investor/${id}`)
}

export const createInvestor = (values) => {
  return axios_auth.post(`/investors`, values)
}

export const updateInvestor = (id, values) => {
  return axios_auth.put(`/investor/${id}`, values)
}

export const updateAvatar = (id, formData) => {
  return axiosFormData.put(`/investor/avatar/${id}`, formData)
}