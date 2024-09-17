import { buildUrl } from '@/utils'

import { httpDelete, httpGet, httpPost } from '../configs/api'

const BASE_URL = '/employee'

const employeeService = {
  create: (data) => httpPost(`${BASE_URL}/create`, data),

  getList: (data) =>
    httpGet(
      buildUrl(`${BASE_URL}/get`, {
        page: data.page,
        limit: data.limit
      })
    ),

  delete: (id) => httpDelete(`${BASE_URL}/delete/${id}`)
}

export default employeeService
