import React from "react";
import ZoomImage from "./ZoomImage";

const SpecsPopup = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />

      <div className="relative bg-neutral-900 border border-white/10 w-full max-w-5xl rounded-4xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Visual Section with Zoom */}
        <div className="md:w-1/2 p-6 bg-linear-to-br from-white/5 to-transparent flex items-center justify-center">
          <ZoomImage src={product.image} alt={product.alt} />
        </div>

        {/* Specs Section */}
        <div className="md:w-1/2 p-10 text-white">
          <header className="mb-8">
            <h2 className="text-4xl font-black">{product.alt}</h2>
            <div className="h-1 w-12 bg-white mt-4" />
          </header>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                Build Quality
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                A custom-designed mesh textile wraps the ear cushions to provide
                pillow-like softness while listening.
              </p>
            </div>
            {/* Additional specs here... */}
          </div>

          <button
            onClick={onClose}
            className="mt-12 group flex items-center gap-3 text-sm font-bold hover:text-white/70 transition-colors"
          >
            <span>CLOSE PREVIEW</span>
            <div className="w-6 h-px bg-white group-hover:w-10 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecsPopup;
