import { constants } from '@/constants'
import { handleNotification } from '@/utils'

export const createStoreUtils = (set, get) => ({
  setLoading: (isLoading) => set({ isLoading }),

  handleApiCall: async (apiCall, onSuccess = () => {}, errorMessage = '') => {
    get().setLoading(true)
    try {
      const res = await apiCall()
      if (onSuccess) {
        onSuccess(res)
      }
      return res
    } catch (error) {
      handleNotification(constants.NOTIFICATION_ERROR, errorMessage || error)
    } finally {
      get().setLoading(false)
    }
  }
})
