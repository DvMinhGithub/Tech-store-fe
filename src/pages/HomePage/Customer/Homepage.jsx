import { useEffect } from 'react'

import ProductSwiper from '@/components/Product/ProductSwiper'
import { CustomBanner } from '@/pages/HomePage/CustomerBanner'
import ShopByCategory from '@/pages/HomePage/ShopByCategory'
import useProductStore from '@/store/productStore'

const HomePage = () => {
  const { productsTopView, fetchTopViewedProducts } = useProductStore()

  useEffect(() => {
    fetchTopViewedProducts()
  }, [])

  return (
    <div className="container mx-auto py-8">
      <CustomBanner />
      <ProductSwiper
        title={'Sản phẩm nổi bật'}
        products={productsTopView}
        className="py-8 overflow-hidden swiper-feature-product"
      />
      <ShopByCategory />
    </div>
  )
}

export default HomePage
