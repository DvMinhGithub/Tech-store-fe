import CustomSwiper from '@/components/CustomSwiper/CustomSwiper'

import { SwiperSlide } from 'swiper/react'

export function CustomBanner() {
  const items = [
    { text: 'Khuyến mãi đặc biệt', backgroundColor: 'bg-blue-100' },
    { text: 'Mua sắm thoải mái', backgroundColor: 'bg-green-100' },
    { text: 'Giao hàng tận nơi', backgroundColor: 'bg-yellow-100' }
  ]

  return (
    <CustomSwiper slidesPerView={1} pagination={true}>
      {items.map((item, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <div className={`h-64 flex items-center justify-center text-4xl font-bold ${item.backgroundColor}`}>
            {item.text}
          </div>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  )
}
