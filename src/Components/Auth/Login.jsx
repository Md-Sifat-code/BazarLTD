import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../config/apiConfig";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/client/jwt/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username_or_email: formData.username_or_email,
            password: formData.password,
          }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Login failed. Please check your credentials and try again.";
        throw new Error(errorMessage);
      }
      // You may want to handle token storage here
      navigate("/"); // Redirect to home or dashboard
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[800px] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email/Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username_or_email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username or Email Address
            </label>
            <input
              type="text"
              id="username_or_email"
              name="username_or_email"
              autoComplete="username"
              value={formData.username_or_email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-sm text-orange-600 hover:underline">
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2.5 px-4 font-bold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* New User Sign Up Text */}
        <p className="text-sm text-center text-gray-600 mt-6">
          New user?{" "}
          <Link
            to="/signup"
            className="text-orange-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;