import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* 1️⃣ Logo & Social Icons */}
        <div>
            <img src="/g10.png" alt="" />
          <h2 className="text-2xl font-bold text-white mb-4">Baazar Ltd</h2>
          <p className="text-sm mb-4">
            Your one-stop shop for everything you need.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-orange-600 rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-orange-600 rounded-full transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-orange-600 rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-orange-600 rounded-full transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 2️⃣ Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/shop" className="hover:text-orange-500">Shop</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-orange-500">FAQ</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-500">Terms of Service</Link></li>
            <li><Link to="/refunds" className="hover:text-orange-500">Refund Policy</Link></li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@baazarltd.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          <p className="text-sm">Address: 123 Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Baazar Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
