import React from "react";
import SocialIcons from "./SocialIcons";

const SliderContent = () => {
  return (
    <div className="relative w-full max-w-xl md:w-1/2 md:max-w-lg lg:max-w-xl xl:max-w-2xl py-16 px-5 md:pl-16 lg:pl-24 xl:pl-32 order-1 md:order-none h-full flex flex-col justify-center">
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
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-snug mb-5 lg:mb-10">
          Apple AirPods Max Wireless Over-Ear Headphones.
        </h2>
        <p className="text-white text-base lg:text-lg font-normal leading-6 lg:leading-9 mb-4 lg:mb-7">
          Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital
          Crown for Volume Control. Bluetooth Headphones for iPhone
        </p>
        <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-snug mb-5 lg:mb-10">
          $779.99
        </h3>
        <SocialIcons />
      </div>
    </div>
  );
};

export default SliderContent;
