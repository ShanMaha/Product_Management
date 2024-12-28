import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const GiftVouchers = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (voucher) => {
    setFavorites([...favorites, voucher]);
    navigate({
      pathname: `/about/${voucher.name}`,
      state: { voucher: voucher },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVouchers, setFilteredVouchers] = useState([]);

  const vouchers = [
    {
      name: "Gift Vouchers Rs.1000",
      price: 1000,
      image: "https://www.torgaoptical.co.za/images/thumbs/1370124_r2000-gift-card.png",
    },
    {
      name: "Gift Vouchers Rs.5000",
      price: 5000,
      image: "https://www.saxandwoodwind.com.au/DesktopModules/Revindex.Dnn.RevindexStorefront/Portals/99/Gallery/8bfa4ec9-4b95-4309-909c-ad68e6a9723b.jpg",
    },
    {
      name: "Gift Vouchers Rs.8000",
      price: 8000,
      image: "https://www.torgaoptical.co.za/images/thumbs/1370130_r3000-gift-card.png",
    },
    {
      name: "Gift Vouchers Rs.10000",
      price: 10000,
      image: "https://corbridgelarder.co.uk/cdn/shop/products/CORBRIDGE-LARDER-VOUCHER-ARTWORK_800x.jpg?v=16388884914",
    },
    {
      name: "Gift Vouchers Rs.15000",
      price: 15000,
      image: "https://valuevisionopticalph.com/cdn/shop/products/TEMPLATE.jpg?v=1605797976",
    },
    {
      name: "Gift Vouchers Rs.18000",
      price: 18000,
      image: "https://mcgreals.ie/wp-content/uploads/2023/07/Gift-Voucher-1.jpg",
    },
    {
      name: "Gift Vouchers Rs.20000",
      price: 20000,
      image: "https://www.babyonline.co.nz/cdn/shop/products/Customdimensions800x600px_800x.jpg?v=1689854935",
    },
    {
      name: "Gift Vouchers Rs.50000",
      price: 50000,
      image: "https://imaginevinyl.com.au/wp-content/uploads/2021/11/2E4A0DB1-DC48-482B-BEA6-60777195E0E5.jpeg",
    },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredVouchers = vouchers.filter((voucher) =>
      voucher.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVouchers(filteredVouchers);
  };

  const displayVouchers = searchTerm === "" ? vouchers : filteredVouchers;

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

      <h1 className="text-center text-2xl font-semibold mb-4">Gift Vouchers</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        Discover our exclusive collection of stylish sunglasses. Whether you're looking for a bold, fashionable statement or a timeless classic, we have a variety of designs to suit every style. Find the perfect pair to protect your eyes while staying on trend.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayVouchers.map((voucher, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:translate-y-[-5px] hover:shadow-2xl"
          >
            <Link
              to={{
                pathname: "/view",
                state: { name: voucher.name, image: voucher.image },
              }}
            >
              <img
                className="w-full h-56 object-cover"
                src={voucher.image}
                alt={voucher.name}
              />
            </Link>

            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{voucher.name}</h4>
              <div className="text-xl text-green-500 font-bold mt-2">Rs {voucher.price}</div>
              <button
                className="mt-4 w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => addToFavorites(voucher)}
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

export default GiftVouchers;
