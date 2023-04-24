import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Categories = () => {
  return (
    <div>
      <Navigation />
      <h1>Categories</h1>
      <ul>
        <li>Cosmetics</li>
        <li>Accessories</li>
        <li>Clothes</li>
        <li>furniture</li>
      </ul>
      <Footer />
    </div>
  );
};

export default Categories;
