import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6 text-center">
          <img src={Logo} alt="Logo" className="mx-auto w-24 h-24" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome back!</h2>
        <p className="text-gray-600 text-center mb-6">Please enter your details</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-gray-700">Agree</span>
            </label>
          </div>

          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline block text-right"
          >
            Forgot password?
          </a>

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Log In
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-blue-800 border-gray-300 py-2 rounded hover:bg-gray-200"
              onClick={() => window.location.href = "https://mail.google.com"}
            >
              <img src={GoogleSvg} alt="Google" className="w-5 h-5 mr-2" />
              Log In with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-blue-800 border-gray-300 py-2 rounded hover:bg-gray-200"
              onClick={() => window.location.href = "https://mail.google.com"}
            >
              <img src={GoogleSvg} alt="Google" className="w-5 h-5 mr-2" />
              Log In with Email
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
              onClick={() => window.location.href = "https://facebook.com"}
            >
              Log In with Facebook
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/sign" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
