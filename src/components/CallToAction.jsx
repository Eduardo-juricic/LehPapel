import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function CallToAction() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      className="relative bg-slate-900 text-white py-20 sm:py-28 text-center overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
            },
            move: { enable: true, speed: 0.8 },
            opacity: { value: 0.5 },
            size: { value: 2 },
          },
        }}
      />
      <div className="relative z-10 max-w-xl mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up leading-tight">
          Transforme suas ideias em realidade brilhante ✨
        </h3>
        <p
          className="text-base sm:text-lg md:text-2xl mb-8 opacity-90 animate-fade-in max-w-md mx-auto"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Produtos artesanais feitos para encantar e emocionar.
        </p>
        <a
          href="https://wa.me/message/UUG3ASGMKYAYE1"
          target="_blank"
          className="relative inline-block w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          Faça sua Personalização
          <span className="absolute -inset-0.5 rounded-full opacity-75 bg-gradient-to-r from-purple-400 to-indigo-700 blur-md animate-pulse pointer-events-none"></span>
        </a>
      </div>
    </section>
  );
}
