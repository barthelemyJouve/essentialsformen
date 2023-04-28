import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <Navigation />

        <h1>Men's Essentials</h1>
        <div className="header-button">
          <a href="#best-products">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </header>
      <main>
        <section className="best-products" id="best-products">
          <h2>Best products</h2>
        </section>
        <section className="about-objects"></section>
        <section className="best-categories"></section>
        <section className="about-purpose"></section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
