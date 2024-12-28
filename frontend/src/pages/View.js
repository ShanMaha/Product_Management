import React, { useState } from 'react';
import QRScanner from './User/QRScanner'; // Import the QRScanner component
import { useLocation } from 'react-router-dom';

const View = () => {
  const [bigImages, setBigImages] = useState({}); // State to store the big image URLs for each optical card
  const location = useLocation();
  const { name = '', image = '' } = location.state || {};

  const opticalItems = [
    {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      description: "Stylish sunglasses with UV protection.",
      price: 30000,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000362_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000363_1.jpg",
      ]
    },
    {
      id: 2,
      name: "Burberry BE4292",
      description: "Classic sunglasses with a modern twist.",
      price: 33500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000157_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000158_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000159_1.jpg",
      ]
    },
    {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      description: "Stylish sunglasses with UV protection.",
      price: 30000,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000362_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000363_1.jpg",
      ]
    },
    {
      id: 2,
      name: "Burberry BE4292",
      description: "Classic sunglasses with a modern twist.",
      price: 33500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000157_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000158_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000159_1.jpg",
      ]
    },
    {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      description: "Stylish sunglasses with UV protection.",
      price: 30000,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000362_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000363_1.jpg",
      ]
    },
    {
      id: 2,
      name: "Burberry BE4292",
      description: "Classic sunglasses with a modern twist.",
      price: 33500,
      additional_information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo urna metus, ac eleifend mi fermentum id.",
      images: [
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000157_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000158_1.jpg",
        "https://shop.visioncare.lk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dsc000159_1.jpg",
      ]
    },
    // Add other optical items here...
  ];

  // Function to handle click on small image
  const handleSmallImageClick = (opticalId, image) => {
    setBigImages((prevImages) => ({
      ...prevImages,
      [opticalId]: image,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">{name}</h1>
      <QRScanner /> {/* Render the QRScanner component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opticalItems.map((optical) => (
          <div className="card max-w-xs bg-white rounded-lg shadow-md overflow-hidden" key={optical.id}>
            <div className="big-image">
              <img
                src={bigImages[optical.id] || optical.images[0]}
                alt={optical.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="small-images flex justify-center space-x-2 mt-4 mb-4">
              {optical.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={optical.name}
                  className="w-16 h-16 object-cover cursor-pointer border border-gray-300 rounded-md hover:border-indigo-500"
                  onClick={() => handleSmallImageClick(optical.id, image)}
                />
              ))}
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800">{optical.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{optical.description}</p>
              <div className="price-info mt-4">
                <p className="text-lg font-bold text-gray-900">Rs {optical.price}</p>
              </div>
              <div className="additional-info text-sm text-gray-600 mt-2">
                <p>{optical.additional_information}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default View;
