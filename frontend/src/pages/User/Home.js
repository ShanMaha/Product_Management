import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Slider from "react-slick";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "./Footer"; // Import Footer from your folder

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  // Image Sets for each category
  const heroImages = [
    "https://imatrix.com/wp-content/uploads/sites/12/2020/09/shutterstock_1716928600-1024x536.png",
    "https://www.eyefashionoptical.com/img/EFO_2.jpg",
    "https://storage.googleapis.com/website-production/uploads/2023/04/what-is-contextual-advertising.webp",
  ];

  const sunglassesImages = [
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000145_1.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/o/coach_8350u.png",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0084_4.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_21.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0222_2.jpg",
  ];

  const spectaclesImages = [
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0122_copy.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_196.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_197.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_195.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_194.jpg",
  ];

  const sportsVisionImages = [
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/6/0/60ml_renu.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_1_15.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_2.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/6/0/60ml_renu.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_1_15.jpg",
  ];

  const contactLensesImages = [
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/s/t/straps_brown.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_192_1.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/l/clip2_grey.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/s/a/safety-goggles-2.jpg",
    "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/s/t/straps_brown.jpg",
     "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/c/l/clip2_grey.jpg",
  ];



  // Hero slider settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Category slider settings
  const categorySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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

            <div className="flex items-center space-x-4">
              <IconButton color="inherit" component={NavLink} to="/about/:id">
                <ShoppingCartIcon className="text-black" />
              </IconButton>
              <IconButton color="inherit" component={NavLink} to="/setting">
                <SettingsIcon className="text-black" />
              </IconButton>
              <Button
                color="inherit"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800"
              >
                Logout
              </Button>
            </div>
          </div>

          {/* Mobile view menu */}
          <div className="md:hidden">
            <IconButton onClick={toggleSidebar} color="inherit">
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header>
      {/* Hero Slider */}
      <div className="my-10">
  <Slider {...heroSettings}>
    {heroImages.map((image, index) => (
      <div key={index}>
        <div className="relative">
          <img
            src={image}
            alt={`Hero Image ${index + 1}`}
            className="w-full h-100 object-cover" // Increased width of hero slider here
          />
        </div>
      </div>
    ))}
  </Slider>
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

      {/* Sunglasses Section */}
      <div className="my-8">
        <Typography variant="h4" component="div" className="font-bold text-center mb-4">
          Sunglasses
        </Typography>
        <Typography variant="body1" component="div" className="text-center mb-4">
          Discover a wide variety of stylish sunglasses that protect your eyes and elevate your look. Explore our collection and find your perfect pair today!
        </Typography>
        <Slider {...categorySettings}>
          {sunglassesImages.map((image, index) => (
            <div key={index} className="bg-white p-2 shadow-md rounded-lg">
              <img src={image} alt={`Sunglasses ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
          <Button variant="contained" color="primary" component={NavLink} to="/sun">
            Explore More
          </Button>
        </div>
      </div>

      {/* Spectacles Section */}
      <div className="my-8">
        <Typography variant="h4" component="div" className="font-bold text-center mb-4">
          Spectacles
        </Typography>
        <Typography variant="body1" component="div" className="text-center mb-4">
          Explore a range of high-quality spectacles that combine comfort and fashion. Find the perfect fit for your style and vision needs.
        </Typography>
        <Slider {...categorySettings}>
          {spectaclesImages.map((image, index) => (
            <div key={index} className="bg-white p-2 shadow-md rounded-lg">
              <img src={image} alt={`Spectacles ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
          <Button variant="contained" color="primary" component={NavLink} to="/spectacles">
            Explore More
          </Button>
        </div>
      </div>

      {/* Sports Vision Section */}
      <div className="my-8">
        <Typography variant="h4" component="div" className="font-bold text-center mb-4">
          Sports Vision
        </Typography>
        <Typography variant="body1" component="div" className="text-center mb-4">
          Enhance your performance with our specialized sports vision products. Designed to give you an edge in every game, explore our collection now!
        </Typography>
        <Slider {...categorySettings}>
          {sportsVisionImages.map((image, index) => (
            <div key={index} className="bg-white p-2 shadow-md rounded-lg">
              <img src={image} alt={`Sports Vision ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
          <Button variant="contained" color="primary" component={NavLink} to="/sport">
            Explore More
          </Button>
        </div>
      </div>

      {/* Contact Lenses Section */}
      <div className="my-8">
        <Typography variant="h4" component="div" className="font-bold text-center mb-4">
          Contact Lenses
        </Typography>
        <Typography variant="body1" component="div" className="text-center mb-4">
          Browse through our variety of contact lenses for everyday comfort and crystal-clear vision. Whether for corrective or cosmetic purposes, we’ve got you covered.
        </Typography>
        <Slider {...categorySettings}>
          {contactLensesImages.map((image, index) => (
            <div key={index} className="bg-white p-2 shadow-md rounded-lg">
              <img src={image} alt={`Contact Lenses ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
          <Button variant="contained" color="primary" component={NavLink} to="/contact">
            Explore More
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
