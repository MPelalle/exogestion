'use client'
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const NinenthSection = () => {
  
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <div
  className="w-full min-h-[600px] bg-cover bg-center flex flex-col justify-center items-center gap-4 px-6 py-13"
  style={{ backgroundImage: "url('./images/syrah/syrah-fondo.webp')" }}
>
  <Image
    src="/images/syrah/syrah-logo.webp"
    alt="Syrah Logo"
    height='300'
    width='300'
    className="mb-4 drop-shadow-lg"
    data-aos="fade-down"
  />
  <h1 className="font-montserrat font-extrabold text-4xl text-white drop-shadow-md text-center" data-aos="fade-right">
    ¿Ya conocés <span className="text-yellow-400" data-aos="fade-left">Syrah</span>?
  </h1>
  <h2 className="font-montserrat font-semibold text-sm text-yellow-300 text-center uppercase tracking-widest mb-6" data-aos="fade-up">
    De los creadores de Exogestión, nace Syrah
  </h2>
  <p className="font-montserrat font-light text-lg text-white max-w-4xl text-center leading-relaxed px-4" data-aos="fade-left">
    Syrah es el sistema de gestión gastronómica más completo y fácil de usar que vas a encontrar. Está diseñado para optimizar cada aspecto de tu negocio: desde la administración de mesas y pedidos, hasta el control de stock y la facturación.
  </p>
  <p className="font-montserrat font-light text-lg text-white max-w-4xl text-center leading-relaxed px-4" data-aos="fade-right">
    Con Syrah, vas a ahorrar tiempo, evitar errores y mejorar la experiencia de tus clientes. Todo desde una plataforma intuitiva, accesible desde cualquier dispositivo, respaldada por un equipo comprometido con el éxito de tu restaurante.
  </p>
  <h2 className="font-montserrat font-semibold text-lg text-yellow-400 mt-6 max-w-4xl text-center px-4" data-aos="fade-up">
    Si buscás llevar tu negocio gastronómico al próximo nivel, Syrah es la herramienta que necesitás.
  </h2>
  <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black font-montserrat font-bold text-2xl py-3 px-8 rounded-full mt-8 shadow-lg" data-aos="fade-up">
    Conocé Syrah
  </button>
    </div>
  )
}

export default NinenthSection