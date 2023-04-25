import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Article from "../components/Article";

const Blog = () => {
  return (
    <div className="blog-page">
      <header>
        <Navigation />
      </header>
      <main>
        <div className="article-container">
          <Article id={1} />
        </div>
        <div className="article-container">
          <Article id={2} />
        </div>
        <div className="article-container">
          <Article id={3} />
        </div>
        <div className="article-container">
          <Article id={4} />
        </div>
        <div className="article-container">
          <Article id={5} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
