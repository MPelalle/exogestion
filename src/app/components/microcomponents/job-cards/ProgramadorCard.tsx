'use client';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

export default function Card() {
  return (
    <Tilt 
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#297FFF"
      glarePosition="all"
      scale={1.05}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="w-[350px] h-[200px] m-auto font-montserrat"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-[#297FFF] w-full h-full">
        <Image 
          src="/images/cards/programador.webp"
          alt="Programador"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-10">
          <div>
            <h1 className="text-lg font-bold leading-snug">Programá. Crecé. Postulate.</h1>
            <hr className="border-t border-white/30 my-2 w-3/4" />
          </div>
          <p className="text-sm font-light leading-tight">
            ¿Sos dev y buscás oportunidades reales de trabajo? Postulate y accedé a proyectos innovadores, equipos colaborativos y crecimiento profesional. ¡Es tu momento!
          </p>
          <Link className="mt-2 self-start bg-white text-[#000000] cursor-pointer font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            href="/applicant-programmer"
            >
              Postulate ya mismo
          </Link>

        </div>
      </div>
    </Tilt>
  );
}
