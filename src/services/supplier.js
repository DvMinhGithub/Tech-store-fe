import { httpDelete, httpGet, httpPost, httpPut } from '../configs/api'

const buildSupplierUrl = (params = {}) => {
  const url = new URL('/supplier/get', window.location.origin)
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, value)
  })
  return url.pathname + url.search
}

export const supplierService = {
  getSuppliers: (data = {}) => httpGet(buildSupplierUrl({ page: data.page, limit: data.limit })),
  createSupplier: (data) => httpPost('/supplier/add', data),
  updateSupplier: (id, data) => httpPut(`/supplier/update/${id}`, data),
  deleteSupplier: (id) => httpDelete(`/supplier/delete/${id}`)
}
