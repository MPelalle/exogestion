import Image from "next/image"


const ThirdSection = () => {
    return (
    <div className="bg-[#050814] px-4 lg:px-32 py-12 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/second-section/bg-third-section.webp')" }}>
  <h2 className="font-montserrat font-bold text-lg text-[#00D084] mb-10">¿QUÉ ES LO QUE HACEMOS?</h2>
  <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4">Maximizamos el ROL de ingeniería de software</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify">
        Tu equipo de ingeniería impulsa el crecimiento. Exogestión se encarga en la producción, solidificación, branding y mantenimiento de software, para que puedas concentrarte en lo importante: 
        <span className="font-bold text-[18px]"> Impulsar la innovación 🚀💡 y el impacto en tu negocio 📈🔥</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-end flex-1">
      <Image
        src="/images/third-section/programadores.webp"
        alt="Programadores"
        width='500'
        height='500'
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row-reverse items-start gap-8 mb-16">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4">Encuentra soluciones rápidas</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify">
        Contactate con nosotros a través de nuestra página o cualquier medio de comunicación, y te responderemos de inmediato. ¿Querés algo aún más rápido? Probá nuestra app de cotización y tiempos estimados, totalmente personalizada para vos. 
        <span className="font-bold text-[18px]"> ⚡🚀 La rapidez y eficiencia son nuestra prioridad 💼 ✅</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-start flex-1">
      <Image
        src="/images/third-section/codigo.webp"
        alt="Programadores"
        width='500'
        height='500'
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4">Nuestra promesa, tu tranquilidad</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify">
        Nosotros ponemos un precio y un plazo, LO CUMPLIMOS. En caso de excedernos aunque sea un día, el resto de la app es COMPLETAMENTE GRATIS. 
        <span className="font-bold text-[18px]"> Nuestra palabra es nuestra garantía 💼🤝✅</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-end flex-1">
      <Image
        src="/images/third-section/deal.webp"
        alt="Programadores"
        width='500'
        height='500'
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4">Trabajá sin interrupciones</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify">
        Gestionamos la facturación y el cumplimiento normativo, 
        <span className="font-bold text-[18px]"> para que todo funcione a la perfección mientras su equipo se centra en obtener resultados 📈📊</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-start flex-1">
      <image
        href="/images/third-section/hire.webp"
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>
</div>
    )
}

export default ThirdSection