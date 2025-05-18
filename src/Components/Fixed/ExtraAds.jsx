import React from "react";

const adsData = [
  {
    image: "/ads1.png",
    title: "Summer Essentials",
    subtitle: "Up to 50% OFF",
    description: "Cool deals on everything you need for the season.",
  },
  {
    image: "/ads2.png",
    title: "Baby Needs",
    subtitle: "Soft & Safe",
    description: "Best products for your little ones, now on sale.",
  },
  {
    image: "/ads1.png",
    title: "Healthy Choices",
    subtitle: "Organic & Fresh",
    description: "Switch to clean eating with our healthy picks.",
  },
  {
    image: "/ads2.png",
    title: "Snacks Corner",
    subtitle: "Crunchy Deals",
    description: "Stock up on your favorite munchies today!",
  },
];

function ExtraAds() {
  return (
    <section className="py-8">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {adsData.map((ad, index) => (
          <div
            key={index}
            className="relative h-56 md:h-96 rounded-lg overflow-hidden shadow-md"
            style={{ backgroundImage: `url(${ad.image})` }}
          >
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-start p-5 text-white">
              <h1 className="text-lg font-bold">{ad.title}</h1>
              <h2 className="text-md font-semibold">{ad.subtitle}</h2>
              <p className="text-xs mt-1 mb-3">{ad.description}</p>
              <button className="w-fit px-4 py-1 bg-orange-600 hover:bg-orange-700 transition rounded text-sm font-medium">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtraAds;
