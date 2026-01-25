import React, { useEffect, useState } from "react";

const OrderHistoryDrawer = ({ isOpen, onClose }) => {
  const [orders, setOrders] = useState([]);

  // Load orders when the drawer opens
  useEffect(() => {
    if (isOpen) {
      const savedOrders = JSON.parse(
        localStorage.getItem("headphone_orders") || "[]",
      );
      setOrders(savedOrders);
    }
  }, [isOpen]);

  const clearHistory = () => {
    localStorage.removeItem("headphone_orders");
    setOrders([]);
  };

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-100 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-white z-101 shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-black">Order History</h2>
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

          {/* Orders List */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {orders.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <svg
                  className="w-16 h-16 mb-4 opacity-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p>No orders found yet.</p>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex gap-4"
                >
                  <div className="w-16 h-16 bg-white rounded-xl p-1 shadow-sm shrink-0">
                    <img
                      src={order.product.image}
                      alt={order.product.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-black text-sm leading-tight">
                        {order.product.title}
                      </h3>
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {order.date} • Qty: {order.quantity}
                    </p>
                    <p className="text-black font-black mt-2 text-sm">
                      Total: ${order.total}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            {orders.length > 0 && (
              <button
                onClick={clearHistory}
                className="w-full text-red-500 text-sm font-bold hover:bg-red-50 py-3 rounded-xl transition-colors mb-2"
              >
                Clear History
              </button>
            )}
            <button
              onClick={onClose}
              className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryDrawer;
