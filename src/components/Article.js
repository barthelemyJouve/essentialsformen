import React from "react";
import { articleContent } from "../utils/articleContent";

const Article = ({ id }) => {
  const article = articleContent.articles.find((article) => article.id === id);

  return (
    <div className="article-presentation">
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <div className="article-page-link">
        <a href={"./blog" + article.title}>Read More</a>
      </div>
    </div>
  );
};

export default Article;
