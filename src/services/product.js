import { buildUrl } from '@/utils'

import { httpDelete, httpGet, httpPost, httpPut } from '../configs/api'

const BASE_URL = '/product'

export const productService = {
  fetchTopViewedProducts: () => httpGet('/product/top-view'),

  addProduct: (data) => httpPost(`${BASE_URL}/create`, data),

  getListProducts: (data = {}) =>
    httpGet(
      buildUrl({
        page: data.page,
        limit: data.limit,
        name: data.name,
        categoryIds: data.categoryIds,
        brandId: data.brandId
      })
    ),

  updateProduct: (id, data) => httpPut(`${BASE_URL}/update/${id}`, data),

  getProductByName: (name) => httpGet(buildUrl(`${BASE_URL}/getListProduct`, { search: name })),

  getProductById: (id) => httpGet(`${BASE_URL}/detail/${id}`),

  changeProductStatus: (id, data) => httpPut(`${BASE_URL}/status/${id}`, data),

  getProductTopView: () => httpGet(`${BASE_URL}/top-view`),

  getProductsTopSold: () => httpGet(`${BASE_URL}/top-sold`),

  deleteProduct: (id) => httpDelete(`${BASE_URL}/delete/${id}`),

  ratingProduct: (data) => httpPost(`${BASE_URL}/rating`, data)
}
