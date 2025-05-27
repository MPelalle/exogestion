import CloserCard from "../../microcomponents/job-cards/CloserCard"
import ProgramadorCard from "../../microcomponents/job-cards/ProgramadorCard"


const SixthSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#050814] pt-[50px] pb-[70px] shadow-lg">
        <div className="flex flex-col justify-center items-center lg:items-start gap-5 mb-[50px] lg:pl-[400px]">
            <h1 className="font-montserrat font-bold text-3xl text-[#F5F5F5]">¡Te invitamos a ser parte!</h1>
            <h2 className="font-montserrat font-light text-1xl text-[#F5F5F5] text-center lg:text-justify lg:pr-[400px]">En Exogestión, apostamos por el talento que quiere crecer. <span className="font-bold">Si sos desarrollador o closer de ventas, este es tu lugar. ¡Postulate y empezá tu camino con nosotros!</span></h2>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <ProgramadorCard />
            <CloserCard />
        </div>
    </div>
  )
}

export default SixthSection