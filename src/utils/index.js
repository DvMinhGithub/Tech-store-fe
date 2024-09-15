import { decodeToken } from 'react-jwt'
import { toast } from 'react-toastify'

const TOKEN_KEY = 'token'
const ROLES = {
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE',
  CUSTOMER: 'CUSTOMER'
}

export const tokenOperations = {
  remove: () => localStorage.removeItem(TOKEN_KEY),
  set: (token) => localStorage.setItem(TOKEN_KEY, token),
  get: () => localStorage.getItem(TOKEN_KEY)
}

const getRolesFromToken = () => {
  const token = tokenOperations.get()
  if (!token) return []
  try {
    const decodedToken = decodeToken(token)
    return decodedToken?.roles || []
  } catch (error) {
    console.error('Lỗi khi giải mã token:', error)
    return []
  }
}

const hasRole = (roleToCheck) => getRolesFromToken().includes(roleToCheck)

export const userRoles = {
  isManage: () => hasRole(ROLES.ADMIN) || hasRole(ROLES.EMPLOYEE),
  isCustomer: () => hasRole(ROLES.CUSTOMER)
}

export const handleNotification = (type, { message }) => {
  if (!toast[type]) {
    console.warn(`Loại thông báo không hợp lệ: ${type}`)
    return
  }
  toast[type](message)
}

export const formatMoneyVND = (amount = 0) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })
  return formatter.format(amount)
}

export const isEmptyObject = (obj) => obj && Object.keys(obj).length === 0 && obj.constructor === Object
