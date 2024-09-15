import { constants } from '@/constants'
import { categoryService } from '@/services/categories'
import { handleNotification } from '@/utils'

import { create } from 'zustand'

const useCategoryManagementStore = create((set, get) => ({
  categories: [],
  isLoading: false,

  setLoading: (isLoading) => set({ isLoading }),

  fetchCategories: async () => {
    get().setLoading(true)
    try {
      const res = await categoryService.fetchCategories()
      set({ categories: res.data })
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  },

  createCategory: async (data, onSuccess = () => {}) => {
    get().setLoading(true)
    try {
      const res = await categoryService.createNewCategory(data)
      await get().fetchCategories()
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  },

  updateCategory: async (id, data, onSuccess = () => {}) => {
    get().setLoading(true)
    try {
      const res = await categoryService.updateExistingCategory(id, data)
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
      await get().fetchCategories()
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  }
}))

export default useCategoryManagementStore
