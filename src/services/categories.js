import { httpGet, httpPost, httpPut } from '../configs/api'

const fetchCategories = () => httpGet('/category/get')

const fetchCategoryById = (id) => httpGet(`/category/${id}`)

const createNewCategory = (data) => httpPost('/category/create', data)

const updateExistingCategory = (id, data) => httpPut(`/category/update/${id}`, data)

export const categoryService = {
  fetchCategories,
  fetchCategoryById,
  createNewCategory,
  updateExistingCategory
}
