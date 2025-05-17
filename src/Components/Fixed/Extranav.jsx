import React, { useState, useEffect, useRef } from "react";
import {
  FaAppleAlt,
  FaCheese,
  FaBreadSlice,
  FaSnowflake,
  FaHeartbeat,
  FaBaby,
  FaHome,
  FaStore,
  FaPhone,
  FaTags,
  FaBars,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Extranav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const categories = [
    { name: "Fruits & Vegetables", icon: <FaAppleAlt /> },
    { name: "Dairy", icon: <FaCheese /> },
    { name: "Bread", icon: <FaBreadSlice /> },
    { name: "Frozen Food", icon: <FaSnowflake /> },
    { name: "Healthcare", icon: <FaHeartbeat /> },
    { name: "Baby", icon: <FaBaby /> },
  ];

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsMobileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* 🖥️ Desktop/Tablet Top Navigation */}
      <section className="bg-white py-2 border-t border-gray-300 hidden sm:block">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div
            className="w-full md:w-auto flex flex-col md:flex-row md:items-center gap-4 relative"
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-gray-700 font-semibold hover:bg-gray-200 px-4 py-2 rounded-lg transition"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              All Category <IoMdArrowDropdown />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded shadow-md z-20">
                {categories.map((category, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 font-medium">
              <p className="cursor-pointer hover:text-blue-600">Home</p>
              <p className="cursor-pointer hover:text-blue-600">Shop</p>
              <p className="cursor-pointer hover:text-blue-600">Contact</p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-orange-600 text-center md:text-left px-4 py-2 bg-orange-100 font-bold rounded-xl cursor-pointer hover:bg-orange-200 transition">
              Sale
            </p>
          </div>
        </div>
      </section>

      {/* 📱 Mobile Category Dropdown */}
      {isMobileDropdownOpen && (
        <div className="fixed bottom-14 left-0 right-0 mx-4 mb-2 bg-white border rounded shadow-md z-50 sm:hidden">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* 📱 Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around items-center py-2 sm:hidden z-50">
        <div className="flex flex-col items-center text-gray-700 text-sm">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-700 text-sm">
          <FaStore className="text-xl" />
          <span className="text-xs">Shop</span>
        </div>
        <button
          onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
          className="flex flex-col items-center text-gray-700 text-sm focus:outline-none"
        >
          <FaBars className="text-xl" />
          <span className="text-xs">Category</span>
        </button>
        <div className="flex flex-col items-center text-gray-700 text-sm">
          <FaPhone className="text-xl" />
          <span className="text-xs">Contact</span>
        </div>
        <div className="flex flex-col items-center text-orange-600 text-sm">
          <FaTags className="text-xl" />
          <span className="text-xs">Sale</span>
        </div>
      </nav>
    </>
  );
}

export default Extranav;
