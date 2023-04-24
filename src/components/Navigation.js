import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigationBurgerMenu">
        <div className="navigationBurgerMenuOpen">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="navigationBurgerMenuClose">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="navigationLogo"></div>
      <ul>
        <NavLink className={(nav) => (nav.isActive ? "nav-active" : "")} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          to="/shop"
        >
          <li>Shop</li>
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          to="/categories"
        >
          <li>Categories</li>
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          to="/blog"
        >
          <li>Blog</li>
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          to="/about"
        >
          <li>About us</li>
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          to="/contact"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="navigation-shopping-basket">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navigation;
