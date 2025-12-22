import React from "react";
import slideData from "./data/slideData.js";

const SliderPagination = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-20 flex gap-3">
      {slideData.map((slide, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-3 transition-all duration-500 rounded-full ${
            currentIndex === index
              ? "w-10 bg-white"
              : "w-3 bg-white/40 hover:bg-white/60"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderPagination;
