'use client'
import { faAtom, faChartLine, faCodeBranch, faHandSpock, faLock, faMobile, faRetweet, faSearch, faSitemap, faTools, faUniversalAccess, faWalking, faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react'

const InfoCarousel = () => {
  return (
    <div>
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
   autoplay={{ delay: 1000, disableOnInteraction: false }}
    speed={7000}
    allowTouchMove={false}
    freeMode={true}
    loop={true}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 }
  }}
  className="px-4 mb-8 md:px-12"
>
  {[{
    icon: faWrench,
    title: "Diseño UX",
    desc: "Diseño centrado en el usuario, pensado para que la navegación sea intuitiva, rápida y agradable."
  }, {
    icon: faWalking,
    title: "Diseño UI ",
    desc: "Interfaces limpias, modernas y atractivas visualmente. Uso correcto del color, tipografías, jerarquía visual y componentes reutilizables."
  }, {
    icon: faTools,
    title: "Performance y Optimización",
    desc: "La app carga rápido, con imágenes comprimidas, lazy loading y buenas prácticas que mejoran la experiencia en dispositivos lentos o conexiones inestables."
  }, {
    icon: faMobile,
    title: "Responsive Design",
    desc: "Total adaptabilidad a cualquier dispositivo: celular, tablet o desktop."
  }, {
    icon: faRetweet,
    title: "Componentes Reutilizables",
    desc: "Interfaces limpias, modernas y atractivas visualmente. Uso correcto del color, tipografías, jerarquía visual y componentes reutilizables."
  },{
    icon: faUniversalAccess,
    title: "Accesibilidad (a11y)",
    desc: "Inclusión de buenas prácticas para que personas con discapacidades también puedan usar la app (uso correcto de etiquetas, contraste, navegación por teclado, etc.)."
  },{
    icon: faSearch,
    title: "SEO On-Page",
    desc: "Optimización del contenido, estructura y metadatos para que la app pueda ser encontrada fácilmente en Google y otros buscadores (solo si aplica en sitios públicos o landing pages)."
  },{
    icon: faSitemap,
    title: "Arquitectura de la Información",
    desc: "Organización lógica de los contenidos y navegación clara para que el usuario siempre sepa dónde está y cómo volver."
  },{
    icon: faLock,
    title: "Buenas Prácticas de Seguridad",
    desc: "Protección de datos, formularios validados, manejo seguro de contraseñas y tokens, especialmente si se trabaja con backend."
  },{
    icon: faHandSpock,
    title: "Pruebas de Usabilidad",
    desc: "Revisión constante del comportamiento del usuario para mejorar la experiencia según cómo interactúan con la app."
  },{
    icon: faAtom,
    title: "Atomic Design",
    desc: "Desarrollo de interfaces basado en una metodología de construcción desde lo más pequeño (botones) a lo más grande (páginas), manteniendo orden y coherencia."
  },{
    icon: faChartLine,
    title: "Analytics Ready",
    desc: "Preparada para integrarse con herramientas como Google Analytics, para medir el comportamiento de los usuarios y mejorar la toma de decisiones."
  }
 ].map(({ icon, title, desc }, i) => (
    <SwiperSlide key={i}>
      <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-80">
        <div className="bg-[#0A1128] text-white rounded-full p-4 mb-4 shadow-md w-[70px] h-[70px] flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="w-8 h-8" />
        </div>
        <h2 className="font-montserrat font-semibold text-xl text-[#0A1128] mb-2">{title}</h2>
        <p className="font-montserrat font-light text-gray-700 text-base leading-relaxed">{desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  )
}

export default InfoCarousel




