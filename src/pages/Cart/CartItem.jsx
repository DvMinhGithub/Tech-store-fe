import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useCartStore from '@/store/cartStore'
import { formatMoneyVND } from '@/utils'

import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'

function CartItem({ cart, checked, handleSelectItem }) {
  const [quantity, setQuantity] = useState(cart.quantity)
  const [check, setCheck] = useState(checked)
  const { updateCartItems } = useCartStore()

  const updateQuantity = (value) => {
    setQuantity(value)
    updateCartItems({ cartItemId: cart.id, quantity: value })
  }

  const handleIncrement = () => {
    updateQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    updateQuantity(quantity - 1)
  }

  const handleDeleteCart = () => {
    updateQuantity(0)
  }

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value)
    if (!isNaN(value)) {
      updateQuantity(value)
    }
  }

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  return (
    <div key={cart.id} className="flex items-start gap-4 py-6 border-t first:border-t-0 first:pt-0 last:pb-0 lg:gap-4">
      <Checkbox
        checked={check}
        onChange={() => {
          setCheck(!check)
          handleSelectItem(cart.id)
        }}
      />
      <div className="flex flex-col gap-4 w-full lg:flex-col lg:gap-4">
        <div className="flex gap-4 lg:gap-4">
          <Link
            to={`/product/detail/${cart.productId}`}
            className="size-16 border rounded overflow-hidden shadow lg:size-24">
            <img
              src={`${cart.productImage ? cart.productImage : 'https://via.placeholder.com/100'}`}
              alt="product"
              className="object-cover"
            />
          </Link>
          <div className="flex flex-col gap-4 flex-1">
            <Link to={`/product/detail/${cart.productId}`} className="flex">
              <h3 className="text-sm font-medium capitalize lg:text-base">{cart.productName}</h3>
            </Link>
            <div className="flex flex-col">
              <span
                className={` ${cart.productPriceAfterDiscount < cart.productPrice ? 'text-sm line-through' : 'text-base font-semibold'}`}>
                {formatMoneyVND(cart.productPrice)}
              </span>
              {cart?.productPriceAfterDiscount < cart.productPrice && (
                <span className="text-sm font-semibold text-red">{formatMoneyVND(cart.productPriceAfterDiscount)}</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex gap-4 items-center">
            <span className="text-sm font-medium lg:w-24 lg:text-base">Số lượng:</span>

            <div className="flex items-center">
              <button
                className="w-8 h-8 flex items-center justify-center border border-gray-300 transition-colors duration-200"
                onClick={handleDecrement}
                disabled={quantity <= 1}>
                <i className="fa fa-minus text-gray-500"></i>
              </button>
              <input
                type="text"
                className="w-10 h-8 text-center text-gray-500 border-y border-gray-300 focus:outline-none"
                value={quantity}
                pattern="[0-9]*"
                onChange={handleInputChange}
              />
              <button
                className="w-8 h-8 flex items-center justify-center border border-gray-300 transition-colors duration-200"
                onClick={handleIncrement}>
                <i className="fa fa-plus text-gray-500"></i>
              </button>
            </div>
          </div>
          <button className="flex items-center gap-4 text-gray-700 link" onClick={handleDeleteCart}>
            <DeleteOutlined />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
