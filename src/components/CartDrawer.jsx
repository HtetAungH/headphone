import React, { useState } from "react";
import CheckoutOverlay from "./CheckoutOverLay";

const CartDrawer = ({ isOpen, onClose, product }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-100] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-101 shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-black">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-black hover:rotate-90 transition-transform p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-4 border-b pb-8">
            <div className="w-24 h-24 rounded-xl bg-gray-100 p-2">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-black text-lg leading-tight">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Color: Selected Finish
              </p>
              <p className="text-black font-black mt-2 text-xl">
                {product.price}
              </p>
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex justify-between text-black font-bold text-lg">
              <span>Subtotal</span>
              <span>{product.price}</span>
            </div>
            <p className="text-gray-400 text-xs">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
            >
              Checkout Now
            </button>
            <button
              onClick={onClose}
              className="w-full text-black font-semibold text-sm hover:underline"
            >
              Continue Shopping
            </button>

            <CheckoutOverlay
              isOpen={showCheckout}
              onClose={() => setShowCheckout(false)}
              product={product}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
