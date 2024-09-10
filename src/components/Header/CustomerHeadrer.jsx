import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useUserStore from '@/store/userStore'

import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Badge, Button, Drawer, Dropdown, Input } from 'antd'

const { Search } = Input

const items = [
  {
    label: <Link to="/profile">Hồ sơ</Link>,
    key: 'profile'
  },
  {
    label: <Link to="/orders">Đơn hàng</Link>,
    key: 'orders'
  },
  {
    label: <Link to="/settings">Cài đặt</Link>,
    key: 'settings'
  },
  {
    type: 'divider'
  },
  {
    label: 'Đăng xuất',
    key: 'logout'
  }
]

const MobileMenu = ({
  wrapperClass,
  itemClass = 'uppercase font-medium hover:text-blue-600 lg-max:py-4 lg-max:first:pt-0 lg-max:last:pb-0 lg-max:border-b lg-max:last:border-b-0 lg:text-white-500'
}) => (
  <nav className={wrapperClass}>
    <Link to="/" className={itemClass}>
      Trang chủ
    </Link>
    <Link to="/products" className={itemClass}>
      Sản phẩm
    </Link>
    <Link to="/about" className={itemClass}>
      Giới thiệu
    </Link>
    <Link to="/contact" className={itemClass}>
      Liên hệ
    </Link>
  </nav>
)

function CustomerHeader() {
  const [isSlideMenuMobileOpen, setIsSlideMenuMobileOpen] = useState(false)
  const { user, getProfile } = useUserStore()

  const handleSearch = useCallback((value) => {
    console.log('Search:', value)
    // Implement search functionality here
  }, [])

  const cartItems = 3 // Replace with actual cart item count

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <Button icon={<MenuOutlined />} onClick={() => setIsSlideMenuMobileOpen(!isSlideMenuMobileOpen)} />
            <Drawer
              placement="left"
              closable={true}
              closeIcon={true}
              onClose={() => setIsSlideMenuMobileOpen(false)}
              open={isSlideMenuMobileOpen}>
              <MobileMenu wrapperClass="flex flex-col" />
            </Drawer>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 mr-8">
              TechStore
            </Link>
            <MobileMenu wrapperClass="hidden lg:flex gap-x-5" />
          </div>
          <div className="flex items-center gap-x-8">
            <div className="hidden md:block w-64">
              <Search placeholder="Sản phẩm" onSearch={handleSearch} style={{ width: '100%' }} />
            </div>
            <Link to="/cart" className="text-white-500 hover:text-blue-600">
              <Badge count={cartItems} showZero size="small" color="blue">
                <ShoppingCartOutlined style={{ fontSize: '20px', color: 'white' }} />
              </Badge>
            </Link>
            <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
              <a
                className="flex gap-2 items-center text-white-500 hover:cursor-pointer"
                onClick={(e) => e.preventDefault()}>
                <UserOutlined style={{ fontSize: '20px', color: 'white' }} />
                <span className=" capitalize max-w-40 truncate lg-max:hidden">{user?.name || 'Tài khoản'}</span>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <Search placeholder="Sản phẩm" onSearch={handleSearch} style={{ width: '100%' }} />
        </div>
      </div>
    </header>
  )
}

export default CustomerHeader
