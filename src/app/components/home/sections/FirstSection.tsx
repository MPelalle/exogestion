"use client"
import React, { useEffect, useState } from 'react'
import AutoCarousel from '../../microcomponents/AutoCarousel'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypewriterComponent from 'typewriter-effect';


const FirstSection = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

const [activeTitle, setActiveTitle] = useState(0);

    useEffect(() => {
    let index = 1;

    const interval = setInterval(() => {
      setActiveTitle(index);
      index = index === 3 ? 1 : index + 1;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    return (
    <div className='bg-[#F5F5F5]'>
        <div
  className="w-full h-[900px] sm:h-[900px] lg:h-[1000px] bg-cover bg-right bg-no-repeat relative"
  style={{
    backgroundImage: 'linear-gradient(to top, #f5f5f5 0%, transparent 60%), url("./images/fondo.webp")',
  }}
>
            
            {/* TITULOS */}
            <div className='flex flex-col justify-start pt-[150px] lg:justify-center items-start gap-2 px-5 lg:px-[400px] pt-[50px]'>
                <h1 className={`font-montserrat font-bold text-5xl sm:text-6xl text-[#F5F5F5] transition-all duration-1000 drop-shadow-md ${activeTitle === 1 ? 'neon-green opacity-100' : 'opacity-100'}`}>
        Conectar,
        </h1>
        <h1 className={`font-montserrat font-bold text-5xl sm:text-6xl text-[#F5F5F5] transition-all duration-1000 drop-shadow-md ${activeTitle === 2 ? 'neon-green opacity-100' : 'opacity-100'}`}>
        Crear,
        </h1>
        <h1 className={`font-montserrat font-bold text-5xl sm:text-6xl text-[#F5F5F5] transition-all duration-1000 drop-shadow-md ${activeTitle === 3 ? 'neon-green opacity-100' : 'opacity-100'}`}>
        Conquistar
        </h1>
            </div>

             {/* PÁRRAFO */}
            <div className="flex flex-col items-center pr-[90px] lg:items-start px-5 lg:px-[400px] lg:pr-[800px] mt-5 md:pr-[200px]" data-aos="fade-down">
              <p className='font-montserrat font-light text-1xl text-[#F5F5F5] text-justify drop-shadow-md'>Expertos en Diseño y Desarrollo Web</p>
            </div>

              {/* BOTÓN */}
            <div className='flex justify-start items-center pr-[90px] pl-[20px] mt-[20px] lg:px-[400px] gap-5'>
                <Link 
                data-aos="fade-right"
                href='/servicios' className='
                    bg-[#00D084]
                    text-[#383838]
                    font-montserrat
                    font-bold
                    text-md
                    py-2
                    px-4
                    rounded
                    cursor-pointer
                    transition-all
                    duration-300
                    ease-in-out
                    hover:shadow-[0_0_20px_#00D084]
                    hover:scale-105
                    text-center
                '>Comenzar 📈</Link>
                <a 
                data-aos="fade-left"
                href='https://wa.me/541159567465?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C
'
                target='_blank' className='
                    bg-[#00D084]
                    text-center
                    text-[#383838]
                    font-montserrat
                    font-bold
                    text-md
                    py-2
                    px-4
                    rounded
                    cursor-pointer
                    transition-all
                    duration-300
                    ease-in-out
                    hover:shadow-[0_0_20px_#00D084]
                    hover:scale-105
                '>Whatsapp 📩</a>
            </div>

            {/* CAROUSEL */}
            <div className='m-auto mt-[40px]'>
              <div className='font-montserrat font-bold text-[12px] text-[#F5F5F5] text-center mb-[20px] font-light px-2 drop-shadow-md'>
                <TypewriterComponent
                  options={{
                  strings:['No somos una marca, somos los que marcan la diferencia🚀'],
                  autoStart: true,
                  loop: true,
                  delay: 100
                }}/>
              </div>
                <hr className='w-[80%] border-[#F5F5F5] m-auto mb-[20px] lg:w-[50%]'/>
                <AutoCarousel />
                <hr className='w-[80%] border-[#F5F5F5] m-auto mt-[20px] lg:w-[50%]'/>
            </div>
            
        </div>
    </div>
  )
}

export default FirstSection