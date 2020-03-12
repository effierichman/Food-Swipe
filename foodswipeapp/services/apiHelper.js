import { AsyncStorage } from 'react-native';
import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

const createUser = async (data) => {
  const resp = await api.post('/users', { teacher: data })
  return resp.data
}

const readAllUsers = async () => {
  const resp = await api.get('/teachers')
  return resp.data
}

const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}



export {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser
}