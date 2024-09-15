import { constants } from '@/constants'
import { brandService } from '@/services/brand'
import { handleNotification } from '@/utils'

import { create } from 'zustand'

const useBrandStore = create((set, get) => ({
  brands: [],
  isLoading: false,

  fetchBrands: async () => {
    set({ isLoading: true })
    try {
      const response = await brandService.fetchBrands()
      set({ brands: response.data })
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  },

  createBrand: async (data, onSuccess = () => {}) => {
    set({ isLoading: true })
    try {
      const response = await brandService.createNewBrand(data)
      handleNotification(constants.NOTIFICATION_SUCCESS, response.message)
      await get().fetchBrands()
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  },

  updateBrand: async (id, data, onSuccess = () => {}) => {
    set({ isLoading: true })
    try {
      const response = await brandService.updateExistingBrand(id, data)
      handleNotification(constants.NOTIFICATION_SUCCESS, response.message)
      await get().fetchBrands()
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  }
}))

export default useBrandStore
