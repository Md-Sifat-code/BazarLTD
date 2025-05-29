import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="md:col-span-2 bg-white p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between mb-4 border-b pb-2">
              <div className="flex items-center space-x-4">
                <img src={item.picture} alt={item.title} className="w-16 h-16 rounded" />
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div>
                <p className="text-green-600 font-semibold">
                  ৳{((item.price - (item.price * item.discount) / 100) * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="bg-white p-4 rounded shadow-sm h-fit">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <p className="mb-2 text-gray-700">
          Total Items: <strong>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</strong>
        </p>
        <p className="mb-4 text-gray-700">
          Total Price: <strong className="text-green-600">৳{cartTotal.toFixed(2)}</strong>
        </p>
        <button
          onClick={() => alert("Payment Confirmed!")}
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
        >
          Confirm Payment
        </button>
        <button
          onClick={clearCart}
          className="w-full mt-2 text-sm text-red-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
