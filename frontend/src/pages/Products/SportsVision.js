import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SportsVision = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical.name}`,
      state: { SportsVision: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    {
      name: "Shenyu Swimming Goggles",
      price: 2400,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_5_1.jpg",
    },
    {
      name: "Shenyu (Power -5.50)",
      price: 5500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_1_2.jpg",
    },
    {
      name: "Safety Swimming Plano",
      price: 12500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_7_1.jpg",
    },
    {
      name: "RGoggles (Power -2.00)",
      price: 4500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_3.jpg",
    },
    {
      name: "Goggles (Power -7.00)",
      price: 7500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_6_1.jpg",
    },
    {
      name: "Shenyu (Power -5.50)",
      price: 5500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_1_2.jpg",
    },
    {
      name: "Safety Swimming Plano",
      price: 12500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_7_1.jpg",
    },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredOpticals = opticals.filter((optical) =>
      optical.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOpticals(filteredOpticals);
  };

  const displayOpticals = searchTerm === "" ? opticals : filteredOpticals;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center mb-6 relative">
        <input
          className="p-3 w-full max-w-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="absolute text-gray-500 right-4 top-2.5 text-xl" />
      </div>

      <h1 className="text-3xl text-center font-bold mb-6">Sports Vision</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        Discover our exclusive collection of stylish sunglasses. Whether you're looking for a bold, fashionable statement or a timeless classic, we have a variety of designs to suit every style. Find the perfect pair to protect your eyes while staying on trend.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayOpticals.map((optical, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={{ pathname: "/view", state: { name: optical.name, image: optical.image } }} className="block">
              <div className="h-56 bg-gray-200 flex justify-center items-center">
                <img className="max-h-full max-w-full object-contain" src={optical.image} alt={optical.name} />
              </div>
            </Link>
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold mb-2">{optical.name}</h4>
              <div className="text-lg text-green-600 font-bold mb-4">Rs {optical.price}</div>
              <button
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={() => addToFavorites(optical)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/more"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
        >
          More Details
        </Link>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default SportsVision;
