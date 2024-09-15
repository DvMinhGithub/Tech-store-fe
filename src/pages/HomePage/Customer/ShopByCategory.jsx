import { Link } from 'react-router-dom'

import { DesktopOutlined, LaptopOutlined, MobileOutlined, TabletOutlined } from '@ant-design/icons'

function ShopByCategory() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Mua sắm theo danh mục</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link
          href="/category/laptops"
          className="bg-blue-100 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200 transition-colors">
          <LaptopOutlined className="text-4xl mb-2" />
          <span className="text-lg font-semibold">Laptops</span>
        </Link>
        <Link
          href="/category/desktops"
          className="bg-green-100 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-green-200 transition-colors">
          <DesktopOutlined className="text-4xl mb-2" />
          <span className="text-lg font-semibold">Desktops</span>
        </Link>
        <Link
          href="/category/tablets"
          className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-200 transition-colors">
          <TabletOutlined className="text-4xl mb-2" />
          <span className="text-lg font-semibold">Tablets</span>
        </Link>
        <Link
          href="/category/accessories"
          className="bg-red-100 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-red-200 transition-colors">
          <MobileOutlined className="text-4xl mb-2" />
          <span className="text-lg font-semibold">Accessories</span>
        </Link>
      </div>
    </>
  )
}

export default ShopByCategory
