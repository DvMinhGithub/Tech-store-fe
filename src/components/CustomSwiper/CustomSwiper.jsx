import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import './CustomSwiper.css'

function CustomSwiper({
  children,
  className,
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = false,
  pagination = false
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={{ clickable: pagination }}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      className={className}>
      {children}
    </Swiper>
  )
}

export default CustomSwiper
