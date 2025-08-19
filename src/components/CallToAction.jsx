// src/components/CallToAction.jsx

import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative bg-gray-50 text-gray-800 py-24 sm:py-32 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight"
        >
          Transforme suas ideias em realidade ✨
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl mb-12 opacity-80 max-w-lg mx-auto"
        >
          Produtos artesanais feitos com carinho para encantar e emocionar em
          cada detalhe.
        </motion.p>

        {/* --- CONTAINER DO BOTÃO ATUALIZADO --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative group mt-6"
        >
          {/* Botão Neon Retangular Melhorado */}
          <a
            href="https://wa.me/message/ULTCXD2I6AJBG1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-block px-10 py-4
              rounded-lg text-lg font-bold text-white uppercase tracking-wider
              bg-gradient-to-r from-pink-500 to-fuchsia-600
              transition-all duration-300
              shadow-[0_0_15px_theme(colors.pink.400),_0_0_25px_theme(colors.fuchsia.400)]
              group-hover:shadow-[0_0_25px_theme(colors.pink.400),_0_0_50px_theme(colors.fuchsia.400)]
              group-hover:scale-110
            "
          >
            Faça sua Personalização
          </a>

          {/* Reflexo Retangular */}
          <div
            className="
              absolute top-full left-1/2 w-[110%] h-16
              bg-gradient-to-r from-pink-500 to-fuchsia-600
              blur-2xl opacity-30
              transition-opacity duration-300
              group-hover:opacity-40
            "
            style={{
              // Ajusta a perspectiva do reflexo para o formato retangular
              transform:
                "translateX(-50%) perspective(20px) rotateX(15deg) scale(1, 0.2)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
