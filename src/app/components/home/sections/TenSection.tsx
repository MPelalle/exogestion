"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const TenSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Hubo un error. Intentá nuevamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar el mensaje.");
    }
  };
  return (
    <div className="bg-[#f5f5f5] flex flex-col lg:flex-row justify-center items-center gap-12 p-8 mt-[20px] rounded-xl shadow-md lg:px-70">
  {/* FORMULARIO */}
  <div className="flex flex-col w-full lg:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-[#0A1128]/30 shadow-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-md border border-[#0A1128]/20 focus:outline-none focus:ring-2 focus:ring-[#0A1128] transition duration-200 placeholder:text-[#000000]/80"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md border border-[#0A1128]/20 focus:outline-none focus:ring-2 focus:ring-[#0A1128] transition duration-200 placeholder:text-[#000000]/80"
        />
        <textarea
          name="message"
          placeholder="Contanos tu idea..."
          maxLength={500}
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-md border border-[#0A1128]/20 focus:outline-none focus:ring-2 focus:ring-[#0A1128] resize-none h-32 transition duration-200 placeholder:text-[#000000]/80"
        />
        <button
          type="submit"
          className="bg-[#00D084] text-black font-semibold py-3 rounded-md hover:bg-[#0056b3] transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>

  {/* TEXTO DESCRIPTIVO */}
  <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-right">
    <p className="text-[#000000] font-medium text-sm">Contactanos</p>
    <h1 className="text-3xl font-bold text-[#0A1128]">
      ¡Hablemos de tu próximo <span className="text-[#00D084] drop-shadow-xl">proyecto</span>!
    </h1>
    <p className="mt-4 text-[#0A1128]">
      ¿Listo para llevar tu negocio al siguiente nivel con una solución web personalizada?
    </p>
    <p className="mt-2 text-[#0A1128]">
      Contáctanos hoy y trabajemos juntos en el desarrollo de un sitio web a medida que impulse tu negocio.
    </p>
    <Image
      src="/images/logo.webp" 
      alt="logo"
      width='100'
      height='90'
      className="mt-8 mx-auto"/>
    <div className="flex flex-row justify-center items-center ">
      <Link target="_blank" href="https://www.instagram.com/exogestion.oficial/" className="flex flex-col justify-center items-center">
        <Image
          src="/images/redes/instagram.webp" 
          alt="logo"
          width='70'
          height='70'/>
        <p className="text-[#0A1128] text-sm font-semibold">Seguinos en instagram!</p></Link>
    </div>
  </div>
</div>

  )
}

export default TenSection