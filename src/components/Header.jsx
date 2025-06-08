import React, { useState } from "react";
// Verifique se o caminho da importação da sua logo está correto
import logoComPrimor from "../assets/Logo-Com-Primor.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // O padding vertical (py) foi aumentado para deixar o header maior
    <header className="bg-white shadow-lg py-6 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo da Marca */}
        <a href="#" className="flex items-center">
          {/* Logo com altura aumentada e bordas arredondadas (rounded-lg) */}
          <img
            src={logoComPrimor}
            alt="Logo Com Primor"
            className="h-20 w-auto rounded-lg" // Altura maior e borda arredondada
          />
        </a>

        {/* Botão do Hamburguer para Mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none focus:text-pink-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Navegação Principal */}
        <nav
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 mt-2 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-pink-600 transition duration-300 py-2 md:py-0"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-pink-600 transition duration-300 py-2 md:py-0"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-pink-600 transition duration-300 py-2 md:py-0"
              >
                Galeria
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
