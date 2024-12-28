import React, { useState } from 'react';

function QRScanner() {
  const [productName, setProductName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = event => {
    setProductName(event.target.value);
    setError(''); // Reset error when user starts typing
  };

  const handleSearch = event => {
    event.preventDefault();
    if (!productName) {
      setError('Please enter a product name');
      return;
    }
    const searchQuery = encodeURIComponent(productName);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.open(searchUrl, '_blank');
    setProductName(''); // Clear the input field after search
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Search Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mb-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Search Product Online
        </h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
              Enter Product Name:
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={handleInputChange}
              placeholder="E.g., Product Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Search Online
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      </div>

      {/* Optical Images and Names */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-screen-xl">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Optical 1"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <p className="text-gray-700">Optical 1</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Optical 2"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <p className="text-gray-700">Optical 2</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Optical 3"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <p className="text-gray-700">Optical 3</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Optical 4"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <p className="text-gray-700">Optical 4</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Optical 5"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <p className="text-gray-700">Optical 5</p>
        </div>
      </div>
      
    </div>
    
  );
}

export default QRScanner;
