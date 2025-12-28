import React, { useState } from "react";
import SocialIcons from "./SocialIcons";
import slideData from "./data/slideData.js";
import CartDrawer from "./CartDrawer";

const SliderContent = ({ currentIndex }) => {
  const [isBuying, setIsBuying] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productForCart, setProductForCart] = useState(null);
  const currentProduct = slideData[currentIndex];

  const handleBuy = () => {
    setIsBuying(true);
    setProductForCart(currentProduct);
    // Simulate a short loading delay before opening the cart
    setTimeout(() => {
      setIsBuying(false);
      setIsDrawerOpen(true);
    }, 1500);
  };

  return (
    <div className="relative w-full max-w-xl md:w-1/2 md:max-w-lg lg:max-w-xl xl:max-w-2xl py-16 px-5 md:pl-16 lg:pl-24 xl:pl-32 order-1 md:order-0 h-full flex flex-col justify-center">
      <div className="logo mb-5">
        <a href="#">
          <img
            src="https://www.yudiz.com/codepen/headphone-slider/logo.svg"
            alt="logo"
            className="w-[200px] md:w-[230px] lg:w-[271px] h-auto"
          />
        </a>
      </div>

      <div className="slider-content">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5">
          {currentProduct.title}
        </h2>
        <p className="text-white text-base lg:text-lg font-normal leading-6 mb-8 opacity-90">
          {currentProduct.description}
        </p>

        <div className="flex flex-col gap-6 mb-10">
          <h3 className="text-white text-4xl md:text-5xl font-black leading-tight">
            {currentProduct.price}
          </h3>

          <button
            onClick={handleBuy}
            className={`w-full md:w-64 py-4 rounded-full font-bold transition-all transform active:scale-95 flex items-center justify-center gap-3 ${
              isBuying
                ? "bg-white/20 text-white cursor-wait"
                : "bg-white text-black hover:bg-opacity-90"
            }`}
          >
            {isBuying ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                Adding...
              </span>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>

        <SocialIcons />
      </div>

      {productForCart && (
        <CartDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          product={productForCart}
        />
      )}
    </div>
  );
};

export default SliderContent;
