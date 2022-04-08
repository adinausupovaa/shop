import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/about/Aboutus";
import Admin from "./components/admin/Admin";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProductContextProvider from "./context/ProductContext";
import Payment from "./components/payment/Payment";
import Registration from "./components/registration/Registration";
import Edit from "./components/EditList/Edit";

const Routing = () => {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/edit/:id" element={<Edit />} />

          <Route path="/about" element={<Aboutus />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductContextProvider>
  );
};

export default Routing;
