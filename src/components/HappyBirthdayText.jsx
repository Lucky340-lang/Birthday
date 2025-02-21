import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../FloatingHearts.css"; // Keep your styles

const HappyBirthdayText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  // Calculate delay based on the longest sentence
  useEffect(() => {
    if (isVisible) {
      const lastSentence = "I wish your day to be as amazing as you are!!";
      const wordsCount = lastSentence.split(" ").length;
      const totalDelay = wordsCount * 400; // Each word has a delay of 400ms

      setTimeout(() => setShowButton(true), totalDelay + 500); // Extra 500ms buffer
    }
  }, [isVisible]);

  // Function to split text into words wrapped in spans
  const renderWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className={`word ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: `${index * 400}ms` }} // Adjusted transition delay
      >
        {word}
      </span>
    ));
  };

  return (
    <div className="birthday-container">
      <div className="hidden-text" ref={textRef}>
        <h1>{renderWords("🎉 HAPPY BIRTHDAY 🎂")}</h1>
        <h2>{renderWords("❤️ MOTUUS ❤️")}</h2>
        <p>{renderWords("Thank you for being part of my life.")}</p>
        <p>{renderWords("I wish your day to be as amazing as you are!!")}</p>
      </div>

      {/* Button appears only after the last sentence is fully animated */}
      {showButton && (
        <button
          className="surprise-button show-button"
          onClick={() => navigate("/reasons")}
        >
          I have something for you... Click here!!
        </button>
      )}
    </div>
  );
};

export default HappyBirthdayText;
