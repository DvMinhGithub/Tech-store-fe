import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import './Carousel.css'

function CustomCarousel({
  children,
  className,
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = false,
  pagination = false,
  autoplay = true,
  autoplayDelay = 5000,
  loop = true,
  breakpoints = {}
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false
            }
          : false
      }
      loop={loop}
      breakpoints={breakpoints}
      className={className}>
      {children}
    </Swiper>
  )
}

export default CustomCarousel
