import React from "react";
// Importe a imagem de fundo que você vai usar
import heroBackground from "../assets/hero-bg.jpg"; // Exemplo: uma foto de cadernos/topos/artesanato em um fundo suave

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[900px] md:h-[1000px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Imagem de Fundo com Overlay */}
      <img
        src={heroBackground}
        alt="Artesanato personalizado em destaque"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay escuro para contraste */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-up">
          Artesanato que Conta a Sua História
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md animate-fade-in">
          Transformamos suas ideias em peças únicas: cadernos, topos de bolo,
          cadernetas e sonhos feitos à mão com carinho.
        </p>
        <a
          href="https://wa.me/message/UUG3ASGMKYAYE1"
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Medida de segurança para links em nova aba
          className="inline-block bg-pink-600 text-white hover:bg-pink-700 px-10 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg transform transition duration-300 hover:scale-105 animate-bounce-once"
        >
          Personalize Seu Sonho!
        </a>
      </div>
    </section>
  );
}

export default Hero;
