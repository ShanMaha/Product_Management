import React from "react";

const About = ({ favorites, setFavorites }) => {
  // Function to handle quantity change
  const handleQuantityChange = (sunglass, quantity) => {
    // Ensure the quantity does not go below 1
    const updatedFavorites = favorites.map(item =>
      item.name === sunglass.name ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setFavorites(updatedFavorites);
  };

  // Calculate total price and items count
  const totalItems = favorites.reduce((acc, sunglass) => acc + sunglass.quantity, 0);
  const totalPrice = favorites.reduce(
    (acc, sunglass) => acc + sunglass.price * sunglass.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-6">Cart</h1>

      {/* Display item count and total price */}
      <div className="mb-6">
        <div className="flex justify-between text-lg font-semibold">
          <p>Total Items: <span className="text-gray-700">{totalItems}</span></p>
          <p>Total Price: <span className="text-green-500">Rs {totalPrice}</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.length === 0 ? (
          <p className="text-center text-lg text-gray-500 col-span-4">No sunglasses added to favorites yet.</p>
        ) : (
          favorites.map((sunglass, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sunglass.image}
                alt={sunglass.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-semibold">{sunglass.name}</p>
                <div className="flex items-center justify-between mt-3">
                  {/* Quantity control */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(sunglass, sunglass.quantity - 1)}
                      className="px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{sunglass.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(sunglass, sunglass.quantity + 1)}
                      className="px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold">Rs {sunglass.price * sunglass.quantity}</p>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
