import Link from "next/link"
import TenSection from "../components/home/sections/TenSection"
import AutoCarousel from "../components/microcomponents/AutoCarousel"
import InfoCarousel from "../components/microcomponents/InfoCarousel"
import { ProcessWork } from "../components/microcomponents/servicecards/ProcessWork"
import Services from "../components/microcomponents/servicecards/Services"

const page = () => {
  return (
    <div className="bg-[#050814] text-white">
      {/* HERO */}
      <div
        className="flex flex-col items-center justify-center pt-[100px] px-4 md:px-0 bg-cover bg-center relative transition-all duration-500"
        style={{ backgroundImage: "url('/images/second-section/bg-services.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
        
        <div className="relative z-10 max-w-4xl text-center animate-fade-in">
          <h1 className="font-montserrat font-extrabold text-3xl lg:text-4xl mb-6 drop-shadow-md transition duration-700 hover:scale-105">
            Soluciones modernas para tu proyecto digital
          </h1>
          <p className="font-light text-base md:text-lg text-[#f5f5f5] max-w-3xl mx-auto leading-relaxed drop-shadow-sm mb-12 transition duration-700 hover:scale-[1.01]">
            En <span className="font-semibold text-white">Exogestión</span>, diseñamos y desarrollamos sitios web de alto impacto visual que convierten visitantes en clientes.
          </p>
        </div>

        {/* CTA + Services */}
        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center transition-all duration-500">
          <div className="bg-white/80 text-[#0A1128] backdrop-blur-sm shadow-lg rounded-xl px-6 py-4 mb-8 text-center max-w-3xl mx-auto border border-white/30 transition hover:scale-105 hover:shadow-xl">
            <p className="font-montserrat font-medium text-[16px] md:text-[15px]">
              Estos son los planes preestablecidos. Pero si estás buscando algo a medida, no dudes en contactarnos. 🚀
            </p>
          </div>

          <Link
            href="https://wa.me/541159567465?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C"
            target="_blank"
            className="bg-gradient-to-r from-[#007BFF] to-[#00C6FF] rounded-xl px-6 py-3 text-white font-semibold text-[16px] md:text-[15px] shadow-[0_6px_20px_rgba(0,123,255,0.6)] hover:shadow-[0_8px_26px_rgba(0,123,255,0.7)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hablemos de tu proyecto <span>→</span>
          </Link>

          <div className="mt-12 w-full">
            <Services />
          </div>
        </div>

        <div className="mt-16 w-full flex items-center justify-center">
          <ProcessWork />
        </div>
      </div>

      {/* CAROUSELS & FINAL SECTION */}
      <div className="px-4 mt-16 space-y-24 pb-12">
        <InfoCarousel />
        <TenSection />
      </div>
    </div>
  )
}

export default page
