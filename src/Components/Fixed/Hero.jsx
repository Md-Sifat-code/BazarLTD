import React from "react";

function Hero() {
  return (
    <div
      className="min-h-[70vh] bg-cover bg-center bg-no-repeat text-white grid grid-cols-1 lg:grid-cols-2 relative"
      style={{ backgroundImage: "url('/elements01.png')" }}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 sm:px-12 md:px-24 lg:px-32 z-10 py-10">
        <div className="flex flex-col gap-5 max-w-2xl">
          <p className="px-4 py-1 bg-green-800 rounded-l-3xl text-sm font-medium w-fit">
            Weekend Discount
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
            Shopping with us for better quality and the best price
          </h1>

          <p className="text-gray-700 text-sm sm:text-base">
            We have prepared special discounts for you on grocery products.
            Don’t miss these opportunities...
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 transition text-white font-semibold rounded-xl w-fit">
              Shop Now
            </button>

            <div>
              <h2 className="text-xl font-bold text-black">$21.67</h2>
              <p className="text-sm text-gray-800">
                Don’t miss this limited time offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right placeholder (optional: you can add a product or model image here) */}
      <div className="hidden lg:flex items-center justify-center z-10">
        {/* Add optional content or leave empty for background image only */}
      </div>
    </div>
  );
}

export default Hero;
