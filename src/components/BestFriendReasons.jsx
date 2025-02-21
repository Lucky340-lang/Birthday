import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const reasons = [
  "You always know how to make me laugh, even on my worst days!🫶",
  "Golu Molu si ho tum, maarne me majat aatii pata pat 😂😂",
  "You were always there for me, no matter what! ❤️",
  "At last but the most important, tumhari bejatti kiye bina i don't know how my day goes 🤣🤣"
];

const BestFriendReasons = () => {
  const [visibleReasons, setVisibleReasons] = useState([reasons[0]]);
  const [showWishButton, setShowWishButton] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const showNextReason = () => {
    if (visibleReasons.length < reasons.length) {
      setVisibleReasons([...visibleReasons, reasons[visibleReasons.length]]);
    }
    if (visibleReasons.length + 1 === reasons.length) {
      setShowWishButton(true);
    }
  };

  const handleWishButtonClick = () => {
    navigate("/birthday-wish"); // Navigate to the BirthdayCard route
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Why You're My Best Friend! 💖</h2>
      {visibleReasons.map((reason, index) => (
        <div key={index} style={styles.card}>{reason}</div>
      ))}

      {/* Show the counter: "1 of 4 reasons", "2 of 4 reasons" */}
      <p style={styles.counter}>{visibleReasons.length} of {reasons.length} reasons</p>

      {!showWishButton ? (
        <button style={styles.button} onClick={showNextReason}>
          Tell Me Another Reason 💕
        </button>
      ) : (
        <button style={styles.finalButton} onClick={handleWishButtonClick}>
          Click! Your Birthday Wish Awaits 🎁
        </button>
      )}
    </div>
  );
};

// Styles with Responsive Adjustments
// Styles with Responsive Adjustments
const styles = {
    container: {
        textAlign: "center",
        
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Keep it centered horizontally
        marginTop: "20px", // Move content closer to the top
    },
  heading: {
    color: "#d81b60",
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // Adjusts between 1.8rem and 2.5rem
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "clamp(10px, 2vw, 15px) clamp(15px, 3vw, 20px)", // Scales for all screens
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    fontSize: "clamp(1rem, 3vw, 1.2rem)", // Adjusts dynamically
    maxWidth: "85vw",
    width: "400px",
    marginBottom: "10px",
  },
  counter: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    fontWeight: "bold",
    color: "#555",
    margin: "10px 0",
  },
  button: {
    backgroundColor: "#ff4081",
    color: "white",
    border: "none",
    padding: "clamp(8px, 2vw, 10px) clamp(12px, 3vw, 15px)", // Adjusted padding
    fontSize: "clamp(0.9rem, 3vw, 1rem)", // Responsive font size
    borderRadius: "20px",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "10px",
  },
  finalButton: {
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    padding: "clamp(10px, 3vw, 12px) clamp(15px, 4vw, 18px)",
    fontSize: "clamp(1rem, 3.5vw, 1.2rem)", // Slightly larger for the final button
    borderRadius: "25px",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "15px",
  }
};

export default BestFriendReasons;
