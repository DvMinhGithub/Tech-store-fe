import ProductSwiper from '@/components/Product/ProductSwiper'
import { CustomBanner } from '@/pages/HomePage/CustomerBanner'
import ShopByCategory from '@/pages/HomePage/ShopByCategory'

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Gaming Laptop', price: '$1299', image: '/placeholder.svg?height=200&width=300' },
    { id: 2, name: 'Desktop PC', price: '$899', image: '/placeholder.svg?height=200&width=300' },
    { id: 3, name: 'Mechanical Keyboard', price: '$129', image: '/placeholder.svg?height=200&width=300' },
    { id: 4, name: 'Gaming Mouse', price: '$59', image: '/placeholder.svg?height=200&widths=300' }
  ]

  return (
    <div className="container mx-auto py-8">
      <CustomBanner />
      <ProductSwiper title={'Sản phẩm nổi bật'} products={featuredProducts} className="py-8" />
      <ShopByCategory />
    </div>
  )
}

export default HomePage
