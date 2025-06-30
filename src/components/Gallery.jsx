import React, { useState } from "react";

// IMPORTAÇÃO DAS IMAGENS ANTIGAS
import hellokitty from "../assets/hello-kitty-caixas.jpg";
import lembrancinhas from "../assets/lembrancinhas-aniversario.jpg";
import batizado from "../assets/batizado.jpg";
import topobolo from "../assets/topo de bolo.jpg";
import vacinacao1 from "../assets/cardeneta-vacina.jpg";
import Kitfestavasco from "../assets/kit-festa.jpg";
import topoboloanimal from "../assets/topo-animais.jpg";
import Kitfestajunina from "../assets/kitfesta-junina.jpg";
import lembrancinhasBiscuit from "../assets/Biscuit.jpg";
import cadernoEucaristia from "../assets/PrimeiraEucaristia.jpg";
import apliquesLeaozinho from "../assets/biscuitleaozinho.jpg";
import agendaGirafa from "../assets/Agendaescolar.jpg";
import manu from "../assets/cadernetavacinamanu.jpg";

// --- IMPORTAÇÃO DAS 4 NOVAS IMAGENS ---
import topoTurmaDaMonica from "../assets/topo-turma-da-monica.jpg";
import topoVideoGame from "../assets/topo-video-game.jpg";
import caixasPersonalizadas from "../assets/caixas-personalizadas.jpg";
import kitFestaSafari from "../assets/kit-festa-safari.jpg";

const products = [
  // --- SEUS PRODUTOS ANTIGOS CONTINUAM AQUI ---
  {
    id: 1,
    category: "outros",
    name: "Lembrancinha da Hello Kitty",
    image: hellokitty,
  },
  {
    id: 2,
    category: "outros",
    name: "Lembrancinhas do PSG",
    image: lembrancinhas,
  },
  {
    id: 3,
    category: "outros",
    name: "Lembrancinha de Batizado",
    image: batizado,
  },
  {
    id: 4,
    category: "topos",
    name: "Topo de Bolo Fundo do Mar",
    image: topobolo,
  },
  {
    id: 5,
    category: "cadernetas",
    name: "Caderneta de Vacinação",
    image: vacinacao1,
  },
  {
    id: 6,
    category: "kits",
    name: "Kit Festa do Vasco",
    image: Kitfestavasco,
  },
  {
    id: 7,
    category: "topos",
    name: "Topo de Bolo de Animais",
    image: topoboloanimal,
  },
  {
    id: 8,
    category: "kits",
    name: "Kit Festa",
    image: Kitfestajunina,
  },
  {
    id: 9,
    category: "outros",
    name: "Lembrancinhas de Biscuit",
    image: lembrancinhasBiscuit,
  },
  {
    id: 10,
    category: "cadernetas",
    name: "Caderno Primeira Eucaristia",
    image: cadernoEucaristia,
  },
  {
    id: 11,
    category: "outros",
    name: "Apliques de Leãozinho em Biscuit",
    image: apliquesLeaozinho,
  },
  {
    id: 12,
    category: "cadernetas",
    name: "Agenda Escolar Personalizada",
    image: agendaGirafa,
  },
  {
    id: 13,
    category: "cadernetas",
    name: "Caderneta de Vacinação",
    image: manu,
  },

  // --- 4 NOVOS PRODUTOS ADICIONADOS AO FINAL DA LISTA ---
  {
    id: 14,
    category: "topos",
    name: "Topo de Bolo Turma da Mônica",
    image: topoTurmaDaMonica,
  },
  {
    id: 15,
    category: "topos",
    name: "Topo de Bolo Vídeo Game",
    image: topoVideoGame,
  },
  {
    id: 16,
    category: "kits",
    name: "kit festa animais",
    image: caixasPersonalizadas,
  },
  {
    id: 17,
    category: "kits",
    name: "Kit Festa Safari",
    image: kitFestaSafari,
  },
];

function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (filter === "all") return true;
    return product.category === filter;
  });

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Nossa Galeria de Encantamento
        </h2>

        {/* Botões de Filtro */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { value: "all", label: "Todos" },
            { value: "kits", label: "Kit Festa" },
            { value: "topos", label: "Topos de Bolo" },
            { value: "cadernetas", label: "Cadernetas" },
            { value: "outros", label: "Outros" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300
                ${
                  filter === cat.value
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200 flex flex-col"
            >
              <div className="relative w-full h-96 overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 capitalize">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-8">
            Nenhum produto nesta categoria ainda.
          </p>
        )}
      </div>
    </section>
  );
}

export default Gallery;
