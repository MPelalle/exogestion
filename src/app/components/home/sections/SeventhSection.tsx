import { faProjectDiagram, faFileInvoiceDollar, faCode, faCodeBranch, faC } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InfoCarousel from "../../microcomponents/InfoCarousel"


const SeventhSection = () => {
  return (
    <div className="w-full h-[750px] md:bg-repeat md:h-[800px] lg:h-[700px] bg-center "
    style={{ backgroundImage: "url('./images/fondo-home/fondo-seventh-section.webp')" }}>
        <div className="flex flex-col justify-center items-center lg:items-start gap-5 mb-8 ">
            <h1 className="font-montserrat font-extrabold text-3xl text-[#0A1128] text-center pt-8 mb-4 drop-shadow-md lg:pl-[400px]">
                💡 Calidad Profesional en Cada Detalle
            </h1>
            <p className="font-montserrat font-light text-lg text-[#0A1128] text-center px-6 leading-relaxed drop-shadow-sm max-w-xl mx-auto">
                Desde interfaces atractivas hasta rendimiento optimizado, cada parte de la app está pensada estratégicamente para brindar una experiencia rápida, intuitiva y accesible. Porque no se trata solo de diseñar una app, sino de crear algo que la gente quiera usar.
            </p>
        </div>
        <div>
          <InfoCarousel />
        </div>

    </div>
  )
}

export default SeventhSection