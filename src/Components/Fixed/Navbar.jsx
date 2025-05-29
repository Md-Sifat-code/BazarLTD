import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <section className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex-shrink-0 flex items-center gap-2 font-bold">
          <img src="/g10.png" alt="Logo" className="h-10 w-auto" />
          <h1>BazarLTD</h1>
        </div>

        <div className="flex-grow max-w-6xl mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-center space-x-6 relative">
          <Link to="/login" className="flex items-center space-x-1 hover:text-blue-600">
            <FaUser size={20} />
            <span className="hidden sm:inline">Login</span>
          </Link>

          <Link to="/signup" className="hover:text-orange-500">
            <FaHeart size={20} />
          </Link>

          <Link to="/cart" className="relative hover:text-green-500">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
