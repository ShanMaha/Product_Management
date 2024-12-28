import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";  // Import useNavigate
import {
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your settings for the hero slider
const heroSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

// Dummy hero images array
const heroImages = [
  "https://imatrix.com/wp-content/uploads/sites/12/2020/09/shutterstock_1716928600-1024x536.png",
  "https://www.eyefashionoptical.com/img/EFO_2.jpg",
  "https://storage.googleapis.com/website-production/uploads/2023/04/what-is-contextual-advertising.webp",
];

const C_Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();  // Initialize navigate hook

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    // Handle the logout logic
    console.log("Logout clicked");
  };

  const handleLoginClick = () => {
    navigate("/login");  // Navigate to login page
  };

  const handleSignUpClick = () => {
    navigate("/sign");  // Navigate to signup page
  };

  return (
    <div className="max-w-screen-xl mx-auto">

      {/* Header */}
      <header className="bg-gray-100 p-1 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/home" className="font-bold text-xl">
              ICARE
            </NavLink>
          </div>

          {/* Desktop view menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/sun" className="hover:text-blue-800">
              Sunglasses
            </NavLink>
            <NavLink to="/spectacles" className="hover:text-blue-800">
              Spectacles
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-800">
              Contact Lenses
            </NavLink>
            <NavLink to="/gift" className="hover:text-blue-800">
              Gift Vouchers
            </NavLink>
            <NavLink to="/accessories" className="hover:text-blue-800">
              Accessories
            </NavLink>
            <NavLink to="/sport" className="hover:text-blue-800">
              Sports Vision
            </NavLink>
            <Button
              color="inherit"
              onClick={handleLoginClick}  // Navigate to login page on click
              className="text-red-600 hover:text-red-800"
            >
              Log In
            </Button>
            <Button
              color="inherit"
              onClick={handleSignUpClick}  // Navigate to sign up page on click
              className="text-red-600 hover:text-red-800"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="my-8">
        <Slider {...heroSettings}>
          {heroImages.map((image, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  src={image}
                  alt={`Hero Image ${index + 1}`}
                  className="w-full h-96 object-cover" // Adjusted width and height
                />
              </div>
            </div>
          ))}
        </Slider>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center mt-4 font-bold"
        >
          <b>ICARE</b>
        </Typography>
      </div>

      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={showSidebar}
        onClose={toggleSidebar}
        className="md:hidden"
      >
        <List>
          <ListItem button component={NavLink} to="/sun">
            <ListItemText primary="Sunglasses" />
          </ListItem>
          <ListItem button component={NavLink} to="/spectacles">
            <ListItemText primary="Spectacles" />
          </ListItem>
          <ListItem button component={NavLink} to="/contact">
            <ListItemText primary="Contact Lenses" />
          </ListItem>
          <ListItem button component={NavLink} to="/gift">
            <ListItemText primary="Gift Vouchers" />
          </ListItem>
          <ListItem button component={NavLink} to="/accessories">
            <ListItemText primary="Accessories" />
          </ListItem>
          <ListItem button component={NavLink} to="/sport">
            <ListItemText primary="Sports Vision" />
          </ListItem>
          <ListItem button component={NavLink} to="/about/:id">
            <ListItemText primary="Shopping Cart" />
          </ListItem>
          <ListItem button component={NavLink} to="/setting">
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default C_Home;
