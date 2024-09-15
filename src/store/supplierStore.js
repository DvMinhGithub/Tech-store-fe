import { constants } from '@/constants'
import { supplierService } from '@/services/supplier'
import { handleNotification } from '@/utils'

import { create } from 'zustand'

const initialState = {
  suppliers: [],
  page: 1,
  pages: 0,
  totalItems: 0,
  isLoading: false
}

const useSupplierStore = create((set, get) => ({
  ...initialState,

  setLoading: (isLoading) => set({ isLoading }),

  getSuppliers: async (data) => {
    get().setLoading(true)
    try {
      const {
        data: { list, pages, total }
      } = await supplierService.getSuppliers(data)
      set({ suppliers: list, pages, totalItems: total })
    } catch (error) {
      console.log(error)
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  },

  createSupplier: async (data) => {
    get().setLoading(true)
    try {
      await supplierService.createSupplier(data)
      await get().getSuppliers()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  },

  updateSupplier: async (id, data) => {
    get().setLoading(true)
    try {
      await supplierService.updateSupplier(id, data)
      await get().getSuppliers()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  },

  deleteSupplier: async (id) => {
    get().setLoading(true)
    try {
      await supplierService.deleteSupplier(id)
      await get().getSuppliers()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      get().setLoading(false)
    }
  }
}))

export default useSupplierStore
