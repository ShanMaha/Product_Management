import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Accessorries = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (accessory) => {
    setFavorites([...favorites, accessory]);
    navigate({
      pathname: `/about/${accessory.name}`,
      state: { accessory: accessory },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const accessories = [
    { name: "Straps - Black", price: 300, image: "/src/assets/products/black_strap.jpg", category: "Black", gender: "Unisex", age: "Adults" },
    { name: "Ear Hook Pair", price: 400, image: "/src/assets/products/ear_hook.jpg", category: "Blue", gender: "Male", age: "Adults" },
    { name: "Vehicle Sunglass Holder Clip", price: 2500, image: "/src/assets/products/sunglass_holder.jpg", category: "Red", gender: "Female", age: "Adults" },
    // Add more products here
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAccessories = accessories.filter((accessory) => {
    return (
      (selectedColor === "" || accessory.category === selectedColor) &&
      (selectedGender === "" || accessory.gender === selectedGender) &&
      (selectedAge === "" || accessory.age === selectedAge) &&
      (selectedPrice === "" || accessory.price <= parseInt(selectedPrice))
    );
  });

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      {/* Search Bar */}
      <div className="flex justify-center items-center mb-6 relative">
        <input
          className="w-72 p-2 border border-gray-300 rounded-md text-lg"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="absolute text-gray-500 right-4 top-2.5 text-xl" />
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Filter by Color */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedColor(e.target.value)}
          value={selectedColor}
        >
          <option value="">Select Color</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
        </select>

        {/* Filter by Gender */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedGender(e.target.value)}
          value={selectedGender}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        {/* Filter by Age */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedAge(e.target.value)}
          value={selectedAge}
        >
          <option value="">Select Age</option>
          <option value="Adults">Adults</option>
          <option value="Kids">Kids</option>
          <option value="Teens">Teens</option>
        </select>

        {/* Filter by Price */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-md"
          onChange={(e) => setSelectedPrice(e.target.value)}
          value={selectedPrice}
        >
          <option value="">Select Price</option>
          <option value="500">Under Rs 500</option>
          <option value="1000">Rs 500 - Rs 1000</option>
          <option value="2000">Rs 1000 - Rs 2000</option>
          <option value="5000">Rs 2000 - Rs 5000</option>
          <option value="50000">Above Rs 5000</option>
        </select>
      </div>

      <h1 className="text-center text-2xl font-semibold mb-6">Accessories</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        Discover our exclusive collection of stylish sunglasses. Whether you're looking for a bold, fashionable statement or a timeless classic, we have a variety of designs to suit every style. Find the perfect pair to protect your eyes while staying on trend.
      </p>
      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {filteredAccessories.map((accessory, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
            <img
              src={accessory.image}
              alt={accessory.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-gray-800">{accessory.name}</h3>
            <p className="text-gray-600">Rs {accessory.price}</p>
            <button
              onClick={() => addToFavorites(accessory)}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center mb-6">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default Accessorries;
