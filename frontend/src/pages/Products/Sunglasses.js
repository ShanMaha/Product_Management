import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Sunglasses = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical._id}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    {
      id: 1,
      name: "Hugo Boss 1240/S 6070",
      price: 30000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
    },
    {
      id: 2,
      name: "Arnette AN4321 278677",
      price: 33500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      id: 3,
      name: "Coach HC8350U 57088H",
      price: 20500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/coach_8350u.png",
    },
    {
      id: 4,
      name: "Coach HC7103 9331B8 64",
      price: 40500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc00070_-_edited_1.jpg",
    },
    {
      id: 5,
      name: "Arnette AN4321 278677",
      price: 33500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/an4321-removebg-preview_1.png",
    },
    {
      id: 6,
      name: "David Beckham DB7094 GS I46",
      price: 18000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000405.jpg",
    },
    {
      id: 7,
      name: "Hugo Boss 1240/S 6070",
      price: 25000,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000361_1.jpg",
    },
    {
      name: "Michael Kors 338273 2N",
      price: 29500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0084_4.jpg",
    },
    {
      name: "Paris Hilton 802002S",
      price: 40500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000432.jpg",
    },
    {
      name: "DKNY DY4146 53-20-140",
      price: 15500,
      image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_60.jpg",
    },
  ];

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredOpticals = opticals.filter((optical) =>
      optical.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOpticals(filteredOpticals);
  };

  const displayOpticals = searchTerm === "" ? opticals : filteredOpticals;

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#f5f5f5",
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    searchInput: {
      width: "300px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
    },
    searchIcon: {
      marginLeft: "-30px",
      color: "#888",
      cursor: "pointer",
    },
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      textAlign: "center",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    },
    button: {
      display: "inline-block",
      padding: "8px 16px",
      fontSize: "14px",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      textTransform: "uppercase",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    priceInfo: {
      fontSize: "1.5rem",
      color: "#27ae60",
      fontWeight: "bold",
    },
    link: {
      display: "inline-block",
      textDecoration: "none",
      marginTop: "20px",
      textAlign: "center",
      padding: "10px 20px",
      backgroundColor: "#1e61a4",
      color: "#fff",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
    linkHover: {
      backgroundColor: "#135ba1",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch style={styles.searchIcon} />
      </div>
      <h1>
        <center>
          <b>Sun Glasses</b>
        </center>
        <br />
      </h1>

      <div style={styles.cardContainer}>
        {displayOpticals.map((optical, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(optical.hover ? styles.cardHover : {}),
            }}
          >
            <Link
              to={{ pathname: "/view", state: { name: optical.name, image: optical.image } }}
              style={styles.cardLink}
            >
              <div>
                <img
                  style={styles.image}
                  src={optical.image}
                  alt={optical.name}
                />
              </div>
            </Link>
            <div>
              <h4>{optical.name}</h4>
              <div style={styles.priceInfo}>Rs {optical.price}</div>
              <button
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = styles.button.backgroundColor)
                }
                onClick={() => addToFavorites(optical)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/more"
        style={styles.link}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.linkHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.link.backgroundColor)}
      >
        More Details
      </Link>
    </div>
  );
};

export default Sunglasses;
