import React from "react";

const bannerData = [
  {
    image: "/ban1.png",
    title: "Fresh Fruits",
    subtitle: "Straight from the farm",
    description:
      "Get organic fruits delivered to your door at the best prices.",
  },
  {
    image: "/ban2.png",
    title: "Dairy Deals",
    subtitle: "Milk, Cheese & More",
    description: "Shop top quality dairy products with exciting discounts.",
  },
  {
    image: "/ban3.png",
    title: "Baked Daily",
    subtitle: "Fresh Breads & Pastries",
    description: "Your favorite baked goods just a click away!",
  },
];

function Banners() {
  return (
    <section className="py-8">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className="relative h-64 md:h-64 rounded-lg overflow-hidden shadow-md bg-cover"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 text-white">
              <h1 className="text-xl font-bold text-orange-600">
                {banner.title}
              </h1>
              <h1 className="text-lg font-semibold text-black">
                {banner.subtitle}
              </h1>
              <p className="text-sm mt-2 mb-4">{banner.description}</p>
              <button className="w-fit px-4 py-2 bg-orange-600 hover:bg-orange-700 transition rounded-lg text-sm font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banners;
