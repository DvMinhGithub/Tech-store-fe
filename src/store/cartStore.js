import { constants } from '@/constants'
import { cartService } from '@/services/cart'
import { handleNotification } from '@/utils'

import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  carts: [],
  isLoading: false,

  addItemToCart: async (data, onSuccess = () => {}) => {
    set({ isLoading: true })
    try {
      const res = await cartService.addItemToCart(data)
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  },
  fetchCartItems: async () => {
    set({ isLoading: true })
    try {
      const res = await cartService.fetchCartItems()
      set({ carts: res.data.map((item) => ({ ...item, checked: false })) })
    } catch (error) {
      console.error(error.message)
    } finally {
      set({ isLoading: false })
    }
  },
  setCartItems: (data) => {
    set({ carts: data })
  },
  updateCartItems: async (data, onSuccess = () => {}) => {
    set({ isLoading: true })
    try {
      await cartService.updateCartItems(data)
      await get().fetchCartItems()
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  }
}))

export default useCartStore
