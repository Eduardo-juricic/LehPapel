import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Com Primor</h2>
          <p>Inovação e criatividade em cada projeto.</p>
        </div>
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.instagram.com/comprimor?igsh=MWNoa3lyZ3o4eWRxYg=="
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/message/UUG3ASGMKYAYE1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Com Primor. Todos os direitos reservados.
      </p>
    </footer>
  );
}
