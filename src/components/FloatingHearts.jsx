import React, { useEffect, useRef } from "react";
import "../FloatingHearts.css";

const FloatingHearts = () => {
  const heartEmojis = ["❤️", "💖", "💕", "💝", "🫶"];
  const heartsContainerRef = useRef(null);
  let heartCount = 0;
  const maxHearts = 30; // Maximum hearts allowed on the screen

  useEffect(() => {
    if (!heartsContainerRef.current) return;

    const createHeart = () => {
      if (heartCount >= maxHearts) return; // Prevent too many hearts

      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = `${Math.random() * 90 + 5}vw`;
      heart.style.bottom = "0vh";
      heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
      heart.style.transform = `scale(${Math.random() * 0.7 + 0.5})`;

      heartsContainerRef.current.appendChild(heart);
      heartCount++;

      heart.addEventListener("animationend", () => {
        heart.remove();
        heartCount--;
      });
    };

    const heartInterval = setInterval(createHeart, 2000); // Reduced heart frequency

    return () => clearInterval(heartInterval);
  }, []);

  return <div className="hearts-container" ref={heartsContainerRef}></div>;
};

export default FloatingHearts;
