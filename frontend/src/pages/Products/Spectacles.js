import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Spectacles = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const addToFavorites = (optical) => {
    setFavorites([...favorites, optical]);
    navigate({
      pathname: `/about/${optical.name}`,
      state: { sunglass: optical },
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpticals, setFilteredOpticals] = useState([]);

  const opticals = [
    { name: "JA9 2203 C9 56", price: 10200, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc000477.jpg" },
    { name: "Giordano 01229 52", price: 9500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/76531122-0df6-4d8c-9dc5-8d0aa74af9b7.jpg" },
    { name: "Che 528 C34 49", price: 12500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_165.jpg" },
    { name: "Reebok 8014 BLK 52-18-135", price: 40500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_52.jpg" },
    { name: "Che 602 C17 53", price: 33500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_155.jpg" },
    { name: "Carlo Rino 1249 C14", price: 18000, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0094_merged_.jpg" },
    { name: "Giordano 01229 52", price: 13000, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/6/76531122-0df6-4d8c-9dc5-8d0aa74af9b7.jpg" },
    { name: "Che 624 C6S 53", price: 20500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_179.jpg" },
    { name: "Bonia BNI1423 48", price: 14500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_51.jpg" },
    { name: "SB Polo & Racquet", price: 15500, image: "https://shop.visioncare.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_98.jpg" },
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

  return (
    <div className="container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="search-icon" />
      </div>
      <h1>
        <center>
          <b>Spectacles</b>
        </center>
        <br />
      </h1>

      <div className="products-container">
        {displayOpticals.map((optical, index) => (
          <div key={index} className="card">
            <a href={`/view`}>
              <div className="big-image">
                <img className="image" src={optical.image} alt={optical.name} />
              </div>
            </a>
            <div className="details">
              <h4>{optical.name}</h4>
              <div className="price-info">
                <b>
                  <h2>
                    <p>Rs {optical.price}</p>
                  </h2>
                </b>
              </div>
              <div className="additional-info">
                <button
                  className="button"
                  onClick={() => addToFavorites(optical)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className="link" to="/more">
        More Details
      </Link>

      <style jsx>{`
        .container {
          padding: 20px;
          background-color: #f4f4f4;
          min-height: 100vh;
        }

        .search-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .search-input {
          padding: 10px;
          width: 80%;
          max-width: 500px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .search-icon {
          position: absolute;
          right: 25px;
          top: 15px;
          font-size: 20px;
          color: #888;
        }

        .products-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          justify-items: center;
        }

        .card {
          background-color: #fff;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 250px;
          text-align: center;
        }

        .big-image {
          height: 200px;
          margin-bottom: 10px;
        }

        .image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .details {
          text-align: center;
        }

        .price-info {
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }

        .link {
          display: block;
          text-align: center;
          margin-top: 20px;
          text-decoration: none;
          color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default Spectacles;
