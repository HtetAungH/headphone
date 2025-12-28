import React from "react";
import slideData from "./data/slideData.js";

const Backgrounds = ({ currentIndex }) => {
  return (
    <div
      id="backgrounds"
      className="absolute w-full h-full top-0 left-0 z-[-1]"
    >
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: slide.background }}
        />
      ))}
    </div>
  );
};

export default Backgrounds;
