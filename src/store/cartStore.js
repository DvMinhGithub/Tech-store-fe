import { constants } from '@/constants'
import { cartService } from '@/services/cart'
import { handleNotification } from '@/utils'

import { create } from 'zustand'

const useCartStore = create((set) => ({
  carts: [],
  isLoading: false,

  addToCart: async (data, onSuccess = () => {}) => {
    set({ isLoading: true })
    try {
      const res = await cartService.addToCart(data)
      handleNotification(constants.NOTIFICATION_SUCCESS, res)
      onSuccess()
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  }
}))

export default useCartStore
