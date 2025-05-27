import Image from "next/image"


const ImageCenter = () => {
  return (
    <div className='bg-[#F5F5F5]'>
        <div className='relative bg-[#F5F5F5]'>
            <Image 
            src="/images/second-section/sd-abs.webp" 
            alt="Imagen de fondo"
            height='200'
            width='300'
            className='absolute top-[-120px] left-[45px] w-[300px] h-[200px] rounded shadow-lg shadow-[#000a] border-2 border-[#000a] lg:w-[800px] lg:h-[600px] lg:top-[-250px] lg:left-[370px] md:w-[500px] md:h-[300px] md:top-[-200px] md:left-[140px]' />
        </div>
    </div>
  )
}

export default ImageCenter