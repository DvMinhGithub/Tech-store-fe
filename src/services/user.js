import { httpPost } from '../configs/api'

const register = (data) => {
  return httpPost('/register', data)
}

const login = (data) => {
  return httpPost('/login', data)
}

export const userService = { register, login }
