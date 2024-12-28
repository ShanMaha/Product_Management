import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Navibar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <NavLink to="/" className="hover:text-blue-200">ICARE</NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/sun"
            className="text-white text-lg font-medium hover:text-blue-200"
          >
            Sunglasses
          </NavLink>
          <NavLink
            to="/spectacles"
            className="text-white text-lg font-medium hover:text-blue-200"
          >
            Spectacles
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white text-lg font-medium hover:text-blue-200"
          >
            Contact Lenses
          </NavLink>
          <NavLink
            to="/gift"
            className="text-white text-lg font-medium hover:text-blue-200"
          >
            Gift Vouchers
          </NavLink>
          <NavLink
            to="/accessories"
            className="text-white text-lg font-medium hover:text-blue-200"
          >
            Accessories
          </NavLink>
          <NavLink
            to="/sport"
            className="text-white text-lg font-medium hover:text-blue-200"
          >
            Sports Vision
          </NavLink>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <Button
            color="primary"
            component={NavLink}
            to="/sign"
            className="text-white font-semibold hover:bg-blue-700"
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl"
            aria-label="Open Menu"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-blue-600 text-white text-center p-4 space-y-4`}
      >
        <NavLink
          to="/sun"
          className="block text-lg font-medium hover:text-blue-200"
          onClick={toggleMenu}
        >
          Sunglasses
        </NavLink>
        <NavLink
          to="/spectacles"
          className="block text-lg font-medium hover:text-blue-200"
          onClick={toggleMenu}
        >
          Spectacles
        </NavLink>
        <NavLink
          to="/contact"
          className="block text-lg font-medium hover:text-blue-200"
          onClick={toggleMenu}
        >
          Contact Lenses
        </NavLink>
        <NavLink
          to="/gift"
          className="block text-lg font-medium hover:text-blue-200"
          onClick={toggleMenu}
        >
          Gift Vouchers
        </NavLink>
        <NavLink
          to="/accessories"
          className="block text-lg font-medium hover:text-blue-200"
          onClick={toggleMenu}
        >
          Accessories
        </NavLink>
        <NavLink
          to="/sport"
          className="block text-lg font-medium hover:text-blue-200"
          onClick={toggleMenu}
        >
          Sports Vision
        </NavLink>
        <div className="mt-4">
          <Button
            color="primary"
            component={NavLink}
            to="/sign"
            className="text-white font-semibold hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
