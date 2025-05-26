import React, { useEffect, useState } from 'react';

function NewArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res = await fetch('https://baazar-ltd.onrender.com/api/product/fetch');
        const data = await res.json();
        if (data.success) {
          setProducts(data.data.slice(0, 5)); // Show first 5 products
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchNewArrivals();
  }, []);

  // Calculate discounted price
  const getDiscountedPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">New Arrivals</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => {
            const discounted = getDiscountedPrice(product.price, product.discount);

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
              >
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
                          product.available ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {product.available ? 'In Stock' : 'Out of Stock'}
                      </p>
                    </div>

                    <button
                      className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded font-medium transition"
                      disabled={!product.available}
                    >
                      {product.available ? 'Add to Cart' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
