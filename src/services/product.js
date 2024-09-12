import { httpGet } from '../configs/api'

const fetchTopViewedProducts = () => httpGet('/product/top-view')

export const productService = {
  fetchTopViewedProducts
}
