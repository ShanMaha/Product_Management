import React, { useEffect, useState } from "react";
import axios from "axios";
import Optical from "../pages/Optical"; // Assuming Optical is a separate component

const URL = "http://localhost:4000/opticals";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Opticals = () => {
  const [opticals, setOpticals] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setOpticals(data.opticals));
  }, []);

  console.log(opticals);

  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {opticals &&
          opticals.map((optical, i) => (
            <li key={i} style={styles.card}>
              <Optical optical={optical} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    display: "grid", // Using grid layout for 3-column design
    gridTemplateColumns: "repeat(3, 1fr)", // This creates 3 equal columns
    gap: "20px", // Space between cards
    width: "80%", // Adjust the width of the grid container
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column", // Stack content inside the card
  },
};

export default Opticals;
