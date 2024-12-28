import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ContactLenses = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (lens) => {
    setFavorites([...favorites, lens]);
    navigate({
      pathname: `/about/${lens.name}`,
      state: { lens: lens },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLenses, setFilteredLenses] = useState([]);

  const lenses = [
    {
      name: "Renu Multi-Purpose Solution 60ml",
      price: 1000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/0/60ml_renu.jpg",
    },
    {
      name: "Bio True - Multi Purpose Solution 60ml",
      price: 1100,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_1_15.jpg",
    },
    {
      name: "Renu Multi-Purpose Solution 120ml",
      price: 2500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/120mlss_1.jpg",
    },
    {
      name: "Bio True - Multi Purpose Solution 120ml",
      price: 4500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_8.jpg",
    },
    {
      name: "Twinkle Cosmetic Contact Lenses",
      price: 1500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/w/twinkle_1000x1000_s.jpg",
    },
    {
      name: "Bausch + Lomb SofLens Daily Disposable",
      price: 5500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bausch-lomb-10-pack_1.jpg",
    },
    {
      name: "Colored Contact Lenses - Jade",
      price: 2500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/l/clj_1.jpg",
    },
    {
      name: "Colored Contact Lenses - Pacific",
      price: 5560,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/l/clj_1.jpg",
    },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredLenses = lenses.filter((lens) =>
      lens.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLenses(filteredLenses);
  };

  const displayLenses = searchTerm === "" ? lenses : filteredLenses;

  return (
    <div className="container mx-auto p-4 bg-gray-100">
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

      <h1 className="text-center text-2xl font-semibold mb-4">Contact Lenses</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        Discover our exclusive collection of stylish sunglasses. Whether you're looking for a bold, fashionable statement or a timeless classic, we have a variety of designs to suit every style. Find the perfect pair to protect your eyes while staying on trend.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayLenses.map((lens, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:translate-y-[-5px] hover:shadow-2xl"
          >
            <Link
              to={{
                pathname: "/view",
                state: { name: lens.name, image: lens.image },
              }}
            >
              <img
                className="w-full h-56 object-cover"
                src={lens.image}
                alt={lens.name}
              />
            </Link>

            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{lens.name}</h4>
              <div className="text-xl text-green-500 font-bold mt-2">Rs {lens.price}</div>
              <button
                className="mt-4 w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => addToFavorites(lens)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/more"
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          More Details
        </Link>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactLenses;
