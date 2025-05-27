import Link from "next/link"
import TenSection from "../components/home/sections/TenSection"
import AutoCarousel from "../components/microcomponents/AutoCarousel"
import InfoCarousel from "../components/microcomponents/InfoCarousel"
import { ProcessWork } from "../components/microcomponents/servicecards/ProcessWork"
import Services from "../components/microcomponents/servicecards/Services"


const page = () => {
  return (
    <div className="bg-[#050814]">
        <div className="flex flex-col items-center justify-center pt-[100px] px-4 md:px-0"
        style={{ backgroundImage: "url('/images/second-section/bg-services.webp')" }}>
  <h1 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#f5f5f5] text-center mb-6 drop-shadow-md">
    Soluciones modernas para tu proyecto digital
  </h1>
  <p className="font-montserrat font-light text-base md:text-lg text-[#f5f5f5] text-center max-w-3xl leading-relaxed drop-shadow-sm mb-12">
    En <span className="font-semibold">Exogestión</span>, Diseñamos y desarrollamos sitios web de alto impacto visual que convierten visitantes en clientes
  </p>
  <div className="w-full max-w-8xl mb-12 flex flex-col items-center">
    <p className="font-montserrat font-medium text-[16px] md:text-[15px] text-[#0A1128] text-center max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm shadow-md mb-8 rounded-xl px-6 py-4">
  Estos son los planes preestablecidos. Pero si estás buscando algo a medida, no dudes en contactarnos. 🚀
</p>

<Link href='https://wa.me/541159567465?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C
' className="font-montserrat font-semibold text-[16px] md:text-[15px] text-white text-center max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-[#007BFF] to-[#00C6FF] rounded-xl px-6 py-3 shadow-[0_6px_20px_rgba(0,123,255,0.6)] hover:shadow-[0_8px_26px_rgba(0,123,255,0.7)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
  Hablemos de tu proyecto <span>→</span>
</Link>
    {/* Cards de servicios */}
    <div>
      <Services />
    </div>
  </div>
  <ProcessWork />
</div>
        <div >
          <InfoCarousel />
          <AutoCarousel />
          <TenSection />
        </div>
    </div>
  )
}

export default page