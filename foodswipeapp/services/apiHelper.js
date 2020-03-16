import { AsyncStorage } from 'react-native';
import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  AsyncStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}
export const modifyUser = async (modifyData, userId) => {
  const resp = await api.put(`/users/${userId}`, { user: modifyData })
}
export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  //   AsyncStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const getFoods = async () => {
  let res = await axios.get(`${baseUrl}/foods`)
  return res.data
}

export const verifyUser = async () => {
  const token = await AsyncStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.post('/auth/verify');
    return resp.data
  }
  return false
}

export const createUser = async (data) => {
  const resp = await api.post('/users', { user: data })
  return resp.data
}

export const readAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}