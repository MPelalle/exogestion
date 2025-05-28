'use client';
import { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  label: string;
  option: string;
  onHover: (option: string) => void;
  onLeave: () => void;
  onClick?: () => void;
};

const AnimatedButton = ({ label, option, onHover, onLeave, onClick }: ButtonProps) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const moveX = ((offsetX / offsetWidth) - 0.5) * 10;
    const moveY = ((offsetY / offsetHeight) - 0.5) * 10;
    setTransform(`rotateX(${-moveY}deg) rotateY(${moveX}deg)`);
  };

  const resetTransform = () => setTransform('');

  return (
    <button
      aria-label={label}
      role="button"
      onClick={onClick}
      onMouseEnter={() => onHover(option)}
      onMouseLeave={() => {
        onLeave();
        resetTransform();
      }}
      onMouseMove={handleMouseMove}
      style={{ transform }}
      className="bg-[#00D084] hover:bg-[#00b674] text-[#2F2F2F] shadow-[0_4px_20px_#00D084] px-6 py-4 rounded-2xl text-lg font-semibold font-montserrat transition-transform duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
    >
      {label} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </button>
  );
};

const Page = () => {
  const [bgClass, setBgClass] = useState('');
  const router = useRouter();

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

  const handleMouseLeave = () => setBgClass('');

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out transform scale-110 z-0"
        style={{
          backgroundImage: bgClass,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      <main className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4">
        <div className="mt-[120px] text-center space-y-10">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-white drop-shadow">
            ¿Cuál es tu objetivo con Exogestión?
          </h1>

          <div className="flex flex-col items-center gap-6">
            <AnimatedButton
              label="Quiero mi desarrollo web"
              option="web"
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
              onClick={() =>
                window.open(
                  'https://wa.me/541159567465?text=¡Hola! Me gustaría recibir más información para poder desarrollar mi aplicación web 💻✨. Estoy muy interesado y quisiera saber cómo puedo comenzar. ¡Muchas gracias! 🙌',
                  '_blank'
                )
              }
            />
            <p className="text-white text-sm font-light font-montserrat max-w-md text-center">
              Contactate con nosotros para conocer a un excepcional grupo de desarrolladores que te ayudarán a escalar tu negocio en línea.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <AnimatedButton
              label="Postularme como programador"
              option="programador"
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
              onClick={() => router.push('/applicant-programmer')}
            />
            <AnimatedButton
              label="Postularme como closer de ventas"
              option="ventas"
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
              onClick={() => router.push('/applicant-closer')}
            />
          </div>

          <p className="text-white text-sm font-light font-montserrat">
            Sé parte de nuestro equipo de talentos
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
