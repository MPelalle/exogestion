'use client'
import { faCheck, faGem, faGlobe, faInfinity, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Services = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


    const Servicios = [
        {
            title: "Landing Page",
            icon: faGlobe,
            price: "$180.000.- ARS - pago único",
            duracion: "De por vida",
            garantia:"Si no cumplimos con el plazo, el 50% restante lo devolvemos.",
            subtitle: "Ideal para comenzar",
            includes:[
                "Diseño profesional y responsive",
                "Backend propio con almacenamiento de formularios y contacto",
                "Optimización SEO básica",
                "Integración con WhatsApp, mail y redes sociales",
                "Formulario de contacto funcional",
                "Diseño UI/UX profesional"
        ],
            tech: "🔧 Tecnologías utilizadas: React, Tailwind, Node.js/Express (o Firebase), MongoDB si hace falta.",
            link: 'https://acortar.link/xWWehF'
        },
        {
            title: "Tienda Online",
            icon: faShoppingCart,
            price: "$300.000.- ARS - pago único",
            bonus: "MOST WANTED",
            garantia:"Si no cumplimos con el plazo, el 50% restante lo devolvemos.",
            subtitle: "Web app funcional + expansión digital",
            includes:[
                "Landing page + Web App (dashboard / panel / sistema)",
                "Backend completo (autenticación, CRUD, lógica de negocio)",
                "Diseño UX/UI personalizado",
                "Integración con múltiples medios de pago",
                "SEO on-page intermedio",
                "Formularios avanzados y validaciones",
            ],
            tech: "🔧 Stack flexible",
            link: 'https://acortar.link/au2uAl'
        },
        {
            title: "Pagina Dinamica",
            icon: faGem,
            price: "$500.000.- ARS - pago único",
            garantia:"Si no cumplimos con el plazo, el 50% restante lo devolvemos.",
            subtitle: "Plataforma completa y escalable",
            includes:[
                "Todo lo del Plan Codec",
                "Arquitectura escalable para múltiples usuarios",
                "Integraciones empresariales (ERP, CRM, APIs específicas)",
                "Diseño y prototipado con Figma antes del desarrollo",
                "SEO avanzado + métricas de performance",
                "Acompañamiento técnico + soporte post-lanzamiento",
                "Preparado para futura expansión mobile (PWA o app nativa)"
            ],
            tech: "🔧 Stack flexible",
            link:'https://acortar.link/0l67Nc'
        }
    ]

    return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-12">
    {Servicios.map((servicio, i) => (
    <div
        data-aos="fade-left"
        key={i}
        className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
        style={{
        boxShadow: '0 1px 10px #00D084',
        }}
    >
        <p className="text-center bg-[#00D084] text-black font-semibold text-sm mb-4 shadow-md">{servicio.bonus}</p>
        <p className="text-red-600 text-sm mb-4 m-auto">{servicio.garantia}</p>
        <FontAwesomeIcon icon={servicio.icon} className="text-[#00D084] text-4xl mb-4 drop-shadow-md"/>
        <h1 className="text-[#0A1128] text-2xl font-extrabold mb-1 text-center">{servicio.title}</h1>
        <h1 className="text-center"><span className="text-[#000000] text-md">{servicio.price}</span></h1>
        
        <p className="text-[#000000] drop-shadow-md text-center text-sm py-2">
            <FontAwesomeIcon icon={faInfinity} className="text-[#000000] text-[16px] drop-shadow-md"/>
            De por vida
        </p>
        <h2 className="text-[#0A1128] text-base font-semibold mb-4">{servicio.subtitle}</h2>

        <ul className="list-disc list-inside text-gray-700 text-sm mb-4 space-y-1">
        {servicio.includes.map((item, j) => (
            <li key={j} className="list-none"><FontAwesomeIcon icon={faCheck} className="text-[#00D084] drop-shadow-md"/>   {item}</li>
        ))}
        </ul>
        <p className="text-gray-600 text-sm italic border-t pt-3 mt-auto">{servicio.tech}</p>
        <div className="group perspective flex justify-center">
    <Link href={servicio.link} className="bg-[#00D084] hover:bg-[#00B37E] text-black font-semibold py-3 px-6 rounded-xl mt-6 
    shadow-lg hover:shadow-[0_8px_30px_rgba(0,208,132,0.5)] 
    transform group-hover:-translate-y-1 group-hover:scale-[1.02] transition-all duration-300 ease-in-out
    will-change-transform ">
    Comenzar
    </Link>
</div>
    </div>
    ))}
    </div>
    )
}

export default Services