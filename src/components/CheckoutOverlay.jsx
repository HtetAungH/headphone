import React, { useState } from "react";

const CheckoutOverlay = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-white backdrop-blur-xl" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-black hover:scale-110 transition-transform z-50"
      >
        <svg
          className="w-8 h-8"
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

      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left: Form Area (7 Columns) */}
        <div className="md:col-span-7 space-y-8">
          <div className="flex items-center gap-4 mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    step >= num
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {num}
                </div>
                <div
                  className={`h-0.5 w-8 ${
                    step > num ? "bg-black" : "bg-gray-100"
                  }`}
                />
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-black mb-6">Shipping Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-black/5"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-black/5"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="col-span-2 p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-black/5"
                />
                <input
                  type="text"
                  placeholder="Shipping Address"
                  className="col-span-2 p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-black/5"
                />
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-8 w-full py-4 bg-black text-white rounded-full font-bold hover:shadow-xl transition-all"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl font-black mb-6">Payment Method</h2>
              <div className="p-6 border-2 border-black rounded-2xl mb-4 flex justify-between items-center cursor-pointer">
                <span className="font-bold">Credit / Debit Card</span>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-blue-600 rounded-sm" />
                  <div className="w-8 h-5 bg-orange-500 rounded-sm" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-4 bg-gray-50 rounded-xl mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="p-4 bg-gray-50 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="p-4 bg-gray-50 rounded-xl"
                />
              </div>
              <button
                onClick={() => setStep(3)}
                className="mt-8 w-full py-4 bg-black text-white rounded-full font-bold"
              >
                Complete Purchase — $779.99
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center animate-in zoom-in duration-700 py-10">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-black mb-2">Order Confirmed!</h2>
              <p className="text-gray-500 mb-8">
                Your {product.alt} are on their way.
              </p>
              <button
                onClick={onClose}
                className="px-10 py-4 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-all"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Right: Order Summary (5 Columns) */}
        <div className="md:col-span-5 bg-gray-50 rounded-[2.5rem] p-10">
          <h3 className="text-xl font-bold mb-8">Order Summary</h3>
          <div className="flex gap-4 items-center mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-sm">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-bold leading-tight">{product.alt}</p>
              <p className="text-sm text-gray-500">Qty: 1</p>
            </div>
            <p className="ml-auto font-bold">$779.99</p>
          </div>
          <div className="space-y-4 border-t pt-6 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold">$779.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="text-green-600 font-bold">Free</span>
            </div>
            <div className="flex justify-between text-xl font-black pt-4">
              <span>Total</span>
              <span>$779.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOverlay;
