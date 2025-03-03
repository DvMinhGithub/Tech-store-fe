import { decodeToken } from 'react-jwt'

import { constants } from '@/constants'
import { handleNotification, tokenOperations } from '@/utils'

import { userService } from '../services/user'
import { create } from 'zustand'

const useUserStore = create((set, get) => ({
  user: null,
  isLoading: false,

  register: async (data, onSuccess = () => {}) => {
    set({ isLoading: true })
    try {
      const res = await userService.register(data)
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  },

  login: async (payload, onSuccess) => {
    set({ isLoading: true })
    try {
      const res = await userService.login(payload)
      tokenOperations.set(res.data.accessToken)
      const dataFromToken = decodeToken(res.data.accessToken)

      onSuccess(dataFromToken?.roles || [])
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  },

  getProfile: async () => {
    set({ isLoading: true })
    try {
      const res = await userService.getProfile()
      set({ user: res.data })
    } catch (error) {
      console.error(error.message)
    } finally {
      set({ isLoading: false })
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true })
    try {
      const res = await userService.updateProfile(data)
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
      await get().getProfile()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  }
}))

export default useUserStore
