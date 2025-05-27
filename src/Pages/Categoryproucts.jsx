import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://baazar-ltd.onrender.com/api/product/fetch"
        );
        const data = await res.json();
        if (data.success) {
          const filtered = data.data.filter(
            (p) => String(p.category_id) === id
          );
          setAllProducts(filtered);
          setFilteredProducts(filtered);
        }
      } catch (err) {
        console.error("Error fetching category products:", err);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    let updated = [...allProducts];

    // Search
    if (searchTerm) {
      updated = updated.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (sortOrder === "low-to-high") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [searchTerm, sortOrder, allProducts]);

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="bg-white p-4 rounded shadow md:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Filter</h2>

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border px-3 py-2 rounded mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="space-y-2">
            <button
              onClick={() => setSortOrder("low-to-high")}
              className={`block w-full text-left px-3 py-2 rounded ${
                sortOrder === "low-to-high"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => setSortOrder("high-to-low")}
              className={`block w-full text-left px-3 py-2 rounded ${
                sortOrder === "high-to-low"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Price: High to Low
            </button>
            <button
              onClick={() => {
                setSortOrder("");
                setSearchTerm("");
              }}
              className="block w-full text-left px-3 py-2 rounded bg-red-100 hover:bg-red-200"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
                    {product.description.slice(0, 100)}...
                  </p>
                </div>

                <div className="mt-auto space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      {product.discount > 0 ? (
                        <>
                          <span className="text-sm text-gray-500 line-through">
                            ৳{product.price}
                          </span>
                          <span className="text-lg font-bold text-green-600">
                            ৳
                            {(
                              product.price -
                              (product.price * product.discount) / 100
                            ).toFixed(2)}
                          </span>
                        </>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryProducts;
