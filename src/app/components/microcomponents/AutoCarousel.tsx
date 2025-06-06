
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const slides = [
  { image: '/images/swiper/1.webp', title: 'Base de datos optimizada' },
  { image: '/images/swiper/2.webp', title: 'Gestión eficiente de enlaces' },
  { image: '/images/swiper/3.webp', title: 'Diseño totalmente adaptable' },
  { image: '/images/swiper/4.webp', title: 'Experiencia de usuario impecable' },
  { image: '/images/swiper/5.webp', title: 'SEO técnico de alto nivel' },
  { image: '/images/swiper/6.webp', title: 'Mayor visibilidad en buscadores' },
  { image: '/images/swiper/7.webp', title: 'Arquitectura de proyecto mejorada' },
  { image: '/images/swiper/8.webp', title: 'Compatibilidad con SQL, MongoDB y PostgreSQL' },
  { image: '/images/swiper/9.webp', title: 'Diseño a medida y personalizado' }
];


export default function AutoCarousel() {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

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
      {slides.map(({ image, title }, index) => (
  <SwiperSlide key={index}>
    <div className="group relative flex flex-col items-center justify-center gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-2xl max-w-[200px] mx-auto" data-aos="fade">
      <div className="w-[40px] h-[40px] overflow-hidden">
        <Image
          src={image}
          alt={`Imagen ${index}`}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-center text-sm font-semibold font-montserrat text-[#f5f5f5] px-2">
        {title}
      </p>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
}
