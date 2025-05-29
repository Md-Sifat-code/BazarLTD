import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaStore,
  FaPhone,
  FaTags,
  FaBars,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Extranav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [errorCategories, setErrorCategories] = useState(null);

  const dropdownRef = useRef();
  const mobileDropdownRef = useRef();
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoadingCategories(true);
      setErrorCategories(null);
      try {
        const response = await fetch(
          "https://baazar-ltd.onrender.com/api/category/fetch"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          throw new Error("Fetched data is not in the expected format.");
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setErrorCategories(error.message);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Close desktop dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile dropdown when clicked outside
  useEffect(() => {
    function handleClickOutsideMobile(event) {
      const mobileToggleButton = document.getElementById("mobile-category-toggle");
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target) &&
        mobileToggleButton && !mobileToggleButton.contains(event.target)
      ) {
        setIsMobileDropdownOpen(false);
      }
    }
    if (isMobileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutsideMobile);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideMobile);
  }, [isMobileDropdownOpen]);

  const handleCategorySelect = (categoryId) => {
    navigate(`/shop/category/${categoryId}`);
    setIsDropdownOpen(false); // Close desktop dropdown on selection
    setIsMobileDropdownOpen(false); // Close mobile dropdown on selection
  };

  const renderCategoryItem = (category) => (
    <div
      key={category.id}
      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
      onClick={() => handleCategorySelect(category.id)} // Updated onClick handler
    >
      <img
        src={category.picture}
        alt={category.title}
        className="w-6 h-6 object-contain rounded"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop if fallback also fails
          e.target.style.display = "none"; // Hide image if it fails to load
        }}
      />
      <span className="text-sm">{category.title}</span>
    </div>
  );

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
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded shadow-md z-20 max-h-96 overflow-y-auto">
                {isLoadingCategories && <div className="px-4 py-2 text-gray-500">Loading...</div>}
                {errorCategories && <div className="px-4 py-2 text-red-500">Error loading.</div>}
                {!isLoadingCategories && !errorCategories && categories.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">No categories found.</div>
                )}
                {!isLoadingCategories && !errorCategories && categories.map(renderCategoryItem)}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 font-medium">
              <Link to={"/"} className="cursor-pointer hover:text-orange-600 ">
                Home
              </Link>
              <Link
                to={"/shop"}
                className="cursor-pointer hover:text-orange-600 "
              >
                Shop
              </Link>
              <Link
                to={"/contact"}
                className="cursor-pointer hover:text-orange-600 "
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <Link
              to="/sale"
              className="block text-orange-600 text-center md:text-left px-4 py-2 bg-orange-100 font-bold rounded-xl cursor-pointer hover:bg-orange-200 transition"
            >
              Sale
            </Link>
          </div>
        </div>
      </section>

      {/* 📱 Mobile Category Dropdown */}
      {isMobileDropdownOpen && (
        <div
          ref={mobileDropdownRef}
          className="fixed bottom-14 left-0 right-0 mx-4 mb-2 bg-white border rounded shadow-md z-40 sm:hidden max-h-60 overflow-y-auto"
        >
          {isLoadingCategories && <div className="px-4 py-2 text-gray-500">Loading...</div>}
          {errorCategories && <div className="px-4 py-2 text-red-500">Error loading.</div>}
          {!isLoadingCategories && !errorCategories && categories.length === 0 && (
            <div className="px-4 py-2 text-gray-500">No categories found.</div>
          )}
          {!isLoadingCategories && !errorCategories && categories.map(renderCategoryItem)}
        </div>
      )}

      {/* 📱 Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around items-center py-2 sm:hidden z-50">
        <Link to="/" className="flex flex-col items-center text-gray-700 text-sm hover:text-orange-600">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/shop" className="flex flex-col items-center text-gray-700 text-sm hover:text-orange-600">
          <FaStore className="text-xl" />
          <span className="text-xs">Shop</span>
        </Link>
        <button
          id="mobile-category-toggle"
          onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
          className={`flex flex-col items-center text-sm focus:outline-none ${isMobileDropdownOpen ? "text-orange-600" : "text-gray-700"}`}
        >
          <FaBars className="text-xl" />
          <span className="text-xs">Category</span>
        </button>
        <Link to="/contact" className="flex flex-col items-center text-gray-700 text-sm hover:text-orange-600">
          <FaPhone className="text-xl" />
          <span className="text-xs">Contact</span>
        </Link>
        <Link to="/sale" className="flex flex-col items-center text-orange-600 text-sm hover:text-orange-700">
          <FaTags className="text-xl" />
          <span className="text-xs">Sale</span>
        </Link>
      </nav>
    </>
  );
}

export default Extranav;