import React, { useEffect, useState } from "react";
import axios from "axios";
import Optical from "./Optical"; // Assuming Optical is a separate component

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
    <div className="flex justify-center my-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg">
        {opticals &&
          opticals.map((optical, i) => (
            <li key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all">
              <Optical optical={optical} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Opticals;
