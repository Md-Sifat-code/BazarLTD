import React from "react";

function Discount() {
  return (
    <section
      className="relative h-40 md:h-24 bg-cover bg-center bg-no-repeat mb-12 "
      style={{ backgroundImage: "url('/97.png')" }}
    >
      <div className="absolute inset-0 flex items-center max-w-7xl container mx-auto">
        <div className="text-black px-4  w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm md:text-base font-medium">
                Save big on your grocery haul — up to 40% off!
              </h2>
              <button className="mt-2 md:mt-0 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-1.5 rounded-md text-xs md:text-sm transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
