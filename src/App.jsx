import { useState, useEffect } from "react";
import React from "react";
import Backgrounds from "./components/Backgrounds";
import SliderContent from "./components/SliderContent";
import SliderImages from "./components/SliderImages";
import slideData from "./components/data/slideData.js";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Handler for manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          margin: 0;
        }
      `}</style>

      <section className="relative flex flex-col md:flex-row md:h-screen min-h-[900px] md:min-h-[700px] justify-between items-center h-full overflow-hidden z-10">
        <Backgrounds currentIndex={currentIndex} />

        {/* Pass currentIndex to SliderContent to update text dynamically */}
        <SliderContent currentIndex={currentIndex} />

        <SliderImages currentIndex={currentIndex} />

        {/* NEW UI: Dot Navigation & Progress */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0 z-20 flex items-center gap-4">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative h-2 transition-all duration-500 rounded-full ${
                currentIndex === index
                  ? "w-12 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </span>
            </button>
          ))}
        </div>

        {/* NEW UI: Vertical Slide Counter */}
        <div className="absolute hidden md:flex right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-20">
          <span className="text-white font-black text-2xl">
            0{currentIndex + 1}
          </span>
          <div className="w-0.5 h-20 bg-white/20 relative">
            <div
              className="absolute top-0 left-0 w-full bg-white transition-all duration-500"
              style={{
                height: `${((currentIndex + 1) / slideData.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-white/50 font-bold">0{slideData.length}</span>
        </div>
      </section>
    </>
  );
}
