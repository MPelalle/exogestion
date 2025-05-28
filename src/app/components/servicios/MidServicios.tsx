import Link from "next/link"


const MidServicios = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-center font-montserrat font-semibold text-2xl text-[#000000]">Si no te logras decidir, en este link podes conocer mas!</p>
        <Link href="/servicios" className="bg-[#00D084] hover:bg-[#0056b3] hover:text-white transition-colors duration-300 text-black px-6 py-3 rounded-lg shadow-lg">Conoce mas de nuestros servicios</Link>
    </div>
  )
}

export default MidServicios