import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { articleContent } from "../utils/articleContent";

const ContentPageBlog = ({ id }) => {
  const article = articleContent.articles.find((article) => article.id === id);

  return (
    <div className="article-page">
      <header>
        <Navigation />
        <h1>{article.title}</h1>
      </header>
      <main>
        <div className="image-article">
          <img src={article.image} alt={article.title} />
          <div className="article-page-link">
            <a href={"./blog" + article.title}>Shop Now</a>
          </div>
        </div>
        <p>{article.content}</p>
        <div className="article-page-link">
          <a href={"./blog" + article.title}>Order Now</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentPageBlog;
