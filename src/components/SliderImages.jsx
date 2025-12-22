import React, { useState } from "react";
import slideData from "./data/slideData.js";
import SpecsPopup from "./SpecsPopup";

const SliderImages = ({ currentIndex }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const getSliderClasses = (index) => {
    const total = slideData.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    // Base classes
    let classes =
      "absolute object-cover h-[380px] w-auto aspect-[1/1.3] transition-all duration-[2000ms] ease-in-out top-0 left-full transform scale-30 blur-lg opacity-0";
    classes +=
      " md:max-w-[593px] md:max-h-[779px] md:h-full md:min-h-[320px] md:-translate-x-1/2 md:-translate-y-1/2";

    if (index === currentIndex) {
      // .active
      classes =
        "absolute object-cover h-[380px] w-auto aspect-[1/1.3] transition-all duration-[2000ms] ease-in-out z-10";
      classes +=
        " !opacity-100 !blur-0 !top-1/2 !left-[5%] !transform !-translate-y-1/2 !scale-100 !translate-x-0";
      classes +=
        " md:max-w-[593px] md:max-h-[779px] md:h-full md:min-h-[320px] md:!left-0";
    } else if (index === prevIndex) {
      // .previous
      classes =
        "absolute object-cover h-[380px] w-auto aspect-[1/1.3] transition-all duration-[2000ms] ease-in-out";
      classes +=
        " !opacity-100 !blur-md !top-full !left-[5%] !transform-none !scale-30";
      classes +=
        " md:max-w-[593px] md:max-h-[779px] md:h-full md:min-h-[320px] md:!top-[90%] md:!left-[95%]";
    } else if (index === nextIndex) {
      // .next
      classes =
        "absolute object-cover h-[380px] w-auto aspect-[1/1.3] transition-all duration-[2000ms] ease-in-out";
      classes +=
        " !opacity-100 !blur-xl !top-[10%] !left-[5%] !transform !-translate-y-1/2 !scale-30";
      classes +=
        " md:max-w-[593px] md:max-h-[779px] md:h-full md:min-h-[320px] md:!left-full md:!-translate-x-1/2";
    } else {
      // .inactive
      classes =
        "absolute object-cover h-[380px] w-auto aspect-[1/1.3] transition-all duration-[2000ms] ease-in-out";
      classes +=
        " !opacity-0 !blur-xl !top-full !left-[10%] !transform !translate-x-[10%] !translate-y-[10%] !scale-30";
      classes +=
        " md:max-w-[593px] md:max-h-[779px] md:h-full md:min-h-[320px] md:!left-full";
    }

    return classes;
  };

  return (
    <div className="slider-images w-full md:w-1/2 h-[450px] md:h-full relative order-2 md:order-0">
      {slideData.map((slide, index) => (
        <img
          key={index}
          // Only allow clicking on the active (front) image
          onClick={() => index === currentIndex && setSelectedProduct(slide)}
          className={`${getSliderClasses(index)} ${
            index === currentIndex ? "cursor-pointer" : ""
          }`}
          src={slide.image}
          alt={slide.alt}
        />
      ))}

      <SpecsPopup
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={slideData[currentIndex]}
      />
    </div>
  );
};

export default SliderImages;
