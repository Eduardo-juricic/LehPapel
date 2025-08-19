import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Gallery() {
  const [products, setProducts] = useState([]);
  const SEU_NUMERO_DE_TELEFONE = "554299908890"; // Substitua pelo seu número com código do país

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao carregar os produtos:", error));
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Nossa Galeria de Encantamento
        </h2>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const mensagem = `Olá, tenho interesse no produto: ${product.name}`;
            const linkWhatsApp = `https://wa.me/${SEU_NUMERO_DE_TELEFONE}?text=${encodeURIComponent(
              mensagem
            )}`;

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200 flex flex-col"
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-grow flex flex-col">
                  <div className="mt-auto">
                    <a
                      href={linkWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-300"
                    >
                      <FaWhatsapp size={20} />
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-8">
            Nenhum produto para exibir no momento.
          </p>
        )}
      </div>
    </section>
  );
}

export default Gallery;
