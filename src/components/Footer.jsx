// src/components/Footer.jsx

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    // Fundo rosa claro, com borda superior para separar do conteúdo
    <footer className="bg-pink-50 text-gray-700 py-10 px-6 border-t border-pink-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Nome da loja e Slogan */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-pink-500 mb-1">Lehpapel</h2>
          <p className="text-gray-500">Artesanato que encanta e emociona.</p>
        </div>

        {/* Ícones de Redes Sociais com novo estilo */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/lepapel355"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-12 h-12
              bg-white
              rounded-full
              text-pink-500
              shadow-md
              transition-all duration-300
              hover:bg-pink-500 hover:text-white hover:scale-110
            "
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/message/ULTCXD2I6AJBG1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-12 h-12
              bg-white
              rounded-full
              text-pink-500
              shadow-md
              transition-all duration-300
              hover:bg-pink-500 hover:text-white hover:scale-110
            "
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center text-gray-500 mt-10 pt-6 border-t border-pink-100">
        <p className="text-sm">
          © {new Date().getFullYear()} Lehpapel. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
