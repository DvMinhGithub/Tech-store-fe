import voucherService from '@/services/voucher'
import { createStoreUtils } from '@/utils/store'

import { create } from 'zustand'

const initialState = {
  vouchers: [],
  voucher: {},
  isLoading: false
}

const useVoucherStore = create((set, get) => {
  const utils = createStoreUtils(set, get)

  return {
    ...initialState,
    ...utils,

    resetState: () => set(initialState),

    createVoucher: async (data) => {
      await utils.handleApiCall(
        () => voucherService.create(data),
        () => get().getAllVouchers()
      )
    },

    getVoucherValid: async () => {
      await utils.handleApiCall(
        () => voucherService.getValid(),
        (res) => set({ vouchers: res })
      )
    },

    getAllVouchers: async () => {
      await utils.handleApiCall(
        () => voucherService.getAll(),
        (res) => set({ vouchers: res.data })
      )
    },

    getVoucherByCode: async (code) => {
      await utils.handleApiCall(
        () => voucherService.getByCode(code),
        (res) => set({ voucher: res.data })
      )
    }
  }
})

export default useVoucherStore
