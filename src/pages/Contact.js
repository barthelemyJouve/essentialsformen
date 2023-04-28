import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <Navigation />
        <h1>How to contact us</h1>
      </header>
      <main>
        <div className="main-left">
          <div className="socialmedia contact-content">
            <h2>Socials Media</h2>
            <div className="logo-social-media">
              <span>
                <i className="fa-brands fa-square-twitter"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-linkedin"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-youtube"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-google-plus"></i>
              </span>
            </div>
          </div>
          <div className="phone contact-content">
            <h2>Phone Number</h2>
            <p>+331 543 328 15</p>
          </div>
          <div className="email contact-content">
            <h2>Email</h2>
            <p>admin@mensessentials.com</p>
          </div>
          <div className="address contact-content">
            <h2>Address</h2>
            <p>5001 MELROSE AVE, LOS ANGELES, CA 90038-4195, USA</p>
          </div>
        </div>
        <div className="main-form">
          <h2>Send us a message</h2>
          <form action="#">
            <input type="text" value="Last Name" />
            <input type="text" value="First Name" />
            <input type="email" value="your@email.com" />
            <textarea
              id="contact-text-area"
              name="Message"
              value="Your message here..."
            ></textarea>
            <input type="submit" value="Submit Message" />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
