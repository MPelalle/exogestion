'use client';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt'

const CloserCard = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareColor="#FF6B00"
      glarePosition="all"
      glareMaxOpacity={0.1}
      scale={1.02}
      transitionSpeed={250}
      className="w-fit mx-auto"
    >
      <div className="w-[350px] h-[200px] relative overflow-hidden rounded-2xl shadow-lg shadow-[#FF6B00] font-montserrat">
        {/* Imagen de fondo */}
        <Image 
          src="/images/cards/closer.webp"
          alt="Closer"
          fill
          className="w-full h-full object-cover"
        />

        {/* Degradado negro horizontal */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10">
          <div>
            <h1 className="text-lg font-bold leading-snug">Vendé. Cerrá. Crecé.</h1>
            <hr className="border-t border-white/30 my-2 w-3/4" />
          </div>
          <p className="text-sm font-light leading-tight">
            ¿Tenés talento para vender y cerrar tratos? Sumate como closer y formá parte de un equipo que premia resultados reales. ¡Mostranos tu potencial!
          </p>
          <Link href='/applicant-closer'
          className="mt-2 self-start bg-white text-[#000000] cursor-pointer font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            Postulate ya mismo
          </Link>
        </div>
      </div>
    </Tilt>
  )
}

export default CloserCard
