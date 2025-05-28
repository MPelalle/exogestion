'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const FifthSection = () => {
  
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#050814] via-[#0A0F2C] to-[#050814] flex flex-col justify-center items-center w-full pt-[70px]">
      <hr className="w-[80%] border-[#F5F5F5] m-auto pt-[20px] lg:pl-[400px]" />
      <h1 className="text-[#f5f5f5] font-montserrat font-extrabold text-[34px] md:text-[40px] text-center pt-4 tracking-wide drop-shadow-md transition-all duration-300 ease-in-out  hover:drop-shadow-xl" data-aos="fade-down">
        Comience en minutos — <span className="text-[#297FFF]">Maximice su potencial</span>
      </h1>

      <a 
      href='https://wa.me/541159567465?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C
'className="relative bg-[#297FFF] text-[#F5F5F5] font-montserrat font-bold text-2xl py-3 px-8 rounded-2xl mt-[25px] shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_#297FFF] hover:scale-105 hover:brightness-110 group overflow-hidden" data-aos="fade-up">
        <span className="z-10 relative">🚀 Comenzar ahora</span>
        <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl scale-150 group-hover:opacity-30 transition-all duration-500"></div>
      </a>

      <hr className="w-[80%] border-[#F5F5F5] m-auto mt-[30px]" />
    </div>
  );
};

export default FifthSection;
