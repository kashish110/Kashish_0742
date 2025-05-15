import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card"); // card | gpay | upi

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment Successful via ${method.toUpperCase()} (Dummy)`);
    navigate("/Customer/user-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Razorpay – Secure Payment
        </h2>

        {/* Payment Method Tabs */}
        <div className="flex justify-center space-x-2 mb-6">
          <button
            onClick={() => setMethod("card")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              method === "card"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Card
          </button>
          <button
            onClick={() => setMethod("gpay")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              method === "gpay"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Google Pay
          </button>
          <button
            onClick={() => setMethod("upi")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              method === "upi"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Bank / UPI
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {method === "card" && (
            <>
              <input
                type="text"
                placeholder="Name on Card"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
              </div>
            </>
          )}

          {method === "gpay" && (
            <div className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg"
                alt="Google Pay"
                className="mx-auto h-10 mb-4"
              />
              <p className="text-sm text-gray-600">
                Continue with your linked Google Pay account.
              </p>
            </div>
          )}

          {method === "upi" && (
            <>
              <input
                type="text"
                placeholder="Enter UPI ID or Bank Account Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
              <input
                type="text"
                placeholder="Enter IFSC (if bank account)"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold transition-all"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
