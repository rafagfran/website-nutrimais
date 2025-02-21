import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Products() {
  return (
    <div className='space-y-between-elements'>
      <div className='text-center'>
        <p>Campeões em vendas</p>
        <h2 className='font-medium text-3xl'>Nossos Produtos</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <SwiperSlide>
            <div>
              <img src="horse.webp" alt="" />
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  )
}