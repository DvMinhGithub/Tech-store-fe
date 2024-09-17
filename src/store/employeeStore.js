import { constants } from '@/constants'
import employeeService from '@/services/employee'
import { handleNotification } from '@/utils'
import { createStoreUtils } from '@/utils/store'

import { create } from 'zustand'

const useEmployeeStore = create((set, get) => {
  const utils = createStoreUtils(set, get)

  return {
    employees: [],
    total: 0,
    isLoading: false,
    ...utils,
    createEmployee: async (data, onSuccess = () => {}) => {
      return utils.handleApiCall(async () => {
        const res = await employeeService.create(data)
        handleNotification(constants.NOTIFICATION_SUCCESS, res)
        return res
      }, onSuccess)
    },
    getEmployees: async (data) => {
      return utils.handleApiCall(async () => {
        const res = await employeeService.getList(data)
        const { list, pages, total } = res.data
        set({ employees: list, pages, total: total })
        return res
      }, null)
    },
    deleteEmployee: async (id, onSuccess = () => {}) => {
      return utils.handleApiCall(async () => {
        await employeeService.delete(id)
        await get().getEmployees()
      }, onSuccess)
    }
  }
})

export default useEmployeeStore
