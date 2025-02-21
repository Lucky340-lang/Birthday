import React from "react";
import "../Rotation.css"; // Ensure you have the necessary styles

const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
  "images/img10.jpg",
];

const Slider = () => {
  return (
    <div className="slider" style={{ "--quantity": images.length }}>
      {images.map((src, index) => (
        <div key={index} className="item" style={{ "--position": index + 1 }}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <Slider />
    </div>
  );
};

export default function App() {
  return <Banner />;
}
