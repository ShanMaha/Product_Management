
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddOptical from "./pages/Admin/AddOptical";
import Opticals from "./pages/Admin/Opticals";
import About from "./pages/User/About";
import OpticalDetail from "./pages/Admin/OpticalDetail";
import Data from "./pages/Admin/Data";
import Login from "./components/Login";
import C_Home from "./pages/User/C_Home";
import View from "./pages/View";
import Sunglasses from "./pages/Products/Sunglasses";
import Accessories from "./pages/Products/Accessories";
import SportsVision from "./pages/Products/SportsVision";
import Spectacles from "./pages/Products/Spectacles";
import ContactLenses from "./pages/Products/ContactLenses";
import GiftVouchers from "./pages/Products/GiftVouchers";
import More from "./components/More";
import C_About from "./components/C_About";
import QRScanner from "./pages/User/QRScanner";
import AdminHomePage from "./pages/Admin/AdminHomePage";
import FormSection from "./components/FormSection";
import Setting from './pages/Setting';
import ForgotPassword from "./components/ForgotPassword";
import TermsAndConditions from "./components/TermsAndConditions";
import Home from "./pages/User/Home";


export default function App() {
  const [favorites, setFavorites] = useState([]); 
  const [data, setData] = useState(null);
  const user = localStorage.getItem("token");
  const customer = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<C_Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddOptical />} />
        <Route path="/opticals" element={<Opticals />} />
        <Route path="/about/:id" element={<About favorites={favorites} />} />
        <Route path="/opticals/:id" element={<OpticalDetail />} />
        <Route path="/sign" element={<FormSection />} />
        <Route path="/list" element={<Data />} />
        <Route path="/view" element={<View />} />
        <Route path="/more" element={<More />} />
        <Route path="/sun" element={<Sunglasses favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/sport" element={<SportsVision favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/accessories" element={<Accessories favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/contact" element={<ContactLenses favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/gift" element={<GiftVouchers favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/spectacles" element={<Spectacles favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/QR" element={<QRScanner />} />
        <Route path="/about/:id" element={<C_About favorites={favorites} />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/terms" element={<TermsAndConditions />} />
       
        
      </Routes>
    </Router>
  );
}
