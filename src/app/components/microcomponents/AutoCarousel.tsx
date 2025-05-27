
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const images = [
  '/images/swiper/1.webp',
  '/images/swiper/2.webp',
  '/images/swiper/3.webp',
  '/images/swiper/4.webp',
  '/images/swiper/5.webp',
  '/images/swiper/6.webp',
  '/images/swiper/7.webp',
  '/images/swiper/8.webp',
  '/images/swiper/9.webp'
];

export default function AutoCarousel() {
  return (
    <div className="w-full lg:w-1/2 lg:mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={7000}
        allowTouchMove={false}
        freeMode={true}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src}
              alt={`Imagen ${index}`}
              width={50}
              height={50}
              className="w-[50px] h-[50px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
