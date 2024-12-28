import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// Filter options (could be dynamic in your case)
const filters = {
  color: ["Black", "Blue", "Red", "Green", "Yellow"],
  gender: ["Male", "Female", "Kids", "Unisex", "Aged"],
  age: ["Kids", "Adults", "Seniors", "Teens", "Young Adults"],
  price: ["Under Rs 500", "Rs 500 - Rs 1000", "Rs 1000 - Rs 2000", "Rs 2000 - Rs 5000", "Above Rs 5000"],
  rating: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
};

const products = [
  { name: "Straps - Black", price: 300, image: "/src/assets/products/black_strap.jpg", category: "Black", gender: "Unisex", age: "Adults", rating: 5 },
  { name: "Ear Hook Pair", price: 400, image: "/src/assets/products/ear_hook.jpg", category: "Blue", gender: "Male", age: "Adults", rating: 4 },
  // Add more products as needed
];

const SidebarFiltersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    color: "",
    gender: "",
    age: "",
    price: "",
    rating: "",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e, filterKey) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterKey]: e.target.value,
    });
  };

  const filteredProducts = products.filter((product) => {
    // Filtering based on selected filters
    return (
      (selectedFilters.color === "" || product.category === selectedFilters.color) &&
      (selectedFilters.gender === "" || product.gender === selectedFilters.gender) &&
      (selectedFilters.age === "" || product.age === selectedFilters.age) &&
      (selectedFilters.price === "" || product.price <= parseInt(selectedFilters.price.split(" ")[1])) &&
      (selectedFilters.rating === "" || product.rating >= parseInt(selectedFilters.rating.split(" ")[0]))
    );
  });

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-gray-100 p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Shop by Category</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md w-full lg:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="ml-2 text-gray-500" />
        </div>

        {/* Filters Section */}
        {Object.keys(filters).map((filterKey) => (
          <div key={filterKey} className="mb-4">
            <h3 className="font-semibold text-gray-700">{filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}</h3>
            <select
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              onChange={(e) => handleFilterChange(e, filterKey)}
              value={selectedFilters[filterKey]}
            >
              <option value="">Select {filterKey}</option>
              {filters[filterKey].map((filterItem) => (
                <option key={filterItem} value={filterItem}>
                  {filterItem}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Main Content: Filtered Products */}
      <div className="lg:w-3/4 p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Filtered Products</h1>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">Rs {product.price}</p>
              <button
                onClick={() => navigate(`/about/${product.name}`)}
                className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          {/* Previous Button */}
          <button
            disabled={true} // You can make it functional for actual pagination
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 disabled:bg-gray-200 focus:outline-none"
          >
            Previous
          </button>

          {/* Pagination Text */}
          <div className="text-sm text-gray-600">
            Showing {filteredProducts.length} results
          </div>

          {/* Next Button */}
          <button
            disabled={true} // Same as Previous, can be activated when implementing pagination
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 disabled:bg-gray-200 focus:outline-none"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarFiltersPage;
