// src/components/Serviços.jsx

import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-pink-600"
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
        className="w-12 h-12 text-pink-600"
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
        className="w-12 h-12 text-pink-600"
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

function Servicos() {
  // Hook para detectar quando o componente está visível
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variantes de animação para o container dos cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre a animação de cada card
      },
    },
  };

  // Variantes de animação para cada card individual
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gray-50 overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Por que escolher a LehPapel?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Nós acreditamos que cada detalhe importa. Veja o que torna nossos
          produtos tão especiais.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-200 flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Servicos;
