import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const C_Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const images = [
    "https://imatrix.com/wp-content/uploads/sites/12/2020/09/shutterstock_1716928600-1024x536.png",
    "https://www.eyefashionoptical.com/img/EFO_2.jpg",
    "https://storage.googleapis.com/website-production/uploads/2023/04/what-is-contextual-advertising.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-white text-black max-w-screen-xl mx-auto">
      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={showSidebar} onClose={toggleSidebar}>
        <List>
          <ListItem button component={NavLink} to="/" onClick={toggleSidebar}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/about/:id" onClick={toggleSidebar}>
            <ListItemText primary="CART" />
          </ListItem>
          <ListItem button component={NavLink} to="/more" onClick={toggleSidebar}>
            <ListItemText primary="More" />
          </ListItem>
        </List>
      </Drawer>

      {/* Header Section */}
      <header className="px-4 py-6">
        <div className="flex justify-between items-center">
          <nav className="flex space-x-6">
            <NavLink to="/sun" className="text-xl font-semibold hover:text-blue-600">Sunglasses</NavLink>
            <NavLink to="/spectacles" className="text-xl font-semibold hover:text-blue-600">Spectacles</NavLink>
            <NavLink to="/contact" className="text-xl font-semibold hover:text-blue-600">Contact Lenses</NavLink>
            <NavLink to="/gift" className="text-xl font-semibold hover:text-blue-600">Gift Vouchers</NavLink>
            <NavLink to="/accessories" className="text-xl font-semibold hover:text-blue-600">Accessories</NavLink>
            <NavLink to="/sport" className="text-xl font-semibold hover:text-blue-600">Sports Vision</NavLink>
          </nav>
          <Button
            color="primary"
            component={NavLink}
            to="/sign"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            Sign In
          </Button>
        </div>
        <h1 className="text-4xl font-bold text-center mt-6">Welcome to ICARE</h1>
      </header>

      {/* Image Slider Section */}
      <div className="my-8">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </Slider>

        {/* CTA Section */}
        <div className="text-center mt-6">
          <Typography variant="h5" component="div" className="font-bold">
            ICARE
          </Typography>
          <div className="mt-6">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/admin")}
              className="px-8 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              Go to Admin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_Home;
