import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OpticalDetail = () => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    additional_information: "",
    availableQuantity: "",
  });
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/opticals/${id}`);
        const opticalData = data.optical;
        setInputs({
          name: opticalData.name || "",
          description: opticalData.description || "",
          price: opticalData.price?.toString() || "",
          image: opticalData.image || "",
          additional_information: opticalData.additional_information || "",
          availableQuantity: opticalData.availableQuantity?.toString() || "",
        });
        setChecked(opticalData.available || false);
      } catch (error) {
        console.error("Error fetching optical details:", error);
        toast.error("Failed to fetch optical details. Please try again.", {
          position: "top-center",
        });
      }
    };

    fetchHandler();
  }, [id]);

  const sendRequest = async (e) => {
    e.preventDefault();

    if (parseInt(inputs.availableQuantity, 10) < 200) {
      toast.error("Available quantity must be at least 200.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    try {
      await axios.put(`http://localhost:4000/opticals/${id}`, {
        ...inputs,
        available: checked,
      });

      toast.success("Optical updated successfully!", {
        position: "top-center",
        autoClose: 5000,
      });
      navigate("/opticals");
    } catch (error) {
      console.error("Error updating optical:", error);
      toast.error("Error updating optical. Please try again.", {
        position: "top-center",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ToastContainer position="top-center" />
      <form onSubmit={sendRequest} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Optical</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            value={inputs.name}
            onChange={handleChange}
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <input
            value={inputs.description}
            onChange={handleChange}
            name="description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <input
            value={inputs.price}
            onChange={handleChange}
            name="price"
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
          <input
            value={inputs.additional_information}
            onChange={handleChange}
            name="additional_information"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Available Quantity</label>
          <input
            value={inputs.availableQuantity}
            onChange={handleChange}
            name="availableQuantity"
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
          <input
            value={inputs.image}
            onChange={handleChange}
            name="image"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Available</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Optical
        </button>
      </form>
    </div>
  );
};

export default OpticalDetail;
