import React from "react";

const SocialIcons = () => {
  return (
    <div className="social-icons flex items-center gap-4">
      <a
        href="#"
        className="border-2 border-white rounded-full w-9 h-9 md:w-11 md:h-11 flex items-center justify-center transition-transform hover:scale-110"
      >
        <img
          src="https://www.yudiz.com/codepen/headphone-slider/instagram-icon.svg"
          alt="instagram"
          className="w-4 h-4 md:w-5 md:h-5"
        />
      </a>
      <a
        href="#"
        className="border-2 border-white rounded-full w-9 h-9 md:w-11 md:h-11 flex items-center justify-center transition-transform hover:scale-110"
      >
        <img
          src="https://www.yudiz.com/codepen/headphone-slider/facbook-icon.svg"
          alt="facebook"
          className="w-4 h-4 md:w-5 md:h-5"
        />
      </a>
      <a
        href="#"
        className="border-2 border-white rounded-full w-9 h-9 md:w-11 md:h-11 flex items-center justify-center transition-transform hover:scale-110"
      >
        <img
          src="https://www.yudiz.com/codepen/headphone-slider/twiter-icon.svg"
          alt="twitter"
          className="w-4 h-4 md:w-5 md:h-5"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
