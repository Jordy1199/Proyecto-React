import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Gallery.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  return (
    <section className="gallery section gallery-section" data-aos="zoom-in">
      <h3 className="gallery__title">Galería</h3>
      <p className="gallery__description">Espacios accesibles del campus.</p>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="gallery__swiper"
      >
        <SwiperSlide>
          <img src="/images/im1.jpg" alt="Imagen 1" className="gallery-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/im2.jpg" alt="Imagen 2" className="gallery-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/im3.jpg" alt="Imagen 3" className="gallery-img" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;