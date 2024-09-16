import { httpDelete, httpGet, httpPost, httpPut } from '../configs/api'

const BASE_URL = '/product'

const buildUrl = (params = {}) => {
  const url = new URL(`${BASE_URL}/getListProduct`, window.location.origin)
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, value)
    }
  })
  return url.pathname + url.search
}

export const productService = {
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

  getProductByName: (name) => httpGet(buildUrl({ search: name })),

  getProductById: (id) => httpGet(`${BASE_URL}/detail/${id}`),

  changeProductStatus: (id, data) => httpPut(`${BASE_URL}/status/${id}`, data),

  getProductTopView: () => httpGet(`${BASE_URL}/top-view`),

  getProductsTopSold: () => httpGet(`${BASE_URL}/top-sold`),

  deleteProduct: (id) => httpDelete(`${BASE_URL}/delete/${id}`),

  ratingProduct: (data) => httpPost(`${BASE_URL}/rating`, data)
}
