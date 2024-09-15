import { httpGet, httpPost, httpPut } from '../configs/api'

const fetchBrands = () => httpGet('/brand/get')

const createNewBrand = (brandData) => httpPost('/brand/create', brandData)

const updateExistingBrand = (brandId, updatedData) => httpPut(`/brand/update/${brandId}`, updatedData)

export const brandService = {
  fetchBrands,
  createNewBrand,
  updateExistingBrand
}
