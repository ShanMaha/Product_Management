import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Sunglasses = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical._id}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      price: 30000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
    },
    {
      id: 2,
      name: "Arnette AN4321 278677",
      price: 33500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      id: 3,
      name: "Coach HC8350U 57088H",
      price: 20500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/coach_8350u.png",
    },
    {
      id: 4,
      name: "Coach HC7103 9331B8 64",
      price: 40500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc00070_-_edited_1.jpg",
    },
    {
      id: 5,
      name: "Arnette AN4321 278677",
      price: 33500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      id: 6,
      name: "David Beckham DB7094 GS I46",
      price: 18000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000405.jpg",
    },
    {
      id: 7,
      name: "Hugo Boss 1240/S 6070",
      price: 25000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
    },
    {
      name: "Michael Kors 338273 2N",
      price: 29500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0084_4.jpg",
    },
    {
      name: "Paris Hilton 802002S",
      price: 40500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000432.jpg",
    },
    {
      name: "DKNY DY4146 53-20-140",
      price: 15500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_60.jpg",
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

      <h1 className="text-center text-2xl font-semibold mb-6">Sunglasses</h1>

      {/* Description Paragraph */}
      <p className="text-center text-lg mb-8 text-gray-700">
        Discover our exclusive collection of stylish sunglasses. Whether you're looking for a bold, fashionable statement or a timeless classic, we have a variety of designs to suit every style. Find the perfect pair to protect your eyes while staying on trend.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {displayOpticals.map((optical, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Link
              to={{
                pathname: "/view",
                state: { name: optical.name, image: optical.image },
              }}
            >
              <img
                className="w-full h-56 object-cover rounded-md mb-4"
                src={optical.image}
                alt={optical.name}
              />
            </Link>
            <h3 className="font-semibold text-gray-800 mb-2">{optical.name}</h3>
            <div className="text-green-600 font-bold text-lg mb-4">
              Rs {optical.price}
            </div>
            <button
              onClick={() => addToFavorites(optical)}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center">
        <Link
          to="/more"
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Sunglasses;
