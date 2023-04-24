import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-logo-socials">
            <div className="footer-logo"></div>
            <div className="footer-social-media">
              <span>
                <i class="fa-brands fa-square-twitter"></i>
              </span>
              <span>
                <i class="fa-brands fa-square-facebook"></i>
              </span>
              <span>
                <i class="fa-brands fa-square-instagram"></i>
              </span>
              <span>
                <i class="fa-brands fa-linkedin"></i>
              </span>
              <span>
                <i class="fa-brands fa-square-youtube"></i>
              </span>
              <span>
                <i class="fa-brands fa-square-google-plus"></i>
              </span>
            </div>
          </div>
          <div className="footer-navigation">
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/shop">
                <li>Shop</li>
              </NavLink>
              <NavLink to="/categories">
                <li>Categories</li>
              </NavLink>
              <NavLink to="/blog">
                <li>Blog</li>
              </NavLink>
              <NavLink to="/about">
                <li>About us</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <form action="#">
              <input type="email" placeholder="your@email.com"></input>
              <input type="submit" value="Suscribe"></input>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
