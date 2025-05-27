'use client';
import { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type ButtonProps = {
  label: string;
  option: string;
  onHover: (option: string) => void;
  onLeave: () => void;
};

const AnimatedButton = ({ label, option, onHover, onLeave }: ButtonProps) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = e.currentTarget;

    const moveX = ((offsetX / offsetWidth) - 0.5) * 10;
    const moveY = ((offsetY / offsetHeight) - 0.5) * 10;

    setTransform(`rotateX(${-moveY}deg) rotateY(${moveX}deg)`);
  };

  const resetTransform = () => {
    setTransform('');
  };

  return (
    <button
      onMouseEnter={() => onHover(option)}
      onMouseLeave={() => {
        onLeave();
        resetTransform();
      }}
      onMouseMove={handleMouseMove}
      style={{ transform }}
      className="bg-[#00D084] cursor-pointer text-[#2F2F2F] shadow-[0_4px_20px_#00D084] px-6 py-4 rounded-xl text-lg font-semibold font-montserrat transition-transform duration-200 ease-out hover:scale-105"
    >
      {label} <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};


const Page = () => {
  const [bgClass, setBgClass] = useState('');

  const handleMouseEnter = (option: string) => {
    switch (option) {
      case 'web':
        setBgClass('url("./images/fondo-parallax/fondo-venta.webp")');
        break;
      case 'programador':
        setBgClass('url("./images/cards/programador.webp")');
        break;
      case 'ventas':
        setBgClass('url("./images/cards/closer.webp")');
        break;
      default:
        setBgClass('');
    }
  };

  const handleMouseLeave = () => {
    setBgClass('');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
  {/* Fondo dinámico con parallax */}
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform scale-110 z-0 ${bgClass}`}
    style={{
      backgroundImage: bgClass,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  ></div>

  {/* Overlay oscuro encima del fondo */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  {/* Contenido principal */}
  <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4">
    <div className="mt-[120px] text-center">
      <h1 className="font-montserrat font-bold text-3xl text-white drop-shadow mb-10">
        ¿Cuál es tu objetivo con Exogestión?
      </h1>

      <div className="flex flex-col items-center gap-6 mb-10">
            <Link href="https://wa.me/541159567465?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C
https://wa.me/5491123456789?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C
">
            <AnimatedButton
            label="Quiero mi desarrollo web"
            option="web"
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
          />
        </Link>
        <p className="text-white drop-shadow text-sm font-light font-montserrat max-w-md text-center">
          Contactate con nosotros para conocer a un excepcional grupo de desarrolladores que te ayudarán a escalar tu negocio en línea.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-4">
        <Link href="/applicant-programmer">
          <AnimatedButton
            label="Postularme como programador"
            option="programador"
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
          />
        </Link>
        <Link href="/applicant-closer">
          <AnimatedButton
            label="Postularme como closer de ventas"
            option="ventas"
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
          />
        </Link>
      </div>

      <p className="text-white drop-shadow text-sm font-light font-montserrat mb-10">
        Sé parte de nuestro equipo de talentos
      </p>
    </div>
  </div>
</div>
  );
};

export default Page;
