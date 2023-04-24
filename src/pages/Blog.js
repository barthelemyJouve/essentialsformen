import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Article from "../components/Article";

const Blog = () => {
  return (
    <div className="blog-page">
      <header>
        <Navigation />
        <h1>Blog</h1>
      </header>
      <main>
        <Article />
      </main>
      <div>
        <h2>About men's skincare</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          suscipit sapiente saepe mollitia quis sequi quo ipsa dolores
          voluptatum sit!
        </p>
      </div>
      <div>
        <h2>The best tools for dental hygiene</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          suscipit sapiente saepe mollitia quis sequi quo ipsa dolores
          voluptatum sit!
        </p>
      </div>
      <div>
        <h2>The best electronics items</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          suscipit sapiente saepe mollitia quis sequi quo ipsa dolores
          voluptatum sit!
        </p>
      </div>
      <div>
        <h2>Accessories to have</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          suscipit sapiente saepe mollitia quis sequi quo ipsa dolores
          voluptatum sit!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
