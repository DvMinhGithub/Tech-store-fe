import { httpGet, httpPost, httpPut } from '../configs/api'

const register = (data) => {
  return httpPost('/register', data)
}

const login = (data) => {
  return httpPost('/login', data)
}

const getProfile = () => {
  return httpGet('/user/getProfile')
}

const updateProfile = (data) => {
  return httpPut('/user/update', data)
}

export const userService = { register, login, updateProfile, getProfile }
