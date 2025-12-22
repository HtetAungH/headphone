import React, { useState } from "react";

const ZoomImage = ({ src, alt }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(2);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.pageXOffset) / width) * 100;
    const y = ((e.pageY - top - window.pageYOffset) / height) * 100;
    setPosition({ x, y });
  };

  const handleWheel = (e) => {
    // Adjust zoom level with scroll wheel
    if (e.deltaY < 0) {
      setZoomLevel((prev) => Math.min(prev + 0.5, 4));
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.5, 1.5));
    }
  };

  return (
    <div
      className="relative cursor-zoom-in overflow-hidden rounded-xl"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
    >
      <img src={src} alt={alt} className="w-full h-auto block" />

      {showMagnifier && (
        <div
          className="absolute inset-0 pointer-events-none border-2 border-white/20 shadow-inner"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {showMagnifier && (
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md">
          Scroll to Zoom: {zoomLevel.toFixed(1)}x
        </div>
      )}
    </div>
  );
};

export default ZoomImage;
