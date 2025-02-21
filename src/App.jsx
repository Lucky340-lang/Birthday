import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Rotation from "./components/Rotation";
import FloatingHearts from "./components/FloatingHearts";
import HappyBirthdayText from "./components/HappyBirthdayText";
import BestFriendReasons from "./components/BestFriendReasons";
import BirthdayCard from "./components/BirthdayCard";
import Memories from "./components/Memories";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  return (
    <Router>
      <AudioController audioRef={audioRef} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FloatingHearts />
              <Rotation />
              <HappyBirthdayText />
            </>
          }
        />

        <Route
          path="/reasons"
          element={
            <>
              <FloatingHearts />
              <BestFriendReasons />
            </>
          }
        />

        <Route
          path="/birthday-wish"
          element={
            <>
              <FloatingHearts />
              <BirthdayCard />
            </>
          }
        />

        <Route
          path="/memories"
          element={
            <>
              <FloatingHearts />
              <Memories />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

function AudioController({ audioRef }) {
  const location = useLocation();

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (location.pathname === "/birthday-wish") {
      audio.play().catch((error) => console.log("Autoplay blocked:", error));
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset to start
    }
  }, [location]);

  return <audio ref={audioRef} src="/images/song.mp3" loop />;
}

export default App;
