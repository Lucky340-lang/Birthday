import { useNavigate } from "react-router-dom";
import "../Memories.css"; // Import the CSS file

const memories = [
  {
    date: "February 8, 2020",
    type: "image",
    media: "images/m1.jpg",
    description: "At the time of 12th farewell from where i started going with you and our sair started 😂",
  },
  {
    date: "February 22, 2020",
    type: "image",
    media: "images/m2.jpg",
    description: "Your 2020 Birthday...Bhot maara tha tumhe maja agya tha 😉",
  },
  {
    date: "February 22, 2020",
    type: "video",
    media: "images/vid1.mp4", // Add your actual video path
    description: "Sab ache se hi gaate na bolne pr bhi...naa gate to cake nai cut krti 🙄",
  },
  {
    date: "February 23, 2020",
    type: "image",
    media: "images/m3.jpg",
    description: "The next day...do do birthday ek saal me. Lucky girl !",
  },
  {
    date: "December 26, 2020",
    type: "image",
    media: "images/m4.jpg",
    description: "Tum aur Tumhare ye chehre banana ye kaise bhul skta hu mai 😏",
  },
  {
    date: "January 10, 2021",
    type: "image",
    media: "images/m5.jpg",
    description: "Our farewell party. Jhoot bola tha ki nai aungi fir agle din dhappa krk surprise de diya tha❤️",
  },
  {
    date: "January 18, 2021",
    type: "image",
    media: "images/m6.jpg",
    description: "Yaha yaad nai tum school ki dress me aur mai civil dress me...kya tha bhai 🙄🙄",
  },
  {
    date: "February 22, 2021",
    type: "image",
    media: "images/m7.jpg",
    description: "2021 Birthday...Last year of school and so much of fun on this day💝",
  },
  {
    date: "February 22, 2021",
    type: "image",
    media: "images/m8.jpg",
    description: "Rangaram Karyakram...Leepa Poti tumari wjh se so much of cake wastage 😂",
  },
  {
    date: "March 20, 2021",
    type: "image",
    media: "images/m9.jpg",
    description: "Thankyou for this on my 2021 birthday to make my day special ❤️🫶",
  },
  {
    date: "May 20, 2021",
    type: "video",
    media: "images/vid2.mp4", // Add your actual video path
    description: "Sara janam ka bdla nikal liya lgra hai aur btari lag nahi rahi...chote bche par zulm🥺",
  },
  {
    date: "January 27, 2023",
    type: "video",
    media: "images/vid3.mp4", // Add your actual video path
    description: "I think we met first time after school on this day ❤️...it was fun anyways",
  },
  {
    date: "April 24, 2024",
    type: "video",
    media: "images/vid4.mp4", // Add your actual video path
    description: "Dekh lo bhai ache se dekhlo gift...Your favourite jhumkas and was all about KP 🍻",
  },
];

const Memories = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleMemoriesOnClick = () => {
    navigate("/memories"); // Navigate to the Memories route
  };

  return (
    <div className="memories-container">
      <h1 className="memories-title">Our Beautiful Memories Together❤️</h1>
      <p className="memories-subtitle">
        Every moment spent with you has always been magical. Let’s cherish these precious memories forever. Cheers to many more 🍻
      </p>

      <div className="memories-grid">
        {memories.map((memory, index) => (
          <div className="memory-card" key={index} onClick={handleMemoriesOnClick} style={{ cursor: "pointer" }}>
            {/* Render Image or Video based on type */}
            {memory.type === "image" ? (
              <img src={memory.media} alt="Memory" className="memory-image" />
            ) : (
              <video controls className="memory-video">
                <source src={memory.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h3 className="memory-date">{memory.date}</h3>
            <p className="memory-description">{memory.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;