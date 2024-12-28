import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name cannot be empty";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name cannot be empty";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must not be less than 8 characters";
  }

  return errors;
};

function FormSection() {
  const navigate = useNavigate(); // Hook to enable navigation

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "", // Added password to initial values
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/home"); // Navigate to the home page after form submission
    },
  });

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center text-white"
         style={{ backgroundImage: "url('https://images.pexels.com/photos/1778092/pexels-photo-1778092.jpeg')" }}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
          {formik.errors.firstName && (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          )}
          
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
          {formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}
          
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
          {formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
          
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
          />
          {formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Sign In
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-600 text-sm">
          By clicking the button, you are agreeing to our&nbsp;
          <a href="terms" className="text-blue-600 hover:underline">
            Terms and Services
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormSection;
