import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Login() {
  return (
    <section className="min-h-[800px] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form>
          {/* Email/Username Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username or Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              // required
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              // required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="mr-2 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
              Remember me
            </label>
            {/* For "Forgot your password?", you might also use Link if it's an internal route */}
            <Link to="/forgot-password" className="text-sm text-orange-600 hover:underline">
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2.5 px-4 font-bold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
          >
            Login
          </button>
        </form>

        {/* New User Sign Up Text */}
        <p className="text-sm text-center text-gray-600 mt-6">
          New user?{" "}
          <Link
            to="/signup" // Replace with your actual sign-up page route
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