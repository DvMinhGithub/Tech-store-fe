import { httpPost } from '../configs/api'

const addToCart = (data) => {
  return httpPost('/cart/addToCart', data)
}

export const cartService = {
  addToCart
}
