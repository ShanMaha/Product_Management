import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Optical = ({ optical }) => {
  const navigate = useNavigate();

  if (!optical) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  const {
    _id,
    name,
    description,
    price,
    additional_information,
    availableQuantity,
    image,
  } = optical;

  const deleteHandler = async () => {
    try {
      const response = await fetch(`/api/opticals/${_id}`, { method: "DELETE" });
      if (response.ok) {
        alert("Deleted successfully");
        navigate("/opticals"); // Navigate to the opticals page after deletion
      } else {
        console.error("Delete failed", await response.text());
      }
    } catch (err) {
      console.error("Error deleting optical:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <Link to={`/view`}>
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-md"
          />
        </Link>
        <h3 className="text-xl font-semibold mt-4 text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <h3 className="text-lg font-bold text-green-600 mt-4">Rs {price}</h3>
        <h3 className="text-gray-700 mt-2">Available: {availableQuantity}</h3>
        <p className="text-gray-500 mt-2">{additional_information}</p>
        <div className="flex justify-between items-center mt-6">
          <Button
            component={Link}
            to={`/opticals/${_id}`}
            variant="contained"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Update
          </Button>
          <Button
            onClick={deleteHandler}
            variant="contained"
            color="error"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Optical;
