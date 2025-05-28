'use client'
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TypewriterComponent from "typewriter-effect";



const ThirdSection = () => {
  
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

    return (
    <div className="bg-[#050814] px-4 lg:px-32 py-12 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/second-section/bg-third-section.webp')" }}>
      <div  className="font-montserrat font-bold text-lg text-[#00D084] mb-10">
        <TypewriterComponent
        options={{
          strings: ['¿QUÉ ES LO QUE HACEMOS?'],
          autoStart: true,
          loop: true,
          delay: 100
        }}/>
      </div>
  <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4 text-right" data-aos="fade-right">Maximizamos el ROL de ingeniería de software</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify text-right" data-aos="fade-right" data-aos-delay="400">
        Tu equipo de ingeniería impulsa el crecimiento. Exogestión se encarga en la producción, solidificación, branding y mantenimiento de software, para que puedas concentrarte en lo importante: 
        <span className="font-bold text-[18px]"> Impulsar la innovación 🚀💡 y el impacto en tu negocio 📈🔥</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-end flex-1">
      <Image
        src="/images/third-section/programadores.webp"
        data-aos="fade-left"
        alt="Programadores"
        width='500'
        height='500'
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row-reverse items-start gap-8 mb-16">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4" data-aos="fade-left">Encuentra soluciones rápidas</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify" data-aos="fade-left" data-aos-delay="400">
        Contactate con nosotros a través de nuestra página o cualquier medio de comunicación, y te responderemos de inmediato. ¿Querés algo aún más rápido? Probá nuestra app de cotización y tiempos estimados, totalmente personalizada para vos. 
        <span className="font-bold text-[18px]"> ⚡🚀 La rapidez y eficiencia son nuestra prioridad 💼 ✅</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-start flex-1">
      <Image
        src="/images/third-section/codigo.webp"
        data-aos="fade-right"
        alt="Programadores"
        width='500'
        height='500'
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4 text-right"  data-aos="fade-right">Nuestra promesa, tu tranquilidad</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify text-right"  data-aos="fade-right" data-aos-delay="400">
        Nosotros ponemos un precio y un plazo, LO CUMPLIMOS. En caso de excedernos aunque sea un día, el resto de la app es COMPLETAMENTE GRATIS. 
        <span className="font-bold text-[18px]"> Nuestra palabra es nuestra garantía 💼🤝✅</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-end flex-1">
      <Image
        src="/images/third-section/deal.webp"
        data-aos="fade-left"
        alt="Programadores"
        width='500'
        height='500'
        className="w-[300px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
    <div className="flex-1">
      <h3 className="font-montserrat font-bold text-2xl text-[#F5F5F5] mb-4" data-aos="fade-right">Trabajá sin interrupciones</h3>
      <p className="font-montserrat text-base text-[#F5F5F5] font-light text-justify" data-aos="fade-right" data-aos-delay="400">
        Gestionamos la facturación y el cumplimiento normativo, 
        <span className="font-bold text-[18px]"> para que todo funcione a la perfección mientras su equipo se centra en obtener resultados 📈📊</span>.
      </p>
    </div>
    <div className="flex justify-center lg:justify-start flex-1">
      <Image
        src="/images/third-section/hire.webp"
        data-aos="fade-left"
        alt="Programadores"
        width='700'
        height='500'
        className="w-[500px] lg:w-[500px] shadow-lg rounded"
      />
    </div>
  </div>
</div>
    )
}

export default ThirdSection