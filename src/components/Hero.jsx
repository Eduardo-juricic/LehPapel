import React from "react";
import { motion } from "framer-motion";
import HeartsAnimation from "./HeartsAnimation";

// As variantes de animação continuam as mesmas
const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-pink-100 text-white"
    >
      <HeartsAnimation />
      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Animação do Título (continua igual) */}
        <motion.div
          className="overflow-hidden"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-800 drop-shadow-lg sm:text-5xl md:text-6xl">
            Artesanato que Conta a Sua História
          </h1>
        </motion.div>

        {/* Animação do Parágrafo (continua igual) */}
        <motion.div
          className="overflow-hidden"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700 drop-shadow-md sm:text-xl md:text-2xl">
            Transformamos suas ideias em peças únicas: cadernos, topos de bolo,
            cadernetas e sonhos feitos à mão com carinho.
          </p>
        </motion.div>

        {/* --- CORREÇÃO APLICADA AQUI --- */}
        {/* Agora animamos o <div> em vez do <a> */}
        <motion.div
          className="overflow-hidden" // O overflow-hidden continua aqui, se necessário
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          {/* O <a> agora é um elemento normal, sem as propriedades de animação */}
          <a
            href="https://wa.me/message/UUG3ASGMKYAYE1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transform rounded-full bg-pink-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-pink-700 sm:px-10 sm:py-4 md:text-xl"
          >
            Personalize Seu Sonho!
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
