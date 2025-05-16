import React from "react";

function Announcement() {
  return (
    <section className="bg-[#DC2626]">
      <div className="container mx-auto max-w-7xl text-white font-semibold flex flex-row justify-between items-center py-1">
        <div>
          <h1>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </h1>
        </div>
        <div className="flex flex-row gap-6">
          <h1>Until the end of the sale:</h1>
          <p>47 days 06 hours</p>
        </div>
      </div>
    </section>
  );
}

export default Announcement;
