import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddOptical = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    additional_information: "",
    image: "",
    availableQuantity: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:4000/opticals", {
        name: String(inputs.name),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        additional_information: String(inputs.additional_information),
        available: Boolean(checked),
        availableQuantity: parseInt(inputs.availableQuantity),
      });
      alert("Optical successfully added");
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!inputs.name || !inputs.description || !inputs.price || !inputs.image || !inputs.availableQuantity) {
        alert("Please fill in all required fields.");
        return;
      }
      if (isNaN(Number(inputs.price)) || isNaN(Number(inputs.availableQuantity))) {
        alert("Price and Available Quantity must be numeric values.");
        return;
      }

      if (parseInt(inputs.availableQuantity) < 200) {
        alert("Available quantity must be at least 200.");
        return;
      }

      const addedOptical = await sendRequest();

      if (addedOptical.availableQuantity < 10) {
        const message = `Product "${addedOptical.name}" has a low quantity (${addedOptical.availableQuantity}). Please check.`;
        alert(message);
      }

      navigate("/opticals");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with Navigation */}
      <nav className="bg-blue-600 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <button
            className="text-white font-medium hover:underline"
            onClick={() => navigate("/add")}
          >
            Home
          </button>
          <button
            className="text-white font-medium hover:underline"
            onClick={() => navigate("/sun")}
          >
            View Optical List
          </button>
          <button
            className="text-white font-medium hover:underline"
            onClick={() => navigate("/view")}
          >
            Show the List
          </button>
          <button
            className="text-white font-medium hover:underline"
            onClick={() => navigate("/list")}
          >
            Data
          </button>
        </div>
      </nav>

      {/* Form for Adding Optical */}
      <div className="flex justify-center items-center flex-grow py-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Optical</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={inputs.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={inputs.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="additional_information"
              placeholder="Additional Information"
              value={inputs.additional_information}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={inputs.image}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="availableQuantity"
              placeholder="Available Quantity"
              value={inputs.availableQuantity}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="mr-2"
              />
              <label>Available</label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Add Optical
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOptical;
