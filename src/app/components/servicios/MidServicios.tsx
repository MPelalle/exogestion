'use client'
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MidServicios = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center gap-4"
    data-aos="fade-right">
        <p className="text-center font-montserrat font-semibold text-2xl text-[#000000]">Si no te logras decidir, en este link podes conocer mas!</p>
        <Link href="/servicios" className="bg-[#00D084] hover:bg-[#0056b3] hover:text-white transition-colors duration-300 text-black px-6 py-3 rounded-lg shadow-lg">Conoce mas de nuestros servicios</Link>
    </div>
  )
}

export default MidServicios