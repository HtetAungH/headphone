import React, { useState } from "react";

const CheckoutOverlay = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  // Helper to safely calculate price
  const basePrice = product?.price
    ? parseFloat(product.price.replace("$", ""))
    : 0;
  const currentTotal = (basePrice * quantity).toFixed(2);

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-998 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-5xl bg-white z-999 shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <svg
            className="w-5 h-5 text-gray-600"
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

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto overflow-x-hidden h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
            {/* Left Column: Forms (7 cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              {/* Progress Stepper */}
              <div className="flex items-center gap-3 mb-10">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        step >= num
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {num}
                    </div>
                    {num < 3 && (
                      <div
                        className={`h-1 w-12 rounded-full transition-colors ${
                          step > num ? "bg-black" : "bg-gray-100"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-3xl md:text-4xl font-black mb-2">
                    Shipping Details
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Where should we send your order?
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="col-span-2 p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Shipping Address"
                      className="col-span-2 p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                    />
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-8 w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transform active:scale-[0.98] transition-all"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-3xl md:text-4xl font-black mb-2">
                    Payment Method
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Secure generic payment processing
                  </p>

                  <div className="p-5 border-2 border-black bg-black/5 rounded-2xl mb-6 flex justify-between items-center">
                    <span className="font-bold flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      Credit / Debit Card
                    </span>
                    <div className="flex gap-2 opacity-80">
                      <div className="w-8 h-5 bg-[#1A1F71] rounded-sm" />
                      <div className="w-8 h-5 bg-[#EB001B] rounded-sm" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="p-4 bg-gray-50 border border-transparent focus:bg-white focus:border-black rounded-xl outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    className="mt-8 w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Pay ${currentTotal}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <div className="text-center animate-in zoom-in duration-500 py-10">
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-green-200 shadow-xl">
                    <svg
                      className="w-12 h-12"
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
                  <h2 className="text-4xl font-black mb-4">Order Confirmed!</h2>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                    Your{" "}
                    <span className="font-bold text-black">{product?.alt}</span>{" "}
                    are being prepared. You will receive an email shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-12 py-4 bg-gray-100 hover:bg-gray-200 text-black rounded-full font-bold transition-all"
                  >
                    Return to Store
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Order Summary (5 cols) */}
            <div className="lg:col-span-5 bg-gray-50 p-8 flex flex-col border-l border-gray-100">
              <h3 className="font-bold mb-8 text-gray-400 uppercase tracking-wider text-xs">
                Order Summary
              </h3>

              <div className="flex gap-6 items-start mb-8">
                <div className="w-24 h-24 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 shrink-0">
                  <img
                    src={product?.image}
                    alt={product?.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-black text-lg leading-tight mb-1">
                    {product?.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">
                    Premium Audio Experience
                  </p>
                  <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    Qty: {quantity}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span>Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-auto space-y-4 pt-8 border-t border-gray-200">
                {/* Fixed Subtotal Row */}
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${currentTotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Free
                  </span>
                </div>

                <div className="flex justify-between text-2xl font-black pt-4 border-t border-gray-200 mt-4">
                  <span>Total</span>
                  <span>${currentTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutOverlay;
