import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Spectacles = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical.name}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    { name: "JA9 2203 C9 56", price: 10200, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000477.jpg" },
    { name: "Giordano 01229 52", price: 9500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/76531122-0df6-4d8c-9dc5-8d0aa74af9b7.jpg" },
    { name: "Che 528 C34 49", price: 12500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_165.jpg" },
    { name: "Reebok 8014 BLK 52-18-135", price: 40500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_52.jpg" },
    { name: "Che 602 C17 53", price: 33500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_155.jpg" },
    { name: "Carlo Rino 1249 C14", price: 18000, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0094_merged_.jpg" },
    { name: "Giordano 01229 52", price: 13000, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/76531122-0df6-4d8c-9dc5-8d0aa74af9b7.jpg" },
    { name: "Che 624 C6S 53", price: 20500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_179.jpg" },
    { name: "Bonia BNI1423 48", price: 14500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_51.jpg" },
    { name: "SB Polo & Racquet", price: 15500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_98.jpg" },
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
      <div className="flex justify-center items-center mb-6">
        <input
          className="p-3 w-full max-w-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="absolute text-gray-500 right-4 top-2.5 text-xl" />
      </div>

      <h1 className="text-3xl text-center font-bold mb-6">Spectacles</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        Discover our exclusive collection of stylish sunglasses. Whether you're looking for a bold, fashionable statement or a timeless classic, we have a variety of designs to suit every style. Find the perfect pair to protect your eyes while staying on trend.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayOpticals.map((optical, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/view`} className="block">
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

export default Spectacles;
