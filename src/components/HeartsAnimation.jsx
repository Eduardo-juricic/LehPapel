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
          // VELOCIDADE AJUSTADA: Duração da animação agora é entre 4s e 7s
          animationDuration: `${Math.random() * 3 + 4}s`,
          fontSize: `${Math.random() * 20 + 15}px`,
        },
      };

      setHearts((currentHearts) => [...currentHearts, newHeart]);

      // Tempo para limpar os corações ajustado para a nova duração máxima
      setTimeout(() => {
        setHearts((currentHearts) =>
          currentHearts.filter((heart) => heart.id !== newHeart.id)
        );
      }, 7000); // Ajustado para 7 segundos
    }, 100); // Mantive a criação rápida de corações

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
