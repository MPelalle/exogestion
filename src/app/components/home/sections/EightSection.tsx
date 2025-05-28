'use client'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TypewriterComponent from "typewriter-effect";

const testimonios = [
  {
    nombre: "Moises Pelalle",
    cargo: "Co-founder & CTO de Exogestión",
    imagen: "/images/cards/perfil.webp",
    texto: [
      "Al recibirme de la universidad, descubrí algo alarmante: quienes recién empiezan en el mundo tech enfrentan una muralla, mientras que cientos de empresas y emprendedores pierden oportunidades digitales por no saber por dónde empezar.",
      "Por eso creé Exogestión: un puente entre dos mundos. Conectamos a marcas que necesitan crecer con desarrolladores que buscan experiencia real. Creamos un sistema profesional donde cada proyecto está acompañado por expertos, asegurando resultados de calidad y crecimiento para ambas partes.",
      "Porque creemos que el talento no necesita esperar: necesita una oportunidad bien guiada para explotar."
    ]
  },
  {
    nombre: "Marco Grandon",
    cargo: "Co-founder & CEO de Exogestión",
    imagen: "/images/cards/marco.webp",
    texto: [
      "A lo largo de mi experiencia en empresas exitosas, entendí que el crecimiento profesional muchas veces tiene un techo. Esta realidad me llevó a buscar nuevos desafíos y a capacitarme en programación, un área que no solo abre puertas en el mundo digital, sino que fomenta el pensamiento lógico, la creatividad y el aprendizaje constante.",
      "Así nació Exogestión, una iniciativa enfocada en generar oportunidades laborales para personas que, con un mínimo interés por superarse, pueden transformar su realidad. Todo, bajo un marco de confianza y transparencia como pilares fundamentales."
    ]
  }
]

const Testimonio = ({ nombre , cargo, imagen, texto } : { nombre : string, cargo : string, imagen : string, texto : string[] }) => (
  <div className="w-full max-w-4xl mx-auto my-12 px-4">
    <div className="text-gray-600 space-y-4">
      <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-400 w-6 h-6" />
      {texto.map((parrafo : string, i : number) => (
        <p key={i} className="font-montserrat text-base leading-relaxed text-justify">
          {parrafo}
        </p>
      ))}
    </div>
    <div className="flex items-center mt-6">
      <Image
  src={imagen}
  alt="foto"
  width="64"
  height="64"
  className="rounded-full mr-4"
/>
      <h2 className="text-black text-base font-light">{nombre}, {cargo}</h2>
    </div>
    <hr className="border-gray-300 mt-6" />
  </div>
)

const EightSection = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <section className="py-12 px-4 pt-10 lg:pt-[10px]" id="testimonios" data-aos="fade-up">
      <div className="text-center mb-12">
        <div className="font-montserrat font-light text-3xl text-gray-600">
        <TypewriterComponent
        options={{
          strings: ["Testimonios"],
          autoStart: true,
          loop: true,
          delay: 100
        }}
        />
        </div>
        <hr className="w-24 border-black mx-auto mt-4" />
      </div>
      {testimonios.map((testimonio, idx) => (
        <Testimonio key={idx} {...testimonio} />
      ))}
    </section>
  )
}

export default EightSection
