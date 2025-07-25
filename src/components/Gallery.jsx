import React, { useState, useEffect } from "react";

function Gallery() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao carregar os produtos:", error));
  }, []);

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
