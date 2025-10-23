import { useState, useEffect } from "react";
import React from "react";
import Backgrounds from "./components/Backgrounds";
import SliderContent from "./components/SliderContent";
import SliderImages from "./components/SliderImages";
import slideData from "./components/data/slideData.js";

export default function App() {
  // State to track the current active slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle the automatic slider timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 3000); // 3-second interval

    return () => clearTimeout(timer);
  }, [currentIndex]); // Re-runs when currentIndex changes

  return (
    <>
      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }
      `}</style>

      {/* Main slider section */}
      <section className="relative flex flex-col md:flex-row md:h-screen min-h-[900px] md:min-h-[700px] justify-between items-center h-full overflow-hidden z-10">
        {/* State is passed down as props */}
        <Backgrounds currentIndex={currentIndex} />
        <SliderContent />
        <SliderImages currentIndex={currentIndex} />
      </section>
    </>
  );
}
