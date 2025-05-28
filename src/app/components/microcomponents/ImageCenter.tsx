'use client'
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ImageCenter = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className='bg-[#F5F5F5]'>
  <div className='relative bg-[#F5F5F5]'>
    <Image 
      src="/images/second-section/sd-abs.webp" 
      alt="Imagen de fondo" 
      data-aos="fade-up"
      height={1200}
      width={1200}
      className='
        absolute top-[-120px] left-1/2 transform -translate-x-1/2
        w-[300px] h-[200px] rounded shadow-lg shadow-[#000a] border-2 border-[#000a] 
        md:w-[500px] md:h-[300px] md:top-[-200px]
        lg:w-[800px] lg:h-[600px] lg:top-[-250px]
      ' 
    />
  </div>
</div>
  )
}

export default ImageCenter