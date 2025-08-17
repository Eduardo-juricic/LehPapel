import React, { useState, useEffect } from "react";

const heartEmojis = ["❤️", "💖", "💕", "💗", "💓"];

const HeartsAnimation = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: new Date().getTime(),
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        style: {
          left: `${Math.random() * 100}%`,
          // AJUSTE DE VELOCIDADE: Aumentei os números aqui para a animação durar mais (ficar mais lenta)
          animationDuration: `${Math.random() * 5 + 8}s`, // Duração entre 8s e 13s
          fontSize: `${Math.random() * 20 + 15}px`,
        },
      };

      setHearts((currentHearts) => [...currentHearts, newHeart]);

      // Aumentei o tempo para limpar os corações, de acordo com a nova duração
      setTimeout(() => {
        setHearts((currentHearts) =>
          currentHearts.filter((heart) => heart.id !== newHeart.id)
        );
      }, 13000); // Deve ser igual ou maior que a duração máxima da animação
    }, 150); // AJUSTE DE QUANTIDADE: Diminuí o número aqui para criar corações mais rápido

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <span key={heart.id} className="heart" style={heart.style}>
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default HeartsAnimation;
