import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Article from "../components/Article";

const ArticlePage = () => {
  return (
    <div className="blog-page">
      <header>
        <Navigation />
        <h1>Welcome to our Blog</h1>
      </header>
      <main>
        <a href="/blog/tongue-scrapper">
          <div className="article-container">
            <Article id={1} />
          </div>
        </a>
        <a href="">
          <div className="article-container">
            <Article id={2} />
          </div>
        </a>
        <a href="">
          <div className="article-container">
            <Article id={3} />
          </div>
        </a>
        <a href="">
          <div className="article-container">
            <Article id={4} />
          </div>
        </a>
        <a href="">
          <div className="article-container">
            <Article id={5} />
          </div>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
