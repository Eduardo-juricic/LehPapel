import React from "react";
import HeartsAnimation from "./HeartsAnimation";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[900px] md:h-[1000px] flex items-center justify-center text-white overflow-hidden bg-pink-100"
    >
      <HeartsAnimation />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-reveal-1">
            Artesanato que Conta a Sua História
          </h1>
        </div>
        <div className="overflow-hidden">
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md animate-reveal-2">
            Transformamos suas ideias em peças únicas: cadernos, topos de bolo,
            cadernetas e sonhos feitos à mão com carinho.
          </p>
        </div>
        <div className="overflow-hidden">
          <a
            href="https://wa.me/message/UUG3ASGMKYAYE1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white hover:bg-pink-700 px-10 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg transform transition duration-300 hover:scale-105 animate-reveal-3"
          >
            Personalize Seu Sonho!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
