import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingUsd, faChartPie, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";


const FourthSection = () => {
  return (
    <div className="bg-[#050814] flex justify-around items-center p-8 w-full flex flex-col lg:flex-row lg:gap-10 md:px-10">
        <div className="border-1 border-[#F5F5F5] p-4">
            <FontAwesomeIcon icon={faHandHoldingUsd} className='text-[#f5f5f5] w-[30px] h-[30px] cursor-pointer border-1 border-[#4d4d4d] p-2 w-[60px] h-[60px]' />
            <h1 className="text-[#f5f5f5] font-montserrat font-light text-2xl pt-2">Pagos</h1>
            <p className="text-[#f5f5f5] font-montserrat font-light text-1xl text-justify">Planes y tarifas comprensivas de nuestros servicios. Planeamos ser la solucion mas viable para nuestros clientes</p>
        </div>
        <div className="border-1 border-[#F5F5F5] p-4">
            <FontAwesomeIcon icon={faChartPie} className='text-[#f5f5f5] w-[30px] h-[30px] cursor-pointer border-1 border-[#4d4d4d] p-2 w-[60px] h-[60px]' />
            <h1 className="text-[#f5f5f5] font-montserrat font-light text-2xl pt-2">Performance</h1>
            <p className="text-[#f5f5f5] font-montserrat font-light text-1xl text-justify">Supervise, establezca objetivos de mejora y administre los resultados del trabajo, todo respaldado por el soporte de los expertos de Exogestión</p>
        </div>
        <div className="border-1 border-[#F5F5F5] p-4">
            <FontAwesomeIcon icon={faProjectDiagram} className='text-[#f5f5f5] w-[30px] h-[30px] cursor-pointer border-1 border-[#4d4d4d] p-2 w-[60px] h-[60px]' />
            <h1 className="text-[#f5f5f5] font-montserrat font-light text-2xl pt-2">Reportes</h1>
            <p className="text-[#f5f5f5] font-montserrat font-light text-1xl text-justify">Sea participe en todo momento de la produccion de su codigo a traves de nuestra interfaz de reportes</p>
        </div>
        
    </div>
  )
}

export default FourthSection