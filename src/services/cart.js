import { httpGet, httpPost, httpPut } from '../configs/api'

const fetchCartItems = () => httpGet('/cart/get')

const addItemToCart = (data) => httpPost('/cart/addItemToCart', data)

const updateCartItems = (data) => httpPut('/cart/update', data)

export const cartService = {
  fetchCartItems,
  addItemToCart,
  updateCartItems
}
