import { axios_auth, axiosFormData } from '../helpers/axios';

export const getEmployees = () => {
  return axios_auth.get('/admins')
}
export const createEmployee = (values) => {
  return axios_auth.post('/admin/signup', values)
}

export const deleteEmployee = (id) => {
  return axios_auth.delete(`/admin/${id}`)
}

export const updateEmployee = (id, values) => {
  return axios_auth.put(`/admin/${id}`, values)
}

export const getEmployee = (id) => {
  return axios_auth.get(`/admin/${id}`)
}

export const updateAvatar = (id, formData) => {
    return axiosFormData.put(`/admin/avatar/${id}`, formData)
}