// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio"; // <-- Mude esta linha

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ... suas keyframes e animations aqui (se houver)
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceOnce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-10px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        blob: {
          // Se você tem a animação blob do Hero
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        scaleIn: {
          // Se você tem a animação scaleIn do Hero
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "slow-spin": "spin 60s linear infinite",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "bounce-once": "bounceOnce 1s ease-in-out",
        blob: "blob 7s infinite",
        "scale-in": "scaleIn 1s ease-out forwards",
      },
    },
  },
  plugins: [
    tailwindcssAspectRatio, // <-- Mude esta linha
  ],
};
