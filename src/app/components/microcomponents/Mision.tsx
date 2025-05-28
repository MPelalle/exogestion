import Link from "next/link"


const Mision = () => {
  return (
    <div className="flex flex-col gap-8 px-6 py-12 lg:px-24 bg-[#f5f5f5] shadow-xl"
    style={{ backgroundImage: "url('/images/fondo-home/bg-mision.webp')" }}>
  {/* COMPROMISO */}
  <div
    className="bg-cover bg-center rounded-xl p-10 lg:p-16 flex flex-col justify-center items-center text-center text-white shadow-md"
    style={{ backgroundImage: "url('/images/second-section/bg-mision.webp')" }}
  >
    <h2 className="text-sm tracking-widest font-semibold uppercase mb-2">Nuestro compromiso</h2>
    <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
      Diseño con propósito, resultados reales
    </h1>
    <p className="max-w-2xl text-lg mb-6">
      Creemos en el poder de un diseño web sólido y estratégico para generar experiencias memorables
      y resultados concretos. Nuestra base es la excelencia y la intención detrás de cada detalle.
    </p>
    <Link href='https://wa.me/541159567465?text=%C2%A1Hola!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20poder%20desarrollar%20mi%20aplicaci%C3%B3n%20web%20%F0%9F%92%BB%E2%9C%A8.%20Estoy%20muy%20interesado%20y%20quisiera%20saber%20c%C3%B3mo%20puedo%20comenzar.%20%C2%A1Muchas%20gracias!%20%F0%9F%99%8C
'className="bg-[#00D084] hover:bg-[#0056b3] hover:text-white transition-colors duration-300 text-black px-6 py-3 rounded-lg shadow-lg">
      Contactate
    </Link>
  </div>

  {/* VISIÓN Y MISIÓN */}
  <div className="flex flex-col lg:flex-row gap-6">
    {/* VISIÓN */}
    <div className="flex-1 bg-[#f5f5f5] rounded-xl p-6 lg:p-10 shadow-sm text-[#000000]">
      <p className="text-[#000000] font-medium text-sm mb-2">🌍 Nuestra Visión</p>
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
        Impulsar marcas con presencia digital poderosa
      </h1>
      <p>
        Imaginamos un mundo donde cada marca destaque con una identidad visual única, fuerte y
        efectiva, impulsada por creatividad, estrategia y tecnología de vanguardia.
      </p>
    </div>

    {/* MISIÓN */}
    <div className="flex-1 bg-[#f5f5f5] rounded-xl p-6 lg:p-10 shadow-sm text-[#0A1128]">
      <p className="text-[#000000] font-medium text-sm mb-2">🎯 Nuestra Misión</p>
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
        Transformar ideas en experiencias digitales de alto valor
      </h1>
      <p>
        Nos mueve la pasión por crear soluciones web que conecten, inspiren y funcionen. Trabajamos
        con compromiso, innovación y transparencia para llevar tu negocio al siguiente nivel.
      </p>
    </div>
  </div>
</div>

  )
}

export default Mision