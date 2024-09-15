import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { constants } from '@/constants'
import useCartStore from '@/store/cartStore'
import { formatMoneyVND, handleNotification } from '@/utils'

import CartItem from './CartItem'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'

function CartPage() {
  const { carts, fetchCartItems, setCartItems } = useCartStore()
  const [cartItems, setCartItemsState] = useState([])
  const [isAllChecked, setIsAllChecked] = useState(false)
  const navigate = useNavigate()

  const cartTotal = useMemo(() => {
    return carts.reduce((total, item) => {
      const { productPriceAfterDiscount, quantity } = item
      return total + productPriceAfterDiscount * quantity
    }, 0)
  }, [carts])

  const handleSelectAllItems = (event) => {
    const updatedItems = cartItems.map((item) => ({
      ...item,
      checked: event.target.checked
    }))
    setIsAllChecked(event.target.checked)
    setCartItemsState(updatedItems)
    setCartItems(updatedItems)
  }

  const handleSelectCartItem = (id) => {
    const updatedItems = cartItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    setIsAllChecked(updatedItems.every((item) => item.checked))
    setCartItemsState(updatedItems)
    setCartItems(updatedItems)
  }

  const handleProceedToCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.checked)
    if (selectedItems.length > 0) {
      navigate('/cart/checkout')
      sessionStorage.setItem('checkoutItems', JSON.stringify(selectedItems))
    } else {
      handleNotification(constants.NOTIFICATION_WARNING, 'Bạn chưa chọn sản phẩm nào để mua')
    }
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  useEffect(() => {
    setCartItemsState(carts)
  }, [carts])

  return (
    <div className="container py-4 flex-1 lg:py-10">
      <h1 className="text-2xl font-semibold capitalize mb-4 lg:mb-8">Giỏ hàng</h1>
      {carts.length > 0 && (
        <div className="flex items-center gap-2 px-4 pb-4 lg:px-8">
          <Checkbox checked={isAllChecked} onChange={handleSelectAllItems} />
          <span onClick={() => setIsAllChecked(!isAllChecked)}>Chọn tất cả</span>
        </div>
      )}
      {carts.length > 0 ? (
        <div className="flex gap-8 lg-max:flex-col">
          <div className="flex flex-col w-full p-4 overflow-hidden bg-white border rounded-md h-fit lg:p-8">
            {cartItems.map((cart) => (
              <CartItem key={cart.id} cart={cart} checked={cart.checked} handleSelectItem={handleSelectCartItem} />
            ))}
          </div>
          <div className="w-full p-4 bg-white border rounded-lg lg:w-2/5 lg:p-8">
            <h2 className="mb-5 text-xl font-semibold capitalize">Thông tin giỏ hàng</h2>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Giá trị đơn hàng:</span>
              <span className="font-semibold text-gray-500">{formatMoneyVND(cartTotal)}</span>
            </div>
            <div className="flex justify-between pt-5 mt-4 font-bold border-t">
              <span>Tổng tiền:</span> {formatMoneyVND(cartTotal)}
            </div>
            <button onClick={handleProceedToCheckout} className="block w-full mt-8 btn btn-primary">
              Đặt hàng
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <ShoppingCartOutlined style={{ fontSize: '50px' }} />
          <h3 className="text-xl text-center">Không có sản phẩm nào trong giỏ hàng</h3>
          <a href="/products" className="btn btn-primary">
            Mua ngay
          </a>
        </div>
      )}
    </div>
  )
}

export default CartPage
