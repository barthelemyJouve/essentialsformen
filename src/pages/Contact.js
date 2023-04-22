import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1>How to contact us</h1>
      <div className="socialmedia">
        Instagram Facebook Youtube Twitter Linkedin
      </div>
      <div className="phone">+331 543 328 1</div>
      <div className="email"> admin@mensessentials.com</div>
    </div>
  );
};

export default Contact;
