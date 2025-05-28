'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SecondSection = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <div className="mt-[120px] bg-[#F5F5F5] mb-[50px] lg:mt-[400px]">
        <div className=" flex flex-col justify-center items-center gap-12 lg:flex-row">
            <hr className="mb-[20px] w-[80%] m-auto border-[#050814] border-1"/>
            <h1 className="font-montserrat font-bold text-3xl text-center drop-shadow-md" data-aos="fade-right"> <span className="inline-block first-letter:text-[#003366] text-[#0A1128]">CREATIVIDAD</span></h1>
            <h1 className="font-montserrat font-bold text-3xl text-center drop-shadow-md" data-aos="fade-down"> <span className="inline-block first-letter:text-[#003366] text-[#0A1128]">COMUNICACIÓN</span></h1>
            <h1 className="font-montserrat font-bold text-3xl text-center drop-shadow-md" data-aos="fade-left"> <span className="inline-block first-letter:text-[#003366] text-[#0A1128]">COMPROMISO</span></h1>
            <hr className="mt-[20px] w-[80%] m-auto border-[#050814] border-1"/>
        </div>
        <p className="font-montserrat font-semibold text-2xl text-center mt-[50px] mb-[-50px] text-black"
        data-aos="fade-up">¿Ya viste todo lo que tenemos para ofrecerte?</p>
    </div>
  )
}

export default SecondSection