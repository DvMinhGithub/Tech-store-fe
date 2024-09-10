import CustomSwiper from '@/components/CustomSwiper/CustomSwiper'
import ProductCard from '@/components/Product/ProductCard'

import { SwiperSlide } from 'swiper/react'

function ProductSwiper({ title, products, className }) {
  return products.length === 0 ? null : (
    <div className={`${className}`}>
      <div className="border-t border-lime-600">
        <h2 className="w-fit p-2 bg-lime-600 text-2xl text-white-500 font-semibold mb-4">{title}</h2>
      </div>
      <CustomSwiper
        pagination={false}
        navigation={products.length > 4 ? true : false}
        slidesPerView={4}
        spaceBetween={20}>
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  )
}

export default ProductSwiper
