'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLock, faTimes, faWrench } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="max-w-[1280px] mx-auto flex items-center justify-around h-[80px] px-6 lg:px-10"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/home" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#00D084] rounded">
          <Image
            src="/images/logo.webp"
            alt="Logo Exogestión"
            width={70}
            height={70}
            className="rounded"
            priority
          />
          <span className="sr-only">Exogestión - Inicio</span>
        </Link>

        {/* Menú Desktop */}
        <ul className="hidden lg:flex gap-8 text-[#e0e0e0] font-montserrat text-sm font-light select-none items-center">
          <li>
            <Link
              href="/trackeo/search"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
            >
              <FontAwesomeIcon icon={faWrench} />
              Trackeo en vivo
            </Link>
          </li>
          <li>
            <Link
              href="/comenzar"
              className="px-3 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
            >
              ¡Quiero mi web!
            </Link>
          </li>
          <li>
            <Link
              href="/comenzar"
              className="px-3 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
            >
              Sumate a nuestro equipo
            </Link>
          </li>
          <li>
            <Link
              href="/servicios"
              className="px-3 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="px-3 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón menú móvil */}
        <button
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00D084]"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      {/* Menú móvil deslizante desde la derecha */}
      <div
        id="mobile-menu"
        className={`fixed top-[80px] right-0 h-[calc(100vh-80px)] w-[85vw] max-w-xs bg-[#111827] shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="menu"
        aria-label="Menú móvil"
      >
        <ul className="flex flex-col gap-6 p-6 text-[#e0e0e0] font-montserrat text-lg font-light select-none">
          <li>
            <Link
              href="/trackeo/search"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <FontAwesomeIcon icon={faWrench} />
              Trackeo en vivo
            </Link>
          </li>
          <li>
            <Link
              href="/comenzar"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              ¡Quiero mi web!
            </Link>
          </li>
          <li>
            <Link
              href="/comenzar"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Se parte
            </Link>
          </li>
          <li>
            <Link
              href="/servicios"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded hover:bg-[#00D084] hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D084]"
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
