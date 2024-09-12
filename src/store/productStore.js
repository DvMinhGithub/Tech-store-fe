import { constants } from '@/constants'
import { productService } from '@/services/product'
import { handleNotification } from '@/utils'

import { create } from 'zustand'

const useProductStore = create((set) => ({
  products: [],
  productsTopView: [],
  product: null,
  page: 1,
  pages: 0,
  totalProducts: 0,
  isLoading: false,

  fetchTopViewedProducts: async () => {
    set({ isLoading: true })
    try {
      const res = await productService.fetchTopViewedProducts()
      set({ productsTopView: res.data.list })
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, error)
    } finally {
      set({ isLoading: false })
    }
  }
}))

export default useProductStore
