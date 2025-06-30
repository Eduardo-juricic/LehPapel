// src/components/Serviços.jsx

import React from "react";
// Importação do vídeo
import videoFile from "../assets/videorell.mp4";

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-pink-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        ></path>
      </svg>
    ),
    title: "Feito à Mão com Amor",
    description:
      "Cada peça é criada com dedicação e atenção aos mínimos detalhes, garantindo um produto único e de alta qualidade.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-pink-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.217 10.38V18m0 0a2.25 2.25 0 002.25 2.25H18a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25h-5.46a2.25 2.25 0 00-1.748.77l-4.303 4.302zM19.5 9L15 4.5"
        ></path>
      </svg>
    ),
    title: "Personalização Completa",
    description:
      "Deixe sua criatividade fluir! Personalizamos cores, temas, nomes, fotos e tudo mais para refletir seu estilo.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-pink-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.59 14.379L11.332 18.63c-1.666 1.666-4.385 1.666-6.051 0-1.667-1.666-1.667-4.384 0-6.05l4.25-4.25m-2.127 6.051l4.25-4.25m6.051-2.127l-4.25 4.25"
        ></path>
      </svg>
    ),
    title: "Agilidade na Entrega",
    description:
      "Sabemos da sua ansiedade! Trabalhamos para entregar seu pedido personalizado com rapidez e segurança.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* --- ALTERAÇÃO AQUI --- */}
        {/* Usamos um grid de 5 colunas para ter mais controle. */}
        {/* O vídeo ocupará 2 partes e os cards 3 partes. */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          {/* COLUNA DA ESQUERDA (VÍDEO) - Ocupando 2 das 5 colunas */}
          <div className="md:col-span-2 w-full rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full"
              src={videoFile}
              autoPlay
              loop
              muted
              playsInline
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>

          {/* COLUNA DA DIREITA (CARDS) - Ocupando 3 das 5 colunas */}
          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center md:text-left">
              Por que escolher Com Primor?
            </h2>
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-300"
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mt-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
