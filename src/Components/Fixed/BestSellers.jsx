import React, { useEffect, useState } from "react";

function ProductCard({ product }) {
  const getDiscountedPrice = (price, discount) =>
    (price - (price * discount) / 100).toFixed(2);

  const discounted = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={product.picture}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-md">
            {product.discount}% OFF
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-4 justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            {product.description.length > 100
              ? `${product.description.slice(0, 100)}...`
              : product.description}
          </p>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between">
            <div>
              {product.discount > 0 ? (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-through">
                    ৳{product.price}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ৳{discounted}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-green-600">
                  ৳{product.price}
                </span>
              )}
            </div>
            <p
              className={`text-sm font-medium ${
                product.available ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.available ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          <button
            className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded font-medium transition"
            disabled={!product.available}
          >
            {product.available ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}

function AdBanner({ image, title, cta }) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <img src={image} alt="Ad Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40  flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
          {cta}
        </button>
      </div>
    </div>
  );
}

function BestSellers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://baazar-ltd.onrender.com/api/product/fetch")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-start">
          <h1 className="text-3xl font-bold text-gray-800">Best Sellers</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - 2 Products */}
          <div className="flex flex-col gap-4">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Middle Column - 2 Ads with Overlay */}
          <div className="grid grid-rows-2 gap-4">
            <AdBanner image="/ban1.png" title="Special Offer" cta="Shop Now" />
            <AdBanner
              image="/ban2.png"
              title="Limited Time Deal"
              cta="Buy Today"
            />
          </div>

          {/* Right Column - Next 2 Products */}
          <div className="flex flex-col gap-4">
            {products.slice(2, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
