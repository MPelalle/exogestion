'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLock, faTimes, faWrench } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Evitar scroll al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header
  className="bg-transparent hover:bg-[#050814] transition-colors duration-300 ease-in-out fixed top-0 left-0 w-full h-[100px] z-50 flex items-center justify-center px-4"
>
      <nav className="flex items-center justify-between w-full max-w-[1280px]">
        {/* Logo */}
        <Link href="/home">
        <Image
        src="/images/logo.webp"
        alt="Logo"
        width={80}  
        height={80}  
        className="rounded cursor-pointer"
        />
        </Link>

        {/* Menú de navegación (visible solo en desktop) */}
        <div className="hidden lg:flex gap-8 text-[#f5f5f5] font-montserrat font-light text-[14px]">
          <Link href='/trackeo/search' className="hover:text-[#00D084] transition hover:bg-[#00D084] hover:text-white hover:px-1 hover:rounded hover:shadow-lg hover:shadow-[#00D084]/50 transition-all duration-300 ease-in-out"> <FontAwesomeIcon icon={faWrench} className="mr-2" />Trackeo en vivo</Link>
          <Link href="/comenzar" className="hover:text-[#00D084] transition">¡Quiero mi web!</Link>
          <Link href="/comenzar" className="hover:text-[#00D084] transition">Sumate a nuestro equipo</Link>
          <Link href="/servicios" className="hover:text-[#00D084] transition">Servicios</Link>
          <Link href="/contacto"className="hover:text-[#00D084] transition">Contacto</Link>
          <Link href='/login' className="hover:text-[#00D084] transition"><FontAwesomeIcon icon={faLock} className="mr-2" />Dashboard</Link>
        </div>

        {/* Ícono menú hamburguesa (solo en mobile) */}
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-white w-[30px] h-[30px] cursor-pointer"
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      {/* Menú móvil animado (solo visible en mobile) */}
      <div
        className={`fixed top-[100px] left-0 w-full h-[calc(100vh-160px)] bg-cover bg-center flex flex-col items-center justify-center gap-10 py-10 px-4 z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundImage: 'url("/images/second-section/bg-services.webp")',
        }}
      >
        <Link href='/trackeo/search'onClick={() => setMenuOpen(false)}className="w-[80%] text-center py-2 text-[#f5f5f5] font-montserrat font-light text-[30px] rounded-xl hover:bg-[#00D084] hover:text-black hover:shadow-lg hover:shadow-[#00D084]/50 transition-all duration-300 ease-in-out"> <FontAwesomeIcon icon={faWrench} className="mr-2" />Trackeo en vivo</Link>
        <Link href="/comenzar" onClick={() => setMenuOpen(false)}className="w-[80%] text-center py-2 text-[#f5f5f5] font-montserrat font-light text-[30px] rounded-xl hover:bg-[#00D084] hover:text-black hover:shadow-lg hover:shadow-[#00D084]/50 transition-all duration-300 ease-in-out">Sumate a nuestro equipo</Link>
        <Link href="/servicios" onClick={() => setMenuOpen(false)}className="w-[80%] text-center py-2 text-[#f5f5f5] font-montserrat font-light text-[30px] rounded-xl hover:bg-[#00D084] hover:text-black hover:shadow-lg hover:shadow-[#00D084]/50 transition-all duration-300 ease-in-out">Servicios</Link>
        <Link href="/contacto" onClick={() => setMenuOpen(false)}className="w-[80%] text-center py-2 text-[#f5f5f5] font-montserrat font-light text-[30px] rounded-xl hover:bg-[#00D084] hover:text-black hover:shadow-lg hover:shadow-[#00D084]/50 transition-all duration-300 ease-in-out">Contacto</Link>
        <Link href='/login'onClick={() => setMenuOpen(false)}className="w-[80%] text-center py-2 text-[#f5f5f5] font-montserrat font-light text-[30px] rounded-xl hover:bg-[#00D084] hover:text-black hover:shadow-lg hover:shadow-[#00D084]/50 transition-all duration-300 ease-in-out"><FontAwesomeIcon icon={faLock} className="mr-2" />Dashboard</Link>
      </div>
    </header>
  );
};

export default Header;
