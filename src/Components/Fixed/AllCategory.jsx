import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://baazar-ltd.onrender.com/api/category/fetch"
        );
        const data = await res.json();
        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section>
      <div className="text-start container mx-auto max-w-7xl font-bold text-2xl mb-6">
        <h1>All Categories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto max-w-7xl">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop/category/${category.id}`}
            className="flex flex-col items-center text-center p-2 bg-gray-200 rounded shadow hover:shadow-md transition"
          >
            <img
              src={category.picture}
              alt={category.title}
              className="w-32 h-32 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{category.title.trim()}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllCategory;
