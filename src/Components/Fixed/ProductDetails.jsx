import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("description"); // 'description' or 'reviews'
  const [quantity, setQuantity] = useState(1);
const { addToCart } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://baazar-ltd.onrender.com/api/product/${id}`);
        const data = await res.json();
        if (data.success) {
          setProduct(data.data);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const getDiscountedPrice = (price, discount) => {
    return (price - (price * discount) / 100).toFixed(2);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) {
      return 0;
    }
    const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
    return (totalStars / reviews.length).toFixed(1);
  };

  if (!product) {
    return <div className="text-center mt-10 text-gray-700">Loading product details...</div>;
  }

  const discounted = getDiscountedPrice(product.price, product.discount);
  const averageRating = calculateAverageRating(product.review);


  const handleAddToCart = () => {
  if (product.available) {
    addToCart(product, quantity);
  }
};
  return (
    <section className="bg-orange-50 min-h-screen">
        <div className="max-w-6xl mx-auto p-6 bg-transparent my-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side: Product Image */}
        <div>
          <img
            src={product.picture}
            alt={product.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.title}</h1>

          {/* Average Review */}
          <div className="flex items-center mb-2">
            <div className="text-yellow-500 mr-2">
              {"★".repeat(Math.round(averageRating))}
              {"☆".repeat(5 - Math.round(averageRating))}
            </div>
            <span className="text-gray-600">
              ({averageRating} / 5){" "}
              {product.review?.length > 0 && `(${product.review.length} Reviews)`}
            </span>
          </div>

          {/* Product ID */}
          <p className="text-sm text-gray-500 mb-4">Product ID: {product._id}</p>

          {/* Description (brief) */}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Price Information */}
          <div className="flex items-center space-x-4 mb-4">
            {product.discount > 0 && (
              <span className="text-sm text-gray-500 line-through">৳{product.price}</span>
            )}
            <span className="text-2xl font-bold text-green-600">৳{discounted}</span>
            {product.discount > 0 && (
              <span className="text-sm text-red-500 font-semibold">{product.discount}% OFF</span>
            )}
          </div>

          {/* Stock Availability */}
          <p
            className={`text-sm font-medium mb-4 ${
              product.available ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center mb-6">
            <span className="mr-3 text-gray-700">Quantity:</span>
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 disabled:opacity-50"
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="bg-gray-100 text-gray-800 px-4 py-1 border-t border-b border-gray-200">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
    onClick={handleAddToCart}
    className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded font-medium transition disabled:opacity-50 flex-1"
    disabled={!product.available}
  >
    {product.available ? "Add to Cart" : "Unavailable"}
  </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded font-medium transition flex-1">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Description and Reviews Tabs */}
      <div className="mt-10">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              className={`${
                activeTab === "description"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === "reviews"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.review?.length || 0})
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === "description" && (
            <div className="prose max-w-none text-gray-700">
              <p>{product.description}</p>
              {/* You might want a more detailed description from your API if available */}
            </div>
          )}

          {activeTab === "reviews" && (
            <>
              {product.review && product.review.length > 0 ? (
                <ul className="space-y-4">
                  {product.review.map((rev) => (
                    <li key={rev.id} className="border p-4 rounded bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-yellow-500">
                          {"★".repeat(rev.stars)}{"☆".repeat(5 - rev.stars)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(rev.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="text-gray-700">{rev.feedback}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No reviews yet for this product.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default ProductDetails;