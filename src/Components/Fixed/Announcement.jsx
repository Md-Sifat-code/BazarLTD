import React from "react";

function Announcement() {
  return (
    <section className="bg-orange-600">
      <div className="container mx-auto max-w-7xl text-white font-semibold flex flex-col md:flex-row justify-between items-center gap-2 py-2 px-4 text-sm sm:text-base">
        {/* Message */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h1>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </h1>
        </div>

        {/* Timer */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-right">
          <h1>Until the end of the sale:</h1>
          <p className="text-white">47 days 06 hours</p>
        </div>
      </div>
    </section>
  );
}

export default Announcement;
