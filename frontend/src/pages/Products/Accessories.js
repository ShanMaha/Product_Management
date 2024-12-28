import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Accessorries = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical.name}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const opticals = [
    { name: "Straps - Black", price: 300, image: "/src/assets/products/black_strap.jpg", category: "Black", gender: "Unisex", age: "Adults" },
    { name: "Ear Hook Pair", price: 400, image: "/src/assets/products/ear_hook.jpg", category: "Blue", gender: "Male", age: "Adults" },
    { name: "Vehicle Sunglass Holder Clip", price: 2500, image: "/src/assets/products/sunglass_holder.jpg", category: "Red", gender: "Female", age: "Adults" },
    // Add more products here
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOpticals = opticals.filter((optical) => {
    return (
      (selectedColor === "" || optical.category === selectedColor) &&
      (selectedGender === "" || optical.gender === selectedGender) &&
      (selectedAge === "" || optical.age === selectedAge) &&
      (selectedPrice === "" || optical.price <= parseInt(selectedPrice))
    );
  });

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#f5f5f5",
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    searchInput: {
      width: "300px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
    },
    searchIcon: {
      marginLeft: "-30px",
      color: "#888",
      cursor: "pointer",
    },
    filterRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    filterButton: {
      padding: "10px 15px",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.container}>
      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch style={styles.searchIcon} />
      </div>

      {/* Filter Row */}
      <div style={styles.filterRow}>
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

      <h1 className="text-center font-bold text-xl mb-6">Accessories</h1>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredOpticals.map((optical, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
            <img
              src={optical.image}
              alt={optical.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-gray-800">{optical.name}</h3>
            <p className="text-gray-600">Rs {optical.price}</p>
            <button
              onClick={() => addToFavorites(optical)}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessorries;
