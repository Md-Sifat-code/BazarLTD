import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch("https://baazar-ltd.onrender.com/api/product/fetch");
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  const getDiscountedPrice = (price, discount) =>
    (price - (price * discount) / 100).toFixed(2);

  return (
    <section className="py-10 bg-orange-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="list-reset flex space-x-2">
              <li>
                <Link
                  to="/"
                  className="hover:underline text-orange-600 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-semibold">Shop</li>
            </ol>
          </nav>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => {
            const discounted = getDiscountedPrice(
              product.price,
              product.discount
            );

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
                          product.available ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {product.available ? "In Stock" : "Out of Stock"}
                      </p>
                    </div>

                    <button
                      onClick={() => navigate(`/shop/products/${product.id}`)}
                      className={`w-full mt-2 ${
                        product.available
                          ? "bg-orange-600 hover:bg-orange-700"
                          : "bg-gray-400 cursor-not-allowed"
                      } text-white py-2 px-4 rounded font-medium transition`}
                      disabled={!product.available}
                    >
                      {product.available ? "Add to Cart" : "Unavailable"}
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

export default Shop;
