import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigationRef = useRef(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target) &&
      isSidebarOpen
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="navigation" ref={navigationRef}>
      <div className="navigationBurgerMenu">
        <div className="navigationBurgerMenuOpen" onClick={handleSidebarToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        {isSidebarOpen && (
          <div className="side-bar-menu" id="side-bar">
            <ul>
              <NavLink
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                to="/"
              >
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
            <div
              className={`navigationBurgerMenuClose${
                isSidebarOpen ? " visible" : ""
              }`}
              onClick={handleSidebarToggle}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        )}
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
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navigation;
